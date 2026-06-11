import { useMemo, useState } from "react";
import { Calculator, Calendar, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

/**
 * CPD calculator for FAIS representatives and Key Individuals.
 *
 * Pro-rates the standard 6 / 12 / 18-hour annual CPD requirement based on
 * the user's Date of First Appointment (DOFA), their authorisation scope,
 * and any approved long-term absences within the cycle.
 *
 * Formula (Board Notice 194 of 2017 Chapter 4):
 *
 *     pro-rated hours = (active months / 12) × base hours
 *
 * where active months = full calendar months active in the cycle
 * (clamped between the cycle start and today, less any absence months).
 *
 * The CPD cycle runs 1 June to 31 May. We pick the current cycle
 * automatically based on today's date.
 */

type Scope = "single_sub" | "multi_sub_one_class" | "multi_class";

const BASE_HOURS_BY_SCOPE: Record<Scope, number> = {
  single_sub: 6,
  multi_sub_one_class: 12,
  multi_class: 18,
};

export const CPDCalculator: React.FC = () => {
  const [dofa, setDofa] = useState<string>("");
  const [scope, setScope] = useState<Scope>("single_sub");
  const [absenceMonths, setAbsenceMonths] = useState<number>(0);

  const result = useMemo(() => {
    if (!dofa) return null;
    const dofaDate = new Date(dofa);
    if (Number.isNaN(dofaDate.getTime())) return null;

    const today = new Date();
    const cycle = currentCycle(today);

    // Effective start within cycle = max(cycle.start, DOFA).
    const effectiveStart = dofaDate > cycle.start ? dofaDate : cycle.start;
    // Effective end within cycle = min(cycle.end, today).
    const effectiveEnd = today < cycle.end ? today : cycle.end;

    if (effectiveEnd <= effectiveStart) {
      return {
        cycle,
        scope,
        baseHours: BASE_HOURS_BY_SCOPE[scope],
        activeMonths: 0,
        adjustedMonths: 0,
        proRatedHours: 0,
        note:
          dofaDate > cycle.end
            ? "DOFA is after the end of the current cycle — no CPD is required this cycle."
            : "No active months in the current cycle yet.",
      };
    }

    const activeMonths = fullCalendarMonthsBetween(effectiveStart, effectiveEnd);
    const adjustedMonths = Math.max(0, activeMonths - (absenceMonths || 0));
    const baseHours = BASE_HOURS_BY_SCOPE[scope];
    const proRatedHours = round(adjustedMonths === 12 ? baseHours : (adjustedMonths / 12) * baseHours);

    return {
      cycle,
      scope,
      baseHours,
      activeMonths,
      adjustedMonths,
      proRatedHours,
      note: undefined,
    };
  }, [dofa, scope, absenceMonths]);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-base">
          <Calculator className="h-4 w-4" /> CPD pro-rata calculator
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Inputs */}
          <div className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="dofa">Date of First Appointment (DOFA)</Label>
              <Input
                id="dofa"
                type="date"
                value={dofa}
                onChange={(e) => setDofa(e.target.value)}
              />
              <p className="text-xs text-muted-foreground">
                The date you were first appointed as a representative or
                Key Individual in this category.
              </p>
            </div>

            <div className="space-y-2">
              <Label>Authorisation scope</Label>
              <RadioGroup
                value={scope}
                onValueChange={(v) => setScope(v as Scope)}
                className="gap-2"
              >
                {SCOPE_OPTIONS.map((opt) => (
                  <Label
                    key={opt.value}
                    htmlFor={`scope-${opt.value}`}
                    className="flex cursor-pointer items-start gap-3 rounded-lg border px-4 py-3 text-sm hover:bg-accent/40"
                  >
                    <RadioGroupItem
                      id={`scope-${opt.value}`}
                      value={opt.value}
                      className="mt-0.5"
                    />
                    <span className="leading-relaxed">
                      <span className="font-semibold">{opt.label}</span>
                      <span className="ml-2 text-xs text-muted-foreground">
                        ({opt.baseHours} hours / year)
                      </span>
                      <span className="block text-xs text-muted-foreground">
                        {opt.description}
                      </span>
                    </span>
                  </Label>
                ))}
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label htmlFor="absence">Approved long-term absence (months)</Label>
              <Input
                id="absence"
                type="number"
                min={0}
                max={12}
                value={absenceMonths}
                onChange={(e) =>
                  setAbsenceMonths(
                    Math.max(0, Math.min(12, Number(e.target.value) || 0)),
                  )
                }
              />
              <p className="text-xs text-muted-foreground">
                E.g. maternity, paternity, adoptive or certified long-term
                illness. Leave at 0 if none.
              </p>
            </div>
          </div>

          {/* Result */}
          <div className="space-y-4 rounded-2xl border border-border bg-card/50 p-5">
            {!result ? (
              <div className="flex h-full min-h-[200px] flex-col items-center justify-center gap-2 text-center text-sm text-muted-foreground">
                <Sparkles className="h-6 w-6 text-muted-foreground/40" />
                Enter your Date of First Appointment to see your pro-rated CPD
                target.
              </div>
            ) : (
              <>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar className="h-3.5 w-3.5" /> Current cycle
                  </div>
                  <p className="text-sm font-semibold">
                    {fmt(result.cycle.start)} → {fmt(result.cycle.end)}
                  </p>
                </div>

                {result.note ? (
                  <div className="rounded-xl border border-amber-500/40 bg-amber-500/5 p-3 text-xs text-amber-100">
                    {result.note}
                  </div>
                ) : null}

                <div className="grid grid-cols-2 gap-2">
                  <Stat label="Base requirement" value={`${result.baseHours} h`} />
                  <Stat
                    label="Active months in cycle"
                    value={`${result.activeMonths}`}
                  />
                  <Stat
                    label="Approved absences"
                    value={`-${absenceMonths || 0}`}
                  />
                  <Stat
                    label="Adjusted months"
                    value={`${result.adjustedMonths}`}
                  />
                </div>

                <div className="rounded-xl border border-primary/40 bg-primary/5 p-4">
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">
                    Pro-rated CPD target this cycle
                  </p>
                  <p className="mt-1 text-3xl font-bold tabular-nums text-foreground">
                    {result.proRatedHours} hours
                  </p>
                  <p className="mt-2 text-xs text-muted-foreground">
                    Formula: ({result.adjustedMonths} / 12) ×{" "}
                    {result.baseHours} = {result.proRatedHours} hours.
                  </p>
                </div>

                <div className="space-y-1 text-xs text-muted-foreground">
                  <p>
                    <strong className="text-foreground">Note:</strong>{" "}
                    Product-specific training and activities undertaken
                    toward a formal qualification are excluded from CPD
                    hour calculations.
                  </p>
                  <p>
                    CPD activities must be verifiable, relevant, and
                    delivered by an accredited or recognised provider —
                    and logged in your CPD record.
                  </p>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Explainer */}
        <div className="mt-6 rounded-xl border border-border bg-muted/20 p-4 text-xs leading-relaxed text-muted-foreground">
          <p className="mb-2 font-semibold text-foreground">How the math works</p>
          <p>
            Under Board Notice 194 of 2017 Chapter 4, the CPD cycle runs from
            1 June to 31 May. The base annual requirement is{" "}
            <strong className="text-foreground">6 hours</strong> (single
            sub-class of business in a single class),{" "}
            <strong className="text-foreground">12 hours</strong> (more than
            one sub-class within a single class), or{" "}
            <strong className="text-foreground">18 hours</strong> (more than
            one class of business). When you join part-way through a cycle,
            the target is pro-rated by the number of full calendar months
            you are active in that cycle, less any approved long-term
            absences.
          </p>
          <p className="mt-2">
            This calculator does the arithmetic; you remain responsible for
            confirming the inputs against your DOFA record and for keeping
            verifiable CPD evidence for inspection.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

/* -------------------------------------------------------------------------- */
/*  Helpers                                                                    */
/* -------------------------------------------------------------------------- */

const SCOPE_OPTIONS: Array<{
  value: Scope;
  label: string;
  description: string;
  baseHours: number;
}> = [
  {
    value: "single_sub",
    label: "Single sub-class within a single class of business",
    description: "e.g. Long-term Insurance Subcategory B1 only.",
    baseHours: 6,
  },
  {
    value: "multi_sub_one_class",
    label: "Multiple sub-classes within ONE class of business",
    description: "e.g. Long-term Insurance Subcategories B1 + B2.",
    baseHours: 12,
  },
  {
    value: "multi_class",
    label: "Multiple classes of business",
    description:
      "e.g. Long-term Insurance + Short-term Personal Lines (or more).",
    baseHours: 18,
  },
];

interface Cycle {
  start: Date;
  end: Date;
}

/**
 * Returns the CPD cycle (1 June – 31 May) that "today" falls into.
 * If today is between 1 Jun and 31 May the same year-wrap, that's the cycle.
 */
const currentCycle = (today: Date): Cycle => {
  const year = today.getFullYear();
  const cycleStart = new Date(year, 5, 1); // 1 June this year
  if (today < cycleStart) {
    // Before 1 June → we're in the cycle that started the previous year.
    return {
      start: new Date(year - 1, 5, 1),
      end: new Date(year, 4, 31),
    };
  }
  return {
    start: cycleStart,
    end: new Date(year + 1, 4, 31),
  };
};

/**
 * Counts full calendar months from `from` to `to` (inclusive).
 * A "full" month for CPD purposes is any month in which the person is
 * active for at least one day — consistent with the worked example in
 * the user's framework (1 November → 31 May counted as 7 months).
 */
const fullCalendarMonthsBetween = (from: Date, to: Date): number => {
  if (to < from) return 0;
  const months =
    (to.getFullYear() - from.getFullYear()) * 12 +
    (to.getMonth() - from.getMonth()) +
    1;
  return Math.max(0, Math.min(12, months));
};

const round = (n: number): number => {
  // Half-up to one decimal place, then drop trailing .0.
  const r = Math.round(n * 10) / 10;
  return r;
};

const fmt = (d: Date): string =>
  d.toLocaleDateString(undefined, {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

const Stat: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div className="rounded-xl border border-border bg-card p-3">
    <p className="text-[10px] uppercase tracking-wide text-muted-foreground">
      {label}
    </p>
    <p className="mt-1 text-lg font-semibold tabular-nums">{value}</p>
  </div>
);
