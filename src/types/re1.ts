export type RE1TopicTag = 
  | 'debarment_s14'
  | 'fit_and_proper'
  | 'key_individual_duties'
  | 'compliance_officer'
  | 'fais_ombud'
  | 'general_code_of_conduct'
  | 'needs_analysis'
  | 'disclosure_requirements'
  | 'fsca_licensing'
  | 'license_lapse_suspension'
  | 'business_rescue'
  | 'fica_aml'
  | 'regulatory_levies'
  | 'dofa_timelines'
  | 'representative_oversight'
  | 'medical_schemes_act';

export type RE1ComplexityLevel = 1 | 2 | 3 | 4;

export interface RE1Question {
  id: string;
  question_number?: number;
  question_text: string;
  option_a: string;
  option_b: string;
  option_c: string;
  option_d: string;
  correct_answer: 'A' | 'B' | 'C' | 'D';
  explanation: string;
  complexity_level: RE1ComplexityLevel;
  topic_tag: RE1TopicTag;
  legislative_ref?: string;
  is_active: boolean;
  created_at: string;
}

export interface RE1UserSession {
  id: string;
  user_id?: string;
  session_type: 'practice' | 'mock_exam';
  started_at: string;
  completed_at?: string;
  total_questions: number;
  correct_answers: number;
  score_percent: number;
  time_taken_secs: number;
  answers: Record<string, 'A' | 'B' | 'C' | 'D'>;
  topic_breakdown: Record<string, { correct: number; total: number }>;
}
