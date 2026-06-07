-- RE1 Practice Test Module Schema

-- Table: re1_questions
CREATE TABLE IF NOT EXISTS public.re1_questions (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  question_number INT,                        
  question_text   TEXT NOT NULL,
  option_a        TEXT NOT NULL,
  option_b        TEXT NOT NULL,
  option_c        TEXT NOT NULL,
  option_d        TEXT NOT NULL,
  correct_answer  CHAR(1) NOT NULL,           
  explanation     TEXT,                       
  complexity_level INT CHECK (complexity_level IN (1,2,3,4)),
  topic_tag       TEXT,                       
  legislative_ref TEXT,                       
  is_active       BOOLEAN DEFAULT true,
  created_at      TIMESTAMPTZ DEFAULT NOW()
);

-- Table: re1_user_sessions
CREATE TABLE IF NOT EXISTS public.re1_user_sessions (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id         UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  session_type    TEXT CHECK (session_type IN ('practice', 'mock_exam')),
  started_at      TIMESTAMPTZ DEFAULT NOW(),
  completed_at    TIMESTAMPTZ,
  total_questions INT,
  correct_answers INT,
  score_percent   NUMERIC(5,2),
  time_taken_secs INT,
  answers         JSONB,  
  topic_breakdown JSONB   
);

-- Enable Row-Level Security (RLS)
ALTER TABLE public.re1_questions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.re1_user_sessions ENABLE ROW LEVEL SECURITY;

-- Policies
CREATE POLICY "Read active RE1 questions" ON public.re1_questions
  FOR SELECT USING (is_active = true);

-- Note: In MVP, if users are unauthenticated, they won't be able to insert sessions.
-- For now, we will allow inserts anonymously if user_id is null, or we can just stick to local storage if no user is signed in.
-- Assuming standard Supabase auth will be used eventually:
CREATE POLICY "Own RE1 sessions only" ON public.re1_user_sessions
  FOR ALL USING (auth.uid() = user_id);

