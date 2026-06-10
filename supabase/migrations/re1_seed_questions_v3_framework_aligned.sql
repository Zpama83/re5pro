-- RE1 Expanded Question Bank — v3 (Framework-Aligned)
-- Run AFTER re1_schema.sql and re1_seed_questions.sql.
-- Adds Q161–Q180: 4 user-supplied exemplar questions + 16 questions targeting
-- the highest-value framework gaps surfaced in the RE1 Curriculum Blueprint:
--   • Updated FICA CTR threshold (R50,000 / 3 business days), STR vs SAR vs TPR
--   • Section 29B tipping-off prohibition
--   • Beneficial ownership 25% test
--   • Pro-rated CPD formula (worked example)
--   • Debarment notification windows (5 days form / 15 days reasons)
--   • Section 14 (FSP debarment) vs FSR Act s153 (FSCA debarment) distinction
--   • FAIS Ombud 5 rejection grounds + 3-year limitation
--   • Twin Peaks: FSCA / Authority terminology (never FSB / Registrar)
--
-- All questions follow Board Notice 194 of 2017 terminology.
-- Cognitive distribution across this batch: Level 1 ×6 | Level 2 ×6 | Level 3 ×5 | Level 4 ×3
-- NOTE: Legislative references reflect commonly examined FAIS positions and
--       should be confirmed by a subject-matter expert before any exam-grade use.

INSERT INTO public.re1_questions (
  question_number, topic_tag, complexity_level, question_text,
  option_a, option_b, option_c, option_d,
  correct_answer, explanation, legislative_ref
) VALUES

-- =====================================================================
-- ============= USER-SUPPLIED EXEMPLAR QUESTIONS (Q161–Q164) ==========
-- =====================================================================

-- Q161 — Task 16 — Debarment notification timing (NEGATIVE format)
(161, 'debarment_s14', 1,
 'An authorised FSP has completed a formal debarment process under section 14(1) of the FAIS Act against a representative who committed fraud. Which of the following actions is the FSP NOT legally obligated to execute as part of the post-debarment requirements?',
 'Immediately withdraw any authority that may still exist for the person to act on behalf of the FSP.',
 'Remove the name of the debarred person from the register of representatives within five days of the debarment.',
 'Complete the prescribed Debarment Notification Form and submit it to the FSCA within five days of the debarment.',
 'Provide the FSCA with the detailed grounds and reasons for the debarment within fifteen days of the debarment.',
 'B',
 'Section 14(4) of the FAIS Act requires the FSP to remove the debarred person from its representative register IMMEDIATELY — not within five days. The five-day window applies to the Debarment Notification Form (option C), and the fifteen-day window applies to providing detailed grounds (option D). Option A — immediate withdrawal of authority — is required by section 14(4)(a).',
 'FAIS Act s14(4)(a)–(e)'),

-- Q162 — Task 11 — FAIS Ombud rejection of complaint (Best format)
(162, 'fais_ombud', 2,
 'A client submits a complaint to the FAIS Ombud regarding a financial loss resulting from an FSP representative''s recommendation. The Ombud determines that the client has not first attempted to resolve the dispute through the FSP''s internal complaints resolution process. Which option BEST describes the legally correct action and rationale?',
 'The Ombud must accept and investigate immediately to ensure consumer protection, since access to statutory dispute resolution overrides the FSP''s internal procedures.',
 'The Ombud must reject the complaint, as the client is legally required to first afford the FSP a reasonable opportunity to resolve the matter through its internal complaints resolution system.',
 'The Ombud must refer the complaint to the FSCA''s Enforcement department to suspend the FSP''s licence for failing to prevent the complaint.',
 'The Ombud must accept the complaint but hold the investigation in abeyance for up to six months to allow the parties to reach a settlement.',
 'B',
 'Under the Rules on Proceedings of the Office of the Ombud for FSPs, the Ombud must decline to investigate where the complainant has not first afforded the FSP a reasonable opportunity to resolve the matter internally. Option A misstates the law (Ombud cannot bypass its own rules). Option C wrongly transfers the FSCA''s licence-suspension power to the Ombud. Option D fabricates an abeyance procedure.',
 'FAIS Act s20; BN81 of 2003; Ombud Rules'),

