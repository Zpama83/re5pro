/**
 * RE5 Supplementary deep-dive lessons.
 *
 * These videos cut across the eight-task syllabus rather than mapping to a
 * single Qualifying Criterion. They sit beneath the 14 Task-4 lessons in the
 * /course page and are intended as cross-cutting refreshers and exam
 * preparation.
 *
 * DRAFT — quiz copy authored from the supplied videos' topics and anchored to
 * post-Board Notice 194 of 2017 terminology ("Authority" / "FSCA"; never
 * "FSB" or "Registrar"). Pending compliance-officer review before exam-grade
 * use.
 */
import type { Lesson } from "@/data/re5Task4/types";

export const re5SupplementaryLessons: Lesson[] = [
  /* --------------------------------------------------------------------- */
  /*  S1 — FAIS Code of Conduct: Quick Concepts Refresher                  */
  /* --------------------------------------------------------------------- */
  {
    id: "Supp-Code-Refresher",
    order: 101,
    title: "FAIS Code of Conduct — Quick Concepts Refresher",
    qcDescription:
      "Cross-cutting walk-through of the General Code of Conduct duties that recur across Task 4 — packaged as a rapid pre-exam refresher.",
    statutoryRefs: [
      "General Code of Conduct s2, s3, s3A, s4, s5, s7, s8, s14, s16, s19, s20",
      "FAIS Act s2, s13, s27",
    ],
    youtubeId: "6tFDJVdLsD4",
    coreConcepts: [
      "The five statutory pillars of conduct: honesty, fairness, due skill, care, diligence — and the parallel duty to the integrity of the industry.",
      "The 'avoid → mitigate → disclose' hierarchy for conflicts of interest under section 3A.",
      "Disclosure, advice, record-keeping, complaints, and termination obligations as a single integrated chain.",
    ],
    quiz: {
      questions: [
        {
          id: "supp-code-q1",
          level: 1,
          format: "Knowledge",
          prompt:
            "Under section 2 of the General Code of Conduct, the duty to act with due skill, care and diligence is owed to:",
          options: [
            { letter: "A", text: "Only the FSP's largest paying clients." },
            {
              letter: "B",
              text:
                "Every client to whom a financial service is rendered, and to the integrity of the financial services industry as a whole.",
            },
            { letter: "C", text: "Only the product supplier." },
            { letter: "D", text: "Only the FSP's compliance officer." },
          ],
          correct: "B",
          justification:
            "Section 2 of the General Code creates parallel duties: a duty to every client to whom a financial service is rendered AND a duty to maintain the integrity of the financial services industry. Neither is subordinate to the other.",
          distractorAnalysis: {
            A: "Client size has no bearing on the duty of care.",
            C: "The duty runs to clients, not product suppliers.",
            D: "Compliance officers oversee the duty but are not its beneficiaries.",
          },
        },
        {
          id: "supp-code-q2",
          level: 2,
          format: "Negative",
          prompt:
            "Which of the following is FALSE in respect of an FSP's disclosure duties under sections 5 and 7 of the General Code?",
          options: [
            {
              letter: "A",
              text:
                "Disclosures must be made in plain language and in a manner that supports an informed decision.",
            },
            {
              letter: "B",
              text:
                "Material risks and exclusions must be specifically drawn to the client's attention.",
            },
            {
              letter: "C",
              text:
                "Once a disclosure has been made verbally, written confirmation is optional.",
            },
            {
              letter: "D",
              text:
                "Fees and commissions must be disclosed in monetary terms, or in a way that allows the client to determine the actual monetary cost.",
            },
          ],
          correct: "C",
          justification:
            "Verbal disclosure does not displace the duty to confirm in writing as soon as reasonably possible. Section 7 read with section 14 record-keeping makes written confirmation a positive obligation, not a courtesy.",
          distractorAnalysis: {
            A: "True — plain language and informed-decision standards are codified.",
            B: "True — section 7 requires material risks to be specifically highlighted.",
            D: "True — section 7(1)(c)(iii)(bb) requires monetary terms (or an equivalent).",
          },
        },
        {
          id: "supp-code-q3",
          level: 3,
          format: "Scenario",
          prompt:
            "A representative is asked to recommend a product manufactured by an asset manager that pays the FSP a tiered commission rising with volume placed. The representative discloses the commission on the FSP's website and proceeds with the recommendation. Over six months, 70% of the representative's new business goes to this supplier. The most accurate compliance assessment is:",
          options: [
            { letter: "A", text: "Fully compliant — disclosure cures the conflict." },
            {
              letter: "B",
              text:
                "The concentration pattern indicates the conflict has not been adequately MITIGATED under section 3A; disclosure alone does not discharge the duty to avoid or mitigate, and the FSP is exposed under section 2 (acting in the client's interests).",
            },
            {
              letter: "C",
              text:
                "Fully compliant — the FSP is entitled to favour higher-commission suppliers.",
            },
            {
              letter: "D",
              text:
                "Fully compliant once the FSP files the website URL with the Authority.",
            },
          ],
          correct: "B",
          justification:
            "Section 3A imposes a hierarchy — avoid, mitigate, disclose. Disclosure does not cure a failure to mitigate. Observable concentration of recommendations toward the higher-commission supplier is exactly the evidentiary pattern the Authority uses in supervision.",
          distractorAnalysis: {
            A: "Disclosure is one leg of the hierarchy, not a complete defence.",
            C: "Suitability — not commission — must drive recommendations.",
            D: "There is no Authority filing requirement that cures a conflict-management failure.",
          },
        },
        {
          id: "supp-code-q4",
          level: 3,
          format: "Roman Numeral",
          prompt:
            "Which of the following are part of an integrated post-rendering obligation chain under the General Code?\n\ni. Issuing a written confirmation of material disclosures as soon as reasonably possible.\nii. Maintaining a record of advice for at least five years.\niii. Running an internal complaints process that is accessible, fair and free of fees.\niv. Permanently deleting the advice record once a policy lapses.",
          options: [
            { letter: "A", text: "i, ii and iii only." },
            { letter: "B", text: "i and iv only." },
            { letter: "C", text: "ii, iii and iv only." },
            { letter: "D", text: "i, ii, iii and iv." },
          ],
          correct: "A",
          justification:
            "Items i, ii and iii are codified obligations. Item iv is the opposite of the law — the five-year retention duty continues regardless of policy status.",
          distractorAnalysis: {
            B: "Includes the unlawful deletion step.",
            C: "Omits written confirmation and includes the unlawful deletion step.",
            D: "Includes the unlawful deletion step.",
          },
        },
        {
          id: "supp-code-q5",
          level: 4,
          format: "Analysis",
          prompt:
            "An FSP discovers, mid-year, that a representative has been making verbal disclosures only, has not maintained call recordings, and has filed an internal complaint by emailing the rep's personal Gmail. The FSP's most defensible remediation is:",
          options: [
            {
              letter: "A",
              text:
                "Reissue written disclosures to all affected clients, reroute complaints to a controlled FSP mailbox, retrain the representative, and document the remediation in the compliance register — all without delay.",
            },
            {
              letter: "B",
              text:
                "Do nothing until an Authority inspection identifies the failures.",
            },
            {
              letter: "C",
              text: "Pay all clients a small refund without further investigation.",
            },
            {
              letter: "D",
              text:
                "Instruct the representative to recreate the missing call recordings from memory.",
            },
          ],
          correct: "A",
          justification:
            "Section 14 (records) and section 16 (complaints) require an integrated, evidenced and accessible process. Concurrent remediation across disclosures, complaints routing, retraining and documentation is the standard expected when systemic gaps are found.",
          distractorAnalysis: {
            B: "Waiting for an inspection breaches the proactive oversight duties of the Key Individual.",
            C: "Blanket refunds without investigation breach record-keeping and root-cause duties.",
            D: "Reconstructing call recordings from memory is an integrity breach.",
          },
        },
      ],
    },
  },

  /* --------------------------------------------------------------------- */
  /*  S2 — Continuing Professional Development (CPD) Calculations          */
  /* --------------------------------------------------------------------- */
  {
    id: "Supp-CPD-Calc",
    order: 102,
    title: "Calculating Your CPD Requirements (RE5 & RE1)",
    qcDescription:
      "How to count Continuing Professional Development (CPD) hours under the Fit and Proper requirements, including the activity types that qualify and the cycle within which they must be completed.",
    statutoryRefs: [
      "Determination of Fit and Proper Requirements (Board Notice 194 of 2017) Chapter 4",
      "FAIS Act s8(1)",
    ],
    youtubeId: "0S-QS1LVKBo",
    coreConcepts: [
      "The CPD cycle runs from 1 June to 31 May each year and applies to all FSPs, Key Individuals and representatives subject to CPD.",
      "Required CPD hours vary by category and the number of sub-classes of business in which the person is authorised.",
      "CPD activities must be verifiable, relevant, and delivered by an accredited or recognised provider — and recorded in a CPD log.",
    ],
    quiz: {
      questions: [
        {
          id: "supp-cpd-q1",
          level: 1,
          format: "Knowledge",
          prompt:
            "Under the Determination of Fit and Proper Requirements, the standard CPD cycle for FSPs, Key Individuals and representatives runs:",
          options: [
            { letter: "A", text: "From 1 January to 31 December each year." },
            { letter: "B", text: "From 1 March to 28 February each year." },
            { letter: "C", text: "From 1 June to 31 May each year." },
            { letter: "D", text: "From the appointment anniversary date." },
          ],
          correct: "C",
          justification:
            "The CPD cycle prescribed by the Fit and Proper Requirements runs annually from 1 June to 31 May. All required CPD hours must be earned and recorded within this window.",
          distractorAnalysis: {
            A: "The calendar year is not the CPD cycle.",
            B: "The financial-year cycle does not apply.",
            D: "Anniversary-date cycles are used in some industries but not by the Authority for FAIS CPD.",
          },
        },
        {
          id: "supp-cpd-q2",
          level: 2,
          format: "Comprehension",
          prompt:
            "Which statement best describes a 'verifiable' CPD activity under the Fit and Proper Requirements?",
          options: [
            {
              letter: "A",
              text:
                "Any time spent reading industry articles, regardless of source.",
            },
            {
              letter: "B",
              text:
                "An activity that is allocated CPD hours, delivered or accredited by a recognised provider, and capable of being independently evidenced through attendance records, assessment results or similar documentation.",
            },
            {
              letter: "C",
              text:
                "Any internal lunch meeting at the FSP.",
            },
            {
              letter: "D",
              text:
                "Time spent watching unstructured social media videos about finance.",
            },
          ],
          correct: "B",
          justification:
            "Verifiability requires accreditation/recognition, an allocated CPD-hour value, and independent documentary evidence. Self-directed reading and informal meetings, while educational, do not meet the verifiability standard on their own.",
          distractorAnalysis: {
            A: "Unstructured reading without accreditation and evidence is not verifiable.",
            C: "Internal informal meetings typically lack accreditation and assessment.",
            D: "Social-media content is not an accredited CPD source.",
          },
        },
        {
          id: "supp-cpd-q3",
          level: 3,
          format: "Scenario",
          prompt:
            "A representative authorised in two sub-classes of long-term insurance attends three webinars in the cycle: webinar A (2 hours, accredited, with assessment), webinar B (1.5 hours, accredited, no assessment but attendance certificate issued), and webinar C (3 hours, unaccredited industry talk). What is the best way to record these for CPD purposes?",
          options: [
            { letter: "A", text: "Claim all three webinars (6.5 hours) as verifiable CPD." },
            {
              letter: "B",
              text:
                "Record webinars A and B as verifiable CPD (3.5 hours combined) and log webinar C separately as non-verifiable industry exposure; verify the total against the hour requirement applicable to the representative's classes of business.",
            },
            { letter: "C", text: "Claim only webinar A; discard the rest." },
            { letter: "D", text: "Record nothing because none of the webinars carried an exam." },
          ],
          correct: "B",
          justification:
            "Accredited activities with evidence of attendance are verifiable; an unaccredited talk is not. The total verifiable hours must then be checked against the hour requirement for the representative's classes of business — neither over- nor under-claiming is acceptable.",
          distractorAnalysis: {
            A: "Including unaccredited activity in the verifiable total overstates the CPD position.",
            C: "An attendance certificate from an accredited webinar still counts toward verifiable CPD.",
            D: "An assessment is not the sole test of verifiability — accreditation and evidence are.",
          },
        },
        {
          id: "supp-cpd-q4",
          level: 3,
          format: "Roman Numeral",
          prompt:
            "Which of the following are recognised parts of the FSP's CPD compliance framework?\n\ni. Maintaining a CPD log for each FSP, Key Individual and representative.\nii. Ensuring CPD activities are relevant to the categories and sub-classes for which the person is authorised.\niii. Retaining CPD records for the prescribed retention period for inspection by the Authority.\niv. Allowing representatives to satisfy CPD by paying a fee instead of completing activities.",
          options: [
            { letter: "A", text: "i, ii and iii only." },
            { letter: "B", text: "i and iv only." },
            { letter: "C", text: "ii, iii and iv only." },
            { letter: "D", text: "i, ii, iii and iv." },
          ],
          correct: "A",
          justification:
            "Items i–iii are core elements of CPD compliance. Item iv is unlawful — CPD must be earned through activities, not bought.",
          distractorAnalysis: {
            B: "Includes the unlawful 'pay-instead' option.",
            C: "Omits the CPD log requirement and includes the unlawful option.",
            D: "Includes the unlawful option.",
          },
        },
        {
          id: "supp-cpd-q5",
          level: 4,
          format: "Analysis",
          prompt:
            "On 30 May, a Key Individual realises she is two hours short of her CPD requirement for the cycle. She schedules a 3-hour accredited webinar that will only take place on 4 June. The most accurate analysis is:",
          options: [
            {
              letter: "A",
              text: "She is compliant — the webinar booking counts toward the closing cycle.",
            },
            {
              letter: "B",
              text:
                "She is non-compliant for the closing cycle. CPD hours must be earned within the 1 June – 31 May cycle in which they are required; activities completed in the next cycle count toward that next cycle, not the prior one. She must report the shortfall and remediate as required by the Authority.",
            },
            { letter: "C", text: "She is compliant if she watches a 2-hour replay on 31 May." },
            { letter: "D", text: "She is compliant because Key Individuals are exempt from CPD." },
          ],
          correct: "B",
          justification:
            "CPD is earned within the cycle in which it is required. A planned-but-not-yet-completed activity does not retrospectively close the cycle. A shortfall is reportable and triggers Fit and Proper remediation steps.",
          distractorAnalysis: {
            A: "Bookings without completion do not satisfy the requirement.",
            C: "Replay viewing must itself be accredited and verifiable; assumptions don't fix the gap.",
            D: "Key Individuals are subject to CPD requirements, often at a higher level than representatives.",
          },
        },
      ],
    },
  },

  /* --------------------------------------------------------------------- */
  /*  S3 — High-Frequency RE5 Exam Concepts                                */
  /* --------------------------------------------------------------------- */
  {
    id: "Supp-Important-Concepts",
    order: 103,
    title: "High-Frequency RE5 Exam Concepts",
    qcDescription:
      "A round-up of concepts that appear most often in RE5 questions — definitions, timelines and category boundaries that candidates regularly mis-state.",
    statutoryRefs: [
      "FAIS Act s1 (definitions), s7, s8, s13, s14, s27",
      "General Code of Conduct s1 (definitions)",
    ],
    youtubeId: "5WPGy1sVCIE",
    coreConcepts: [
      "Statutory definitions: 'advice', 'intermediary service', 'financial service', 'financial product', 'representative'.",
      "The four FSP categories (I — advice and/or intermediary; II — discretionary; IIA — hedge funds; III — administrative) and what each may and may not do.",
      "The handful of timelines candidates lose marks on: 1 business day, 6 weeks, 6 months, 5 years.",
    ],
    quiz: {
      questions: [
        {
          id: "supp-imp-q1",
          level: 1,
          format: "Knowledge",
          prompt:
            "Under the FAIS Act, the statutory definition of 'advice' specifically EXCLUDES which of the following?",
          options: [
            {
              letter: "A",
              text:
                "A personalised recommendation in respect of a specific financial product.",
            },
            {
              letter: "B",
              text:
                "Factual information provided by a person on the procedure for entering into a transaction.",
            },
            {
              letter: "C",
              text:
                "Guidance on the merits of replacing one financial product with another.",
            },
            {
              letter: "D",
              text:
                "An opinion on the financial implications of a particular product.",
            },
          ],
          correct: "B",
          justification:
            "The FAIS Act expressly excludes from the definition of 'advice' the provision of factual information by a person on procedures, the existence of products, or factual product features — provided the person does not make a recommendation.",
          distractorAnalysis: {
            A: "Personalised recommendations are at the heart of the definition.",
            C: "Replacement advice is included and triggers additional disclosure duties.",
            D: "Opinions on financial implications are advice.",
          },
        },
        {
          id: "supp-imp-q2",
          level: 2,
          format: "Comprehension",
          prompt:
            "The key distinction between a Category I FSP and a Category II FSP is best described as:",
          options: [
            { letter: "A", text: "Category II FSPs are exempt from the General Code." },
            {
              letter: "B",
              text:
                "A Category II FSP holds a discretionary mandate from clients and may take investment decisions without per-transaction consent; a Category I FSP renders advice and/or intermediary services without that discretion.",
            },
            { letter: "C", text: "Category I FSPs may not earn commission." },
            { letter: "D", text: "Category II FSPs may only deal in collective investment schemes." },
          ],
          correct: "B",
          justification:
            "Discretionary authority is the defining boundary between Category I and Category II. Both categories remain fully subject to the General Code and to FAIS Act duties.",
          distractorAnalysis: {
            A: "No FSP category is exempt from the General Code.",
            C: "Category I FSPs commonly earn commission.",
            D: "Category II discretion extends across a wide range of products, not only collective investment schemes.",
          },
        },
        {
          id: "supp-imp-q3",
          level: 3,
          format: "Scenario",
          prompt:
            "A new representative is asked to summarise four FAIS timelines for the team: the one-business-day rule, the six-week rule, the six-month rule, and the five-year rule. Which of the following correctly pairs each timeline with its statutory function?",
          options: [
            {
              letter: "A",
              text:
                "1 business day = client-fund deposit; 6 weeks = internal complaint resolution; 6 months = window to refer to the FAIS Ombud after rejection; 5 years = minimum record-retention period.",
            },
            {
              letter: "B",
              text:
                "1 business day = cooling-off period; 6 weeks = product-supplier reporting; 6 months = onboarding KYC; 5 years = licence renewal interval.",
            },
            {
              letter: "C",
              text:
                "1 business day = complaint acknowledgement; 6 weeks = annual leave for representatives; 6 months = CPD cycle midpoint; 5 years = debarment look-back period.",
            },
            {
              letter: "D",
              text:
                "1 business day = pre-contact disclosure; 6 weeks = product-cooling-off; 6 months = market-conduct survey; 5 years = annual return frequency.",
            },
          ],
          correct: "A",
          justification:
            "Option A correctly aligns each timeline. These four numbers appear in roughly half of all RE5 quantitative questions; mis-pairing any one of them is a high-frequency exam error.",
          distractorAnalysis: {
            B: "Wrong on every pairing.",
            C: "Wrong on every pairing.",
            D: "Wrong on every pairing.",
          },
        },
        {
          id: "supp-imp-q4",
          level: 3,
          format: "Roman Numeral",
          prompt:
            "Which of the following are 'financial services' under the FAIS Act?\n\ni. Giving advice on the purchase of a long-term insurance policy.\nii. Acting as intermediary by collecting premiums on behalf of a product supplier.\niii. Selling a non-financial physical asset such as a residential property.\niv. Providing discretionary management of a client's investment portfolio under a written mandate.",
          options: [
            { letter: "A", text: "i, ii and iv only." },
            { letter: "B", text: "i and iii only." },
            { letter: "C", text: "ii, iii and iv only." },
            { letter: "D", text: "i, ii, iii and iv." },
          ],
          correct: "A",
          justification:
            "Advice on a financial product (i), intermediary service in respect of a financial product (ii), and discretionary investment management (iv) are all financial services. Selling residential property (iii) is not a financial service under the FAIS Act.",
          distractorAnalysis: {
            B: "Wrongly includes residential property and omits intermediary services.",
            C: "Wrongly includes residential property.",
            D: "Wrongly includes residential property.",
          },
        },
        {
          id: "supp-imp-q5",
          level: 4,
          format: "Analysis",
          prompt:
            "An exam stem reads: 'An FSP receives a written complaint on 1 March and issues a final written rejection on 4 April. The client refers the matter to the FAIS Ombud on 28 October.' Which is the most accurate analysis?",
          options: [
            {
              letter: "A",
              text:
                "The referral is out of time because more than six months have elapsed since receipt of the complaint by the FSP.",
            },
            {
              letter: "B",
              text:
                "The referral is within time. The six-month window for referral to the Ombud runs from the date of the final rejection (4 April), not the date of original receipt — 28 October is within that window.",
            },
            {
              letter: "C",
              text:
                "The referral is out of time because more than six weeks have elapsed since the FSP's rejection.",
            },
            {
              letter: "D",
              text:
                "The referral is invalid because the client did not respond within six weeks.",
            },
          ],
          correct: "B",
          justification:
            "The six-week and six-month rules operate sequentially. Six weeks runs FROM RECEIPT for internal resolution; the six-month referral window runs FROM the FSP's final rejection. The client has six months from 4 April to refer — 28 October is within that window.",
          distractorAnalysis: {
            A: "Confuses the receipt date with the rejection date.",
            C: "Applies the six-week (internal) rule to the (external) referral process.",
            D: "Invents a non-existent client deadline.",
          },
        },
      ],
    },
  },

  /* --------------------------------------------------------------------- */
  /*  S4 — RE5 Exam Tactics & Time Strategy                                */
  /* --------------------------------------------------------------------- */
  {
    id: "Supp-Exam-Tactics",
    order: 104,
    title: "RE5 Exam Tactics & Time Strategy",
    qcDescription:
      "Exam mechanics and strategy: pacing, distractor patterns, negative-question handling, and how to maximise marks under the 50-question pass-rate threshold.",
    statutoryRefs: [
      "FAIS Act — Determination of Fit and Proper Requirements (regulatory examination structure)",
    ],
    youtubeId: "EVqd3d0QLbI",
    coreConcepts: [
      "The 50-question, closed-book structure and the 66% pass mark (33 of 50 correct).",
      "How to decode negative questions ('Which is FALSE…') and Roman-numeral combination questions without time loss.",
      "Time budgeting: the rough 2-minute-per-question working budget and how to handle questions you cannot resolve on first pass.",
    ],
    quiz: {
      questions: [
        {
          id: "supp-exam-q1",
          level: 1,
          format: "Knowledge",
          prompt:
            "The RE5 examination for representatives is structured as:",
          options: [
            { letter: "A", text: "30 multiple-choice questions with a 50% pass mark." },
            {
              letter: "B",
              text:
                "50 multiple-choice questions with a 66% pass mark — i.e. a minimum of 33 correct answers required.",
            },
            { letter: "C", text: "100 multiple-choice questions over four hours." },
            { letter: "D", text: "An open-book essay format graded by an external examiner." },
          ],
          correct: "B",
          justification:
            "The RE5 is a closed-book 50-question multiple-choice examination with a 66% pass mark, translating into a minimum of 33 correct answers.",
          distractorAnalysis: {
            A: "Understates both the question count and the pass mark.",
            C: "Overstates the question count.",
            D: "RE5 is multiple-choice, not essay-based.",
          },
        },
        {
          id: "supp-exam-q2",
          level: 2,
          format: "Comprehension",
          prompt:
            "A negative question is best handled by:",
          options: [
            { letter: "A", text: "Selecting the longest option, since correct answers are usually longest." },
            {
              letter: "B",
              text:
                "Reading the stem carefully to identify the negative marker (e.g. 'FALSE', 'NOT', 'EXCEPT'), then evaluating each option against the law and choosing the one that does NOT match.",
            },
            { letter: "C", text: "Skipping the question and returning at the end." },
            { letter: "D", text: "Choosing the option closest to the question's wording." },
          ],
          correct: "B",
          justification:
            "Negative questions invert the test. Decoding the marker first and then evaluating each option against the law is the only reliable approach. Length and word-overlap heuristics are deliberately undermined by exam authors.",
          distractorAnalysis: {
            A: "Length heuristics fail on negative questions.",
            C: "Skipping is appropriate sparingly but is not a strategy for this question type.",
            D: "Word-overlap heuristics are exactly what distractors exploit.",
          },
        },
        {
          id: "supp-exam-q3",
          level: 3,
          format: "Scenario",
          prompt:
            "Twenty minutes into the exam you have answered eight questions, of which three you flagged as 'unsure'. The remaining 42 questions stretch ahead. The best tactical response is:",
          options: [
            {
              letter: "A",
              text:
                "Slow down further and re-read each question three times to avoid mistakes.",
            },
            {
              letter: "B",
              text:
                "Maintain or slightly increase pace toward the target of roughly two minutes per question, leaving the three 'unsure' answers as your provisional best choice and returning to them only after completing the full paper.",
            },
            { letter: "C", text: "Hand in the paper and rebook." },
            {
              letter: "D",
              text:
                "Skip every difficult question entirely and rely on the 33-mark threshold being lenient.",
            },
          ],
          correct: "B",
          justification:
            "At roughly 2 minutes per question for a 100-minute paper, eight in twenty minutes is on the slower side. Maintaining pace, recording a provisional best answer, and revisiting flagged questions at the end is the standard tactical play.",
          distractorAnalysis: {
            A: "Repeated rereading rarely changes the answer and burns time.",
            C: "Withdrawing forfeits any chance of passing.",
            D: "Skipping rather than provisional-answering risks leaving questions blank if time runs out.",
          },
        },
        {
          id: "supp-exam-q4",
          level: 3,
          format: "Roman Numeral",
          prompt:
            "Which of the following are sound RE5 exam-strategy practices?\n\ni. Answer every question — there is no negative marking for incorrect answers in the RE5.\nii. Provisionally answer questions you intend to revisit, rather than leaving them blank.\niii. Read Roman-numeral combinations by first deciding the validity of each numeral individually, then matching to options.\niv. Pre-commit to selecting option 'C' whenever you are uncertain, as 'C' is the most common correct answer.",
          options: [
            { letter: "A", text: "i, ii and iii only." },
            { letter: "B", text: "i and iv only." },
            { letter: "C", text: "ii, iii and iv only." },
            { letter: "D", text: "i, ii, iii and iv." },
          ],
          correct: "A",
          justification:
            "Items i–iii are well-evidenced exam strategy. Item iv is a myth — exam authors actively balance the position of correct answers to defeat letter-bias heuristics.",
          distractorAnalysis: {
            B: "Includes the letter-bias myth.",
            C: "Omits the always-answer rule and includes the letter-bias myth.",
            D: "Includes the letter-bias myth.",
          },
        },
        {
          id: "supp-exam-q5",
          level: 4,
          format: "Analysis",
          prompt:
            "You complete the paper with 12 minutes remaining and 6 questions flagged for review. Three of your flagged answers feel 'B' but were initially answered 'C'; two flagged answers you genuinely cannot decide; one flagged answer involves a negative-question stem you now read more carefully. The best use of the remaining time is to:",
          options: [
            {
              letter: "A",
              text:
                "Switch every flagged answer to your gut second-guess — gut feel improves with rest.",
            },
            {
              letter: "B",
              text:
                "Re-read each flagged stem against the law. Switch an answer only where re-reading produces a clear, evidence-based reason to change; do not change answers based purely on second-guessing. Use the extra minutes on the negative-question stem and the two truly unresolved questions.",
            },
            { letter: "C", text: "Leave all flagged questions as-is and hand in early." },
            {
              letter: "D",
              text:
                "Switch all 'C' answers to 'B' because second instinct is statistically better.",
            },
          ],
          correct: "B",
          justification:
            "Evidence-based review beats both reflex-switching and reflex-leaving. The default position for flagged answers is to retain them unless the review surfaces a specific, defensible reason to change.",
          distractorAnalysis: {
            A: "Reflex second-guessing reverses correct answers as often as wrong ones.",
            C: "Leaving genuine uncertainty unexplored wastes the review window.",
            D: "There is no statistical justification for blanket letter-switching.",
          },
        },
      ],
    },
  },
];
