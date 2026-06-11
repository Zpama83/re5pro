/**
 * RE5 Task 4 lesson + quiz domain types.
 *
 * Anchored to:
 *   - FSCA Qualifying Criteria for Task 4 (QC1–QC14)
 *   - General Code of Conduct (post-Board Notice 194 of 2017)
 *   - The Master AI Meta-Prompt blueprint + exemplar (QC13) supplied by the user
 *
 * DRAFT — quiz copy authored from the user's blueprint; pending compliance-officer review
 * before any production exam usage.
 */

export type CognitiveLevel = 1 | 2 | 3 | 4;

export type CognitiveLabel =
  | "Knowledge"
  | "Comprehension"
  | "Application"
  | "Analysis";

export const COGNITIVE_LABELS: Record<CognitiveLevel, CognitiveLabel> = {
  1: "Knowledge",
  2: "Comprehension",
  3: "Application",
  4: "Analysis",
};

export interface QuizOption {
  /** Single uppercase letter, e.g. "A" */
  letter: "A" | "B" | "C" | "D";
  text: string;
}

export interface QuizQuestion {
  id: string;
  level: CognitiveLevel;
  /** Optional short label, e.g. "Negative", "Roman Numeral", "Scenario" */
  format?: string;
  prompt: string;
  options: QuizOption[];
  /** Letter of the correct option */
  correct: "A" | "B" | "C" | "D";
  /** Statutory justification for the correct answer */
  justification: string;
  /**
   * Optional explanation for each incorrect option keyed by letter.
   * Where supplied, this is rendered after submission alongside the justification.
   */
  distractorAnalysis?: Partial<Record<"A" | "B" | "C" | "D", string>>;
}

export interface Quiz {
  questions: QuizQuestion[];
}

export interface Lesson {
  /** "Task 4(QC1)" etc — matches the labels in the source docx */
  id: string;
  /** Sort order, 1–14 */
  order: number;
  /** Short title used in the page header */
  title: string;
  /** The official FSCA Qualifying Criteria description */
  qcDescription: string;
  /** Primary statutory references (FAIS Act sections, GCOC sections, Board Notices) */
  statutoryRefs: string[];
  /**
   * YouTube video ID (e.g. "eBhVIvoTViU"). When null/undefined, the lesson
   * renders without a video player — useful for syllabus-coverage lessons
   * that don't yet have a paired video.
   */
  youtubeId: string | null;
  /** Optional playlist context — embed will include &list=&index= */
  playlist?: { listId: string; index: number };
  /** Bullet-list of core concepts the video covers, shown above the player */
  coreConcepts: string[];
  /** 5-question quiz: 1×L1, 1×L2, 2×L3, 1×L4 */
  quiz: Quiz;
}