-- Q163 — Task 13 — Pro-rated CPD calculation (Application case study)
(163, 'fit_and_proper', 3,
 'On 1 November 2025 the Key Individual of an FSP appoints a new representative under supervision. The representative is authorised across multiple classes of business (Short-term Personal Lines and Long-term Subcategory B1). The CPD cycle runs 1 June 2025 to 31 May 2026. Assuming no approved long-term absences, what is the correct base CPD hour requirement per full cycle, and the exact pro-rated target the representative must complete by 31 May 2026?',
 'Base 12 hours; pro-rated target 6 hours.',
 'Base 18 hours; pro-rated target 9 hours.',
 'Base 18 hours; pro-rated target 10.5 hours.',
 'Base 12 hours; pro-rated target 7 hours.',
 'C',
 'Under Chapter 4 of Board Notice 194 of 2017, authorisation across MORE THAN ONE class of business attracts the 18-hour base requirement. The rep is active for 7 full calendar months (Nov, Dec, Jan, Feb, Mar, Apr, May). Pro-rata: (7/12) × 18 = 10.5 hours. Distractor A applies the wrong 12-hour base (more than one subclass within ONE class) and a 6-month count. Distractor B uses the right base but a 6-month count. Distractor D combines the wrong base with the correct 7-month count.',
 'BN 194 of 2017, Chapter 4'),

-- Q164 — Task 10 — FICA aborted suspicious transaction (Analysis / Roman numeral)
(164, 'fica_aml', 4,
 'A representative suspects that a client''s proposed R150,000 single-premium investment, paid in physical cash, involves proceeds of tax evasion. The client aborts the transaction when asked to evidence the source of funds. Consider these compliance actions: i. Submit a Cash Threshold Report (CTR) to the FIC within three business days as the proposed cash value exceeded R49,999.99. ii. Submit a Suspicious Activity Report (SAR) to the FIC within 15 days of forming the suspicion. iii. Immediately notify the client in writing that the file has been flagged and reported to the FIC, in compliance with the General Code''s disclosure principles. iv. Do NOT submit a CTR, because a CTR is triggered only by a completed cash transaction crossing the threshold; an aborted attempt must be evaluated under suspicious-activity reporting. Which actions are legally correct?',
 'I and II only',
 'II and IV only',
 'I, II and III only',
 'II, III and IV only',
 'B',
 'I is wrong — a CTR requires the institution to have actually received or paid the cash; an aborted transaction never crosses that trigger. II is correct — a SAR (s29(1)(b) FICA) covers proposed/attempted transactions and must be filed within 15 days of forming suspicion. III is wrong and CRIMINAL — section 29B prohibits tipping off the client or any third party that a report has been filed; FICA''s anti-tipping-off rule overrides the General Code''s disclosure principles. IV is correct — restates the CTR vs SAR boundary.',
 'FICA s28, s29, s29B'),

-- =====================================================================
-- ============= FRAMEWORK-ALIGNED ADDITIONS (Q165–Q180) ===============
-- =====================================================================

-- Q165 — Task 1 — Twin Peaks terminology (Knowledge)
(165, 'fsca_licensing', 1,
 'Following the implementation of the Financial Sector Regulation Act on 1 April 2018, which body is responsible for market-conduct oversight of FAIS-licensed FSPs?',
 'The Financial Services Board (FSB).',
 'The Registrar of Financial Services Providers.',
 'The Financial Sector Conduct Authority (the Authority).',
 'The Prudential Authority of the South African Reserve Bank.',
 'C',
 'The FSR Act dissolved the Financial Services Board and established the Twin Peaks model. The Financial Sector Conduct Authority (FSCA), referred to in statute as "the Authority", assumed market-conduct oversight of FAIS-licensed FSPs. The Prudential Authority sits within the SARB and supervises systemic and prudential health, not conduct.',
 'FSR Act Chapter 1; FAIS Act s1 (post-amendment)'),

-- Q166 — Task 5 — FSCA notification of structural change (Knowledge)
(166, 'fsca_licensing', 1,
 'Within how many days of any structural or personnel change affecting the FSP''s representative register must the FSP notify the FSCA?',
 '5 days.',
 '15 days.',
 '30 days.',
 '6 months.',
 'B',
 'Operational ability requires the representative register to be kept current and submitted to the FSCA within 15 days of any structural or personnel change. The 5-day and 6-month timelines apply to other obligations (debarment notification form and Ombud-referral limitation respectively).',
 'BN 194 of 2017 Chapter 5'),

