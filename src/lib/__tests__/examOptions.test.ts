/**
 * Guards the answer-position fix.
 *
 * Before this, 260 of the 325 banked questions keyed option B: answering "B"
 * to everything scored 80% against a 66% pass mark. These tests assert both
 * that positions are now spread and that permuting them never desynchronises
 * the answer key from its explanation.
 */
import { describe, it, expect } from "vitest";
import { questions, explanations } from "@/components/RE5Exam";
import { buildSmartExam } from "@/data/questionMetadata";
import {
  randomiseOptions,
  randomiseSession,
  hasOrderedNumericOptions,
  shuffle,
} from "@/lib/examOptions";
import type { ExamQuestion, QuestionExplanation } from "@/lib/examOptions";

const bank = questions as ExamQuestion[];
const bankExplanations = explanations as Record<number, QuestionExplanation>;

/** Deterministic PRNG so a failure is reproducible. */
function seeded(seed: number) {
  let s = seed >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 0x100000000;
  };
}

describe("option randomisation", () => {
  it("keeps the correct option's text as the keyed answer", () => {
    const rng = seeded(7);
    for (const q of bank) {
      const original = q.options[q.answer];
      const out = randomiseOptions(q, bankExplanations[q.id], rng);
      expect(out.options[out.answer], `Q${q.id}`).toBe(original);
      expect(out.options.slice().sort(), `Q${q.id} option set`).toEqual(q.options.slice().sort());
    }
  });

  it("moves each distractor's explanation to that distractor's new position", () => {
    const rng = seeded(11);
    for (const q of bank) {
      const source = bankExplanations[q.id];
      const out = randomiseOptions(q, source, rng);
      const ex = out.explanation!;

      expect(ex.correct).toBe(source.correct);
      // Exactly the three wrong positions are covered, never the keyed one.
      expect(Object.keys(ex.wrong).map(Number).sort(), `Q${q.id} covered indices`).toEqual(
        [0, 1, 2, 3].filter((i) => i !== out.answer),
      );
      // Each explanation still describes the option it is attached to.
      for (const [idx, text] of Object.entries(ex.wrong)) {
        const optionText = out.options[Number(idx)];
        const originalIndex = q.options.indexOf(optionText);
        expect(text, `Q${q.id} option "${optionText}"`).toBe(source.wrong[originalIndex]);
      }
    }
  });

  it("leaves ascending numeric ladders in their authored order", () => {
    const ladder: ExamQuestion = {
      id: -1,
      topic: "Record Keeping",
      q: "How long must records be kept?",
      options: ["1 year", "3 years", "5 years", "10 years"],
      answer: 2,
    };
    expect(hasOrderedNumericOptions(ladder.options)).toBe(true);
    const out = randomiseOptions(ladder, undefined, seeded(3));
    expect(out.options).toEqual(ladder.options);
    expect(out.answer).toBe(2);
  });

  it("spreads correct answers across all four positions", () => {
    const rng = seeded(1234);
    const dist: Record<number, number> = { 0: 0, 1: 0, 2: 0, 3: 0 };
    for (let run = 0; run < 40; run++) {
      for (const q of randomiseSession(buildSmartExam(bank) as ExamQuestion[], bankExplanations, rng)) {
        dist[q.answer]++;
      }
    }
    const total = Object.values(dist).reduce((a, b) => a + b, 0);
    for (const [index, count] of Object.entries(dist)) {
      const share = count / total;
      expect(
        share,
        `option ${"ABCD"[Number(index)]} is correct ${(share * 100).toFixed(1)}% of the time`,
      ).toBeGreaterThan(0.18);
      expect(share).toBeLessThan(0.32);
    }
  });

  it("shuffle is uniform enough that no position is stuck", () => {
    const rng = seeded(99);
    const landedAt = [new Set<number>(), new Set<number>(), new Set<number>(), new Set<number>()];
    for (let i = 0; i < 500; i++) {
      shuffle([0, 1, 2, 3], rng).forEach((value, position) => landedAt[value].add(position));
    }
    landedAt.forEach((positions, value) =>
      expect(positions.size, `element ${value} never reached every position`).toBe(4),
    );
  });
});
