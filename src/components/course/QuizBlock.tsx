import { useMemo, useState } from "react";
import { CheckCircle2, XCircle, RotateCcw, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";
import {
  COGNITIVE_LABELS,
  type Quiz,
  type QuizQuestion,
} from "@/data/re5Task4";

/** What `onSubmit` receives for each question after the learner submits. */
export interface QuizQuestionOutcome {
  questionId: string;
  selected: "A" | "B" | "C" | "D";
  correct: "A" | "B" | "C" | "D";
  isCorrect: boolean;
}

interface Props {
  quiz: Quiz;
  /** Used for stable form field names */
  scopeId: string;
  /**
   * Fires once when the learner submits the quiz, with the full set of
   * per-question outcomes. Parents use this to persist learning history
   * (spaced repetition, etc.). Fire-and-forget — errors are swallowed.
   */
  onSubmit?: (outcomes: QuizQuestionOutcome[]) => void;
}

type AnswerMap = Record<string, "A" | "B" | "C" | "D" | undefined>;

export const QuizBlock: React.FC<Props> = ({ quiz, scopeId, onSubmit }) => {
  const [answers, setAnswers] = useState<AnswerMap>({});
  const [submitted, setSubmitted] = useState(false);

  const totalQuestions = quiz.questions.length;
  const answeredCount = Object.values(answers).filter(Boolean).length;
  const allAnswered = answeredCount === totalQuestions;

  const score = useMemo(() => {
    if (!submitted) return 0;
    return quiz.questions.reduce(
      (acc, q) => (answers[q.id] === q.correct ? acc + 1 : acc),
      0,
    );
  }, [submitted, answers, quiz.questions]);

  const handleSelect = (questionId: string, letter: "A" | "B" | "C" | "D") => {
    if (submitted) return;
    setAnswers((prev) => ({ ...prev, [questionId]: letter }));
  };

  const handleSubmit = () => {
    if (!allAnswered) return;
    setSubmitted(true);

    if (onSubmit) {
      const outcomes: QuizQuestionOutcome[] = quiz.questions.map((q) => {
        const selected = (answers[q.id] ?? "A") as "A" | "B" | "C" | "D";
        return {
          questionId: q.id,
          selected,
          correct: q.correct,
          isCorrect: selected === q.correct,
        };
      });
      // Fire-and-forget — the UI should never wait on persistence.
      try {
        onSubmit(outcomes);
      } catch {
        // intentionally swallowed
      }
    }

    // Smoothly scroll the results banner into view
    requestAnimationFrame(() => {
      document
        .getElementById(`quiz-result-${scopeId}`)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  const handleReset = () => {
    setAnswers({});
    setSubmitted(false);
  };

  return (
    <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold tracking-tight">
            Knowledge check
          </h3>
          <p className="text-sm text-muted-foreground">
            {totalQuestions} questions · 1×Knowledge · 1×Comprehension · 2×Application · 1×Analysis
          </p>
        </div>
        {!submitted && (
          <Badge variant="secondary" className="text-xs">
            {answeredCount}/{totalQuestions} answered
          </Badge>
        )}
        {submitted && (
          <Badge
            className={cn(
              "text-xs",
              score === totalQuestions
                ? "bg-emerald-600 hover:bg-emerald-600"
                : score >= 3
                  ? "bg-amber-600 hover:bg-amber-600"
                  : "bg-rose-600 hover:bg-rose-600",
            )}
          >
            Scored {score}/{totalQuestions}
          </Badge>
        )}
      </div>

      <ol className="space-y-8">
        {quiz.questions.map((q, idx) => (
          <li key={q.id}>
            <QuestionItem
              question={q}
              index={idx}
              selected={answers[q.id]}
              submitted={submitted}
              onSelect={(letter) => handleSelect(q.id, letter)}
              scopeId={scopeId}
            />
          </li>
        ))}
      </ol>

      <Separator className="my-8" />

      <div
        id={`quiz-result-${scopeId}`}
        className="flex flex-wrap items-center justify-between gap-4"
      >
        {!submitted ? (
          <>
            <p className="text-sm text-muted-foreground">
              Answer all {totalQuestions} questions, then submit to see your score and the statutory explanations.
            </p>
            <Button onClick={handleSubmit} disabled={!allAnswered}>
              Submit quiz
            </Button>
          </>
        ) : (
          <>
            <p className="text-sm">
              <span className="font-semibold">Result: {score}/{totalQuestions}.</span>{" "}
              {score === totalQuestions
                ? "Excellent — every answer is correct."
                : score >= 3
                  ? "Solid — review the explanations on any questions you missed."
                  : "Take time to review the explanations below before moving to the next lesson."}
            </p>
            <Button variant="outline" onClick={handleReset}>
              <RotateCcw className="mr-2 h-4 w-4" /> Retake
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/*  Single question                                                            */
/* -------------------------------------------------------------------------- */

interface QuestionItemProps {
  question: QuizQuestion;
  index: number;
  selected: "A" | "B" | "C" | "D" | undefined;
  submitted: boolean;
  onSelect: (letter: "A" | "B" | "C" | "D") => void;
  scopeId: string;
}

const QuestionItem: React.FC<QuestionItemProps> = ({
  question,
  index,
  selected,
  submitted,
  onSelect,
  scopeId,
}) => {
  const isCorrect = submitted && selected === question.correct;
  const isIncorrect = submitted && selected !== question.correct;
  const groupName = `q-${scopeId}-${question.id}`;

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-start gap-2">
        <Badge variant="outline" className="shrink-0">
          Q{index + 1} · Level {question.level} ·{" "}
          {COGNITIVE_LABELS[question.level]}
          {question.format ? ` · ${question.format}` : ""}
        </Badge>
        {submitted && isCorrect && (
          <Badge className="bg-emerald-600 hover:bg-emerald-600">
            <CheckCircle2 className="mr-1 h-3.5 w-3.5" /> Correct
          </Badge>
        )}
        {submitted && isIncorrect && (
          <Badge className="bg-rose-600 hover:bg-rose-600">
            <XCircle className="mr-1 h-3.5 w-3.5" /> Incorrect
          </Badge>
        )}
      </div>

      <p className="whitespace-pre-line text-sm leading-relaxed text-foreground sm:text-base">
        {question.prompt}
      </p>

      <RadioGroup
        value={selected ?? ""}
        onValueChange={(v) =>
          onSelect(v as "A" | "B" | "C" | "D")
        }
        className="gap-2"
      >
        {question.options.map((opt) => {
          const id = `${groupName}-${opt.letter}`;
          const isChosen = selected === opt.letter;
          const isCorrectAnswer = opt.letter === question.correct;
          const showCorrect = submitted && isCorrectAnswer;
          const showIncorrect = submitted && isChosen && !isCorrectAnswer;

          return (
            <Label
              key={opt.letter}
              htmlFor={id}
              className={cn(
                "flex cursor-pointer items-start gap-3 rounded-lg border px-4 py-3 text-sm transition",
                "hover:bg-accent/40",
                !submitted &&
                  isChosen &&
                  "border-primary bg-primary/5",
                showCorrect &&
                  "border-emerald-500 bg-emerald-500/10 text-emerald-100",
                showIncorrect &&
                  "border-rose-500 bg-rose-500/10 text-rose-100",
                submitted && "cursor-default",
              )}
            >
              <RadioGroupItem
                id={id}
                value={opt.letter}
                disabled={submitted}
                className="mt-0.5"
              />
              <span className="flex-1 leading-relaxed">
                <span className="mr-2 font-semibold">{opt.letter}.</span>
                {opt.text}
              </span>
            </Label>
          );
        })}
      </RadioGroup>

      {submitted && (
        <Collapsible defaultOpen={isIncorrect}>
          <CollapsibleTrigger asChild>
            <button
              type="button"
              className="group inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground"
            >
              <ChevronDown className="h-4 w-4 transition group-data-[state=open]:rotate-180" />
              Show explanation
            </button>
          </CollapsibleTrigger>
          <CollapsibleContent className="mt-3 space-y-3 rounded-lg border border-border bg-muted/40 p-4 text-sm leading-relaxed">
            <div>
              <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Statutory justification
              </p>
              <p>
                <span className="font-semibold">
                  Correct answer: {question.correct}.
                </span>{" "}
                {question.justification}
              </p>
            </div>
            {question.distractorAnalysis && (
              <div>
                <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Distractor analysis
                </p>
                <ul className="space-y-1.5">
                  {(["A", "B", "C", "D"] as const)
                    .filter(
                      (l) =>
                        l !== question.correct &&
                        question.distractorAnalysis?.[l],
                    )
                    .map((l) => (
                      <li key={l}>
                        <span className="font-semibold">{l}.</span>{" "}
                        {question.distractorAnalysis![l]}
                      </li>
                    ))}
                </ul>
              </div>
            )}
          </CollapsibleContent>
        </Collapsible>
      )}
    </div>
  );
};
