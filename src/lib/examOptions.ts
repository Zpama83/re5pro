/**
 * Answer-position randomisation for the RE5 mock-exam bank.
 *
 * The authored bank is heavily biased toward option B — 260 of its 325
 * questions key index 1, so answering "B" to everything scored 80%, well clear
 * of the 66% pass mark. That made every score, heatmap and readiness level
 * meaningless and trained a pattern the real exam does not have.
 *
 * Rather than rewrite 325 data lines (and disturb the stable ordering a
 * compliance officer reviews against), we permute each question's options when
 * a session is built. The correct answer index and the explanation's
 * wrong-option map are remapped together so they can never drift apart.
 */

export interface ExamQuestion {
  id: number;
  topic: string;
  q: string;
  options: string[];
  answer: number;
  /** Present once the question has been through `randomiseOptions`. */
  explanation?: QuestionExplanation;
}

export interface QuestionExplanation {
  correct: string;
  wrong: Record<number, string>;
}

/** Uniform Fisher-Yates. `sort(() => Math.random() - 0.5)` is not a shuffle. */
export function shuffle<T>(items: readonly T[], rng: () => number = Math.random): T[] {
  const out = items.slice();
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

const leadingNumber = (option: string): number | null => {
  const match = option.replace(/,/g, "").match(/-?\d+(\.\d+)?/);
  return match ? parseFloat(match[0]) : null;
};

/**
 * True when the options are a short ascending numeric ladder — "1 year",
 * "3 years", "5 years", "10 years". Exams present those in order, and
 * scrambling them reads as a defect, so these keep their authored sequence.
 */
export function hasOrderedNumericOptions(options: readonly string[]): boolean {
  if (options.some((o) => o.length > 22)) return false;
  const numbers = options.map(leadingNumber);
  if (numbers.some((n) => n === null)) return false;
  return (numbers as number[]).every((n, i) => i === 0 || n >= (numbers as number[])[i - 1]);
}

/**
 * Return a copy of `question` with its options permuted, the answer index
 * remapped, and the matching explanation rekeyed to the new positions.
 */
export function randomiseOptions(
  question: ExamQuestion,
  explanation: QuestionExplanation | undefined,
  rng: () => number = Math.random,
): ExamQuestion {
  const attach = (q: ExamQuestion, ex: QuestionExplanation | undefined): ExamQuestion =>
    ex ? { ...q, explanation: ex } : { ...q };

  if (hasOrderedNumericOptions(question.options)) return attach(question, explanation);

  // Permutation of the original indices; position i now holds order[i].
  const order = shuffle(question.options.map((_, i) => i), rng);

  const options = order.map((from) => question.options[from]);
  const answer = order.indexOf(question.answer);

  let remapped = explanation;
  if (explanation) {
    const wrong: Record<number, string> = {};
    order.forEach((from, to) => {
      const text = explanation.wrong?.[from];
      if (text !== undefined && from !== question.answer) wrong[to] = text;
    });
    remapped = { correct: explanation.correct, wrong };
  }

  return attach({ ...question, options, answer }, remapped);
}

/** Apply `randomiseOptions` across a whole session pool. */
export function randomiseSession(
  pool: readonly ExamQuestion[],
  explanations: Record<number, QuestionExplanation>,
  rng: () => number = Math.random,
): ExamQuestion[] {
  return pool.map((q) => randomiseOptions(q, explanations[q.id], rng));
}
