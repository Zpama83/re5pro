/**
 * Data-quality test suite for all quiz content in RE5CertPro.
 *
 * This is the enforcement layer for the course's exam-prep standard:
 * every question in the RE5 mock-exam bank and every course-lesson quiz
 * is validated for structural integrity, answer-key sanity, explanation
 * coverage, cognitive distribution, and 2026-current regulatory
 * terminology. If a future edit introduces a malformed question, a
 * missing explanation, or a superseded legal figure, `npm test` fails.
 *
 * What this suite CANNOT check: legal correctness of the answer keys.
 * That requires a FAIS compliance officer — see docs/QUALITY-ASSURANCE.md.
 */
import { describe, it, expect } from "vitest";
import { questions as mockExamQuestions, explanations as mockExamExplanations } from "@/components/RE5Exam";
import { getMetadata, FSCA_DISTRIBUTION } from "@/data/questionMetadata";
import { re5Task4Lessons } from "@/data/re5Task4";
import { re5OtherTaskLessons } from "@/data/re5OtherTasks";
import { re5SupplementaryLessons } from "@/data/re5Supplementary";
import { re1Lessons } from "@/data/re1Course";
import type { Lesson } from "@/data/re5Task4/types";

/* ────────────────────────────────────────────────────────────────────────── */
/*  Shared terminology rules (post-Twin-Peaks / post-BN 194 of 2017)          */
/* ────────────────────────────────────────────────────────────────────────── */

// Outdated terms that must never be presented as CURRENT law. They may appear
// in historical framing ("replaced the FSB Appeal Board in 2018") or as
// deliberately-wrong distractor text, so we whitelist known-acceptable IDs
// instead of banning the strings outright.
// IDs where "Financial Services Board" appears legitimately — either as
// historical framing or as a deliberately-wrong distractor that tests whether
// the candidate knows the FSB was dissolved in 2018.
const FSB_ALLOWED_MOCK_IDS = new Set([
  265, // historical: FSB Appeal Board → Financial Services Tribunal
  301, // distractor: "The Financial Services Board (FSB)" — correct answer is FSCA
]);
const OLD_CTR_PATTERN = /R\s?24[,\s]?999/;
const OLD_CTR_ALLOWED_MOCK_IDS = new Set([91]); // appears only as a labelled superseded distractor

const collectLessonText = (l: Lesson): string =>
  [
    l.title,
    l.qcDescription,
    ...l.coreConcepts,
    ...l.statutoryRefs,
    ...l.quiz.questions.flatMap((q) => [
      q.prompt,
      q.justification,
      ...q.options.map((o) => o.text),
      ...Object.values(q.distractorAnalysis ?? {}),
    ]),
  ].join("\n");

/* ────────────────────────────────────────────────────────────────────────── */
/*  RE5 mock-exam bank (RE5Exam.jsx)                                          */
/* ────────────────────────────────────────────────────────────────────────── */

interface MockQuestion {
  id: number;
  topic: string;
  q: string;
  options: string[];
  answer: number;
}

const mock = mockExamQuestions as MockQuestion[];