-- Q167 — Task 16 — Section 14 vs FSR Act s153 debarment (Comprehension)
(167, 'debarment_s14', 2,
 'What is the principal distinction between a debarment under section 14 of the FAIS Act and a debarment under section 153 of the FSR Act?',
 'Section 14 is initiated by the FSP against its own (or former) representative; section 153 is a debarment order issued by the FSCA against any natural person who has materially contravened a financial sector law.',
 'Section 14 applies only to natural persons; section 153 applies only to juristic persons.',
 'Section 14 debarments are temporary; section 153 debarments are permanent.',
 'Section 14 is initiated by the FAIS Ombud; section 153 is initiated by the Financial Services Tribunal.',
 'A',
 'Section 14 governs debarment by the FSP itself, executed against its own (or recently-terminated former) representatives. FSR Act s153 (which replaced the repealed FAIS Act s14A) governs debarments issued directly by the FSCA. The other options confuse role-players or invent distinctions that do not exist in law.',
 'FAIS Act s14; FSR Act s153'),

-- Q168 — Task 16 — Six-month window for former-rep debarment (Application)
(168, 'debarment_s14', 3,
 'A representative resigns on 1 March. On 1 June (three months later) the FSP discovers the representative committed material misconduct while still employed. On 1 October (seven months after resignation), the FSP is finally ready to start the debarment process. Which is the most accurate position?',
 'The FSP must still complete the debarment regardless of how much time has passed, as resignation never extinguishes the duty.',
 'The FSP may no longer debar under section 14 because the six-month post-termination window has lapsed; the FSP should report the misconduct to the FSCA.',
 'The FSP must notify the FAIS Ombud, who will execute the debarment on the FSP''s behalf.',
 'The six-month window restarts on the date the misconduct was discovered.',
 'B',
 'Under section 14(5), an FSP can only debar a former representative if the debarment process commences within six months of the date the person ceased to act. Once that window lapses, the FSP cannot debar but should report the conduct to the FSCA for consideration under FSR Act s153. The six-month window runs from termination, not discovery — a deliberate consumer-protection design.',
 'FAIS Act s14(5)'),

-- Q169 — Task 16 — Reappointment after competence debarment (Comprehension)
(169, 'debarment_s14', 2,
 'A representative was debarred solely because they failed to pass the RE5 within the required two-year window from their Date of First Appointment. They have since passed the examination and meet all other fit-and-proper requirements. When can they be reappointed?',
 'After a mandatory 12-month waiting period from the debarment date.',
 'Immediately, once they can demonstrate that they are now fully competent.',
 'After three years, irrespective of subsequent qualifications.',
 'Never — competence debarments are permanent.',
 'B',
 'The 12-month waiting period applies only to debarments for HONESTY / INTEGRITY breaches. Where the debarment was purely for a competence failure (missed RE5, RE1, Class of Business or product-specific training deadline), the person may be reappointed as soon as the competence requirement is satisfied.',
 'FAIS Act s14; BN 194 of 2017 Chapter 4'),

-- Q170 — Task 13 — CPD cycle dates (Knowledge)
(170, 'fit_and_proper', 1,
 'The standard CPD cycle for FSPs, Key Individuals and representatives under Board Notice 194 of 2017 runs:',
 'From 1 January to 31 December each year.',
 'From the anniversary of the individual''s Date of First Appointment each year.',
 'From 1 June to 31 May the following year.',
 'From 1 March to 28 February the following year.',
 'C',
 'The CPD cycle is statutorily fixed at 1 June to 31 May. Anniversary-date cycles and the South African tax year (Mar–Feb) are common candidate traps.',
 'BN 194 of 2017 Chapter 4'),

-- Q171 — Task 13 — Product-specific training excluded from CPD (Comprehension)
(171, 'fit_and_proper', 2,
 'Which of the following activities CANNOT be counted toward a representative''s minimum CPD hours for the cycle?',
 'An accredited webinar on the General Code of Conduct presented by a recognised professional body.',
 'Product-specific training on a particular insurer''s new annuity product offered by the product supplier.',
 'A peer-reviewed regulatory article published by a recognised industry body and assigned CPD hours.',
 'An accredited workshop on conflict-of-interest management.',
 'B',
 'Product-specific training (and activities undertaken toward a formal qualification) are expressly excluded from CPD hour calculations under BN 194 of 2017. This prevents FSPs and product suppliers from substituting marketing-led product training for genuine regulatory development.',
 'BN 194 of 2017 Chapter 4'),

