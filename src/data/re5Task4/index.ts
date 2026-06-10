/**
 * RE5 Task 4 — lesson data entry point.
 *
 * DRAFT — quiz copy authored from the supplied Master Meta-Prompt blueprint and the
 * QC13 exemplar (used verbatim). All statutory citations follow post-Board Notice
 * 194 of 2017 terminology. Pending compliance-officer review before exam-grade use.
 */
import { lessonsQc01to07 } from "./lessons-qc01-07";
import { lessonsQc08to14 } from "./lessons-qc08-14";
import type { Lesson } from "./types";

export * from "./types";

export const re5Task4Lessons: Lesson[] = [
  ...lessonsQc01to07,
  ...lessonsQc08to14,
].sort((a, b) => a.order - b.order);

if (re5Task4Lessons.length !== 14) {
  // Guardrail: surface data-integrity issues fast in dev.
  // eslint-disable-next-line no-console
  console.warn(
    `[re5Task4Lessons] Expected 14 lessons, got ${re5Task4Lessons.length}.`,
  );
}

export const findLessonById = (id: string): Lesson | undefined =>
  re5Task4Lessons.find((l) => l.id === id);
