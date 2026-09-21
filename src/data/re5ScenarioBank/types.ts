/**
 * RE5 scenario and combination item bank.
 *
 * The mock-exam bank is thin where the live RE5 is thickest. Of the 213
 * servable questions, 166 resolve to `Direct` recall with a median prompt of
 * 61 characters ("A bond is a:", "Churning refers to:"), and the pool that can
 * fill the FSCA cognitive distribution is lopsided: 106 at L1 against 30 at L3
 * and just 9 at L4. Since a 50-question mock needs 10 at L3 and 5 at L4, every
 * sitting draws five of the same nine analysis items. A candidate who works
 * through the bank twice has seen them all.
 *
 * These items exist to fix that: Application (L3) and Analysis (L4) only,
 * spread evenly across all eight FSCA tasks, written in the formats the live
 * exam actually uses — a described situation the candidate must act on, a
 * combination stem where several statements are weighed against each other, a
 * most/best/least judgement, or an ordering.
 *
 * ────────────────────────────────────────────────────────────────────────────
 * NOT SERVED. `SCENARIO_BANK_REVIEWED` is false, so `approvedScenarioItems()`
 * returns nothing and no candidate can be shown these. They were authored by
 * an LLM and carry exactly the risk documented in section 4 of
 * docs/QUALITY-ASSURANCE.md: structurally sound, internally consistent, and
 * unproven as to legal correctness. A qualified FAIS compliance officer or
 * accredited RE trainer must sign off every answer key, statutory citation,
 * threshold and timeline before the flag is flipped.
 * ────────────────────────────────────────────────────────────────────────────
 */

export type Letter = "A" | "B" | "C" | "D";

/** Only the two levels the bank is short of. */
export type ScenarioLevel = 3 | 4;

export type ScenarioStyle =
  | "Scenario"
  | "RomanNumeral"
  | "MostBestLeast"
  | "Sequencing";

export interface ScenarioOption {
  letter: Letter;
  text: string;
}

export interface ScenarioItem {
  /** Stable id, e.g. "RE5-S-T4-02". Never reused. */
  id: string;
  /** FSCA task 1–8. */
  taskId: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
  /** The topic label used by the existing mock bank, so filters keep working. */
  topic: string;
  level: ScenarioLevel;
  style: ScenarioStyle;
  prompt: string;
  options: ScenarioOption[];
  correct: Letter;
  /** Why the keyed answer is right, in statutory terms. */
  justification: string;
  /** Why each of the other three is wrong. Must cover exactly those three. */
  distractorAnalysis: Partial<Record<Letter, string>>;
  /** The provisions a reviewer should check this item against. */
  statutoryRefs: string[];
}

/**
 * Flip to true only once a compliance officer has signed off the whole set,
 * and record who and when in docs/QUALITY-ASSURANCE.md. Until then these items
 * are invisible to the application.
 */
export const SCENARIO_BANK_REVIEWED = false;