-- Q172 — Task 10 — Cash Threshold Report value (Knowledge)
(172, 'fica_aml', 1,
 'Under the amended FIC Act regulations, a Cash Threshold Report (CTR) must be submitted to the FIC when a single cash transaction is at least:',
 'R24,999.99.',
 'R49,999.99 (i.e. R50,000.00 or more).',
 'R100,000.00.',
 'R150,000.00.',
 'B',
 'The CTR threshold was amended upwards from R24,999.99 to R49,999.99 — meaning a single cash transaction of R50,000.00 or more triggers a CTR. The aggregation requirement (the old CTRA) was removed as part of the same amendment, and the submission timeline was extended from two to three business days.',
 'FICA s28; FIC Regulations as amended'),

-- Q173 — Task 10 — STR vs SAR distinction (Application)
(173, 'fica_aml', 3,
 'A client walks into an FSP branch and proposes a R200,000 cash investment. After the representative requests source-of-funds documentation, the client becomes evasive, refuses to provide any documentation, and leaves without completing the transaction. The Key Individual reviewing the file forms a reasonable suspicion of money laundering. Which report must be filed?',
 'A Cash Threshold Report (CTR) within three business days.',
 'A Suspicious Transaction Report (STR) within 15 days.',
 'A Suspicious Activity Report (SAR) within 15 days.',
 'No report is necessary because the transaction never completed.',
 'C',
 'Where a transaction is PROPOSED or ATTEMPTED but not completed and suspicion exists, the institution must file a Suspicious ACTIVITY Report (SAR), not an STR (which covers completed suspicious transactions). The 15-day window from formation of suspicion applies. No CTR is triggered because no cash was actually received. Failing to report ("no report necessary") is a criminal offence.',
 'FICA s29(1)(b)'),

-- Q174 — Task 10 — Tipping-off prohibition (Comprehension / Negative)
(174, 'fica_aml', 2,
 'Which of the following is FALSE in respect of an FSP''s obligations after filing a Suspicious Transaction Report (STR) with the FIC?',
 'The FSP must continue to monitor the client''s ongoing transactions.',
 'The FSP must inform the client in writing that an STR has been filed, so that the client can exercise their right to respond.',
 'The FSP must keep records of the STR and its underlying analysis for at least five years.',
 'The FSP must restrict its disclosures so as not to compromise any FIC or law-enforcement investigation.',
 'B',
 'Section 29B of FICA criminalises "tipping off" — informing the client or any third party that a report has been or will be filed. The other three statements are all true: ongoing monitoring, five-year record retention, and protective non-disclosure are core post-STR obligations.',
 'FICA s29B; FICA s23'),

-- Q175 — Task 10 — Beneficial ownership 25% (Knowledge)
(175, 'fica_aml', 1,
 'When onboarding a juristic client, an FSP must identify and verify the ultimate beneficial owner(s). The statutory test for beneficial ownership is, at a minimum, any natural person who:',
 'Owns at least 5% of the share capital.',
 'Holds 25% or more of the voting rights or otherwise exercises effective control over the legal entity.',
 'Has been a director for more than five years.',
 'Is named on any director resolution.',
 'B',
 'The 25% voting-rights threshold (or otherwise exercising effective control) is the standard beneficial-ownership test under the FIC Act and aligns with FATF guidance. Lower thresholds, tenure-based tests, and director-list shortcuts all fail to capture the true control structure.',
 'FICA s21B; FIC Regulations'),

-- Q176 — Task 11 — Ombud monetary jurisdiction (Knowledge)
(176, 'fais_ombud', 1,
 'The FAIS Ombud''s monetary jurisdiction in respect of a single complaint is currently capped at:',
 'R250,000.',
 'R500,000.',
 'R800,000.',
 'There is no monetary cap.',
 'C',
 'The Ombud may award up to R800,000 per determination. Claims above this amount must be pursued in the courts unless the complainant agrees to abandon the excess. Award sums and the abandonment mechanism are common application-question anchors.',
 'FAIS Act s28; Ombud Rules'),

