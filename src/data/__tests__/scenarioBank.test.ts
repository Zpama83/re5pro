/**
 * Data-quality suite for the scenario and combination item bank.
 *
 * These items exist to fix a measurable gap: the servable mock bank holds 30
 * questions at Application and 9 at Analysis, while a 50-question mock needs
 * 10 and 5 of them. Every sitting therefore draws five of the same nine
 * analysis items.
 *
 * The checks here mirror the ones the mock bank and lesson quizzes are held to
 * — structure, answer-key/explanation agreement, task coverage, post-2018
 * terminology — plus two this bank needs specifically: that the draft set
 * cannot reach a candidate while it is unreviewed, and that correct answers
 * are not clustered on one letter, which is the defect that made the original
 * bank scoreable at 80% by answering B throughout.
 *
 * As with the rest of the suite: this proves the items are structurally sound
 * and internally consistent. It cannot prove the answer keys are legally
 * correct. See docs/QUALITY-ASSURANCE.md §4.
 */
import { describe, it, expect } from "vitest";
import {
  scenarioItems,
  approvedScenarioItems,
  toMockQuestion,
  SCENARIO_BANK_REVIEWED,
} from "@/data/re5ScenarioBank";
import type { Letter } from "@/data/re5ScenarioBank";

const LETTERS: Letter[] = ["A", "B", "C", "D"];
const OLD_CTR_PATTERN = /R\s?24[,\s]?999/;

const allText = (): string =>
  scenarioItems
    .flatMap((i) => [
      i.prompt,
      i.justification,
      ...i.options.map((o) => o.text),
      ...Object.values(i.distractorAnalysis),
      ...i.statutoryRefs,
    ])
    .join("\n");

describe("scenario bank — gating", () => {
  it("serves nothing while the set is unreviewed", () => {
    // The whole point of the flag. If this ever fails, unreviewed regulatory
    // content is one deploy away from a candidate preparing for a real exam.
    expect(SCENARIO_BANK_REVIEWED).toBe(false);
    expect(approvedScenarioItems()).toEqual([]);
  });

  it("keeps the draft items available for review", () => {
    expect(scenarioItems.length).toBeGreaterThan(0);
  });
});

describe("scenario bank — structure", () => {
  it("has unique ids", () => {
    const ids = scenarioItems.map((i) => i.id);
    expect(new Set(ids).size, `duplicate id among ${ids.length}`).toBe(ids.length);
  });

  it.each(scenarioItems.map((i) => [i.id, i] as const))("%s is well formed", (_id, item) => {
    expect(item.prompt.trim(), "prompt").toBeTruthy();
    expect(item.options.map((o) => o.letter), "option letters").toEqual(LETTERS);
    item.options.forEach((o) =>
      expect(o.text.trim(), `option ${o.letter}`).not.toBe(""),
    );

    // No duplicate option text — the copy-paste bug the mock bank is checked for.
    const unique = new Set(item.options.map((o) => o.text.trim().toLowerCase()));
    expect(unique.size, "duplicate option text").toBe(4);

    expect(LETTERS, "correct letter").toContain(item.correct);
    expect(item.justification.trim(), "justification").toBeTruthy();
    expect(item.statutoryRefs.length, "statutoryRefs").toBeGreaterThanOrEqual(1);
  });

  it.each(scenarioItems.map((i) => [i.id, i] as const))(
    "%s explains every wrong option and no right one",
    (_id, item) => {
      const covered = Object.keys(item.distractorAnalysis).sort();
      const expected = LETTERS.filter((l) => l !== item.correct).sort();
      expect(covered, "letters covered by the analysis").toEqual(expected);

      for (const letter of expected) {
        expect(item.distractorAnalysis[letter]?.trim(), `analysis for ${letter}`).toBeTruthy();
      }
      // The defect that produced Q49/Q50 and Q251 in the original bank: an
      // explanation that argues against the answer the key says is right.
      expect(
        item.distractorAnalysis[item.correct],
        `${item.id}: the analysis covers the keyed correct answer ${item.correct}`,
      ).toBeUndefined();
    },
  );
});

