// TypeScript types for the Deeper Knowledge feature.
// These mirror the shape of rows in the Supabase `dk_topics` table.

export interface DKLegislation {
  source: string;
  text: string;
  interpretation: string;
}

export interface DKScenario {
  type: "compliant" | "breach" | "gray";
  title: string;
  narrative: string;
  key_learning?: string;
  consequences?: string;
}

export interface DKSimulatorChoice {
  label: string;
  next: string;
}

export interface DKSimulatorNode {
  text: string;
  choices?: DKSimulatorChoice[];
  outcome?: "compliant" | "breach";
}

export interface DKSimulator {
  start: string;
  nodes: Record<string, DKSimulatorNode>;
}

export interface DKPrinciple {
  statement: string;
  mischief: string;
  consumerHarm: string;
}

export interface DKQuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface DKExamRelevance {
  frequencyInExams: string;
  sampleQuestions: string[];
  keyPhrases: string[];
}

export interface DKTopic {
  id: string;
  slug: string;
  title: string;
  summary: string;
  sort_order: number;
  created_at: string;
  updated_at: string;
  regulatory_refs: Record<string, string>;
  related_concepts: string[];
  principle: DKPrinciple;
  legislation: DKLegislation[];
  scenarios: DKScenario[];
  simulator: DKSimulator | null;
  exam_relevance: DKExamRelevance;
  quiz?: DKQuizQuestion[];
}