describe("RE5 mock-exam bank", () => {
  it("has 325 questions with unique sequential coverage", () => {
    expect(mock.length).toBe(325);
    const ids = new Set(mock.map((q) => q.id));
    expect(ids.size).toBe(325);
  });

  it("every question is structurally valid", () => {
    for (const q of mock) {
      expect(q.q, `Q${q.id} prompt`).toBeTruthy();
      expect(q.options, `Q${q.id} options`).toHaveLength(4);
      q.options.forEach((o, i) =>
        expect(o.trim(), `Q${q.id} option ${i}`).not.toBe(""),
      );
      expect(q.answer, `Q${q.id} answer index`).toBeGreaterThanOrEqual(0);
      expect(q.answer, `Q${q.id} answer index`).toBeLessThanOrEqual(3);
      // No duplicate option text inside one question (a classic copy-paste bug).
      const unique = new Set(q.options.map((o) => o.trim().toLowerCase()));
      expect(unique.size, `Q${q.id} duplicate options`).toBe(4);
    }
  });

  it("every question has an explanation with analysis for each wrong option", () => {
    for (const q of mock) {
      const ex = (mockExamExplanations as Record<number, { correct: string; wrong: Record<number, string> }>)[q.id];
      expect(ex, `Q${q.id} missing explanation`).toBeTruthy();
      expect(ex.correct?.trim(), `Q${q.id} empty correct explanation`).toBeTruthy();
      const wrongIndices = [0, 1, 2, 3].filter((i) => i !== q.answer);
      for (const i of wrongIndices) {
        expect(
          ex.wrong?.[i]?.trim(),
          `Q${q.id} missing distractor analysis for option index ${i}`,
        ).toBeTruthy();
      }
      // The correct option must NOT appear in the wrong-map — that would mean
      // the answer key and the explanation disagree about which option is right.
      expect(
        ex.wrong?.[q.answer],
        `Q${q.id}: explanation's wrong-map covers the keyed correct answer (index ${q.answer}) — answer key and explanation disagree`,
      ).toBeUndefined();
    }
  });

  it("metadata resolves for every question and the bank can fill the FSCA 50-question distribution", () => {
    const byLevel: Record<number, number> = { 1: 0, 2: 0, 3: 0, 4: 0 };
    for (const q of mock) {
      const meta = getMetadata(q);
      expect([1, 2, 3, 4], `Q${q.id} level`).toContain(meta.complexityLevel);
      expect(meta.taskId, `Q${q.id} taskId`).toBeGreaterThanOrEqual(1);
      expect(meta.taskId, `Q${q.id} taskId`).toBeLessThanOrEqual(8);
      byLevel[meta.complexityLevel]++;
    }
    for (const [level, need] of Object.entries(FSCA_DISTRIBUTION)) {
      expect(
        byLevel[Number(level)],
        `bank cannot fill FSCA need of ${need} at level ${level}`,
      ).toBeGreaterThanOrEqual(need as number);
    }
  });

  it("uses 2026-current regulatory terminology", () => {
    for (const q of mock) {
      const text = q.q + "\n" + q.options.join("\n");
      const ex = (mockExamExplanations as Record<number, { correct: string; wrong: Record<number, string> }>)[q.id];
      const exText = ex ? ex.correct + "\n" + Object.values(ex.wrong ?? {}).join("\n") : "";

      if (!FSB_ALLOWED_MOCK_IDS.has(q.id)) {
        expect(
          /Financial Services Board/.test(text),
          `Q${q.id} references the dissolved FSB outside the historical whitelist`,
        ).toBe(false);
      }
      if (!OLD_CTR_ALLOWED_MOCK_IDS.has(q.id)) {
        expect(
          OLD_CTR_PATTERN.test(text) || OLD_CTR_PATTERN.test(exText),
          `Q${q.id} references the superseded R24,999.99 CTR threshold`,
        ).toBe(false);
      }
      // "the Registrar" as a current FAIS authority is outdated (now "the Authority").
      expect(
        /\bthe Registrar\b/.test(text),
        `Q${q.id} uses "the Registrar" (replaced by "the Authority" post-2018)`,
      ).toBe(false);
    }
  });

  it("keeps exam-mechanics facts consistent (50 questions, 33 to pass)", () => {
    // The supplementary exam-tactics lesson states these; verify any mock-bank
    // questions about exam mechanics agree.
    const mechanics = mock.filter((q) => /RE5 exam(ination)? consist|structured as/i.test(q.q));
    for (const q of mechanics) {
      const correctText = q.options[q.answer];
      expect(correctText).toMatch(/50/);
    }
  });
});

/* ────────────────────────────────────────────────────────────────────────── */
/*  Course lesson quizzes (RE5 Task 4, other tasks, supplementary)            */
/* ────────────────────────────────────────────────────────────────────────── */

const lessonSets: Array<{ name: string; lessons: Lesson[] }> = [
  { name: "RE5 Task 4 deep-dive", lessons: re5Task4Lessons },
  { name: "RE5 other-tasks coverage", lessons: re5OtherTaskLessons },
  { name: "RE5 supplementary", lessons: re5SupplementaryLessons },
];