-- Seed Data (Initial 20 Questions)
INSERT INTO public.re1_questions (question_number, topic_tag, complexity_level, question_text, option_a, option_b, option_c, option_d, correct_answer, explanation, legislative_ref) VALUES
(1, 'debarment_s14', 2, 'An FSP discovers that a Representative breached the FAIS Act three months after the Representative''s employment was terminated. Within what period must the FSP commence the debarment process to retain jurisdiction?', 'Within 3 months of the termination date', 'Within 6 months of the termination date', 'Within 12 months of the termination date', 'The FSP has no jurisdiction once the Representative has left', 'B', 'Section 14(5) of the FAIS Act allows an FSP to debar a former Representative if the debarment process commences within 6 months of termination, provided the grounds occurred while the person was still a Representative of that FSP.', 'FAIS Act s14(5)'),
(2, 'debarment_s14', 1, 'Within how many days must an FSP notify the FSCA in writing after a statutory debarment has been effected?', '3 business days', '5 days', '10 days', '15 days', 'B', 'The FSP must notify the FSCA within 5 days of the debarment. Full grounds and supporting evidence must follow within 15 days.', 'FAIS Act s14 / FAIS Notice 17 of 2018'),
(3, 'debarment_s14', 3, 'An FSP wishes to debar a Representative due to an unresolved contractual salary dispute. The Representative has not breached any fit and proper requirement. Which of the following BEST describes the FSP''s correct course of action?', 'Proceed with debarment as the FSP has full discretion', 'Suspend the Representative pending resolution', 'The FSP must NOT use debarment to resolve contractual or employment disputes', 'Refer the matter to the FAIS Ombud for determination', 'C', 'Debarment is a regulatory tool, not an employment or contractual remedy. Using it for salary disputes constitutes an abuse of administrative power and exposes the FSP to regulatory sanction.', 'FAIS Act s14; PAJA'),
(4, 'debarment_s14', 2, 'Which legislation governs the procedural fairness requirements that an FSP must comply with during the statutory debarment process?', 'The Labour Relations Act', 'The Promotion of Administrative Justice Act (PAJA)', 'The National Credit Act', 'The Companies Act', 'B', 'PAJA requires that any administrative action (including debarment) must be lawful, reasonable, and procedurally fair. This includes giving the Representative written notice and a reasonable opportunity to respond.', 'PAJA 2000; FAIS Act s14'),
(5, 'debarment_s14', 4, 'Consider the following statements regarding the statutory debarment process: i. The FSP must give the Representative a written notice of intention to debar. ii. The FSP must provide the Representative with a copy of its debarment policies. iii. The Representative must be given at least one month to respond to the notice. iv. The FSP may proceed with debarment without reviewing the Representative''s response if the evidence is conclusive. Which combination is CORRECT?', 'i, ii, and iii only', 'i and iv only', 'ii, iii, and iv only', 'i, ii, iii, and iv', 'A', 'Statements i, ii, and iii are correct requirements under the debarment process. Statement iv is incorrect — the FSP must always objectively review the Representative''s submissions before making a decision. Failure to do so violates PAJA.', 'FAIS Act s14; PAJA'),
(6, 'fais_ombud', 1, 'After how many weeks of an unresolved internal complaint may a client refer their complaint to the FAIS Ombud?', '4 weeks', '6 weeks', '8 weeks', '12 weeks', 'B', 'If the FSP does not resolve a complaint within 6 weeks, the client may escalate it to the FAIS Ombud.', 'GCC BN80 of 2003; BN81 of 2003'),
(7, 'fais_ombud', 2, 'Which of the following complaints would the FAIS Ombud DECLINE to investigate?', 'A complaint where the FSP failed to disclose a conflict of interest', 'A complaint where the Representative provided unsuitable advice', 'A complaint where the event occurred 4 years ago', 'A complaint where the Representative failed to conduct a needs analysis', 'C', 'The FAIS Ombud''s jurisdiction is time-barred. Complaints relating to events that occurred more than 3 years prior will not be accepted.', 'BN81 of 2003'),
(8, 'fais_ombud', 3, 'The FAIS Ombud issues a determination against an FSP. The FSP believes the determination is wrong and wants to contest it. What is the legal status of the Ombud''s determination and what recourse does the FSP have?', 'The determination is advisory only; the FSP can ignore it', 'The determination has the same legal force as a civil court judgment; the FSP may appeal to the FST', 'The determination must be referred to the High Court for enforcement', 'The FSP can request the FSCA to review the determination within 30 days', 'B', 'A determination by the FAIS Ombud has the same legal standing as a civil court judgment. The FSP''s recourse is to appeal to the Financial Services Tribunal (FST) for reconsideration.', 'BN81 of 2003; FAIS Act'),
(9, 'key_individual_duties', 1, 'How many years of practical experience in managing a financial services business must a Key Individual have to meet the FSCA''s competency requirements?', '6 months', '1 year', '2 years', '3 years', 'B', 'Key Individuals must have a minimum of 1 year of practical experience in managing a financial services business, relevant to the product subcategories they are responsible for.', 'Board Notice 194 of 2017'),
(10, 'key_individual_duties', 2, 'A Key Individual in a Category I FSP also renders financial advice directly to clients. Which examinations is this Key Individual required to pass?', 'RE1 only', 'RE5 only', 'Both RE1 and RE5', 'Neither — Key Individuals are exempt from regulatory examinations', 'C', 'A KI who also acts as a Representative must pass both the RE1 (for KI duties) and the RE5 (for representative/advice duties).', 'FAIS Act; Board Notice 194 of 2017'),
(11, 'general_code_of_conduct', 1, 'Under which section of the General Code of Conduct is a Representative required to conduct a needs analysis before providing advice?', 'Section 4', 'Section 6', 'Section 8', 'Section 12', 'C', 'Section 8 of the General Code of Conduct (BN80/2003) requires a Representative to conduct a comprehensive needs analysis before providing financial advice.', 'GCC BN80 of 2003, s8'),
(12, 'general_code_of_conduct', 3, 'A client approaches an advisor urgently and a complete needs analysis is not possible before advice must be rendered. What is the advisor''s CORRECT course of action under the General Code of Conduct?', 'Refuse to provide any advice until a full needs analysis is completed', 'Provide advice based on available information without any further steps', 'Clearly explain the limitation to the client, highlight the risks, and advise them to consider whether the advice is appropriate for their situation', 'Refer the client to another FSP immediately', 'C', 'Where a full needs analysis is not possible, the advisor must disclose this to the client, explain the associated risks, and advise the client to carefully consider whether the advice is appropriate. This protects both the client and the FSP.', 'GCC BN80 of 2003, s8'),
(13, 'general_code_of_conduct', 2, 'Which of the following actions constitutes the rendering of "advice" as defined in Section 1 of the FAIS Act?', 'Assisting a client to complete a funeral policy claim form', 'Processing a client''s policy premium payment', 'Recommending that a client increase their life cover based on their income needs', 'Explaining the administrative steps involved in a policy transfer', 'C', '"Advice" under FAIS means a recommendation, guidance, or proposal regarding a specific financial product. Administrative tasks (claims processing, form completion) are explicitly excluded from the definition of advice.', 'FAIS Act s1'),
(14, 'dofa_timelines', 1, 'Within how many years of a Representative''s Date of First Appointment (DOFA) must they obtain a full, recognised qualification?', '2 years', '4 years', '6 years', '8 years', 'C', 'Representatives must pass the RE5 within 2 years of DOFA and obtain a full recognised qualification within 6 years of DOFA.', 'Board Notice 194 of 2017'),
(15, 'representative_oversight', 3, 'A Key Individual discovers that a Representative has exceeded their 2-year RE5 deadline without passing the exam. What is the Key Individual''s MOST appropriate immediate action?', 'Extend the Representative''s deadline by 6 months informally', 'Ensure the Representative is placed under supervision immediately and cannot render advice independently', 'Wait until the annual FSCA audit to report the lapse', 'Debar the Representative immediately without further process', 'B', 'A Representative who has not met competency timelines cannot render financial services independently. The KI must ensure the Representative operates under a supervision arrangement and address the compliance gap urgently to protect the FSP''s licence.', 'Board Notice 194 of 2017; FAIS Notice 86 of 2018'),
(16, 'license_lapse_suspension', 2, 'What is the PRIMARY difference between the suspension of an FSP licence under Section 9 and the lapsing of a licence under Section 11 of the FAIS Act?', 'Suspension is voluntary; lapsing is involuntary', 'Suspension is imposed by the FSCA for non-compliance; lapsing occurs automatically upon events such as liquidation or voluntary cessation of business', 'There is no practical difference — both result in permanent loss of licence', 'Lapsing only applies to Category II FSPs', 'B', 'Section 9 empowers the FSCA to suspend or withdraw a licence for non-compliance. Section 11 deals with the automatic lapsing of a licence due to events like liquidation, sequestration, or voluntary business closure — not a regulatory penalty.', 'FAIS Act ss9 and 11'),
(17, 'fica_aml', 1, 'What is the primary purpose of the Financial Intelligence Centre Act (FICA) (Act 38 of 2001)?', 'To regulate the licensing of financial advisors', 'To establish the FSCA as the primary regulator', 'To combat money laundering and terrorist financing', 'To govern the management of client complaints', 'C', 'FICA''s primary mandate is to establish a regulatory framework to combat money laundering and terrorist financing, requiring FSPs to implement know-your-customer (KYC) and suspicious transaction reporting processes.', 'FICA Act 38 of 2001'),
(18, 'regulatory_levies', 1, 'Under which legislative provision is an FSP required to pay annual regulatory levies to the FSCA?', 'FAIS Act Section 14', 'Financial Services Board Act Section 15A', 'General Code of Conduct Section 8', 'FICA Section 29', 'B', 'Annual regulatory levies payable to the FSCA are prescribed under Section 15A of the Financial Services Board Act, as updated by Government Notice 362 of 2018.', 'Financial Services Board Act s15A; GN362 of 2018'),
(19, 'business_rescue', 2, 'Which sections of the FAIS Act govern an FSP''s operational requirements when it enters business rescue, sequestration, or liquidation?', 'Sections 7 and 8', 'Sections 9 and 11', 'Sections 38A and 38B', 'Sections 14 and 15', 'C', 'Sections 38A and 38B of the FAIS Act specifically address how an FSP must manage its operations and protect client interests during business rescue, sequestration, or liquidation proceedings.', 'FAIS Act ss38A and 38B'),
(20, 'compliance_officer', 2, 'Which of the following is a mandatory requirement for a person to be approved as a Compliance Officer under the FAIS Act?', 'At least 3 years of experience in financial services', 'At least 1 year of general experience in compliance or risk management AND not being an unrehabilitated insolvent', 'Completion of the RE1 and RE5 examinations', 'A postgraduate qualification in law or accounting', 'B', 'Compliance Officers must have at least 1 year of general compliance or risk management experience and must not be an unrehabilitated insolvent at the time of application.', 'Board Notice 194 of 2017');
