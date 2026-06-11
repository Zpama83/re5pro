/**
 * RE5 — coverage lessons for Tasks 1, 2, 3, 5, 6, 7, 8.
 *
 * The deep-dive lessons under `src/data/re5Task4/` cover Task 4 (Specific Codes
 * of Conduct) exhaustively across all 14 QCs. This file fills the rest of the
 * RE5 syllabus with one syllabus-anchored lesson per missing task — each with
 * a 5-question exam-grade quiz in the same cognitive distribution as the Task 4
 * lessons (1 × Knowledge / 1 × Comprehension / 2 × Application / 1 × Analysis,
 * with at least one negative-style, one Roman-numeral, and one scenario
 * question across the five).
 *
 * Statutory references mapped directly from the Moonstone "Preparation Guide
 * for Regulatory Examinations (RE 1 and RE 5)" — Appendix A, RE 5 section.
 *
 * DRAFT — pending compliance-officer review before exam-grade publication.
 */
import type { Lesson } from "@/data/re5Task4/types";

export const re5OtherTaskLessons: Lesson[] = [
  /* --------------------------------------------------------------------- */
  /*  Task 1 — FAIS Act as a regulatory framework                          */
  /* --------------------------------------------------------------------- */
  {
    id: "RE5-Task1",
    order: 50,
    title: "Task 1 — Understanding the FAIS Act as a Regulatory Framework",
    qcDescription:
      "Demonstrate understanding of the FAIS Act and subordinate legislation, the financial services environment, the products an FSP can deal with, and the role of the Compliance Officer.",
    statutoryRefs: [
      "FAIS Act s1 (definitions of advice, intermediary service, financial product, FSP, representative)",
      "FAIS Act s7(3), s17, s18",
      "FAIS Regulations Reg 5",
      "General Code of Conduct s4, s5, s7",
    ],
    youtubeId: null,
    coreConcepts: [
      "Distinguish the four core FAIS definitions a representative must internalise: 'advice', 'intermediary service', 'financial product', and 'representative'.",
      "Know which subordinate legislation lives alongside the FAIS Act — General Code of Conduct (BN 80 of 2003), Board Notice 194 of 2017, and the various FSCA notices.",
      "Understand the role and statutory function of the Compliance Officer under section 17 — and how that role is distinct from the Key Individual's oversight duty.",
    ],
    quiz: {
      questions: [
        {
          id: "re5-t1-q1",
          level: 1,
          format: "Knowledge",
          prompt:
            "Under the FAIS Act, 'advice' is defined to mean (in essence):",
          options: [
            {
              letter: "A",
              text:
                "Any recommendation, guidance or proposal of a financial nature furnished by any means to a client in respect of the purchase of, or investment in, a specific financial product.",
            },
            {
              letter: "B",
              text:
                "Only formal written recommendations signed by the representative and counter-signed by the client.",
            },
            {
              letter: "C",
              text:
                "Any commentary on the South African economy made in the course of a sales conversation.",
            },
            {
              letter: "D",
              text:
                "Only product recommendations made by Key Individuals, not by representatives.",
            },
          ],
          correct: "A",
          justification:
            "Section 1 of the FAIS Act defines 'advice' as any recommendation, guidance or proposal of a financial nature furnished by any means in respect of (or that may reasonably be expected to influence) the purchase of, or investment in, a specific financial product. The definition expressly excludes factual product information and procedural information that does not constitute a recommendation.",
          distractorAnalysis: {
            B: "Form requirements (writing, signatures) are not part of the definition — the substance of the communication is the test.",
            C: "General economic commentary, untethered to a specific financial product or recommendation, does not meet the definition.",
            D: "The definition applies to advice given by any provider or representative, not only KIs.",
          },
        },
        {
          id: "re5-t1-q2",
          level: 2,
          format: "Comprehension",
          prompt:
            "Which statement best captures the regulatory relationship between the FAIS Act and the General Code of Conduct (Board Notice 80 of 2003)?",
          options: [
            {
              letter: "A",
              text:
                "The General Code of Conduct supersedes the FAIS Act in case of conflict.",
            },
            {
              letter: "B",
              text:
                "The General Code of Conduct is subordinate legislation made under the FAIS Act, giving operational substance to the duties that section 16 of the Act says the Authority may prescribe.",
            },
            {
              letter: "C",
              text:
                "The General Code of Conduct applies only to product suppliers, not to FSPs.",
            },
            {
              letter: "D",
              text:
                "The General Code of Conduct is voluntary unless a client specifically opts in.",
            },
          ],
          correct: "B",
          justification:
            "The General Code of Conduct is subordinate legislation made under the FAIS Act. It operationalises the conduct duties the Act allows the Authority to prescribe and binds all FSPs and representatives.",
          distractorAnalysis: {
            A: "Primary legislation (the FAIS Act) prevails over subordinate legislation in case of conflict, not the other way round.",
            C: "The General Code binds FSPs and their representatives, not product suppliers per se.",
            D: "The Code is mandatory; it is not an opt-in framework.",
          },
        },
        {
          id: "re5-t1-q3",
          level: 3,
          format: "Scenario",
          prompt:
            "A representative answers a telephonic enquiry from a member of the public who asks 'What is a retirement annuity?'. The representative explains the product features factually and does not recommend any specific RA. Is this 'advice' under the FAIS Act?",
          options: [
            {
              letter: "A",
              text:
                "Yes — any discussion of a financial product is automatically advice.",
            },
            {
              letter: "B",
              text:
                "No — providing factual product information that does not amount to a recommendation in respect of a specific financial product is expressly excluded from the definition of 'advice'.",
            },
            {
              letter: "C",
              text:
                "Yes — telephonic conversations always count as advice regardless of content.",
            },
            {
              letter: "D",
              text:
                "No — only written communications can constitute advice.",
            },
          ],
          correct: "B",
          justification:
            "The definition of 'advice' in section 1 of the FAIS Act excludes factual information about a procedure, product or activity that does not constitute a recommendation, guidance or proposal of a financial nature in respect of a specific product. The representative must, however, take care that the factual answer does not slide into an implicit recommendation.",
          distractorAnalysis: {
            A: "Not every product discussion is advice — the recommendation element is required.",
            C: "Channel (phone vs writing) is not relevant; substance is.",
            D: "Advice can be oral or written; the channel does not change the analysis.",
          },
        },
        {
          id: "re5-t1-q4",
          level: 3,
          format: "Roman Numeral",
          prompt:
            "Which of the following are statutory functions of a Compliance Officer under section 17 of the FAIS Act and the related regulations?\n\ni. Monitor compliance with the FAIS Act by the FSP, its Key Individuals and its representatives.\nii. Submit compliance reports to the Authority at the prescribed intervals and in the prescribed form.\niii. Sign off on every individual financial-product sale before it can be executed.\niv. Report material irregularities to the Authority.",
          options: [
            { letter: "A", text: "i, ii and iv only." },
            { letter: "B", text: "i, ii, iii and iv." },
            { letter: "C", text: "ii and iii only." },
            { letter: "D", text: "i and iii only." },
          ],
          correct: "A",
          justification:
            "Section 17 and Regulation 5 of the FAIS Regulations give the Compliance Officer the monitoring, reporting and irregularity-flagging roles in i, ii and iv. The Compliance Officer does not transact business or sign off on individual sales (iii) — that is the role of the representative and the supervising Key Individual.",
          distractorAnalysis: {
            B: "Includes the fabricated per-sale sign-off duty.",
            C: "Omits the core monitoring duty and includes the fabricated one.",
            D: "Omits reporting and irregularity duties and includes the fabricated one.",
          },
        },
        {
          id: "re5-t1-q5",
          level: 4,
          format: "Analysis Negative",
          prompt:
            "Which of the following statements about the FAIS Act regulatory architecture is FALSE?",
          options: [
            {
              letter: "A",
              text:
                "Following the implementation of the Financial Sector Regulation Act on 1 April 2018, market-conduct oversight of FAIS FSPs sits with the Financial Sector Conduct Authority (the Authority).",
            },
            {
              letter: "B",
              text:
                "An FSP is liable jointly and severally with its representatives for conduct within the course and scope of the representative's mandate.",
            },
            {
              letter: "C",
              text:
                "The Financial Services Board (FSB) continues to administer the FAIS Act in parallel with the Authority.",
            },
            {
              letter: "D",
              text:
                "Subordinate legislation under the FAIS Act includes Board Notice 80 of 2003 (the General Code of Conduct) and Board Notice 194 of 2017 (Fit and Proper Requirements).",
            },
          ],
          correct: "C",
          justification:
            "The FSB was dissolved with the entry into force of the FSR Act on 1 April 2018. Its market-conduct mandate transferred to the Financial Sector Conduct Authority. The other three statements are true and reflect the current regulatory architecture.",
          distractorAnalysis: {
            A: "True — Twin Peaks moved market conduct to the FSCA.",
            B: "True — section 13 of the FAIS Act creates joint and several liability.",
            D: "True — both notices are core subordinate instruments under the Act.",
          },
        },
      ],
    },
  },

  /* --------------------------------------------------------------------- */
  /*  Task 2 — Contribute towards maintaining a FSP licence                */
  /* --------------------------------------------------------------------- */
  {
    id: "RE5-Task2",
    order: 51,
    title: "Task 2 — Contributing to Maintaining the FSP Licence",
    qcDescription:
      "Understand the requirements an FSP must meet to maintain its licence, the representative's role in that maintenance, undesirable practices, and the offences and reparation mechanisms under the FAIS Act.",
    statutoryRefs: [
      "FAIS Act s8, s9, s11, s13, s34, s36",
      "Board Notice 123 of 2009 s3",
      "FSCA Licensing Conditions",
    ],
    youtubeId: null,
    coreConcepts: [
      "The representative's day-to-day conduct contributes to (or threatens) the FSP's continued authorisation — there is no neutral position.",
      "The concept of 'undesirable business practices' under section 34 and the Authority's reparation powers under section 36.",
      "Grounds on which an FSP licence may be suspended, withdrawn or lapsed under sections 8 and 9.",
    ],
    quiz: {
      questions: [
        {
          id: "re5-t2-q1",
          level: 1,
          format: "Knowledge",
          prompt:
            "An authorised FSP must publicly display its licence:",
          options: [
            {
              letter: "A",
              text:
                "Only at the FSP's registered head office.",
            },
            {
              letter: "B",
              text:
                "At every business premises from which it conducts business, in a manner that is easily visible to clients.",
            },
            {
              letter: "C",
              text:
                "Only on its website, never in physical form.",
            },
            {
              letter: "D",
              text:
                "Only on request from a client during a sales meeting.",
            },
          ],
          correct: "B",
          justification:
            "Section 11 of the FAIS Act requires the FSP to display its licence at every place of business in a manner that is easily visible to clients. The duty is positive — the FSP cannot wait for a client request.",
          distractorAnalysis: {
            A: "Head-office-only display does not satisfy the section 11 requirement.",
            C: "Section 11 contemplates physical display at premises where clients are received.",
            D: "Display is a continuous obligation, not request-driven.",
          },
        },
        {
          id: "re5-t2-q2",
          level: 2,
          format: "Comprehension",
          prompt:
            "Under section 34 of the FAIS Act, an 'undesirable business practice' is best understood as:",
          options: [
            {
              letter: "A",
              text:
                "Any practice the Authority finds to be harmful to clients, the public, or the financial services industry, which the Authority may publish and prohibit by notice.",
            },
            {
              letter: "B",
              text:
                "A purely commercial practice that may be ignored if it generates profit.",
            },
            {
              letter: "C",
              text:
                "A breach that only attracts a criminal penalty, not regulatory action.",
            },
            {
              letter: "D",
              text:
                "A practice that becomes binding only after a court order.",
            },
          ],
          correct: "A",
          justification:
            "Section 34 empowers the Authority to declare, by notice, any business practice as undesirable where the practice is or is likely to be harmful to clients, the public or the integrity of the financial services industry. The reparation regime under section 36 then applies.",
          distractorAnalysis: {
            B: "Profitability has no bearing on whether a practice is undesirable.",
            C: "Undesirable practices invite administrative action; criminal liability is a parallel consequence in some cases, not the only one.",
            D: "The Authority's notice has legal force in itself; no court order is required.",
          },
        },
        {
          id: "re5-t2-q3",
          level: 3,
          format: "Scenario",
          prompt:
            "A representative becomes aware that their FSP has not paid the latest statutory levy to the Authority and is at risk of having its licence suspended. The representative is asked by a client to bind a long-term insurance policy that day. What is the most compliant course of action?",
          options: [
            {
              letter: "A",
              text:
                "Bind the policy quickly before the suspension takes effect.",
            },
            {
              letter: "B",
              text:
                "Escalate the levy issue internally without delay, and decline to bind further business if the representative is aware that the FSP's authorisation is at imminent risk — rendering financial services without a valid licence is an offence under the FAIS Act.",
            },
            {
              letter: "C",
              text:
                "Bind the policy and reverse it later if the suspension takes effect.",
            },
            {
              letter: "D",
              text:
                "Refer the client directly to a competitor.",
            },
          ],
          correct: "B",
          justification:
            "Rendering a financial service while the FSP is unauthorised is an offence under the FAIS Act. The representative must escalate the levy/authorisation issue and decline to bind business where the authorisation is at imminent risk. The duty to act in the client's interests and protect the integrity of the industry overrides commercial urgency.",
          distractorAnalysis: {
            A: "Speeding through business under a known authorisation risk compounds the breach.",
            C: "Reversal post-event does not cure an unlawful service rendering.",
            D: "Silent referral to a competitor is not the appropriate remedy and may further harm the client.",
          },
        },
        {
          id: "re5-t2-q4",
          level: 3,
          format: "Roman Numeral",
          prompt:
            "Which of the following are grounds on which the Authority may suspend or withdraw an FSP's licence under section 9 of the FAIS Act?\n\ni. The FSP has failed to comply with a directive of the Authority.\nii. The FSP no longer meets the fit-and-proper requirements.\niii. The FSP has materially contravened a provision of the FAIS Act or another financial sector law.\niv. The FSP has a lower profit margin than its competitors.",
          options: [
            { letter: "A", text: "i, ii and iii only." },
            { letter: "B", text: "i and iv only." },
            { letter: "C", text: "ii, iii and iv only." },
            { letter: "D", text: "i, ii, iii and iv." },
          ],
          correct: "A",
          justification:
            "Section 9 grounds include non-compliance with directives, failure to remain fit and proper, and material contravention of the FAIS Act or other financial sector law. Profitability (iv) is not a regulatory ground for suspension or withdrawal.",
          distractorAnalysis: {
            B: "Wrongly includes the profitability ground and omits two real grounds.",
            C: "Includes the profitability ground.",
            D: "Includes the profitability ground.",
          },
        },
        {
          id: "re5-t2-q5",
          level: 4,
          format: "Analysis",
          prompt:
            "An FSP's representative network has been systematically using outdated disclosure templates that fail to capture mandatory fee information. The Authority issues a directive under section 34 requiring remediation within 60 days. The FSP ignores the directive. The most accurate description of the regulatory exposure is:",
          options: [
            {
              letter: "A",
              text:
                "No exposure — directives are advisory.",
            },
            {
              letter: "B",
              text:
                "The FSP faces administrative penalties, possible suspension or withdrawal of its licence under section 9, and individual exposure for the Key Individual under section 8 of the FAIS Act. Non-compliance with a directive is itself a separate regulatory breach.",
            },
            {
              letter: "C",
              text:
                "The FAIS Ombud will impose a fine of up to R10 million.",
            },
            {
              letter: "D",
              text:
                "The Authority must obtain a High Court order before any sanction can flow.",
            },
          ],
          correct: "B",
          justification:
            "Directives under section 34 are binding. Failure to comply is itself an offence and triggers parallel administrative action — penalties, possible licence suspension or withdrawal under section 9, and individual exposure for the responsible Key Individual.",
          distractorAnalysis: {
            A: "Directives are binding, not advisory.",
            C: "The FAIS Ombud handles client disputes; administrative penalties for non-compliance with a directive sit with the Authority.",
            D: "The Authority's administrative powers do not require prior court intervention.",
          },
        },
      ],
    },
  },

  /* --------------------------------------------------------------------- */
  /*  Task 3 — Role of the Key Individual (from the rep's perspective)     */
  /* --------------------------------------------------------------------- */
  {
    id: "RE5-Task3",
    order: 52,
    title: "Task 3 — The Role of the Key Individual",
    qcDescription:
      "Understand the roles and responsibilities of Key Individuals, the regulated management and oversight responsibilities they hold, and the implications for a representative when a KI no longer meets fit-and-proper requirements.",
    statutoryRefs: [
      "FAIS Act s1 (definition of Key Individual)",
      "FAIS Act s8(4), s13, s14, s18, s19(2)",
      "Board Notice 194 of 2017 — Sections 8, 12, 32",
      "FSCA FAIS Notice 86 of 2018 — Condition 4(1)(f)",
    ],
    youtubeId: null,
    coreConcepts: [
      "A Key Individual is the natural person responsible for managing and overseeing the FSP's rendering of financial services in the categories for which the KI is approved.",
      "A representative may only operate under a KI who is approved for the same category and subcategory.",
      "If a KI no longer meets fit-and-proper requirements, the representative's authority to render financial services in those categories is at immediate risk.",
    ],
    quiz: {
      questions: [
        {
          id: "re5-t3-q1",
          level: 1,
          format: "Knowledge",
          prompt:
            "A Key Individual may manage and oversee the rendering of financial services:",
          options: [
            {
              letter: "A",
              text:
                "In any category and subcategory, regardless of the KI's own approval status.",
            },
            {
              letter: "B",
              text:
                "Only in the categories and subcategories for which the KI has been specifically approved by the Authority.",
            },
            {
              letter: "C",
              text:
                "Only after the representative has signed an indemnity.",
            },
            {
              letter: "D",
              text:
                "Only if the KI is also the FSP's sole director.",
            },
          ],
          correct: "B",
          justification:
            "The KI's management and oversight authority is limited to the categories and subcategories for which the KI has been individually approved by the Authority. A representative cannot lawfully be supervised in a subcategory in which the KI has no approval.",
          distractorAnalysis: {
            A: "Approval is granular by category and subcategory.",
            C: "Representative indemnities do not extend the KI's regulatory scope.",
            D: "Directorship is irrelevant to the KI approval scope.",
          },
        },
        {
          id: "re5-t3-q2",
          level: 2,
          format: "Negative",
          prompt:
            "Which of the following is FALSE regarding the role of a Key Individual?",
          options: [
            {
              letter: "A",
              text:
                "A Key Individual must remain fit and proper on a continuous basis to retain approval.",
            },
            {
              letter: "B",
              text:
                "A Key Individual may delegate certain management activities, but cannot delegate ultimate regulatory accountability.",
            },
            {
              letter: "C",
              text:
                "A Key Individual is automatically also a representative of the FSP without any separate appointment.",
            },
            {
              letter: "D",
              text:
                "A Key Individual is approved category-by-category and subcategory-by-subcategory.",
            },
          ],
          correct: "C",
          justification:
            "Key Individual and representative are distinct roles under the FAIS Act. A person may hold both, but the appointments are separate; KI status does not automatically confer representative status. The other three statements are correct.",
          distractorAnalysis: {
            A: "True — fit-and-proper requirements are continuous.",
            B: "True — delegation of activities is allowed; delegation of accountability is not.",
            D: "True — approval is granular.",
          },
        },
        {
          id: "re5-t3-q3",
          level: 3,
          format: "Scenario",
          prompt:
            "A representative receives an internal notice that the Key Individual responsible for their category has been provisionally suspended pending an investigation into honesty and integrity. The representative has client meetings booked for the rest of the week. What is the most legally sound position?",
          options: [
            {
              letter: "A",
              text:
                "Continue with all meetings as normal — internal investigations do not affect operations.",
            },
            {
              letter: "B",
              text:
                "Pause new financial-service rendering in the affected category, escalate immediately to the FSP for clarity on supervision arrangements (interim KI or alternative oversight), and document the position. The representative's authority depends on having a valid, approved KI for the category.",
            },
            {
              letter: "C",
              text:
                "Suspend themselves immediately and refuse to attend the office.",
            },
            {
              letter: "D",
              text:
                "Refer the matter directly to the FAIS Ombud.",
            },
          ],
          correct: "B",
          justification:
            "A representative may only render services under an approved Key Individual for the relevant category. If the KI's authority is in question, the FSP must clarify the supervision arrangement (e.g. an interim KI). The representative's prudent position is to pause new business in the affected category until clarity is provided.",
          distractorAnalysis: {
            A: "Continuing as normal exposes both the FSP and the representative to operating without proper oversight.",
            C: "Self-suspension without escalation is over-correction and not the prescribed response.",
            D: "The FAIS Ombud has no role in internal supervision issues.",
          },
        },
        {
          id: "re5-t3-q4",
          level: 3,
          format: "Roman Numeral",
          prompt:
            "Which of the following are statutory or regulated responsibilities of a Key Individual?\n\ni. Ensure that representatives operate within their authorised categories and subcategories.\nii. Ensure representatives meet competency timelines (RE5, Class of Business, product-specific training).\niii. Personally sell every product the FSP offers each month.\niv. Maintain and update the representative register.",
          options: [
            { letter: "A", text: "i, ii and iv only." },
            { letter: "B", text: "i, iii and iv only." },
            { letter: "C", text: "ii and iii only." },
            { letter: "D", text: "i, ii, iii and iv." },
          ],
          correct: "A",
          justification:
            "Items i, ii and iv are core regulated KI responsibilities under section 8 of the FAIS Act and Board Notice 194 of 2017. Personally selling every product (iii) has no basis in law and would in fact conflict with the oversight role.",
          distractorAnalysis: {
            B: "Includes the fabricated personal-sales duty.",
            C: "Omits two genuine duties and includes the fabricated one.",
            D: "Includes the fabricated duty.",
          },
        },
        {
          id: "re5-t3-q5",
          level: 4,
          format: "Analysis Scenario",
          prompt:
            "The sole Key Individual at a small FSP resigns with immediate effect. The FSP has 12 representatives writing new business across long-term insurance and short-term insurance subcategories. The most accurate analysis is:",
          options: [
            {
              letter: "A",
              text:
                "Operations continue unaffected because representatives can self-supervise for a reasonable period.",
            },
            {
              letter: "B",
              text:
                "The FSP cannot lawfully continue rendering financial services in categories for which it has no approved KI. The FSP must immediately notify the Authority of the change, arrange an interim approved KI (or apply for approval), and pause representative activity in the affected categories until proper oversight is in place.",
            },
            {
              letter: "C",
              text:
                "The Compliance Officer automatically takes over as Key Individual.",
            },
            {
              letter: "D",
              text:
                "The Authority appoints a replacement KI on behalf of the FSP within 24 hours.",
            },
          ],
          correct: "B",
          justification:
            "An FSP must at all times have an approved Key Individual for each category in which it renders financial services. A KI vacancy must be notified to the Authority and remedied; representative activity in the affected categories cannot lawfully continue without proper oversight. The Compliance Officer role is distinct, and the Authority does not unilaterally appoint KIs.",
          distractorAnalysis: {
            A: "Self-supervision is not recognised under the FAIS Act.",
            C: "Compliance Officer and KI are distinct roles.",
            D: "The Authority does not unilaterally appoint KIs.",
          },
        },
      ],
    },
  },

  /* --------------------------------------------------------------------- */
  /*  Task 5 — Comply with regulated record-keeping requirements           */
  /* --------------------------------------------------------------------- */
  {
    id: "RE5-Task5",
    order: 53,
    title: "Task 5 — Regulated Record-Keeping Requirements",
    qcDescription:
      "Understand the record-keeping obligations on a representative under both the FAIS Act and the FIC Act, and how to correctly capture, retrieve, and preserve those records.",
    statutoryRefs: [
      "FAIS Act s13(3) & (4), s18",
      "FICA s22, s23, s24, s29(1)",
      "General Code of Conduct s3, s3(2)",
    ],
    youtubeId: null,
    coreConcepts: [
      "The default minimum retention period under both the FAIS Act and the FIC Act is five years, but the triggering events differ — FAIS counts from the date of the record or end of the relationship; FICA from the end of the relationship or the date of an occasional transaction.",
      "Records must be retrievable, legible, and capable of being reproduced — so retention is not just storage, it is searchable storage.",
      "Records of advice, fee disclosures, and call recordings (where verbal disclosures formed part of the service) are all in scope.",
    ],
    quiz: {
      questions: [
        {
          id: "re5-t5-q1",
          level: 1,
          format: "Knowledge",
          prompt:
            "The minimum retention period for records of advice and related client communications under the FAIS Act and the General Code of Conduct is:",
          options: [
            { letter: "A", text: "1 year." },
            { letter: "B", text: "3 years." },
            { letter: "C", text: "5 years." },
            { letter: "D", text: "Records may be discarded after the policy lapses." },
          ],
          correct: "C",
          justification:
            "Section 18 of the FAIS Act read with section 14 of the General Code requires a minimum retention period of five years from the date the record was created or from termination of the relationship, whichever is later. FICA imposes a parallel five-year duty.",
          distractorAnalysis: {
            A: "One year is well below the statutory minimum.",
            B: "Three years is below the statutory minimum.",
            D: "Policy lapse does not extinguish retention duties.",
          },
        },
        {
          id: "re5-t5-q2",
          level: 2,
          format: "Comprehension",
          prompt:
            "Which statement best captures the relationship between the FAIS Act and FIC Act record-keeping regimes?",
          options: [
            {
              letter: "A",
              text:
                "Only the FAIS Act applies — FICA records are optional.",
            },
            {
              letter: "B",
              text:
                "Both regimes apply in parallel, both prescribe a five-year minimum retention period, but their triggering events differ — and the FSP must satisfy both.",
            },
            {
              letter: "C",
              text:
                "Once a record meets the FICA requirement, it can be deleted under FAIS.",
            },
            {
              letter: "D",
              text:
                "FICA records may be kept in a separate, inaccessible archive.",
            },
          ],
          correct: "B",
          justification:
            "FAIS and FICA impose distinct but overlapping record-keeping duties. Both prescribe a five-year minimum, but their triggers differ (FAIS — date of record / end of relationship; FICA — end of relationship or date of occasional transaction). The FSP must satisfy both.",
          distractorAnalysis: {
            A: "Both regimes apply.",
            C: "FICA compliance does not extinguish FAIS retention.",
            D: "FICA records must remain accessible for inspection.",
          },
        },
        {
          id: "re5-t5-q3",
          level: 3,
          format: "Scenario",
          prompt:
            "A representative concludes a long-term insurance sale on 10 January 2026. The client cancels the policy on 1 March 2027. For how long must the FSP retain the record of advice and related documentation?",
          options: [
            {
              letter: "A",
              text:
                "Until 10 January 2031 (5 years from the date of advice).",
            },
            {
              letter: "B",
              text:
                "Until 1 March 2032 (5 years from the date the relationship terminated) — or longer if the FAIS / FIC five-year window from the latest triggering event extends past that date.",
            },
            {
              letter: "C",
              text:
                "Records can be destroyed once the policy is cancelled.",
            },
            {
              letter: "D",
              text:
                "Records can be destroyed three months after cancellation.",
            },
          ],
          correct: "B",
          justification:
            "Section 14 of the General Code reckons the five-year period from termination of the relationship (or other relevant triggering event), so 1 March 2027 + 5 years = 1 March 2032. The conservative practice is to retain for the longest of the applicable windows.",
          distractorAnalysis: {
            A: "Counts from the date of advice, not from the relationship end.",
            C: "Cancellation does not extinguish retention duties.",
            D: "There is no three-month destruction rule.",
          },
        },
        {
          id: "re5-t5-q4",
          level: 3,
          format: "Roman Numeral",
          prompt:
            "Which of the following are recognised record-keeping requirements for a representative?\n\ni. Records must be kept in a manner that allows them to be readily retrieved, inspected, and reproduced.\nii. Call recordings, where verbal disclosures were made, must be securely stored.\niii. Records may be permanently deleted whenever office storage is full.\niv. Records must be retained for at least five years from the relevant triggering event.",
          options: [
            { letter: "A", text: "i, ii and iv only." },
            { letter: "B", text: "i and iii only." },
            { letter: "C", text: "ii, iii and iv only." },
            { letter: "D", text: "i, ii, iii and iv." },
          ],
          correct: "A",
          justification:
            "Items i, ii and iv are statutory record-keeping obligations. Item iii is unlawful — storage capacity is the FSP's operational problem and never a justification for early destruction of statutory records.",
          distractorAnalysis: {
            B: "Includes the unlawful destruction step.",
            C: "Omits the retrievability requirement and includes the unlawful destruction step.",
            D: "Includes the unlawful destruction step.",
          },
        },
        {
          id: "re5-t5-q5",
          level: 4,
          format: "Analysis",
          prompt:
            "An on-site inspection finds that an FSP has retained advice records on a legacy hard drive that the FSP is no longer able to read. The records still exist physically but are not retrievable. The most accurate analysis is:",
          options: [
            {
              letter: "A",
              text:
                "Compliant — physical existence of the records satisfies section 14.",
            },
            {
              letter: "B",
              text:
                "Non-compliant — record-keeping duties require records to be both retained AND retrievable, legible, and capable of being reproduced. Unreadable records are treated, for compliance purposes, as not retained.",
            },
            {
              letter: "C",
              text:
                "Compliant if the FSP commits to recover the records within five years.",
            },
            {
              letter: "D",
              text:
                "Compliant — the Authority cannot impose a sanction for technological obsolescence.",
            },
          ],
          correct: "B",
          justification:
            "Section 14 of the General Code requires records to be 'readily retrievable, legible and capable of being reproduced'. Unreadable records do not satisfy the duty and expose the FSP to administrative action regardless of whether the records physically still exist.",
          distractorAnalysis: {
            A: "Physical existence without retrievability fails the statutory test.",
            C: "Future-recovery promises do not cure a present breach.",
            D: "Technological obsolescence is the FSP's planning failure; the Authority can and does sanction it.",
          },
        },
      ],
    },
  },

  /* --------------------------------------------------------------------- */
  /*  Task 6 — FIC Act / AML compliance                                    */
  /* --------------------------------------------------------------------- */
  {
    id: "RE5-Task6",
    order: 54,
    title:
      "Task 6 — FIC Act and Money-Laundering / Terrorist-Financing Controls",
    qcDescription:
      "Understand the FIC Act requirements that apply to a representative — customer due diligence, beneficial-ownership identification, the reporting streams (CTR, STR, SAR, TPR, IFTR), and the section 29B prohibition on tipping off.",
    statutoryRefs: [
      "FIC Act s21, s22, s22A, s23, s28, s29, s29B, s43, s45C, s62",
      "Money Laundering and Terrorist Financing Control Regulations Chapter 4",
      "Board Notice 194 of 2017 s37(2)(b)",
    ],
    youtubeId: null,
    coreConcepts: [
      "Customer Due Diligence: verify identity of every client, identify ultimate beneficial owners (25% voting / effective control test), and apply enhanced due diligence to higher-risk relationships.",
      "Reporting streams: CTR (cash R50k+ within 3 business days), STR (suspicious completed transactions within 15 days), SAR (suspicious attempted / aborted transactions within 15 days), TPR (immediate freeze on TFS-list matches), IFTR (cross-border R20k+ within 3 business days).",
      "Section 29B — tipping off is a criminal offence. Never inform the client or a third party that a report has been filed.",
    ],
    quiz: {
      questions: [
        {
          id: "re5-t6-q1",
          level: 1,
          format: "Knowledge",
          prompt:
            "A Cash Threshold Report (CTR) must be filed with the FIC when a single cash transaction is at least:",
          options: [
            { letter: "A", text: "R10,000." },
            { letter: "B", text: "R24,999.99." },
            { letter: "C", text: "R49,999.99 (i.e. R50,000 or more)." },
            { letter: "D", text: "R100,000." },
          ],
          correct: "C",
          justification:
            "The CTR threshold was amended upwards from R24,999.99 to R49,999.99 — a CTR is triggered by a single cash transaction of R50,000 or more, and must be filed within three business days. The aggregation requirement (the old CTRA) was removed in the same amendment.",
          distractorAnalysis: {
            A: "R10,000 has no statutory basis as the CTR threshold.",
            B: "R24,999.99 is the previous (superseded) threshold.",
            D: "R100,000 is well above the threshold.",
          },
        },
        {
          id: "re5-t6-q2",
          level: 2,
          format: "Negative",
          prompt:
            "Which of the following statements is FALSE regarding section 29B of the FIC Act?",
          options: [
            {
              letter: "A",
              text:
                "It is a criminal offence to inform a client that a Suspicious Transaction Report has been or will be filed.",
            },
            {
              letter: "B",
              text:
                "The prohibition extends to informing any third party — not only the client.",
            },
            {
              letter: "C",
              text:
                "An FSP may inform the client of an STR if doing so will preserve the FSP's commercial relationship.",
            },
            {
              letter: "D",
              text:
                "Tipping off may attract a criminal sanction in addition to administrative penalties.",
            },
          ],
          correct: "C",
          justification:
            "Section 29B is an absolute prohibition. There is no commercial-relationship exception. Disclosing the existence of an STR/SAR to the client or any third party is a criminal offence, and FICA's prohibition overrides the General Code's disclosure principles.",
          distractorAnalysis: {
            A: "True — tipping off is criminalised.",
            B: "True — the prohibition extends beyond the client.",
            D: "True — both criminal and administrative consequences apply.",
          },
        },
        {
          id: "re5-t6-q3",
          level: 3,
          format: "Scenario",
          prompt:
            "A client wishes to invest R200,000 in cash. After being asked for source-of-funds documentation, the client becomes evasive, refuses to provide anything, and walks out without completing the transaction. The representative forms a reasonable suspicion of money laundering. What is the correct report?",
          options: [
            { letter: "A", text: "A Cash Threshold Report (CTR) within 3 business days." },
            { letter: "B", text: "A Suspicious Activity Report (SAR) within 15 days." },
            { letter: "C", text: "A Suspicious Transaction Report (STR) within 15 days." },
            { letter: "D", text: "No report is required because nothing was paid." },
          ],
          correct: "B",
          justification:
            "Where a transaction is PROPOSED or ATTEMPTED but not completed and suspicion exists, the institution must file a Suspicious ACTIVITY Report (SAR) within 15 days of forming the suspicion. An STR covers completed suspicious transactions; a CTR requires the cash to actually have been received.",
          distractorAnalysis: {
            A: "No cash was actually received, so no CTR is triggered.",
            C: "STRs cover completed transactions; the attempt was aborted.",
            D: "Failing to report a suspected attempt is itself a criminal offence.",
          },
        },
        {
          id: "re5-t6-q4",
          level: 3,
          format: "Roman Numeral",
          prompt:
            "Which of the following are required as part of Customer Due Diligence (CDD) on a juristic client?\n\ni. Identify and verify the juristic person itself (name, registration, address).\nii. Identify and verify the ultimate beneficial owner(s) — natural persons holding 25% or more of the voting rights or otherwise exercising effective control.\niii. Screen the client against targeted financial sanctions (TFS) lists.\niv. Apply Enhanced Due Diligence (EDD) on confirmed Politically Exposed Persons (PEPs).",
          options: [
            { letter: "A", text: "i, ii and iii only." },
            { letter: "B", text: "i, ii, iii and iv." },
            { letter: "C", text: "i and iii only." },
            { letter: "D", text: "ii and iv only." },
          ],
          correct: "B",
          justification:
            "All four items are core CDD requirements under FICA and the Money Laundering and Terrorist Financing Control Regulations. Juristic identification, 25% beneficial-ownership test, TFS screening, and EDD on PEPs together form the basic CDD/EDD framework.",
          distractorAnalysis: {
            A: "Omits the PEP EDD requirement.",
            C: "Omits beneficial ownership and EDD.",
            D: "Omits juristic identification and TFS screening.",
          },
        },
        {
          id: "re5-t6-q5",
          level: 4,
          format: "Analysis",
          prompt:
            "During onboarding screening, a client's name returns an exact match on the United Nations Security Council targeted financial sanctions (TFS) list. The most accurate course of action is:",
          options: [
            {
              letter: "A",
              text:
                "Ignore the match — UN lists are advisory only.",
            },
            {
              letter: "B",
              text:
                "Immediately freeze any related assets and proposed transactions, and file a Terrorist Property Report (TPR) with the FIC. Do not tip off the client. Continue to monitor; do not return funds without authority approval.",
            },
            {
              letter: "C",
              text:
                "Politely inform the client that they appear on a sanctions list so they can contest it.",
            },
            {
              letter: "D",
              text:
                "Refund any deposit immediately and close the relationship without further action.",
            },
          ],
          correct: "B",
          justification:
            "A confirmed TFS-list match triggers immediate freezing of related assets, a Terrorist Property Report to the FIC, and continued monitoring — all without tipping off the client (section 29B). Funds cannot be returned without authority approval, and ignoring the match would itself be a serious offence.",
          distractorAnalysis: {
            A: "UN TFS lists are binding under FICA — not advisory.",
            C: "Tipping off is a criminal offence.",
            D: "Returning funds may amount to dealing with terrorist property; it must not be done without authority direction.",
          },
        },
      ],
    },
  },

  /* --------------------------------------------------------------------- */
  /*  Task 7 — Dealing with complaints submitted to the FAIS Ombud         */
  /* --------------------------------------------------------------------- */
  {
    id: "RE5-Task7",
    order: 55,
    title: "Task 7 — Dealing with Complaints to the FAIS Ombud",
    qcDescription:
      "Understand the role and authority of the Ombud for FSPs, the internal complaints process that must precede Ombud referral, and the statutory rejection grounds and timelines that govern Ombud jurisdiction.",
    statutoryRefs: [
      "FAIS Act s1 (definition of complaint), s20, s27, s28, s31",
      "Ombud Council Rules for the Ombud for Financial Services Providers, 2024",
      "General Code of Conduct s17–19",
    ],
    youtubeId: null,
    coreConcepts: [
      "The Ombud is independent, impartial and must resolve complaints informally, economically and expeditiously — but only after the client has first exhausted the FSP's internal complaints process.",
      "The Ombud's monetary jurisdiction is capped at R800,000 per determination; larger claims fall to the courts.",
      "Recognised rejection grounds include: failure to exhaust internal channels, lack of merit, three-year limitation, pending litigation, and out-of-jurisdiction claims.",
    ],
    quiz: {
      questions: [
        {
          id: "re5-t7-q1",
          level: 1,
          format: "Knowledge",
          prompt:
            "The monetary jurisdiction of the FAIS Ombud in respect of a single determination is currently capped at:",
          options: [
            { letter: "A", text: "R250,000." },
            { letter: "B", text: "R500,000." },
            { letter: "C", text: "R800,000." },
            { letter: "D", text: "There is no cap." },
          ],
          correct: "C",
          justification:
            "Section 28 of the FAIS Act and the Ombud Rules set the monetary jurisdiction at R800,000 per determination. Claims above this amount must be pursued in the courts unless the complainant elects to abandon the excess.",
          distractorAnalysis: {
            A: "Below the statutory cap.",
            B: "Below the statutory cap.",
            D: "The jurisdiction is capped — not unlimited.",
          },
        },
        {
          id: "re5-t7-q2",
          level: 2,
          format: "Comprehension",
          prompt:
            "When a client lodges a complaint directly with the FAIS Ombud without first using the FSP's internal complaints process, the Ombud must:",
          options: [
            {
              letter: "A",
              text:
                "Investigate the complaint anyway because consumer protection requires the Ombud to step in.",
            },
            {
              letter: "B",
              text:
                "Reject (or decline to investigate) the complaint, on the basis that the client must first afford the FSP a reasonable opportunity to resolve the matter internally.",
            },
            {
              letter: "C",
              text:
                "Refer the complaint to the FSCA Enforcement department for licence sanctions.",
            },
            {
              letter: "D",
              text:
                "Hold the complaint in abeyance for six months pending settlement.",
            },
          ],
          correct: "B",
          justification:
            "Under the Ombud Rules, the FSP must first be afforded a reasonable opportunity to resolve the complaint internally. Where that step has been skipped, the Ombud declines/rejects at the intake stage.",
          distractorAnalysis: {
            A: "Bypassing the internal process is not permitted by the Ombud's own rules.",
            C: "Lodging a complaint is not itself a licence-suspension trigger.",
            D: "There is no abeyance mechanism at the intake stage.",
          },
        },
        {
          id: "re5-t7-q3",
          level: 3,
          format: "Scenario",
          prompt:
            "An FSP receives a written complaint on 1 March 2026. By 1 April 2026 (4 weeks later) it has not resolved the matter. The client wishes to escalate. What is the correct position?",
          options: [
            {
              letter: "A",
              text:
                "The client must wait the full 6 months before any escalation.",
            },
            {
              letter: "B",
              text:
                "Once the FSP has had a reasonable opportunity to resolve the complaint internally (typically 6 weeks under the General Code), the client may refer the matter to the FAIS Ombud — the 4-week mark is short of that benchmark, so the client should typically allow the full internal window first.",
            },
            {
              letter: "C",
              text:
                "The client may escalate to the High Court only.",
            },
            {
              letter: "D",
              text:
                "The Ombud has no jurisdiction over short-term insurance complaints.",
            },
          ],
          correct: "B",
          justification:
            "The General Code allows the FSP a reasonable opportunity to resolve (typically six weeks). Once that window has lapsed without resolution, the client may refer the matter to the Ombud. At four weeks the internal process is still within the reasonable window.",
          distractorAnalysis: {
            A: "Six months is the post-rejection referral window, not a pre-referral wait.",
            C: "High Court is one option but not the only one; the Ombud is the low-barrier pathway.",
            D: "The Ombud's jurisdiction covers financial services rendered under the FAIS Act, including short-term insurance.",
          },
        },
        {
          id: "re5-t7-q4",
          level: 3,
          format: "Roman Numeral",
          prompt:
            "Which of the following are recognised statutory rejection grounds the FAIS Ombud may apply to a complaint?\n\ni. The complainant has not first attempted to resolve the dispute through the FSP's internal complaints process.\nii. The complaint is frivolous, vexatious or lacks merit.\niii. The matter is submitted outside the three-year limitation period from when the complainant became aware (or ought to have become aware) of the occurrence.\niv. The complaint relates to a matter already subject to active court proceedings or exceeds the Ombud's monetary jurisdiction.",
          options: [
            { letter: "A", text: "i, ii and iii only." },
            { letter: "B", text: "i, ii, iii and iv." },
            { letter: "C", text: "i and iii only." },
            { letter: "D", text: "ii and iv only." },
          ],
          correct: "B",
          justification:
            "All four are recognised rejection grounds: failure to exhaust internal channels, lack of merit, three-year time-bar, and pending litigation / out-of-jurisdiction (including monetary cap).",
          distractorAnalysis: {
            A: "Omits the pending-litigation / out-of-jurisdiction ground.",
            C: "Omits the merit and pending-litigation grounds.",
            D: "Omits the failure-to-exhaust and time-bar grounds.",
          },
        },
        {
          id: "re5-t7-q5",
          level: 4,
          format: "Analysis",
          prompt:
            "A client has received a final rejection letter from the FSP on 4 April 2026. The letter sets out the reasons for rejection and lists the FAIS Ombud's contact details. By what date does the client need to refer the matter to the Ombud to remain within statutory time-bars?",
          options: [
            {
              letter: "A",
              text:
                "By 16 May 2026 (6 weeks after the rejection).",
            },
            {
              letter: "B",
              text:
                "By 4 October 2026 — the six-month window in which a client may refer a rejected complaint to the FAIS Ombud runs from the date of the FSP's final rejection.",
            },
            {
              letter: "C",
              text:
                "By 4 April 2029 (three years after rejection).",
            },
            {
              letter: "D",
              text:
                "There is no deadline — referrals to the Ombud may be made at any time.",
            },
          ],
          correct: "B",
          justification:
            "The six-month referral window runs from the date of the FSP's final rejection. The three-year limitation runs from when the complainant became aware of the occurrence — these are distinct timelines and candidates frequently confuse them.",
          distractorAnalysis: {
            A: "Confuses the six-week internal-resolution window with the post-rejection referral window.",
            C: "Confuses the three-year limitation with the six-month referral window.",
            D: "Statutory time-bars exist; no-deadline is incorrect.",
          },
        },
      ],
    },
  },

  /* --------------------------------------------------------------------- */
  /*  Task 8 — Operating as a Representative                                */
  /* --------------------------------------------------------------------- */
  {
    id: "RE5-Task8",
    order: 56,
    title: "Task 8 — Operating as a Representative",
    qcDescription:
      "Understand the roles and responsibilities of a Representative under the FAIS Act, including the fit-and-proper requirements (honesty, integrity, good standing, qualifications, experience, regulatory exams, CPD) and the conditions under which a person may render services under supervision.",
    statutoryRefs: [
      "FAIS Act s1 (definitions of Representative, Advice, Intermediary Services), s1(3), s13, s14",
      "Board Notice 194 of 2017 — Sections 9, 12, 16, 25, Annexure One, Annexure Three",
      "FSCA FAIS Notice 86 of 2018 — Exemption of Services under Supervision",
    ],
    youtubeId: null,
    coreConcepts: [
      "A Representative may only render financial services for or on behalf of one or more FSPs (with the FSP's consent), and only in respect of categories and products for which they are competent.",
      "The five fit-and-proper pillars apply to representatives: honesty/integrity, competence, continuous professional development (CPD), operational ability (at the FSP level), and financial soundness (at the FSP level).",
      "Services under supervision are governed by FSCA FAIS Notice 86 of 2018 — the representative may operate without yet meeting the full competence requirements, provided a supervising person who does meet them is appointed and accountable.",
    ],
    quiz: {
      questions: [
        {
          id: "re5-t8-q1",
          level: 1,
          format: "Knowledge",
          prompt:
            "Under section 1 of the FAIS Act, a 'representative' is best described as:",
          options: [
            {
              letter: "A",
              text:
                "Any person employed by an FSP, regardless of job function.",
            },
            {
              letter: "B",
              text:
                "Any person who, for or on behalf of an FSP, renders a financial service to clients, other than in the capacity of a mere clerk or messenger.",
            },
            {
              letter: "C",
              text:
                "A director of the FSP only.",
            },
            {
              letter: "D",
              text:
                "An independent contractor who never owes any duty to the FSP.",
            },
          ],
          correct: "B",
          justification:
            "Section 1 defines a representative as any person who renders a financial service to a client for or on behalf of an FSP, other than in a purely clerical or administrative capacity. The definition is functional — what the person does, not their job title.",
          distractorAnalysis: {
            A: "Employment alone is not sufficient — the function must be the rendering of a financial service.",
            C: "Directorship is unrelated to representative status.",
            D: "Independent contractors who render financial services on behalf of an FSP fall within the definition.",
          },
        },
        {
          id: "re5-t8-q2",
          level: 2,
          format: "Comprehension",
          prompt:
            "A representative operating under supervision in terms of FSCA FAIS Notice 86 of 2018:",
          options: [
            {
              letter: "A",
              text:
                "May not render any financial services at all until full competence is achieved.",
            },
            {
              letter: "B",
              text:
                "May render financial services in the relevant categories without yet meeting the full competence requirements, provided a properly competent supervising representative or KI is appointed and accountable, the supervision arrangement is documented, and the representative discloses the supervision status to clients.",
            },
            {
              letter: "C",
              text:
                "Is exempt from the General Code of Conduct.",
            },
            {
              letter: "D",
              text:
                "Cannot give advice but can perform any intermediary service.",
            },
          ],
          correct: "B",
          justification:
            "Supervision under Notice 86 allows the representative to render services pending full competence, on three core conditions: a competent supervisor is appointed, the arrangement is documented, and the supervision status is disclosed to the client. The General Code of Conduct continues to apply.",
          distractorAnalysis: {
            A: "Pre-competence representatives can operate under supervision.",
            C: "No representative is exempt from the General Code.",
            D: "Advice/intermediary distinction does not map onto supervision status.",
          },
        },
        {
          id: "re5-t8-q3",
          level: 3,
          format: "Scenario",
          prompt:
            "A representative is appointed to render advice on long-term insurance subcategory B1 on 1 November 2025. The CPD cycle ran from 1 June 2025 to 31 May 2026. Assuming the representative is only authorised in this single subcategory and has no approved long-term absences, what is the correct pro-rated CPD target the representative must complete by 31 May 2026?",
          options: [
            { letter: "A", text: "6 hours." },
            { letter: "B", text: "3.5 hours." },
            { letter: "C", text: "12 hours." },
            { letter: "D", text: "0 hours — CPD only applies from the next cycle." },
          ],
          correct: "B",
          justification:
            "A representative authorised in a single subcategory of a single class of business attracts a 6-hour base CPD requirement. Appointed on 1 November, the representative is active for 7 full calendar months (Nov–May). Pro-rata: (7/12) × 6 = 3.5 hours.",
          distractorAnalysis: {
            A: "Full annual target, not pro-rated.",
            C: "Wrong base requirement (12 hours applies to more than one subcategory within one class).",
            D: "CPD applies in the cycle in which the representative is active, pro-rated.",
          },
        },
        {
          id: "re5-t8-q4",
          level: 3,
          format: "Roman Numeral",
          prompt:
            "Which of the following are fit-and-proper requirements that apply to a representative?\n\ni. Honesty, integrity and good standing.\nii. Competence (recognised qualifications, regulatory examinations, Class of Business training, product-specific training).\niii. Continuous Professional Development (CPD) earned within the prescribed cycle.\niv. A minimum annual salary set by the Authority.",
          options: [
            { letter: "A", text: "i, ii and iii only." },
            { letter: "B", text: "i, ii, iii and iv." },
            { letter: "C", text: "i and iv only." },
            { letter: "D", text: "ii and iv only." },
          ],
          correct: "A",
          justification:
            "Items i, ii and iii are core fit-and-proper requirements for representatives under Board Notice 194 of 2017. Item iv is fabricated — there is no statutory minimum representative salary set by the Authority.",
          distractorAnalysis: {
            B: "Includes the fabricated salary requirement.",
            C: "Omits competence and CPD; includes the fabricated salary.",
            D: "Omits honesty and CPD; includes the fabricated salary.",
          },
        },
        {
          id: "re5-t8-q5",
          level: 4,
          format: "Analysis",
          prompt:
            "A representative resigns from FSP A on 1 March. On 15 March they are appointed by FSP B and immediately begin rendering financial services. On 1 May, FSP A discovers that the representative had committed material misconduct (fraud) while at FSP A. Which is the most accurate analysis?",
          options: [
            {
              letter: "A",
              text:
                "No action is required by FSP A — the representative is now FSP B's responsibility.",
            },
            {
              letter: "B",
              text:
                "FSP A must still commence debarment under section 14 of the FAIS Act within the six-month post-termination window, on the basis that the grounds existed and became known within that window. Resignation does not extinguish the duty.",
            },
            {
              letter: "C",
              text:
                "FSP A should ask FSP B to debar instead, as the representative is now their employee.",
            },
            {
              letter: "D",
              text:
                "Only the FAIS Ombud can debar; FSP A has no statutory role.",
            },
          ],
          correct: "B",
          justification:
            "Section 14(5) of the FAIS Act allows an FSP to debar a former representative for up to six months after termination where the grounds existed and became known within that window. Resignation and re-employment elsewhere do not extinguish FSP A's duty — and FSP B is a separate party.",
          distractorAnalysis: {
            A: "Resignation does not extinguish the section 14 duty.",
            C: "FSP B cannot debar for conduct that occurred at FSP A.",
            D: "Debarment under section 14 is initiated by the FSP, not the Ombud.",
          },
        },
      ],
    },
  },
];
