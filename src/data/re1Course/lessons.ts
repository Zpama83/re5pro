/**
 * RE1 Course — task-level teaching layer.
 *
 * One lesson per RE1 syllabus task (1–16). Each lesson supplies the
 * concept overview and the statutory references; the 5-question quiz is
 * fetched live from the existing `public.re1_questions` Supabase bank
 * using the lesson's topicTags[] (which map to that table's `topic_tag`
 * column). The quiz inherits the same cognitive distribution we use
 * elsewhere in the course (1×L1, 1×L2, 2×L3, 1×L4) where the bank has
 * enough questions in each cell.
 *
 * Task names and statutory references taken from the user-supplied RE1
 * framework (16-task syllabus) and confirmed against the Moonstone
 * preparation guide Appendix A.
 *
 * DRAFT — pending compliance-officer review before exam-grade use.
 */

export interface RE1Lesson {
  id: string;
  /** 1–16 — matches the RE1 task number */
  taskNumber: number;
  title: string;
  qcDescription: string;
  statutoryRefs: string[];
  coreConcepts: string[];
  /**
   * One or more existing `re1_questions.topic_tag` values whose questions
   * should be sampled for this lesson's quiz. Multiple tags = the lesson
   * draws from any of them.
   */
  topicTags: string[];
}

