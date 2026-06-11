import { Link } from "react-router-dom";
import { ArrowLeft, Calculator } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { CPDCalculator } from "@/components/cpd/CPDCalculator";

const CPDCalculatorPage = () => (
  <div className="min-h-screen bg-background text-foreground">
    <header className="sticky top-0 z-30 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-4xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" /> Back to home
        </Link>
        <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          RE5 Pro · CPD Calculator
        </span>
      </div>
    </header>

    <main className="mx-auto max-w-4xl px-4 pb-24 pt-10 sm:px-6 lg:px-8">
      <section className="mb-10 space-y-3">
        <Badge variant="secondary" className="text-xs">
          <Calculator className="mr-1 h-3 w-3" /> Fit & Proper · CPD
        </Badge>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          CPD pro-rata calculator
        </h1>
        <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          Work out the exact pro-rated CPD target for a representative or Key
          Individual based on their Date of First Appointment, the scope of
          their authorisation, and any approved long-term absences. Anchored
          to Board Notice 194 of 2017 Chapter 4 — the source the FSCA expects
          you to apply.
        </p>
      </section>

      <CPDCalculator />
    </main>
  </div>
);

export default CPDCalculatorPage;