describe("scenario bank — coverage", () => {
  it("covers all 8 FSCA tasks", () => {
    for (const task of [1, 2, 3, 4, 5, 6, 7, 8]) {
      const forTask = scenarioItems.filter((i) => i.taskId === task);
      expect(forTask.length, `task ${task}`).toBeGreaterThan(0);
    }
  });

  it("holds only the levels the servable pool is short of", () => {
    for (const item of scenarioItems) {
      expect([3, 4], `${item.id} level`).toContain(item.level);
    }
  });

  it("supplies enough of each level to make mock exams vary", () => {
    // A 50-question mock needs 10 at L3 and 5 at L4. Anything less than double
    // that means the same items recur sitting after sitting.
    const byLevel = { 3: 0, 4: 0 };
    scenarioItems.forEach((i) => byLevel[i.level]++);
    expect(byLevel[3], "Application items").toBeGreaterThanOrEqual(20);
    expect(byLevel[4], "Analysis items").toBeGreaterThanOrEqual(10);
  });

  it("uses the formats the live exam uses, not plain recall", () => {
    const styles = new Set(scenarioItems.map((i) => i.style));
    for (const style of ["Scenario", "RomanNumeral", "MostBestLeast", "Sequencing"]) {
      expect(styles.has(style as never), `no ${style} items`).toBe(true);
    }
  });

  it("writes prompts long enough to carry a scenario", () => {
    // The bank this replaces has a median prompt of 61 characters.
    for (const item of scenarioItems) {
      expect(item.prompt.length, `${item.id} prompt is too short to be a scenario`).toBeGreaterThan(
        120,
      );
    }
  });
});

describe("scenario bank — answer positions", () => {
  it("does not cluster correct answers on one letter", () => {
    const counts: Record<Letter, number> = { A: 0, B: 0, C: 0, D: 0 };
    scenarioItems.forEach((i) => counts[i.correct]++);
    const share = (n: number) => n / scenarioItems.length;

    for (const letter of LETTERS) {
      expect(
        share(counts[letter]),
        `option ${letter} is the answer ${(share(counts[letter]) * 100).toFixed(0)}% of the time`,
      ).toBeGreaterThan(0.15);
      expect(share(counts[letter])).toBeLessThan(0.35);
    }
  });
});

describe("scenario bank — terminology", () => {
  it("uses post-2018 terminology", () => {
    const text = allText();
    expect(/\bthe Registrar\b/.test(text), "uses 'the Registrar'").toBe(false);
    expect(
      /Financial Services Board/.test(text),
      "refers to the dissolved Financial Services Board",
    ).toBe(false);
    expect(OLD_CTR_PATTERN.test(text), "uses the superseded R24,999.99 threshold").toBe(false);
  });
});

describe("scenario bank — conversion to the mock-exam shape", () => {
  it("keeps the keyed answer and its distractor analysis aligned", () => {
    scenarioItems.forEach((item, index) => {
      const { question, explanation } = toMockQuestion(item, 1000 + index);

      // The option at the keyed index must be the one the item marked correct.
      const correctText = item.options.find((o) => o.letter === item.correct)!.text;
      expect(question.options[question.answer], `${item.id} keyed option`).toBe(correctText);

      // Every wrong index carries the analysis written for that same option.
      const wrongIndices = [0, 1, 2, 3].filter((i) => i !== question.answer);
      expect(Object.keys(explanation.wrong).map(Number).sort(), `${item.id} wrong map`).toEqual(
        wrongIndices,
      );
      for (const i of wrongIndices) {
        const letter = LETTERS[i];
        expect(explanation.wrong[i], `${item.id} analysis at index ${i}`).toBe(
          item.distractorAnalysis[letter],
        );
      }
      expect(explanation.correct).toBe(item.justification);
      expect(question.id).toBe(1000 + index);
    });
  });
});