export const re1Lessons: RE1Lesson[] = [
  {
    id: "RE1-Task01",
    taskNumber: 1,
    title: "Task 1 — Understanding the FAIS Act as a Regulatory Framework",
    qcDescription:
      "Demonstrate understanding of the FAIS Act, the Twin Peaks model (FSCA and Prudential Authority), and how FAIS sits alongside the FSR Act and other financial sector legislation.",
    statutoryRefs: [
      "FAIS Act Preamble, s1 (definitions), s18",
      "FSR Act Chapter 1 (Twin Peaks framework)",
      "Code of Conduct for Administrative & Discretionary FSPs",
      "General Code of Conduct s12",
    ],
    coreConcepts: [
      "Twin Peaks: the FSR Act (2017, in force 1 April 2018) split prudential and conduct oversight. The Financial Sector Conduct Authority (FSCA) now holds the FAIS market-conduct mandate that the dissolved FSB used to hold.",
      "Subordinate legislation hierarchy: the General Code of Conduct (BN 80 of 2003), Board Notice 194 of 2017 (Fit and Proper), and various FSCA notices all sit under the FAIS Act.",
      "The 4 FSCA divisions a KI interacts with: Registration, Supervision, Compliance, and Enforcement — each with a distinct mandate.",
    ],
    topicTags: ["fsca_licensing", "general_code_of_conduct"],
  },
  {
    id: "RE1-Task02",
    taskNumber: 2,
    title: "Task 2 — Defining Financial Products and Financial Services",
    qcDescription:
      "Apply the statutory definitions of 'financial product', 'financial service', 'advice' and 'intermediary service', and identify which product categories an FSP requires authorisation for.",
    statutoryRefs: [
      "FAIS Act s1 (definitions of financial product, advice, intermediary service)",
      "FSCA FAIS Notice 86 of 2018",
      "Board Notice 194 of 2017 Annexure 3 Table 1",
    ],
    coreConcepts: [
      "'Advice' has a precise statutory definition — it excludes purely factual product information. The recommendation/guidance element is the test.",
      "'Intermediary service' covers acts performed on behalf of a client or product supplier as a result of which a client may enter into a transaction in respect of a financial product.",
      "Authorisation is granular: an FSP must be approved for each Category (I, II, IIA, III, IV) and each product sub-category it deals with.",
    ],
    topicTags: ["fsca_licensing", "needs_analysis"],
  },
  {
    id: "RE1-Task03",
    taskNumber: 3,
    title: "Task 3 — Maintaining the FSP Licence",
    qcDescription:
      "Understand what an FSP must do to maintain its licence: stay fit and proper, pay statutory levies, notify the Authority of structural changes within prescribed windows, and comply with ongoing licensing conditions.",
    statutoryRefs: [
      "FAIS Act s7, s8, s8(10), s9, s11",
      "Board Notice 194 of 2017 Chapter 5 (Operational ability)",
      "Financial Sector and Deposit Insurance Levies Act (Act 11 of 2022)",
    ],
    coreConcepts: [
      "An FSP must be authorised before rendering any financial service; section 7 makes this an offence if breached.",
      "Section 9 sets out the grounds on which a licence may be suspended, withdrawn or lapsed — including failure to remain fit and proper or material non-compliance.",
      "Structural or personnel changes (e.g. KI appointment / resignation, change of category) must be notified to the Authority within prescribed timeframes — commonly 15 days.",
    ],
    topicTags: ["fsca_licensing", "license_lapse_suspension", "regulatory_levies", "business_rescue"],
  },
  {
    id: "RE1-Task04",
    taskNumber: 4,
    title: "Task 4 — Operating as a Key Individual",
    qcDescription:
      "Understand the statutory role of a Key Individual: manage and oversee the rendering of financial services in approved categories, remain fit and proper continuously, and ensure representatives meet competency timelines.",
    statutoryRefs: [
      "FAIS Act s1 (definition of Key Individual), s8, s8(1), s17",
      "Board Notice 194 of 2017 ss 8, 9, 15, 17, 26",
      "Board Notice 122 of 2003",
    ],
    coreConcepts: [
      "KI approval is category- and subcategory-specific. A KI may not oversee categories for which they themselves are not approved.",
      "The KI's accountability is ultimate — management activities can be delegated, accountability cannot.",
      "Honesty, integrity and good standing apply continuously; sequestration or pending liquidation is an automatic disqualifier.",
    ],
    topicTags: ["key_individual_duties", "fit_and_proper", "dofa_timelines"],
  },
  {
    id: "RE1-Task05",
    taskNumber: 5,
    title: "Task 5 — Managing and Overseeing the FSP's Operational Ability",
    qcDescription:
      "Maintain the operational infrastructure that supports the rendering of financial services: bank accounts, professional indemnity / fidelity insurance, disaster recovery, outsourcing controls, and the representative register.",
    statutoryRefs: [
      "Board Notice 194 of 2017 Chapter 5",
      "General Code of Conduct s3, s10",
      "FAIS Act s17, s18",
    ],
    coreConcepts: [
      "The dedicated client account must at all times be sufficient to cover client liabilities; the FSP cannot dip into it for operational shortfalls.",
      "PI cover, fidelity insurance and disaster-recovery plans are not optional — they are conditions of continued authorisation.",
      "Outsourced functions remain the FSP's regulatory responsibility; service-level agreements must be in writing and reviewed.",
    ],
    topicTags: ["general_code_of_conduct", "fsca_licensing"],
  },
  {
    id: "RE1-Task06",
    taskNumber: 6,
    title: "Task 6 — Adhering to the Specific Codes of Conduct",
    qcDescription:
      "Apply the General Code of Conduct (BN 80 of 2003) and the Specific Codes that supplement it, including conflict-of-interest management, disclosure, advice process and complaints obligations.",
    statutoryRefs: [
      "General Code of Conduct (BN 80 of 2003), all sections",
      "Code for Administrative & Discretionary FSPs",
      "Board Notice 58 of 2010 (Conflict of Interest)",
    ],
    coreConcepts: [
      "Section 2 of the GCC creates parallel duties: act in the client's interests AND maintain the integrity of the industry.",
      "Conflict of interest hierarchy: avoid → mitigate → disclose. Disclosure alone is not sufficient.",
      "The Specific Codes (e.g. for Discretionary FSPs) add to — they do not replace — the General Code obligations.",
    ],
    topicTags: ["general_code_of_conduct", "disclosure_requirements", "needs_analysis"],
  },
  {
    id: "RE1-Task07",
    taskNumber: 7,
    title: "Task 7 — Managing the Compliance Function",
    qcDescription:
      "Understand when a Compliance Officer is required, the CO's statutory functions, and the KI's continuing accountability for compliance even where a CO is appointed.",
    statutoryRefs: [
      "FAIS Act s17",
      "General Code of Conduct s12",
      "FAIS Regulations Reg 5",
    ],
    coreConcepts: [
      "An approved Compliance Officer is required where the FSP has more than one KI or one or more representatives (subject to prescribed thresholds).",
      "The CO must be independent of the sales function — combining the role with personal sales targets creates a conflict that compromises monitoring.",
      "The KI's accountability for compliance is not extinguished by appointing a CO; the CO is a control, not a substitute.",
    ],
    topicTags: ["compliance_officer", "key_individual_duties"],
  },
  {
    id: "RE1-Task08",
    taskNumber: 8,
    title: "Task 8 — Regulated Record Keeping",
    qcDescription:
      "Comply with the parallel record-keeping regimes of the FAIS Act and the FIC Act: what records must be kept, in what form, and for how long.",
    statutoryRefs: [
      "FAIS Act s18, s19",
      "FICA s22, s23, s24",
      "General Code of Conduct s14",
    ],
    coreConcepts: [
      "Both FAIS and FICA prescribe a five-year minimum retention period — but the triggering events differ (date of record / end of relationship for FAIS; end of relationship / occasional-transaction date for FICA).",
      "Records must be retrievable, legible, and capable of being reproduced. Storage without retrievability fails the test.",
      "Records of advice (s9 of the GCC), conflict-of-interest registers, and complaint registers are all in scope.",
    ],
    topicTags: ["general_code_of_conduct", "fica_aml"],
  },
  {
    id: "RE1-Task09",
    taskNumber: 9,
    title: "Task 9 — Accounting and Auditing Requirements",
    qcDescription:
      "Comply with the FSP's accounting, audit and reporting obligations — including the duty to maintain financial soundness and to submit audited financial statements within prescribed timeframes.",
    statutoryRefs: [
      "FAIS Act s19",
      "General Code of Conduct s10",
      "Board Notice 194 of 2017 (financial soundness chapter)",
    ],
    coreConcepts: [
      "An FSP must remain financially sound: assets must continuously exceed liabilities and the prescribed liquidity / capital reserves must be maintained.",
      "Audited financial statements must be submitted to the Authority within the prescribed timeframes; failure is a section 9 ground for sanction.",
      "Early-warning systems for financial distress are a KI responsibility — they are not optional.",
    ],
    topicTags: ["general_code_of_conduct", "fsca_licensing"],
  },
  {
    id: "RE1-Task10",
    taskNumber: 10,
    title: "Task 10 — FIC Act and Money-Laundering Controls",
    qcDescription:
      "Manage the FSP's obligations under the FIC Act: implement an RMCP, conduct customer due diligence, screen for sanctions and PEPs, and file the prescribed reports (CTR, STR, SAR, TPR, IFTR) within the correct windows.",
    statutoryRefs: [
      "FIC Act (Act 38 of 2001) as amended — Schedules and ss 21, 22, 22A, 23, 28, 29, 29B, 43, 45C, 62",
      "Money Laundering and Terrorist Financing Control Regulations",
    ],
    coreConcepts: [
      "The Risk Management and Compliance Programme (RMCP) is mandatory, must be reviewed at least annually, and must take a Risk-Based Approach.",
      "Reporting windows: CTR = 3 business days, STR = 15 days, SAR = 15 days, TPR = immediate freeze, IFTR = 3 business days. The CTR threshold is R49,999.99 (i.e. R50,000 or more).",
      "Section 29B prohibits tipping off the client or any third party — a criminal offence that overrides any disclosure principle.",
    ],
    topicTags: ["fica_aml"],
  },
  {
    id: "RE1-Task11",
    taskNumber: 11,
    title: "Task 11 — Complaints to the FAIS Ombud",
    qcDescription:
      "Understand the role and jurisdiction of the FAIS Ombud, the internal complaints process that must precede Ombud referral, and the five statutory rejection grounds.",
    statutoryRefs: [
      "FAIS Act Part VI (ss 20 to 31)",
      "Ombud Council Rules for the Ombud for Financial Services Providers, 2024",
      "General Code of Conduct s17–s19",
    ],
    coreConcepts: [
      "Internal complaints process first: the FSP must be given a reasonable opportunity to resolve the matter (typically 6 weeks) before Ombud referral.",
      "The Ombud's monetary jurisdiction is capped at R800,000 per determination; larger claims fall to the courts.",
      "Five statutory rejection grounds: failure to exhaust internal channels, lack of merit, 3-year time-bar, pending litigation, out-of-jurisdiction.",
    ],
    topicTags: ["fais_ombud", "general_code_of_conduct"],
  },
  {
    id: "RE1-Task12",
    taskNumber: 12,
    title: "Task 12 — Defining the Role of the Representative",
    qcDescription:
      "Understand who is and is not a 'representative' under the FAIS Act, the fit-and-proper requirements that apply to representatives, and the limits of the representative's authority.",
    statutoryRefs: [
      "FAIS Act ss 13, 14",
      "Board Notice 194 of 2017",
      "FAIS Act s1 (definition of Representative)",
    ],
    coreConcepts: [
      "A representative is anyone who renders a financial service for or on behalf of the FSP — other than in a purely clerical or administrative capacity.",
      "Representatives must meet the same fit-and-proper pillars as the FSP itself (honesty/integrity, competence, CPD), and may only operate in approved categories.",
      "FSP liability under section 13: the FSP is jointly and severally liable for the conduct of its representatives acting within the course and scope of their mandate.",
    ],
    topicTags: ["representative_oversight", "fit_and_proper"],
  },
  {
    id: "RE1-Task13",
    taskNumber: 13,
    title: "Task 13 — Appointment of Representatives",
    qcDescription:
      "Manage the appointment of representatives: verify fit-and-proper status, complete the DOFA (Date of First Appointment) record, ensure category-specific approval, and update the central representative register.",
    statutoryRefs: [
      "FAIS Act s13",
      "Board Notice 194 of 2017 Chapter 3",
    ],
    coreConcepts: [
      "The DOFA (Date of First Appointment) is the anchor date from which competence and CPD timelines are measured.",
      "Competence has four milestones: hands-on experience, Class of Business training, regulatory exam (RE5), and recognised qualification.",
      "The representative register must be kept current and updated with the Authority within 15 days of changes.",
    ],
    topicTags: ["representative_oversight", "dofa_timelines", "fit_and_proper"],
  },
  {
    id: "RE1-Task14",
    taskNumber: 14,
    title: "Task 14 — Services Under Supervision",
    qcDescription:
      "Manage representatives operating under supervision in terms of FSCA FAIS Notice 86 of 2018: appoint a competent supervisor, document the supervision arrangement, and ensure the supervision status is disclosed to clients.",
    statutoryRefs: [
      "FSCA FAIS Notice 86 of 2018 (Exemption of Services under Supervision)",
      "Board Notice 194 of 2017",
    ],
    coreConcepts: [
      "Supervision allows a representative to render services before meeting full competence, provided a properly competent supervisor is appointed and accountable.",
      "The supervision arrangement must be documented in writing and reviewed; supervision status must be disclosed to clients.",
      "The competence clock keeps running — supervision is not a permanent shelter; the representative must still complete RE5, CoB and qualification milestones within the prescribed windows.",
    ],
    topicTags: ["dofa_timelines", "representative_oversight"],
  },
  {
    id: "RE1-Task15",
    taskNumber: 15,
    title: "Task 15 — Managing and Overseeing Representatives",
    qcDescription:
      "Ongoing oversight of the representative network: monitor conduct, ensure CPD is met within the cycle, track competency timelines, and act on misconduct or fit-and-proper breaches.",
    statutoryRefs: [
      "FAIS Act ss 13(2) and 13(3)",
      "Board Notice 194 of 2017 Chapter 3",
    ],
    coreConcepts: [
      "Monitoring is risk-based and continuous — not annual snapshots. CPD shortfalls, missed exam deadlines, and conduct breaches must trigger remediation.",
      "Where a representative's resignation precedes the FSP's discovery of misconduct, the FSP can still debar under section 14(5) within the 6-month post-termination window.",
      "Representative concentration patterns (e.g. heavy use of one product supplier) often signal conflict-of-interest mitigation failures the FSP must address.",
    ],
    topicTags: ["representative_oversight", "fit_and_proper"],
  },
  {
    id: "RE1-Task16",
    taskNumber: 16,
    title: "Task 16 — Debarment of Representatives",
    qcDescription:
      "Execute debarment of representatives who have materially breached the FAIS Act or no longer meet fit-and-proper requirements, applying the correct process, notifications, and post-debarment timelines.",
    statutoryRefs: [
      "FAIS Act s14",
      "FSR Act s153",
    ],
    coreConcepts: [
      "Two debarment pathways: section 14 (FSP debars its own / recent former representative) and FSR Act s153 (Authority debars any natural person who materially contravened a financial sector law).",
      "Section 14 process: written notice with grounds → reasonable opportunity to respond (typically one month) → decision → immediate removal from register on debarment → notify FSCA within 5 days → submit detailed grounds within 15 days.",
      "Reappointment: 12-month wait for honesty/integrity debarments; immediate reappointment possible for competence-only debarments once competence is achieved.",
    ],
    topicTags: ["debarment_s14"],
  },
];