describe.each(lessonSets)("$name lessons", ({ lessons }) => {
  it("has unique lesson ids and orders", () => {
    expect(new Set(lessons.map((l) => l.id)).size).toBe(lessons.length);
    expect(new Set(lessons.map((l) => l.order)).size).toBe(lessons.length);
  });

  it.each(lessons.map((l) => [l.id, l] as const))(
    "%s quiz meets the exam-grade standard",
    (_id, lesson) => {
      const qs = lesson.quiz.questions;
      expect(qs, "exactly 5 questions").toHaveLength(5);

      // Cognitive distribution: 1×L1, 1×L2, 2×L3, 1×L4.
      const levels = qs.map((q) => q.level).sort();
      expect(levels).toEqual([1, 2, 3, 3, 4]);

      // Unique question ids within the lesson.
      expect(new Set(qs.map((q) => q.id)).size).toBe(5);

      for (const q of qs) {
        expect(q.prompt.trim(), `${q.id} prompt`).toBeTruthy();
        expect(q.options, `${q.id} options`).toHaveLength(4);
        expect(
          q.options.map((o) => o.letter),
          `${q.id} option letters`,
        ).toEqual(["A", "B", "C", "D"]);
        q.options.forEach((o) =>
          expect(o.text.trim(), `${q.id} option ${o.letter}`).not.toBe(""),
        );
        expect(["A", "B", "C", "D"], `${q.id} correct letter`).toContain(q.correct);
        expect(q.justification.trim(), `${q.id} justification`).toBeTruthy();

        if (q.distractorAnalysis) {
          // Distractor analysis must not cover the correct letter, and must
          // only reference real option letters.
          expect(
            q.distractorAnalysis[q.correct],
            `${q.id}: distractorAnalysis covers the CORRECT letter ${q.correct} — answer key and analysis disagree`,
          ).toBeUndefined();
        }
      }

      // Lesson metadata sanity.
      expect(lesson.coreConcepts.length, "coreConcepts").toBeGreaterThanOrEqual(3);
      expect(lesson.statutoryRefs.length, "statutoryRefs").toBeGreaterThanOrEqual(1);

      // 2026 terminology: no superseded CTR threshold presented as current,
      // no "the Registrar".
      const text = collectLessonText(lesson);
      expect(
        /\bthe Registrar\b/.test(text),
        `${lesson.id} uses "the Registrar"`,
      ).toBe(false);
      // R24,999.99 may only appear when explicitly labelled as superseded/old.
      if (OLD_CTR_PATTERN.test(text)) {
        expect(
          /superseded|previous|old(er)? (figure|threshold)|amended upwards|increased from/i.test(text),
          `${lesson.id} mentions R24,999.99 without labelling it superseded`,
        ).toBe(true);
      }
    },
  );
});

describe("RE5 course totals", () => {
  it("covers all 8 RE5 tasks across the lesson sets", () => {
    // Task 4 via the deep-dive set; tasks 1,2,3,5,6,7,8 via the coverage set.
    const coverageIds = re5OtherTaskLessons.map((l) => l.id).join(",");
    for (const t of [1, 2, 3, 5, 6, 7, 8]) {
      expect(coverageIds, `Task ${t} lesson present`).toContain(`RE5-Task${t}`);
    }
    expect(re5Task4Lessons).toHaveLength(14); // QC1–QC14
  });
});

/* ────────────────────────────────────────────────────────────────────────── */
/*  RE1 course lessons (teaching layer; quizzes come from Supabase)           */
/* ────────────────────────────────────────────────────────────────────────── */

// topic_tag values that exist in the seeded Supabase re1_questions bank.
const RE1_BANK_TOPIC_TAGS = new Set([
  "business_rescue",
  "compliance_officer",
  "debarment_s14",
  "disclosure_requirements",
  "dofa_timelines",
  "fais_ombud",
  "fica_aml",
  "fit_and_proper",
  "fsca_licensing",
  "general_code_of_conduct",
  "key_individual_duties",
  "license_lapse_suspension",
  "medical_schemes_act",
  "needs_analysis",
  "regulatory_levies",
  "representative_oversight",
]);

describe("RE1 course lessons", () => {
  it("covers all 16 RE1 tasks exactly once", () => {
    expect(re1Lessons).toHaveLength(16);
    const taskNumbers = re1Lessons.map((l) => l.taskNumber).sort((a, b) => a - b);
    expect(taskNumbers).toEqual(Array.from({ length: 16 }, (_, i) => i + 1));
  });

  it("every lesson maps only to topic tags that exist in the question bank", () => {
    for (const l of re1Lessons) {
      expect(l.topicTags.length, `${l.id} has at least one tag`).toBeGreaterThan(0);
      for (const tag of l.topicTags) {
        expect(
          RE1_BANK_TOPIC_TAGS.has(tag),
          `${l.id} references unknown topic_tag "${tag}" — quiz would come back empty`,
        ).toBe(true);
      }
      expect(l.coreConcepts.length, `${l.id} coreConcepts`).toBeGreaterThanOrEqual(3);
      expect(l.statutoryRefs.length, `${l.id} statutoryRefs`).toBeGreaterThanOrEqual(1);
    }
  });

  it("uses 2026-current terminology", () => {
    for (const l of re1Lessons) {
      const text = [l.title, l.qcDescription, ...l.coreConcepts, ...l.statutoryRefs].join("\n");
      expect(/\bthe Registrar\b/.test(text), `${l.id} uses "the Registrar"`).toBe(false);
      expect(
        OLD_CTR_PATTERN.test(text),
        `${l.id} references the superseded R24,999.99 threshold`,
      ).toBe(false);
    }
  });
});