-- Q177 — Task 11 — Ombud rejection grounds (Roman numeral / Analysis)
(177, 'fais_ombud', 4,
 'Consider these grounds on which the FAIS Ombud is required to reject a complaint: i. The complainant has not first attempted to resolve the dispute through the FSP''s internal complaints process. ii. The complaint is frivolous, vexatious or lacks legal or factual foundation. iii. The complaint is submitted outside the three-year limitation period running from the date the complainant became aware (or ought to have become aware) of the occurrence. iv. The matter is already the subject of active court proceedings. v. The claim value exceeds the Ombud''s monetary jurisdiction or relates to entities not regulated under the FAIS Act. Which of these are recognised statutory rejection grounds?',
 'i, ii and iii only.',
 'i, ii, iv and v only.',
 'i, ii, iii, iv and v.',
 'iii and v only.',
 'C',
 'All five grounds — failure to exhaust internal channels, lack of merit, time-bar (three-year limitation), pending litigation, and out-of-jurisdiction — are recognised statutory rejection grounds under the Ombud Rules. This is one of the most common Roman-numeral questions on the live RE1.',
 'FAIS Act Part VI; Ombud Rules'),

-- Q178 — Task 8 — Record retention 5 years (Knowledge)
(178, 'general_code_of_conduct', 1,
 'Under the FAIS Act and General Code of Conduct, for how long must an FSP retain records of advice and the related transaction documentation?',
 '1 year from the date of the advice.',
 '3 years from the date of the advice.',
 '5 years from the date the relationship terminates or the transaction occurs.',
 'Indefinitely.',
 'C',
 'A five-year retention period applies under section 14 of the General Code (running from termination of the relationship or, for occasional transactions, from the date of the transaction). FICA also independently requires a five-year retention period from the same triggers; the two regimes overlap but have distinct triggering events.',
 'GCC s14; FICA s23; FAIS Act s18'),

-- Q179 — Task 7 — Compliance officer role swap (Application / Profit-vs-protection)
(179, 'compliance_officer', 3,
 'An FSP appoints its top-performing salesperson as the compliance officer while keeping the salesperson on full sales targets and a volume-linked commission. What is the principal concern with this arrangement?',
 'None — multi-tasking improves operational efficiency.',
 'The Compliance Officer''s objectivity is compromised by the sales target and volume-linked commission, breaching the requirements that the compliance function be independent and conflict-free.',
 'The Compliance Officer will earn too much under combined remuneration.',
 'It breaches the Medical Schemes Act because compliance officers cannot sell long-term insurance.',
 'B',
 'The compliance function must be sufficiently independent to monitor objectively. Combining the role with a personal sales target and volume-linked commission creates a textbook conflict of interest that compromises compliance reporting and is incompatible with section 17 of the FAIS Act and section 3A of the General Code. Option A is the "profit-vs-protection" trap.',
 'FAIS Act s17; GCC s3A; BN 194 of 2017'),

-- Q180 — Task 15 — Double-jeopardy: resignation + fraud (Application)
(180, 'representative_oversight', 3,
 'On 1 March, a representative resigns and joins another FSP. On 1 April, the former FSP''s internal audit uncovers conclusive evidence that the representative defrauded clients during their employment. By that point the representative is fully onboarded at the new FSP. What is the former FSP''s correct course of action?',
 'No action is required — the representative is now the new FSP''s problem.',
 'The former FSP must still commence a section 14 debarment within six months of the representative''s termination date, on the basis that resignation does not extinguish the duty to debar where grounds existed during employment.',
 'The former FSP should refer the matter to the FAIS Ombud, who will execute the debarment.',
 'The former FSP must reinstate the representative purely to fire and debar them lawfully.',
 'B',
 'A representative''s resignation does not extinguish the FSP''s duty to debar where grounds existed and became known within the section 14(5) window. The former FSP must commence the debarment, give notice and an opportunity to be heard, and (if it proceeds) submit the prescribed notification form within 5 days and the detailed grounds within 15 days. Option C confuses Ombud and FSP roles. Option D is operationally absurd.',
 'FAIS Act s14(4) & s14(5)');
