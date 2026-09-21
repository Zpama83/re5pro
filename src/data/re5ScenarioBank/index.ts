/**
 * RE5 scenario and combination item bank — public surface.
 *
 * `scenarioItems` is the full draft set, for review and for the test suite.
 * `approvedScenarioItems()` is what the application may serve, and it returns
 * nothing until `SCENARIO_BANK_REVIEWED` is true. Nothing else should reach
 * into the item files directly.
 */
import { SCENARIO_BANK_REVIEWED } from "./types";
import type { Letter, ScenarioItem } from "./types";
import { tasks1to4 } from "./items-tasks-1-4";
import { tasks5to8 } from "./items-tasks-5-8";

export type { ScenarioItem, ScenarioLevel, ScenarioStyle, Letter } from "./types";
export { SCENARIO_BANK_REVIEWED } from "./types";

export const scenarioItems: ScenarioItem[] = [...tasks1to4, ...tasks5to8];

/**
 * The items the application may serve. Empty until a compliance officer has
 * signed the set off — see docs/QUALITY-ASSURANCE.md §6.12.
 */
export function approvedScenarioItems(): ScenarioItem[] {
  return SCENARIO_BANK_REVIEWED ? scenarioItems : [];
}

const LETTERS: Letter[] = ["A", "B", "C", "D"];

/** The shape the mock-exam bank uses. */
export interface MockShapedQuestion {
  id: number;
  topic: string;
  q: string;
  options: string[];
  answer: number;
}

export interface MockShapedExplanation {
  correct: string;
  wrong: Record<number, string>;
}

/**
 * Convert an item to the mock bank's question/explanation pair.
 *
 * The mock bank keys answers by index and distractor explanations by index,
 * while these items use letters — which is the readable form for a reviewer
 * marking up a document. This is the one place that translation happens.
 *
 * `numericId` is supplied by the caller because ids in the mock bank are
 * sequential integers; picking them is an integration decision, not something
 * this bank should assume.
 */
export function toMockQuestion(
  item: ScenarioItem,
  numericId: number,
): { question: MockShapedQuestion; explanation: MockShapedExplanation } {
  const ordered = LETTERS.map((letter) => {
    const option = item.options.find((o) => o.letter === letter);
    if (!option) throw new Error(`${item.id} is missing option ${letter}`);
    return option;
  });

  const wrong: Record<number, string> = {};
  ordered.forEach((option, index) => {
    if (option.letter === item.correct) return;
    const analysis = item.distractorAnalysis[option.letter];
    if (!analysis) throw new Error(`${item.id} has no analysis for option ${option.letter}`);
    wrong[index] = analysis;
  });

  return {
    question: {
      id: numericId,
      topic: item.topic,
      q: item.prompt,
      options: ordered.map((o) => o.text),
      answer: LETTERS.indexOf(item.correct),
    },
    explanation: { correct: item.justification, wrong },
  };
}
