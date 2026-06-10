/**
 * RE5 Task 4 lessons — QC8 to QC14.
 *
 * DRAFT — quiz copy authored from the supplied Master Meta-Prompt blueprint and the
 * exemplar (QC13 — used verbatim). Pending compliance-officer review before exam-grade use.
 */
import type { Lesson } from "./types";

export const lessonsQc08to14: Lesson[] = [
  /* --------------------------------------------------------------------- */
  /*  QC8 — Disclosures Regarding Fees and Commission                      */
  /* --------------------------------------------------------------------- */
  {
    id: "Task 4(QC8)",
    order: 8,
    title: "QC8 — Disclosures Regarding Fees and Commission",
    qcDescription:
      "Explain the specific disclosure requirements regarding fees and commission.",
    statutoryRefs: [
      "General Code of Conduct s7, s7(1), s7(1)(c)(iii)(bb)",
    ],
    youtubeId: "WT9SGrXlVxQ",
    coreConcepts: [
      "Mandatory itemised breakdown of all fees, commissions and charges, whether monetary or non-monetary.",
      "How performance-based fees are calculated and their structural impact on net investment returns.",
      "Disclosure of ongoing service fees, platform charges and early termination penalties.",
    ],
    quiz: {
      questions: [
        {
          id: "qc8-q1",
          level: 1,
          format: "Knowledge",
          prompt:
            "Under section 7 of the General Code, fee and commission disclosures provided to a client must be:",
          options: [
            {
              letter: "A",
              text:
                "Expressed only as a percentage of the investment amount.",
            },
            {
              letter: "B",
              text:
                "Expressed in specific monetary terms, or where this is not reasonably possible, in such a manner as enables the client to determine the actual monetary cost.",
            },
            {
              letter: "C",
              text:
                "Disclosed only on request from the client.",
            },
            {
              letter: "D",
              text:
                "Disclosed exclusively in the product supplier's policy document, with no separate FSP disclosure required.",
            },
          ],
          correct: "B",
          justification:
            "Section 7(1)(c)(iii)(bb) requires fee disclosure in specific monetary terms or, where that is not reasonably possible, in a manner that allows the client to determine the actual monetary cost. Percentage-only disclosure that does not enable a monetary determination is non-compliant.",
          distractorAnalysis: {
            A: "Percentages alone often obscure the actual rand cost and are non-compliant.",
            C: "Fee disclosure is a positive duty, not on-request only.",
            D: "The FSP has its own disclosure duty separate from the supplier's product disclosure.",
          },
        },
        {
          id: "qc8-q2",
          level: 2,
          format: "Negative",
          prompt:
            "Which of the following statements regarding fee and commission disclosure is FALSE?",
          options: [
            {
              letter: "A",
              text:
                "The client must be told the existence, frequency and amount of any ongoing fees.",
            },
            {
              letter: "B",
              text:
                "Non-monetary benefits, such as administrative support from a supplier, do not need to be disclosed.",
            },
            {
              letter: "C",
              text:
                "The client must be informed of any early-termination charges or surrender penalties associated with the product.",
            },
            {
              letter: "D",
              text:
                "Performance fees and their method of calculation must be clearly disclosed before the client commits to the product.",
            },
          ],
          correct: "B",
          justification:
            "Non-monetary benefits received by the FSP that are capable of influencing recommendations fall within the conflict-of-interest and fee-disclosure framework and must be disclosed. Treating 'non-monetary' as 'invisible' is a common but serious compliance error.",
          distractorAnalysis: {
            A: "True — ongoing fee transparency is a section 7 requirement.",
            C: "True — exit costs are a material disclosure.",
            D: "True — performance-fee methodology must be disclosed upfront.",
          },
        },
        {
          id: "qc8-q3",
          level: 3,
          format: "Scenario",
          prompt:
            "A client invests R1,000,000 in a discretionary portfolio with an annual platform fee of 0.45%, an annual advisory fee of 1.00%, and a performance fee of 10% of returns above a benchmark. The representative tells the client only that 'the total fee is about 1.5% a year'. Which statement most accurately describes the disclosure?",
          options: [
            {
              letter: "A",
              text:
                "The disclosure is compliant because the headline percentage is approximately correct.",
            },
            {
              letter: "B",
              text:
                "The disclosure is non-compliant because it omits the performance-fee mechanism, fails to break down the platform and advisory fees, and does not allow the client to determine the actual rand cost.",
            },
            {
              letter: "C",
              text:
                "The disclosure is compliant because performance fees only apply in good years.",
            },
            {
              letter: "D",
              text:
                "The disclosure is compliant because the client signed the application form.",
            },
          ],
          correct: "B",
          justification:
            "Aggregating fees into an approximate percentage hides the performance-fee structure (which can materially alter total cost) and prevents the client from determining the actual monetary impact, both of which breach section 7(1)(c)(iii)(bb).",
          distractorAnalysis: {
            A: "Approximation and aggregation defeat the purpose of itemised fee disclosure.",
            C: "Whether a fee is triggered does not extinguish the duty to disclose its existence and mechanism.",
            D: "A signed form does not cure non-disclosure.",
          },
        },
        {
          id: "qc8-q4",
          level: 3,
          format: "Roman Numeral",
          prompt:
            "Which of the following must be disclosed as part of a compliant fee and commission disclosure?\n\ni. The frequency and method of payment of all ongoing fees.\nii. Whether commissions are paid by the product supplier and the basis on which they are calculated.\niii. Early-termination or surrender charges that may reduce proceeds payable to the client.\niv. The personal commission income of every other representative at the FSP.",
          options: [
            { letter: "A", text: "i, ii and iii only." },
            { letter: "B", text: "ii and iv only." },
            { letter: "C", text: "i, iii and iv only." },
            { letter: "D", text: "i, ii, iii and iv." },
          ],
          correct: "A",
          justification:
            "Items i, ii and iii are core section 7 disclosures. Item iv has no statutory basis and would breach the personal-data and confidentiality boundaries that surround other representatives' compensation.",
          distractorAnalysis: {
            B: "Omits ongoing fees and early-termination charges and includes the unlawful disclosure.",
            C: "Omits commission basis and includes the unlawful disclosure.",
            D: "Includes the unlawful disclosure.",
          },
        },
        {
          id: "qc8-q5",
          level: 4,
          format: "Analysis Scenario",
          prompt:
            "A representative recommends a complex structured note that pays the FSP an upfront commission of 3.0% (paid by the product supplier) plus an ongoing 0.5% trailer fee for 5 years. The representative discloses only the trailer fee on the basis that 'the commission is paid by the supplier, not by the client'. The most accurate regulatory analysis is:",
          options: [
            {
              letter: "A",
              text:
                "Compliant — commissions paid by the supplier never need disclosure.",
            },
            {
              letter: "B",
              text:
                "Non-compliant — supplier-paid commissions are still relevant to client decision-making and to conflicts of interest, and must be disclosed with their basis of calculation in addition to ongoing fees.",
            },
            {
              letter: "C",
              text:
                "Compliant — only fees that directly debit the client's account require disclosure.",
            },
            {
              letter: "D",
              text:
                "Compliant — the trailer-fee disclosure satisfies the obligation in respect of all fees and commissions paid to the FSP.",
            },
          ],
          correct: "B",
          justification:
            "Section 7 read with section 3A requires disclosure of all fees and commissions received by the FSP, including those paid indirectly by a product supplier. These payments influence objectivity and form part of the conflicts framework; their omission misstates the economics of the recommendation.",
          distractorAnalysis: {
            A: "The 'paid by the supplier' framing does not exempt the FSP from disclosure.",
            C: "Indirect remuneration is squarely within section 7 disclosure obligations.",
            D: "Selective disclosure of one fee but omission of upfront commission is materially misleading.",
          },
        },
      ],
    },
  },

  /* --------------------------------------------------------------------- */
  /*  QC9 — Application of Disclosure Requirements                         */
  /* --------------------------------------------------------------------- */
  {
    id: "Task 4(QC9)",
    order: 9,
    title: "QC9 — Application of Disclosure Requirements",
    qcDescription:
      "Apply disclosure requirements in terms of financial services.",
    statutoryRefs: [
      "General Code of Conduct s7, s7(1), s7(1)(c), s7(4), s8(4), s21",
    ],
    youtubeId: "onK8gZWjEhY",
    coreConcepts: [
      "Practical combination of verbal and written disclosures during client interactions.",
      "Statutory timeframes for delivering physical or digital disclosure documentation after a service is rendered.",
      "Record-keeping rules for verbal disclosures, including secure storage and retrieval of call recordings.",
    ],
    quiz: {
      questions: [
        {
          id: "qc9-q1",
          level: 1,
          format: "Knowledge",
          prompt:
            "Where a financial service is rendered telephonically and a verbal disclosure is made, the FSP must:",
          options: [
            {
              letter: "A",
              text:
                "Provide a written confirmation to the client as soon as reasonably possible after the interaction.",
            },
            {
              letter: "B",
              text:
                "Treat the verbal disclosure as fully satisfying all disclosure duties indefinitely.",
            },
            {
              letter: "C",
              text:
                "Issue a written confirmation only if the client expressly demands it within 24 hours.",
            },
            {
              letter: "D",
              text:
                "Convert the call into a video recording within 48 hours.",
            },
          ],
          correct: "A",
          justification:
            "Where information is conveyed orally, the FSP must, within a reasonable time, confirm the relevant disclosures in writing. This combined verbal-and-written approach satisfies both the substance and evidentiary record-keeping requirements of section 7 read with section 14.",
          distractorAnalysis: {
            B: "Verbal-only disclosure does not satisfy written record-keeping obligations.",
            C: "The duty to confirm in writing is not contingent on the client demanding it.",
            D: "There is no statutory video-conversion requirement.",
          },
        },
        {
          id: "qc9-q2",
          level: 2,
          format: "Comprehension",
          prompt:
            "Which statement best captures the relationship between verbal and written disclosures?",
          options: [
            {
              letter: "A",
              text:
                "Written disclosures always replace verbal disclosures.",
            },
            {
              letter: "B",
              text:
                "Verbal and written disclosures operate as complementary obligations: verbal disclosure enables real-time understanding, while written confirmation creates the durable record required by section 14.",
            },
            {
              letter: "C",
              text:
                "Verbal disclosures are obsolete and should be avoided.",
            },
            {
              letter: "D",
              text:
                "Written disclosures are only required when the client is illiterate.",
            },
          ],
          correct: "B",
          justification:
            "The two channels serve different statutory purposes. Verbal disclosure supports informed real-time decision-making; written confirmation creates the evidentiary record. Both are necessary; neither alone is sufficient for complex disclosures.",
          distractorAnalysis: {
            A: "They complement; one does not extinguish the other.",
            C: "Verbal disclosures remain essential in many advisory interactions.",
            D: "Written-confirmation obligations apply across all client interactions, not only on a literacy basis.",
          },
        },
        {
          id: "qc9-q3",
          level: 3,
          format: "Scenario",
          prompt:
            "A representative sells a short-term insurance policy telephonically at 16:45 on a Friday. The call is recorded. By when must the FSP confirm the material disclosures (terms, exclusions, fees and complaints procedure) in writing to the client, in order to satisfy section 7(4)?",
          options: [
            {
              letter: "A",
              text:
                "Within five business days from the end of the next month.",
            },
            {
              letter: "B",
              text:
                "As soon as reasonably possible after the call, having regard to the urgency, channel and complexity of the transaction.",
            },
            {
              letter: "C",
              text:
                "Only after the first premium has cleared.",
            },
            {
              letter: "D",
              text:
                "Within 90 days from the date of the policy schedule.",
            },
          ],
          correct: "B",
          justification:
            "Section 7(4) does not prescribe a single rigid deadline for every channel, but requires written confirmation 'as soon as reasonably possible'. For a Friday telephonic sale of short-term insurance, the practical expectation is same-day or first-business-day confirmation, especially as the policy may have already incepted.",
          distractorAnalysis: {
            A: "Five business days from the end of the next month is not a recognised statutory standard.",
            C: "Premium clearance is unrelated to the duty to confirm disclosures.",
            D: "90 days is materially outside the 'as soon as reasonably possible' standard.",
          },
        },
        {
          id: "qc9-q4",
          level: 3,
          format: "Roman Numeral",
          prompt:
            "Which of the following are recognised record-keeping requirements relating to disclosures?\n\ni. Maintaining a complete record of advice including the analysis on which it was based.\nii. Retaining client communications and disclosures for at least five years from the date the record was created.\niii. Securely storing call recordings where verbal disclosures formed part of the service.\niv. Destroying the records after the policy lapses to free up storage capacity.",
          options: [
            { letter: "A", text: "i, ii and iii only." },
            { letter: "B", text: "i and iv only." },
            { letter: "C", text: "ii, iii and iv only." },
            { letter: "D", text: "i, ii, iii and iv." },
          ],
          correct: "A",
          justification:
            "Items i, ii and iii reflect the General Code's record-keeping framework (sections 3, 8 and 14). Item iv is the opposite of the law: records must be retained for the statutory five-year period, not destroyed on policy lapse.",
          distractorAnalysis: {
            B: "Includes the unlawful destruction step.",
            C: "Omits the record-of-advice requirement and includes the unlawful destruction step.",
            D: "Includes the unlawful destruction step.",
          },
        },
        {
          id: "qc9-q5",
          level: 4,
          format: "Analysis",
          prompt:
            "A representative conducts an urgent telephonic sale of a one-year short-term policy. The client incepts cover the same day. Three weeks later the client lodges a claim that is partially declined under an exclusion the client says was never explained. The FSP cannot locate the call recording due to a system failure. The most defensible analysis under section 7(4) and section 14 is:",
          options: [
            {
              letter: "A",
              text:
                "The claim must be paid in full because no recording exists.",
            },
            {
              letter: "B",
              text:
                "The absence of the recording is irrelevant; the policy schedule alone is sufficient evidence.",
            },
            {
              letter: "C",
              text:
                "The FSP carries the evidentiary risk: without the call recording or contemporaneous written confirmation of the exclusion, the FSP will struggle to prove the exclusion was disclosed, and is exposed to remediation, regulatory criticism and reputational harm.",
            },
            {
              letter: "D",
              text:
                "The FSP can simply reconstruct the call recording from memory and present it as evidence.",
            },
          ],
          correct: "C",
          justification:
            "Section 14 places the record-keeping burden on the FSP. Loss of contemporaneous evidence (call recordings, written confirmations) does not automatically validate the client's account, but it does shift the evidentiary risk decisively against the FSP, with downstream regulatory consequences.",
          distractorAnalysis: {
            A: "Claims outcomes are governed by policy terms; absence of a recording is not itself a payment trigger.",
            B: "A policy schedule does not establish what was disclosed during the sales conversation.",
            D: "Reconstructed recordings cannot be presented as authentic and would be a serious integrity breach.",
          },
        },
      ],
    },
  },

  /* --------------------------------------------------------------------- */
  /*  QC10 — The Statutory Process of Advice                               */
  /* --------------------------------------------------------------------- */
  {
    id: "Task 4(QC10)",
    order: 10,
    title: "QC10 — The Statutory Process of Advice",
    qcDescription:
      "Explain the process of advice that should be followed by a Representative.",
    statutoryRefs: [
      "General Code of Conduct s7(1), s8, s8(1) & (4)",
    ],
    youtubeId: "qOz7dIHejJM",
    coreConcepts: [
      "Detailed steps of the advice process: financial needs analysis, risk profiling, suitability assessment, drafting the record of advice.",
      "Statutory response where a client refuses to provide full financial information (issuing a written warning on the risks of restricted advice).",
      "Distinguishing suitability analysis for a personalised recommendation from product appropriateness in execution-only contexts.",
    ],
    quiz: {
      questions: [
        {
          id: "qc10-q1",
          level: 1,
          format: "Knowledge",
          prompt:
            "Under section 8 of the General Code, before providing a client with personal advice, a representative must, where reasonably possible:",
          options: [
            {
              letter: "A",
              text:
                "Obtain such information from the client as is appropriate in the circumstances, including the client's financial situation, financial product experience and objectives, to enable a suitable recommendation.",
            },
            {
              letter: "B",
              text:
                "Recommend the product with the highest commission to the FSP.",
            },
            {
              letter: "C",
              text:
                "Take instructions only from the client and ask no further questions.",
            },
            {
              letter: "D",
              text:
                "Obtain only the client's identity number.",
            },
          ],
          correct: "A",
          justification:
            "Section 8(1) requires the representative to take reasonable steps to identify the client's financial product experience, objectives, and financial situation, so as to be able to provide the client with appropriate advice.",
          distractorAnalysis: {
            B: "Commission cannot drive the recommendation.",
            C: "Pure execution against instructions is not the personal-advice process.",
            D: "Identity alone is insufficient for a suitability analysis.",
          },
        },
        {
          id: "qc10-q2",
          level: 2,
          format: "Negative",
          prompt:
            "Which of the following is NOT a step in the section 8 advice process?",
          options: [
            {
              letter: "A",
              text:
                "Conducting a financial needs analysis.",
            },
            {
              letter: "B",
              text:
                "Issuing a written record of advice that identifies the products considered and the basis on which a particular product was recommended.",
            },
            {
              letter: "C",
              text:
                "Disclosing material risks, limitations and exclusions of the recommended product.",
            },
            {
              letter: "D",
              text:
                "Obtaining a written guarantee from the product supplier that the product will outperform a benchmark.",
            },
          ],
          correct: "D",
          justification:
            "Section 8 is concerned with needs analysis, suitable recommendation, risk and exclusion disclosure, and a written record of advice. No part of the framework requires (or permits) obtaining performance guarantees from product suppliers.",
          distractorAnalysis: {
            A: "Needs analysis is a core step.",
            B: "Record of advice is a core step.",
            C: "Risk and exclusion disclosure is part of the framework.",
          },
        },
        {
          id: "qc10-q3",
          level: 3,
          format: "Scenario",
          prompt:
            "A new client requests advice on a unit trust investment but refuses to disclose existing debt or other investments. The representative must:",
          options: [
            {
              letter: "A",
              text:
                "Proceed with a full personal recommendation on the basis of what the client has chosen to share.",
            },
            {
              letter: "B",
              text:
                "Decline to engage further until the client provides every requested data point.",
            },
            {
              letter: "C",
              text:
                "Inform the client in writing that, because complete information has not been provided, the resulting advice may be restricted and may not be in the client's best interests, and proceed only on that documented basis if the client wishes to continue.",
            },
            {
              letter: "D",
              text:
                "Provide the advice but record it as 'execution-only' to avoid suitability duties.",
            },
          ],
          correct: "C",
          justification:
            "Section 8(4) requires the representative, where the client refuses to give material information, to warn the client in writing of the limited nature of any resulting advice. The transaction may proceed on that documented basis only after the warning is given.",
          distractorAnalysis: {
            A: "Proceeding silently on partial information exposes the FSP to suitability liability.",
            B: "Refusing to engage may be appropriate in extreme cases, but a structured warning is the codified pathway.",
            D: "Re-labelling personal advice as 'execution-only' is a mischaracterisation that does not extinguish duties.",
          },
        },
        {
          id: "qc10-q4",
          level: 3,
          format: "Roman Numeral",
          prompt:
            "Which of the following form part of a compliant record of advice under section 9 of the General Code?\n\ni. A summary of the information the representative obtained from the client.\nii. The financial products that were considered.\niii. The product or products that were recommended and the reasons why they are likely to satisfy the client's identified needs and objectives.\niv. The personal religious beliefs of the client, regardless of relevance.",
          options: [
            { letter: "A", text: "i, ii and iii only." },
            { letter: "B", text: "i and iv only." },
            { letter: "C", text: "ii, iii and iv only." },
            { letter: "D", text: "i, ii, iii and iv." },
          ],
          correct: "A",
          justification:
            "Section 9 requires i, ii and iii as core record-of-advice elements. Item iv is irrelevant and inappropriate — personal beliefs are not part of a financial needs analysis unless directly material to the recommendation (and even then, sensitively handled).",
          distractorAnalysis: {
            B: "Omits products considered and recommended and includes irrelevant data.",
            C: "Omits the client information summary and includes irrelevant data.",
            D: "Includes irrelevant data.",
          },
        },
        {
          id: "qc10-q5",
          level: 4,
          format: "Analysis Scenario",
          prompt:
            "A client requests the immediate purchase of a leveraged single-stock derivative but refuses to disclose overall liabilities, monthly cash flow or investment objectives. The representative still wishes to assist. To proceed lawfully, the representative must:",
          options: [
            {
              letter: "A",
              text:
                "Process the transaction immediately because client instructions take precedence.",
            },
            {
              letter: "B",
              text:
                "Refuse the transaction outright with no further engagement.",
            },
            {
              letter: "C",
              text:
                "Issue a written section 8(4) warning explaining that, in the absence of the required information, any advice would be restricted and might not be appropriate; obtain the client's written acknowledgement; and ensure the record of advice reflects the limited nature of the engagement before processing.",
            },
            {
              letter: "D",
              text:
                "Process the transaction as execution-only without any disclosures.",
            },
          ],
          correct: "C",
          justification:
            "The combined effect of sections 7, 8(4) and 9 is that, where the client withholds material information, the representative must warn the client in writing, obtain acknowledgement, and document the limited scope. Only then can the FSP proceed lawfully, and even then must consider whether the product's complexity makes the transaction inappropriate.",
          distractorAnalysis: {
            A: "Client instructions do not displace statutory suitability duties.",
            B: "Outright refusal may sometimes be appropriate, but the codified pathway is to warn and document.",
            D: "Re-labelling as execution-only does not erase the duty to assess appropriateness and to disclose.",
          },
        },
      ],
    },
  },

  /* --------------------------------------------------------------------- */
  /*  QC11 — Custody of Financial Products and Client Funds                */
  /* --------------------------------------------------------------------- */
  {
    id: "Task 4(QC11)",
    order: 11,
    title: "QC11 — Custody of Financial Products and Client Funds",
    qcDescription:
      "Explain the requirements when a Representative receives custody of financial products and funds.",
    statutoryRefs: [
      "FAIS Act s10, s19(1) & (3)",
      "Board Notice 123 of 2009 s3(b)",
    ],
    youtubeId: "4p2pmnulkd8",
    coreConcepts: [
      "Strict banking separation: FSPs must use dedicated client asset bank accounts that are distinct from operational accounts.",
      "Statutory payment timelines: client money must be transferred to the product supplier or deposited into the dedicated client account within one business day of receipt.",
      "Issuing immediate written receipts for physical documents (title deeds, share certificates, policy documents) received from clients.",
    ],
    quiz: {
      questions: [
        {
          id: "qc11-q1",
          level: 1,
          format: "Knowledge",
          prompt:
            "Where an FSP receives funds from a client for transmission to a product supplier, the funds must be deposited into the dedicated client account or transmitted to the supplier:",
          options: [
            { letter: "A", text: "Within 7 business days of receipt." },
            { letter: "B", text: "Within 1 business day of receipt." },
            { letter: "C", text: "Within 30 calendar days of receipt." },
            { letter: "D", text: "Whenever the FSP's cash-flow allows." },
          ],
          correct: "B",
          justification:
            "The one-business-day rule is the cornerstone of client-asset safeguarding under the FAIS Act and Board Notice 123 of 2009. It limits the window in which client funds sit anywhere other than a properly designated client account or with the supplier.",
          distractorAnalysis: {
            A: "Seven business days exposes funds to unauthorised commingling and is non-compliant.",
            C: "30 calendar days is well beyond the statutory window.",
            D: "Operational cash-flow may never be a consideration in handling client funds.",
          },
        },
        {
          id: "qc11-q2",
          level: 2,
          format: "Comprehension",
          prompt:
            "The principle of banking separation in relation to client assets means:",
          options: [
            {
              letter: "A",
              text:
                "Client money may be held in the FSP's general operating account provided records are kept.",
            },
            {
              letter: "B",
              text:
                "Client money must be held in dedicated client account(s), legally separate from the FSP's operational accounts, and at all times identifiable as client property.",
            },
            {
              letter: "C",
              text:
                "Client money may be invested at the FSP's discretion to generate operational interest.",
            },
            {
              letter: "D",
              text:
                "Client money is owned by the FSP from the moment of receipt.",
            },
          ],
          correct: "B",
          justification:
            "Dedicated client accounts ensure that client property remains legally identifiable and protected from the FSP's operational and insolvency exposures, in line with the safeguarding philosophy of section 10 and Board Notice 123.",
          distractorAnalysis: {
            A: "Commingling client and operational funds is the principal breach the rules are designed to prevent.",
            C: "Investing client funds for the FSP's benefit is unlawful misappropriation.",
            D: "Client funds remain the property of the client; the FSP is custodian, not owner.",
          },
        },
        {
          id: "qc11-q3",
          level: 3,
          format: "Scenario",
          prompt:
            "A representative based in a small town receives R20,000 in cash from a remote client at 15:30 on a Friday for a long-term insurance premium. The branch's local bank closes at 16:00, and the next deposit window is Monday at 09:00. What is the legally compliant course of action?",
          options: [
            {
              letter: "A",
              text:
                "Hold the cash in a personal wallet over the weekend and bank it on Monday morning.",
            },
            {
              letter: "B",
              text:
                "Make every effort to deposit the funds into the dedicated client account on the Friday; failing that, secure the funds in accordance with the FSP's documented after-hours custody procedure and deposit them at the next available banking slot, documenting the entire chain of custody and providing the client with an immediate written receipt.",
            },
            {
              letter: "C",
              text:
                "Refuse the payment and tell the client to drive to the nearest city.",
            },
            {
              letter: "D",
              text:
                "Spend the cash on operational expenses and reimburse the client account on Monday.",
            },
          ],
          correct: "B",
          justification:
            "The one-business-day rule requires the FSP to bank funds as soon as possible. Where banking on the day of receipt is genuinely impossible, a documented after-hours custody procedure, a written client receipt and prompt next-business-day deposit are required. Personal custody, expenditure or refusal are not lawful.",
          distractorAnalysis: {
            A: "Personal-wallet custody exposes the FSP to misappropriation findings and breaches custody rules.",
            C: "Refusal of payment without process is a service failure.",
            D: "Spending client funds is misappropriation, even if intended to be reimbursed.",
          },
        },
        {
          id: "qc11-q4",
          level: 3,
          format: "Roman Numeral",
          prompt:
            "Which of the following must occur when a representative receives a physical financial product or document (such as a share certificate or policy document) from a client?\n\ni. An immediate written receipt must be issued to the client describing the item received.\nii. The item must be stored securely in a manner appropriate to its value and nature.\niii. The item must be conveyed to the relevant product supplier or registered owner within a reasonable time.\niv. The item may be used as collateral for the FSP's operational borrowing.",
          options: [
            { letter: "A", text: "i, ii and iii only." },
            { letter: "B", text: "i and iv only." },
            { letter: "C", text: "ii and iv only." },
            { letter: "D", text: "i, ii, iii and iv." },
          ],
          correct: "A",
          justification:
            "Receipt, secure storage and onward transmission are core obligations under section 10 and Board Notice 123. Using a client's property as collateral for the FSP's borrowing is a textbook misappropriation breach.",
          distractorAnalysis: {
            B: "Includes the unlawful collateral use.",
            C: "Omits the receipt and onward transmission obligations and includes the unlawful collateral use.",
            D: "Includes the unlawful collateral use.",
          },
        },
        {
          id: "qc11-q5",
          level: 4,
          format: "Analysis",
          prompt:
            "An on-site inspection finds that an FSP's dedicated client account regularly drops below the aggregate of client funds owing because the FSP withdraws balances to cover late commissions to representatives, intending to top up later. The most accurate regulatory analysis is:",
          options: [
            {
              letter: "A",
              text:
                "No breach occurred provided the account is later replenished.",
            },
            {
              letter: "B",
              text:
                "The conduct constitutes a serious breach of the safeguarding regime: the dedicated client account must at all times be sufficient to cover client liabilities, and using client funds for the FSP's commission obligations is unlawful commingling and potentially misappropriation.",
            },
            {
              letter: "C",
              text:
                "Withdrawals are permitted if commission payments are urgent.",
            },
            {
              letter: "D",
              text:
                "The FAIS Ombud, not the Authority, has primary jurisdiction over client-asset breaches.",
            },
          ],
          correct: "B",
          justification:
            "Section 10 and Board Notice 123 require client funds to be ring-fenced at all times. The dedicated client account must always be sufficient to cover client liabilities — 'top up later' is unlawful. Such conduct attracts severe administrative action and possible criminal exposure.",
          distractorAnalysis: {
            A: "Subsequent replenishment does not cure the original breach.",
            C: "Urgency of commission payments is not a defence to misappropriation.",
            D: "Client-asset safeguarding falls within the Authority's prudential and conduct supervision.",
          },
        },
      ],
    },
  },

  /* --------------------------------------------------------------------- */
  /*  QC12 — Industry Complaint Handling Requirements                      */
  /* --------------------------------------------------------------------- */
  {
    id: "Task 4(QC 12)",
    order: 12,
    title: "QC12 — Industry Complaint Handling Requirements",
    qcDescription:
      "Explain the manner in which complaints are to be handled by a Representative as required by the GCOC.",
    statutoryRefs: [
      "FAIS Act s8(4), s20",
      "General Code of Conduct s16, s16(2), s19, s27",
    ],
    youtubeId: "36fy6KETDKo",
    playlist: {
      listId: "PLDG_u2RxaazpfpGxSnl5CgpyZ4bJmPBE0",
      index: 3,
    },
    coreConcepts: [
      "Statutory definitions of a 'complaint' and a 'complainant', and the scope of a reportable dispute.",
      "Structural requirements for an internal complaints resolution policy: transparency, accessibility and fairness.",
      "Requirement that complaints be handled in an informal, low-barrier manner without charging the complainant any fee.",
    ],
    quiz: {
      questions: [
        {
          id: "qc12-q1",
          level: 1,
          format: "Knowledge",
          prompt:
            "Under the General Code of Conduct, a 'complainant' eligible to submit a dispute to an FSP's internal complaints resolution system is, in essence:",
          options: [
            {
              letter: "A",
              text:
                "Any individual in South Africa, irrespective of any relationship with the FSP.",
            },
            {
              letter: "B",
              text:
                "A specific client, or a person on whose behalf a client acts, who has a complaint relating to a financial service rendered by the FSP and who has suffered or is likely to suffer prejudice.",
            },
            {
              letter: "C",
              text:
                "Only product suppliers contracted to the FSP.",
            },
            {
              letter: "D",
              text:
                "Only the FAIS Ombud acting on behalf of an unspecified group.",
            },
          ],
          correct: "B",
          justification:
            "The statutory definition focuses on a specific client (or a person acting on their behalf) who has a complaint about a financial service and who has suffered, is suffering, or is likely to suffer financial prejudice. This narrow definition controls who can engage the internal complaints process.",
          distractorAnalysis: {
            A: "Anyone-in-South-Africa is too broad and ignores the prejudice requirement.",
            C: "Product suppliers are not 'clients' under the framework.",
            D: "The FAIS Ombud is an escalation forum, not the originator of an internal complaint.",
          },
        },
        {
          id: "qc12-q2",
          level: 2,
          format: "Negative",
          prompt:
            "Which of the following is NOT a requirement of an FSP's internal complaints resolution policy under section 16 of the General Code?",
          options: [
            {
              letter: "A",
              text:
                "The policy must be in writing.",
            },
            {
              letter: "B",
              text:
                "Complaints must be handled in a transparent, fair and timeous manner.",
            },
            {
              letter: "C",
              text:
                "The policy must charge a non-refundable fee to discourage frivolous complaints.",
            },
            {
              letter: "D",
              text:
                "The FSP must keep records of complaints received and the outcomes thereof for at least five years.",
            },
          ],
          correct: "C",
          justification:
            "Charging the complainant a fee is prohibited. Section 16 read with section 19 requires complaints to be handled informally and without fee, with low procedural barriers to access.",
          distractorAnalysis: {
            A: "True — the policy must be in writing.",
            B: "True — transparency, fairness and timeliness are core standards.",
            D: "True — five-year record retention is the standard under section 14.",
          },
        },
        {
          id: "qc12-q3",
          level: 3,
          format: "Scenario",
          prompt:
            "An FSP receives an email complaint from the spouse of a client (acting on the client's written authority) alleging that fees were not properly disclosed at policy inception. The FSP's compliance officer asks whether the FSP must accept the complaint into the internal complaints process. The compliant response is:",
          options: [
            {
              letter: "A",
              text:
                "Reject the complaint because the spouse is not the client.",
            },
            {
              letter: "B",
              text:
                "Accept the complaint into the internal complaints process, on the basis that a complaint may lawfully be lodged by a person acting on behalf of the client; acknowledge receipt and investigate.",
            },
            {
              letter: "C",
              text:
                "Accept the complaint only on payment of an administrative fee.",
            },
            {
              letter: "D",
              text:
                "Refer the complaint directly to the FAIS Ombud without internal investigation.",
            },
          ],
          correct: "B",
          justification:
            "The definition of complainant includes a person acting on behalf of a client. Where written authority is provided, the FSP must accept and process the complaint internally before any Ombud escalation.",
          distractorAnalysis: {
            A: "Rejecting on the basis that the spouse is not the client ignores the agent-acting-on-behalf-of-client limb.",
            C: "Charging a fee breaches the fee-free complaints rule.",
            D: "Skipping internal investigation pre-empts the FSP's statutory complaints process.",
          },
        },
        {
          id: "qc12-q4",
          level: 3,
          format: "Roman Numeral",
          prompt:
            "Which of the following must be present in an FSP's internal complaints policy?\n\ni. A clear procedure for acknowledging receipt of complaints and tracking their progress.\nii. Trained personnel responsible for resolving complaints.\niii. A requirement that the complainant waive their right to escalate to the FAIS Ombud.\niv. An ongoing review mechanism that uses complaint trends to identify systemic risks.",
          options: [
            { letter: "A", text: "i, ii and iv only." },
            { letter: "B", text: "i, iii and iv only." },
            { letter: "C", text: "ii and iii only." },
            { letter: "D", text: "i, ii, iii and iv." },
          ],
          correct: "A",
          justification:
            "Items i, ii and iv are recognised pillars of an internal complaints policy. Item iii (a waiver of the right to escalate to the FAIS Ombud) is unlawful and breaches the access-to-justice principles of the General Code.",
          distractorAnalysis: {
            B: "Includes the unlawful waiver requirement.",
            C: "Omits the acknowledgement procedure and systemic review and includes the unlawful waiver.",
            D: "Includes the unlawful waiver requirement.",
          },
        },
        {
          id: "qc12-q5",
          level: 4,
          format: "Analysis",
          prompt:
            "An FSP designs an internal complaints process that requires complaints to be submitted only on a paid courier service in original signed hard copy, with no email channel. The most accurate regulatory analysis is:",
          options: [
            {
              letter: "A",
              text:
                "Compliant — the FSP is entitled to design its own process.",
            },
            {
              letter: "B",
              text:
                "Non-compliant — the General Code requires the complaints process to be readily accessible and free of barriers, and a courier-only/paid-only channel undermines the principle of low-barrier dispute resolution.",
            },
            {
              letter: "C",
              text:
                "Compliant if the FSP also publishes its address on its website.",
            },
            {
              letter: "D",
              text:
                "Compliant if the FAIS Ombud is also listed as an alternative.",
            },
          ],
          correct: "B",
          justification:
            "Accessibility, informality and fee-free engagement are codified principles for internal complaints. A process that forces a paid courier channel breaches the spirit and text of section 16 and section 19.",
          distractorAnalysis: {
            A: "Process design freedom does not extend to imposing barriers contrary to the General Code.",
            C: "Publishing an address does not cure the access barrier.",
            D: "Pointing to the Ombud does not legitimise an internal process that itself fails the standard.",
          },
        },
      ],
    },
  },

  /* --------------------------------------------------------------------- */
  /*  QC13 — Following Complaints Procedures and Processes                 */
  /*  (Uses the user-supplied exemplar verbatim.)                          */
  /* --------------------------------------------------------------------- */
  {
    id: "Task 4(QC13)",
    order: 13,
    title: "QC13 — Following Complaints Procedures and Processes",
    qcDescription:
      "Follow the complaints procedures and processes that are in place for Representatives.",
    statutoryRefs: [
      "FAIS Act s16, s16(1), s19, s27(3)",
    ],
    youtubeId: "MjY0FvK0YaU",
    coreConcepts: [
      "Managing the complaints resolution pipeline: immediate acknowledgement, internal investigation, and delivering a formal written response.",
      "The strict 6-week internal-resolution window before the complainant can escalate to the FAIS Ombud.",
      "The 6-month window in which a client may refer a dispute to the Ombud after receiving a final unsatisfactory response.",
    ],
    quiz: {
      questions: [
        {
          id: "qc13-q1",
          level: 1,
          format: "Knowledge",
          prompt:
            "Under the General Code of Conduct for Financial Services Providers and Representatives, if an authorised FSP receives a written complaint from a client regarding a financial service rendered, within what maximum timeframe must the FSP resolve the dispute internally before the complainant has the legal right to refer the matter to the FAIS Ombud?",
          options: [
            {
              letter: "A",
              text: "14 business days from receipt of the written complaint.",
            },
            {
              letter: "B",
              text:
                "30 calendar days from the date the dispute was formally logged.",
            },
            {
              letter: "C",
              text: "Six weeks from the date of receipt of the complaint.",
            },
            {
              letter: "D",
              text: "Six calendar months from the initial transaction event.",
            },
          ],
          correct: "C",
          justification:
            "Under section 27 of the FAIS Act and section 19 of the General Code of Conduct, an authorised Financial Services Provider is granted a maximum timeframe of six weeks from the date of receipt of a client's written complaint to investigate and resolve the dispute internally. If the FSP fails to resolve the complaint to the client's satisfaction within this six-week window, the complainant has the statutory right to refer the dispute to the FAIS Ombud.",
          distractorAnalysis: {
            A: "The 14-day timeline is an internal operational standard used by some firms, but it is not the statutory threshold for escalation to the Ombud.",
            B: "The FAIS Act measures the escalation window in weeks (six weeks), not calendar days (30 days).",
            D: "Six months is the limitation period within which a client must lodge a complaint with the Ombud after receiving a final rejection from the FSP, not the timeline for internal resolution.",
          },
        },
        {
          id: "qc13-q2",
          level: 2,
          format: "Negative",
          prompt:
            "Which of the following statements is FALSE regarding the statutory duties of an authorised Financial Services Provider when communicating the rejection of a complaint to a client?",
          options: [
            {
              letter: "A",
              text:
                "The FSP must provide the client with clear, written reasons for the rejection of the complaint.",
            },
            {
              letter: "B",
              text:
                "The FSP must inform the client of their legal right to escalate the dispute to the FAIS Ombud within six months.",
            },
            {
              letter: "C",
              text:
                "The FSP must provide the client with the full contact details of the FAIS Ombud.",
            },
            {
              letter: "D",
              text:
                "The FSP must require the client to sign an acknowledgment of debt or waiver of rights before allowing them to escalate the matter to the Ombud.",
            },
          ],
          correct: "D",
          justification:
            "Under the General Code of Conduct, an FSP is strictly prohibited from requiring a client to sign any waiver of rights or restrictive agreement as a condition for processing or escalating a complaint. Any such attempt to limit the client's access to the FAIS Ombud is a severe breach of section 20 of the Code, which protects the consumer's right to low-barrier dispute resolution.",
          distractorAnalysis: {
            A: "Providing clear, written reasons for a complaint's rejection is a mandatory requirement under the Code.",
            B: "The FSP is legally obligated to inform the client of their right to escalate the dispute to the Ombud within six months of receiving the rejection letter.",
            C: "The FSP must provide the physical, digital, and telephone contact details of the FAIS Ombud alongside the rejection notification.",
          },
        },
        {
          id: "qc13-q3",
          level: 3,
          format: "Scenario",
          prompt:
            "On 10 October 2026, an authorised FSP, Protea Wealth Advisors, receives a written complaint from a client, Mr. Khumalo, regarding an unauthorised debit order processed against his investment portfolio. On 20 October 2026, the FSP sends Mr. Khumalo a final written response stating that the complaint has been investigated and dismissed because the debit order was authorised via a digital mandate. Mr. Khumalo is highly dissatisfied with this outcome. What is the legally compliant next step for the representative of Protea Wealth Advisors?",
          options: [
            {
              letter: "A",
              text:
                "Immediately refer the client's file to the FSCA Enforcement Committee for arbitration.",
            },
            {
              letter: "B",
              text:
                "Formally advise Mr. Khumalo in writing of his right to refer the dispute to the FAIS Ombud, providing the Ombud's contact details, and clearly stating that he has six months from the date of the rejection letter to do so.",
            },
            {
              letter: "C",
              text:
                "Inform Mr. Khumalo that because the FSP has issued a final rejection letter within six weeks, he has no further legal recourse under the FAIS Act.",
            },
            {
              letter: "D",
              text:
                "File a notice of debarment against Mr. Khumalo for submitting a frivolous complaint.",
            },
          ],
          correct: "B",
          justification:
            "Section 27 of the FAIS Act and section 19 of the General Code of Conduct state that when a complaint is rejected, the provider must immediately notify the client in writing of their right to escalate the dispute to the FAIS Ombud. This written notice must include the Ombud's full contact details and must explicitly warn the client that any referral to the Ombud must be lodged within six months from the date of the rejection letter.",
          distractorAnalysis: {
            A: "The FSP cannot refer a private consumer dispute to the FSCA Enforcement Committee; the appropriate forum is the FAIS Ombud.",
            C: "A final rejection letter from the FSP does not terminate the client's legal rights; it activates their right to escalate the matter to the Ombud.",
            D: "Debarment is a severe regulatory sanction reserved for representatives who commit serious fit and proper breaches, and it cannot be used as a retaliatory measure against a complainant.",
          },
        },
        {
          id: "qc13-q4",
          level: 3,
          format: "Roman Numeral",
          prompt:
            "Consider the following statements regarding the maintenance of a complaints register by an authorised FSP under the General Code of Conduct:\n\ni. The FSP must maintain a centralised register of all complaints received, categorised by product type and nature of the dispute.\nii. Records of complaints must be retained in the complaints register for a minimum period of two years from the date of resolution.\niii. The FSP must utilise the data in the complaints register to identify systemic compliance risks and implement corrective actions.\niv. The complaints register must be submitted to the FSCA annually during the license renewal process.\n\nWhich of the combinations is CORRECT?",
          options: [
            { letter: "A", text: "i and iii only." },
            { letter: "B", text: "ii and iv only." },
            { letter: "C", text: "i, ii, and iii only." },
            { letter: "D", text: "i, iii, and iv only." },
          ],
          correct: "A",
          justification:
            "Statement i is correct: the General Code of Conduct requires all FSPs to maintain an active, categorised register of all complaints. Statement iii is correct: the FSP must perform trend analysis on the complaints register. Statement ii is incorrect — records must be retained for a minimum of five years, not two. Statement iv is incorrect — the register is not submitted to the FSCA during licence renewal (FSP licences are of indefinite validity); it is reviewed during on-site compliance audits.",
          distractorAnalysis: {
            B: "Combines two false statements.",
            C: "Includes the incorrect two-year retention period.",
            D: "Includes the incorrect annual-submission statement.",
          },
        },
        {
          id: "qc13-q5",
          level: 4,
          format: "Analysis Scenario",
          prompt:
            "An authorised Category I FSP, Zenith Assurance, receives a complex complaint from a client, Mrs. Naidoo, on 1 June 2026, alleging that a representative mis-sold an investment policy by omitting high platform fees. Zenith Assurance immediately sends a written acknowledgement. By 10 July 2026 (exactly five weeks and five days after receipt), Zenith Assurance's compliance officer determines that the investigation requires third-party transaction records from an external supplier and cannot be completed immediately. To ensure absolute compliance with section 27 of the FAIS Act, what sequence of actions must Zenith Assurance execute?",
          options: [
            {
              letter: "A",
              text:
                "Zenith Assurance must apply to the FSCA for a formal 30-day extension of the six-week window, notifying Mrs. Naidoo of the application.",
            },
            {
              letter: "B",
              text:
                "Zenith Assurance must immediately reject the complaint in writing to close the file, and then reopen it as a new dispute once the third-party records arrive.",
            },
            {
              letter: "C",
              text:
                "Zenith Assurance must write to Mrs. Naidoo before the six-week window expires, explaining why the complaint cannot be resolved, outlining the progress made, and advising her that she has the legal right to refer the matter to the FAIS Ombud if she does not wish to grant the FSP more time.",
            },
            {
              letter: "D",
              text:
                "Zenith Assurance must suspend all communications with Mrs. Naidoo until the third-party records are retrieved, as the six-week timeline is suspended during external investigation.",
            },
          ],
          correct: "C",
          justification:
            "Under section 27 of the FAIS Act, the six-week timeline for internal complaints resolution is a strict statutory limit. If an FSP cannot resolve a complaint within this window due to complex investigative requirements, it cannot unilaterally suspend the timeline or apply for extensions. Instead, before the six weeks expire, the FSP must send a formal written notice to the client explaining why the dispute is unresolved, outlining the progress made, and clearly advising the client that they have the immediate legal right to refer the matter to the FAIS Ombud if they do not wish to grant the FSP more time.",
          distractorAnalysis: {
            A: "The FSCA does not grant individual extensions for the six-week complaint resolution window under the General Code.",
            B: "Fabricating a rejection to manipulate statutory timelines and close files constitutes a serious breach of the general duty of honesty and integrity.",
            D: "The statutory six-week timeline is absolute and cannot be suspended or paused due to external third-party investigations.",
          },
        },
      ],
    },
  },

  /* --------------------------------------------------------------------- */
  /*  QC14 — Termination of Agreements                                     */
  /* --------------------------------------------------------------------- */
  {
    id: "Task 4(QC14)",
    order: 14,
    title: "QC14 — Termination of Agreements",
    qcDescription:
      "Explain the requirements of the General Code of Conduct relating to the termination of an agreement.",
    statutoryRefs: ["General Code of Conduct s20, s20(a) & (c)"],
    youtubeId: "cTJPzbLxdfs",
    coreConcepts: [
      "Immediate written notification to affected clients when a representative's contract with an FSP is terminated.",
      "Ensuring pending transactions are processed and outstanding client portfolios transferred to a qualified advisor without client prejudice.",
      "Statutory record preservation: all client advice and transaction records must remain fully accessible for at least five years post-termination.",
    ],
    quiz: {
      questions: [
        {
          id: "qc14-q1",
          level: 1,
          format: "Knowledge",
          prompt:
            "After an FSP terminates the appointment of a representative, for how long must the FSP preserve the client advice and transaction records associated with that representative?",
          options: [
            { letter: "A", text: "1 year." },
            { letter: "B", text: "3 years." },
            { letter: "C", text: "5 years." },
            { letter: "D", text: "Indefinitely." },
          ],
          correct: "C",
          justification:
            "The General Code requires a minimum five-year retention period for advice and transaction records. This obligation continues to attach to the FSP after termination of the representative's appointment.",
          distractorAnalysis: {
            A: "One year is far below the statutory minimum.",
            B: "Three years is also below the statutory minimum.",
            D: "While longer retention is permitted, the statutory minimum is five years.",
          },
        },
        {
          id: "qc14-q2",
          level: 2,
          format: "Comprehension",
          prompt:
            "Under section 20 of the General Code, on termination of a representative's appointment, the FSP must:",
          options: [
            {
              letter: "A",
              text:
                "Wait for the next FSCA inspection to inform affected clients of the change.",
            },
            {
              letter: "B",
              text:
                "Notify affected clients in writing without delay and ensure that pending business is properly transferred or finalised so that clients are not prejudiced.",
            },
            {
              letter: "C",
              text:
                "Cancel all client policies on the books of the terminated representative.",
            },
            {
              letter: "D",
              text:
                "Refer all clients to the FAIS Ombud as a default measure.",
            },
          ],
          correct: "B",
          justification:
            "Section 20 requires immediate written notification to affected clients and the orderly handover of pending matters to qualified representatives to ensure continuity of service and avoid client prejudice.",
          distractorAnalysis: {
            A: "Awaiting an inspection breaches the immediate notification duty.",
            C: "Cancelling client policies has nothing to do with the representative's termination and would itself harm clients.",
            D: "Defaulting to the Ombud is not a substitute for orderly handover.",
          },
        },
        {
          id: "qc14-q3",
          level: 3,
          format: "Scenario",
          prompt:
            "An FSP terminates the appointment of a top-producing representative for a fit-and-proper breach. The representative had 350 active client relationships and three pending policy applications mid-flight. The FSP's correct course of action under section 20 is to:",
          options: [
            {
              letter: "A",
              text:
                "Permit the terminated representative to continue servicing existing clients informally until a replacement is appointed.",
            },
            {
              letter: "B",
              text:
                "Immediately notify all 350 affected clients in writing, transfer the relationships to suitably authorised replacement representatives, finalise the three pending applications or notify those clients of the alternative routes available, and secure all client records for retention.",
            },
            {
              letter: "C",
              text:
                "Cancel all pending applications and refund the related fees without informing the clients.",
            },
            {
              letter: "D",
              text:
                "Send a single bulk SMS announcing the resignation without further follow-up.",
            },
          ],
          correct: "B",
          justification:
            "Immediate written notification, orderly transfer to qualified replacements, completion (or clear redirection) of pending business, and full record retention are the four pillars of a compliant section 20 transition.",
          distractorAnalysis: {
            A: "Permitting a debarred or terminated representative to service clients is itself a breach.",
            C: "Silent cancellation and refunds prejudice the clients and breach the duty of fairness.",
            D: "Bulk SMS without substantive content fails the 'written notification' standard.",
          },
        },
        {
          id: "qc14-q4",
          level: 3,
          format: "Roman Numeral",
          prompt:
            "Which of the following must occur on the termination of an FSP-representative appointment?\n\ni. Written notification of the termination to affected clients without undue delay.\nii. Transfer of pending and ongoing matters to a suitably authorised representative.\niii. Retention of all advice and transaction records for at least five years.\niv. Destruction of all complaint records to protect the terminated representative's reputation.",
          options: [
            { letter: "A", text: "i, ii and iii only." },
            { letter: "B", text: "i and iv only." },
            { letter: "C", text: "ii, iii and iv only." },
            { letter: "D", text: "i, ii, iii and iv." },
          ],
          correct: "A",
          justification:
            "Items i, ii and iii are section 20 obligations. Item iv (destruction of complaint records) is unlawful — record retention duties continue post-termination, and destruction would itself constitute a serious breach.",
          distractorAnalysis: {
            B: "Includes the unlawful destruction step.",
            C: "Omits the client notification and includes the unlawful destruction step.",
            D: "Includes the unlawful destruction step.",
          },
        },
        {
          id: "qc14-q5",
          level: 4,
          format: "Analysis",
          prompt:
            "Eighteen months after an FSP terminated a representative, the Authority requests a full reconstruction of the advice file for one of that representative's former clients in response to a complaint to the FAIS Ombud. The FSP discovers that its records management system migrated to a new platform 12 months ago and a tranche of the terminated representative's files was inadvertently overwritten. The most accurate regulatory analysis is:",
          options: [
            {
              letter: "A",
              text:
                "No breach — the representative is no longer at the FSP, so retention duties have lapsed.",
            },
            {
              letter: "B",
              text:
                "A serious breach: the five-year retention duty survives the representative's termination and the FSP's failure to preserve files through a system migration exposes it to administrative sanctions, adverse Ombud findings and reputational damage.",
            },
            {
              letter: "C",
              text:
                "No breach — record retention only applies to advice files for currently active representatives.",
            },
            {
              letter: "D",
              text:
                "The FAIS Ombud has no jurisdiction over advice given before a representative's termination.",
            },
          ],
          correct: "B",
          justification:
            "The five-year retention duty attaches to the FSP, not the individual representative, and continues to apply after termination. Loss of records through a poorly managed system migration is a classic example of an FSP failure that triggers regulatory and Ombud findings.",
          distractorAnalysis: {
            A: "Termination does not extinguish the FSP's record-retention duty.",
            C: "The duty applies to all advice files within the retention window, regardless of representative status.",
            D: "The Ombud retains jurisdiction over historic conduct provided the complaint is timeously lodged.",
          },
        },
      ],
    },
  },
];
