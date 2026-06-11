import { useEffect, useState, useCallback } from "react";
import { ChevronDown, Loader2, RefreshCcw } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { supabase } from "@/integrations/supabase/client";
import { QuizBlock } from "@/components/course/QuizBlock";
import type {
  Quiz,
  QuizQuestion,
  CognitiveLevel,
} from "@/data/re5Task4/types";
import type { RE1Lesson } from "@/data/re1Course";

interface Props {
  lesson: RE1Lesson;
  number: number;
  total: number;
}

/**
 * A lesson block for /re1/course. The teaching content (header, concepts,
 * statutory references) is static; the quiz is sampled live from
 * `public.re1_questions` filtered by the lesson's `topicTags[]`.
 *
 * We target the same 1×L1 / 1×L2 / 2×L3 / 1×L4 cognitive distribution the
 * rest of the course uses. Where a level is missing in the bank for the
 * lesson's tags, we backfill from any available level to keep the lesson
 * usable rather than failing closed.
 */
export const RE1LessonBlock: React.FC<Props> = ({ lesson, number, total }) => {
  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [reloadKey, setReloadKey] = useState(0);

  const fetchQuiz = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const { data, error } = await supabase
        .from("re1_questions")
        .select("*")
        .eq("is_active", true)
        .in("topic_tag", lesson.topicTags);

      if (error) throw error;
      const rows = (data ?? []) as RE1QuestionRow[];

      if (rows.length === 0) {
        setError(
          "No questions available for this lesson yet. Apply the latest RE1 migrations to your Supabase project.",
        );
        setQuiz(null);
        return;
      }

      setQuiz({ questions: pickQuestions(rows) });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load quiz.");
      setQuiz(null);
    } finally {
      setLoading(false);
    }
  }, [lesson.topicTags, reloadKey]);

  useEffect(() => {
    fetchQuiz();
  }, [fetchQuiz]);

  return (
    <section
      id={`re1-lesson-${lesson.taskNumber}`}
      className="scroll-mt-24 space-y-6 rounded-3xl border border-border bg-card/50 p-4 sm:p-8"
    >
      {/* Lesson header */}
      <header className="space-y-3">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="secondary" className="text-xs">
            Lesson {number} of {total}
          </Badge>
          <Badge variant="outline" className="text-xs">
            RE1 Task {lesson.taskNumber}
          </Badge>
        </div>
        <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
          {lesson.title}
        </h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {lesson.qcDescription}
        </p>
      </header>

      {/* Reference-style placeholder (no video for RE1 yet) */}
      <div className="rounded-2xl border border-dashed border-border bg-muted/20 p-4 text-xs text-muted-foreground sm:p-6">
        <span className="font-semibold text-foreground">Reference lesson —</span>{" "}
        review the core concepts and statutory references below, then attempt
        the knowledge check sampled from the live RE1 question bank.
      </div>

      {/* Concept + statutory references */}
      <Collapsible defaultOpen>
        <CollapsibleTrigger asChild>
          <button
            type="button"
            className="group flex w-full items-center justify-between rounded-xl border border-border bg-muted/30 px-4 py-3 text-left text-sm font-medium hover:bg-muted/50"
          >
            Core concepts & statutory references
            <ChevronDown className="h-4 w-4 transition group-data-[state=open]:rotate-180" />
          </button>
        </CollapsibleTrigger>
        <CollapsibleContent className="mt-3 grid gap-4 sm:grid-cols-5">
          <div className="sm:col-span-3 space-y-2 rounded-xl border border-border bg-card p-4 text-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              What this lesson covers
            </p>
            <ul className="list-disc space-y-1.5 pl-5 leading-relaxed">
              {lesson.coreConcepts.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
          <div className="sm:col-span-2 space-y-2 rounded-xl border border-border bg-card p-4 text-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Primary statutory references
            </p>
            <ul className="space-y-1.5 leading-relaxed">
              {lesson.statutoryRefs.map((r) => (
                <li key={r} className="font-mono text-xs">
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </CollapsibleContent>
      </Collapsible>

      {/* Dynamic quiz */}
      {loading ? (
        <div className="flex items-center gap-2 rounded-2xl border border-border bg-card p-6 text-sm text-muted-foreground">
          <Loader2 className="h-4 w-4 animate-spin" /> Loading quiz…
        </div>
      ) : error ? (
        <div className="rounded-2xl border border-rose-500/40 bg-rose-500/5 p-4 text-sm text-rose-100">
          <strong className="font-semibold">Couldn't load quiz:</strong> {error}
          <div className="mt-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setReloadKey((k) => k + 1)}
            >
              <RefreshCcw className="mr-2 h-3.5 w-3.5" /> Retry
            </Button>
          </div>
        </div>
      ) : quiz ? (
        <>
          <QuizBlock quiz={quiz} scopeId={lesson.id} />
          <div className="flex justify-end">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setReloadKey((k) => k + 1)}
            >
              <RefreshCcw className="mr-2 h-3.5 w-3.5" /> Shuffle a fresh quiz
            </Button>
          </div>
        </>
      ) : null}
    </section>
  );
};

/* -------------------------------------------------------------------------- */
/*  Helpers                                                                    */
/* -------------------------------------------------------------------------- */

interface RE1QuestionRow {
  id: string;
  question_number: number | null;
  topic_tag: string | null;
  complexity_level: number | null;
  question_text: string;
  option_a: string;
  option_b: string;
  option_c: string;
  option_d: string;
  correct_answer: string;
  explanation: string | null;
  legislative_ref: string | null;
  is_active: boolean | null;
}

/**
 * Pick 5 questions matching the 1×L1 / 1×L2 / 2×L3 / 1×L4 distribution.
 * Where a level is missing for these tags, backfill from any available level
 * to keep the lesson functional rather than empty.
 */
const pickQuestions = (rows: RE1QuestionRow[]): QuizQuestion[] => {
  const byLevel: Record<CognitiveLevel, RE1QuestionRow[]> = {
    1: [],
    2: [],
    3: [],
    4: [],
  };
  for (const r of rows) {
    if (r.complexity_level && r.complexity_level >= 1 && r.complexity_level <= 4) {
      byLevel[r.complexity_level as CognitiveLevel].push(r);
    }
  }

  const pickN = (level: CognitiveLevel, n: number): RE1QuestionRow[] => {
    const pool = byLevel[level];
    return shuffle(pool).slice(0, n);
  };

  const wanted: RE1QuestionRow[] = [
    ...pickN(1, 1),
    ...pickN(2, 1),
    ...pickN(3, 2),
    ...pickN(4, 1),
  ];

  // Backfill from any remaining pool if we couldn't satisfy the distribution.
  if (wanted.length < 5) {
    const used = new Set(wanted.map((r) => r.id));
    const fillers = shuffle(rows.filter((r) => !used.has(r.id))).slice(
      0,
      5 - wanted.length,
    );
    wanted.push(...fillers);
  }

  return wanted.slice(0, 5).map(rowToQuestion);
};

const rowToQuestion = (r: RE1QuestionRow): QuizQuestion => {
  const correctLetter = (r.correct_answer || "A").toUpperCase() as
    | "A"
    | "B"
    | "C"
    | "D";

  const distractorAnalysis: Partial<Record<"A" | "B" | "C" | "D", string>> = {};
  // The seeded RE1 bank doesn't track per-distractor analysis; we leave it
  // empty so QuizBlock just shows the main explanation.

  const level =
    r.complexity_level && r.complexity_level >= 1 && r.complexity_level <= 4
      ? (r.complexity_level as CognitiveLevel)
      : 2;

  return {
    id: r.id,
    level,
    prompt: r.question_text,
    options: [
      { letter: "A", text: r.option_a },
      { letter: "B", text: r.option_b },
      { letter: "C", text: r.option_c },
      { letter: "D", text: r.option_d },
    ],
    correct: correctLetter,
    justification:
      (r.explanation ?? "") +
      (r.legislative_ref ? `\n\nReference: ${r.legislative_ref}` : ""),
    distractorAnalysis: Object.keys(distractorAnalysis).length
      ? distractorAnalysis
      : undefined,
  };
};

// Fisher-Yates.
const shuffle = <T,>(arr: T[]): T[] => {
  const copy = arr.slice();
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};
