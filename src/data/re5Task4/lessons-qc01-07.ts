/**
 * RE5 Task 4 lessons — QC1 to QC7.
 *
 * DRAFT — quiz copy authored from the supplied Master Meta-Prompt blueprint and the
 * exemplar (QC13). All statutory citations follow post-Board Notice 194 of 2017
 * terminology ("Financial Sector Conduct Authority" / "the Authority"; never "FSB"
 * or "Registrar"). Pending compliance-officer review before exam-grade use.
 */
import type { Lesson } from "./types";

export const lessonsQc01to07: Lesson[] = [
  /* --------------------------------------------------------------------- */
  /*  QC1 — General & Specific Duties of a Provider                        */
  /* --------------------------------------------------------------------- */
  {
    id: "Task 4(QC1)",
    order: 1,
    title: "QC1 — General & Specific Duties of a Provider",
    qcDescription:
      "Describe the general and specific duties of a provider.",
    statutoryRefs: [
      "FAIS Act s2, s7, s8(1), s10, s12",
      "General Code of Conduct s2, s3",
    ],
    youtubeId: "eBhVIvoTViU",
    coreConcepts: [
      "Overarching duty to act honestly, fairly, and with due skill, care and diligence.",
      "Duty to prioritise the client's interests and maintain the integrity of the financial services industry.",
      "Operational boundaries and good-faith conduct expected of every representative.",
    ],
    quiz: {
      questions: [
        {
          id: "qc1-q1",
          level: 1,
          format: "Knowledge",
          prompt:
            "In terms of section 2 of the General Code of Conduct, a provider must at all times render financial services with which combination of qualities?",
          options: [
            { letter: "A", text: "Speed, accuracy, and profitability." },
            {
              letter: "B",
              text:
                "Honesty, fairness, and with due skill, care and diligence, and in the interests of clients and the integrity of the industry.",
            },
            {
              letter: "C",
              text:
                "Discretion, exclusivity, and prioritisation of the FSP's commercial strategy.",
            },
            {
              letter: "D",
              text:
                "Compliance, marketing acumen, and adherence to product supplier directives.",
            },
          ],
          correct: "B",
          justification:
            "Section 2 of the General Code of Conduct expressly imposes the duty to render services 'honestly, fairly, with due skill, care and diligence, and in the interests of clients and the integrity of the financial services industry.' These pillars form the foundation of every other conduct obligation in Task 4.",
          distractorAnalysis: {
            A: "Speed and profitability are operational metrics, not statutory pillars of conduct.",
            C: "Discretion has a defined regulatory meaning (Category II FSPs); it is not a general duty owed to clients.",
            D: "Adherence to product supplier directives does not override the duty to act in the client's interests — it is in fact a common trigger for conflict of interest breaches.",
          },
        },
        {
          id: "qc1-q2",
          level: 2,
          format: "Negative",
          prompt:
            "Which of the following statements regarding the general duties of an authorised FSP is FALSE?",
          options: [
            {
              letter: "A",
              text:
                "An FSP must avoid using language that is misleading or contains uncertainty about the financial product or service.",
            },
            {
              letter: "B",
              text:
                "An FSP must maintain the integrity of the financial services industry as a whole, not only the interests of its own clients.",
            },
            {
              letter: "C",
              text:
                "An FSP's duty to act with due skill, care and diligence applies only to advice, not to intermediary services such as policy administration.",
            },
            {
              letter: "D",
              text:
                "An FSP must avoid any conduct that would bring the financial services industry into disrepute.",
            },
          ],
          correct: "C",
          justification:
            "Section 2 of the General Code makes the duty of skill, care and diligence applicable to the rendering of any 'financial service', which is statutorily defined to include both advice and intermediary services. The duty is not limited to advice.",
          distractorAnalysis: {
            A: "True — the prohibition on misleading or uncertain communication is a core conduct obligation.",
            B: "True — section 2 expressly extends the duty to the integrity of the industry as a whole.",
            D: "True — bringing the industry into disrepute is a recognised conduct breach.",
          },
        },
        {
          id: "qc1-q3",
          level: 3,
          format: "Scenario",
          prompt:
            "A representative receives a written instruction from a long-standing client to switch the client's entire retirement annuity into a single high-volatility offshore equity fund. The representative has performed no needs analysis, knows the client is two years from retirement, and is aware the switch will trigger material tax and currency risks. The client insists the instruction must be acted on the same day. What is the legally compliant course of action?",
          options: [
            {
              letter: "A",
              text:
                "Process the switch immediately, on the basis that the written client instruction overrides the representative's duty to assess suitability.",
            },
            {
              letter: "B",
              text:
                "Decline to process the instruction unless and until the client either accepts a documented record of advice or signs a written acknowledgement that the representative has warned of the risks and that the client is proceeding on an execution-only basis.",
            },
            {
              letter: "C",
              text:
                "Process the switch but reverse it the following business day if the rand weakens, on a 'best endeavours' basis.",
            },
            {
              letter: "D",
              text:
                "Refer the client to a different representative within the FSP without giving any reasons, to avoid personal compliance exposure.",
            },
          ],
          correct: "B",
          justification:
            "Section 2 of the General Code requires the representative to act in the client's interests and with due skill, care and diligence. Where the client refuses a full needs analysis, the representative must issue a written warning of the risks of restricted/execution-only advice (read together with section 8 obligations) and obtain the client's documented acknowledgement before proceeding.",
          distractorAnalysis: {
            A: "A written instruction does not displace the statutory suitability and skill-and-care duties — the FSP remains liable for breaches.",
            C: "Reactive reversals on a 'best endeavours' basis breach the duty of diligence and create further conflicts.",
            D: "Silent referral within the FSP does not extinguish the duty owed to the client and may amount to abandonment of the client's interests.",
          },
        },
        {
          id: "qc1-q4",
          level: 3,
          format: "Roman Numeral",
          prompt:
            "Which of the following obligations form part of the specific duties of an authorised provider under the General Code of Conduct?\n\ni. Act with due skill, care and diligence.\nii. Guarantee positive returns on every recommended product.\niii. Ensure all communications are factually correct and not misleading.\niv. Avoid bringing the financial services industry into disrepute.",
          options: [
            { letter: "A", text: "i, ii and iii only." },
            { letter: "B", text: "i, iii and iv only." },
            { letter: "C", text: "ii, iii and iv only." },
            { letter: "D", text: "i, ii, iii and iv." },
          ],
          correct: "B",
          justification:
            "Statements i, iii and iv are all codified obligations under sections 2–3 of the General Code. Statement ii is the opposite of the law: an FSP must not guarantee returns it cannot deliver, and doing so amounts to a misleading representation.",
          distractorAnalysis: {
            A: "Incorrectly includes the prohibited 'guarantee of returns'.",
            C: "Omits the foundational duty of skill, care and diligence.",
            D: "Includes the prohibited 'guarantee of returns'.",
          },
        },
        {
          id: "qc1-q5",
          level: 4,
          format: "Analysis Scenario",
          prompt:
            "A representative is approached by a sophisticated client who instructs the FSP to structure an investment using a vehicle that is technically lawful but, on the representative's assessment, is widely used to facilitate tax base-erosion and would, if it became publicly associated with the FSP, undermine public trust in the industry. The client threatens to terminate the relationship if the structure is refused. Under the duties imposed by section 2 of the General Code, the representative's correct primary obligation is to:",
          options: [
            {
              letter: "A",
              text:
                "Implement the structure because client instructions take precedence over reputational considerations.",
            },
            {
              letter: "B",
              text:
                "Implement the structure but log the matter in the FSP's complaints register for later review.",
            },
            {
              letter: "C",
              text:
                "Decline to implement the structure, document the rationale, and escalate the matter to the Key Individual on the basis that the duty to maintain the integrity of the industry sits alongside, and is not subordinated to, the duty to the individual client.",
            },
            {
              letter: "D",
              text:
                "Implement the structure on condition the client signs a confidentiality undertaking that prevents disclosure to the Authority.",
            },
          ],
          correct: "C",
          justification:
            "Section 2 of the General Code imposes parallel duties: act in the interests of the client AND maintain the integrity of the industry. Where these conflict, the representative cannot resolve the tension by privileging the client. Declining, documenting and escalating to the Key Individual is the only compliant pathway.",
          distractorAnalysis: {
            A: "Client instructions do not override the statutory duty to industry integrity.",
            B: "The complaints register is not a substitute for refusing to participate in conduct that breaches section 2.",
            D: "An undertaking that purports to prevent disclosure to the Authority is itself a breach and cannot cure the underlying conduct.",
          },
        },
      ],
    },
  },

  /* --------------------------------------------------------------------- */
  /*  QC2 — Conflict of Interest Management                                */
  /* --------------------------------------------------------------------- */
  {
    id: "Task 4(QC2)",
    order: 2,
    title: "QC2 — Conflict of Interest Management",
    qcDescription: "Describe what could possibly be a conflict of interest.",
    statutoryRefs: [
      "General Code of Conduct s3(1), s3A",
      "Board Notice 58 of 2010",
    ],
    youtubeId: "TvF3Bbf3-dw",
    coreConcepts: [
      "Statutory definition of a conflict of interest and the 'avoid → mitigate → disclose' framework.",
      "Definition of 'financial interest' and the narrow scope of an 'immaterial financial interest'.",
      "The R1,000 per representative per calendar year ceiling on non-cash incentives from a single third party.",
    ],
    quiz: {
      questions: [
        {
          id: "qc2-q1",
          level: 1,
          format: "Knowledge",
          prompt:
            "Under Board Notice 58 of 2010, what is the maximum monetary value of an 'immaterial financial interest' that a provider may receive from a single third party per calendar year?",
          options: [
            { letter: "A", text: "R500" },
            { letter: "B", text: "R1,000" },
            { letter: "C", text: "R2,500" },
            { letter: "D", text: "R5,000" },
          ],
          correct: "B",
          justification:
            "Board Notice 58 of 2010 caps an 'immaterial financial interest' at R1,000 per provider, per third party, per calendar year. Anything above this threshold is a material financial interest and falls into the prohibited or strictly disclosable categories of section 3A of the General Code.",
          distractorAnalysis: {
            A: "R500 is a commonly assumed but incorrect figure.",
            C: "R2,500 has no statutory basis under Board Notice 58.",
            D: "R5,000 is materially above the statutory ceiling and would constitute a prohibited financial interest if received from a product supplier.",
          },
        },
        {
          id: "qc2-q2",
          level: 2,
          format: "Comprehension",
          prompt:
            "Which of the following best describes the regulatory hierarchy that an FSP must apply when a conflict of interest is identified under section 3A of the General Code of Conduct?",
          options: [
            {
              letter: "A",
              text:
                "Disclose first; if disclosure is impractical, then mitigate; avoidance is optional.",
            },
            {
              letter: "B",
              text:
                "Mitigate first; if mitigation fails, disclose; avoidance is only required where the FSP is loss-making.",
            },
            {
              letter: "C",
              text:
                "Avoid the conflict where reasonably possible; where it cannot be avoided, mitigate it; and in all cases disclose its existence, nature and potential impact to the client.",
            },
            {
              letter: "D",
              text:
                "Refer all conflicts to the Authority for a binding ruling before taking any other steps.",
            },
          ],
          correct: "C",
          justification:
            "Section 3A and the related Conflict of Interest Management Policy framework require providers to first avoid conflicts where reasonably possible, then mitigate residual conflicts, and in all cases disclose them. Disclosure on its own is not a substitute for avoidance or mitigation.",
          distractorAnalysis: {
            A: "Inverts the statutory hierarchy — avoidance is the primary obligation.",
            B: "Mitigation is not the first step, and avoidance is never 'optional'.",
            D: "The Authority does not issue binding case-by-case rulings; the FSP must manage conflicts within its own policy framework.",
          },
        },
        {
          id: "qc2-q3",
          level: 3,
          format: "Scenario",
          prompt:
            "A product supplier offers a representative an all-expenses-paid international trip valued at R45,000, conditional on the representative writing more than R10 million of new business in the supplier's flagship investment product during the calendar year. Under Board Notice 58 of 2010, this offer is:",
          options: [
            {
              letter: "A",
              text:
                "Permitted, provided the representative discloses the trip in writing to all clients placed into the product.",
            },
            {
              letter: "B",
              text:
                "A prohibited financial interest because it is a volume-based incentive from a product supplier that exceeds the immaterial-financial-interest threshold, and it cannot be cured by disclosure.",
            },
            {
              letter: "C",
              text:
                "Permitted, on condition the FSP records it in its Conflict of Interest Management Policy and recovers it as taxable income.",
            },
            {
              letter: "D",
              text:
                "Permitted if the representative donates an equivalent amount to charity.",
            },
          ],
          correct: "B",
          justification:
            "Board Notice 58 prohibits a provider from offering or receiving any financial interest from a product supplier other than commission lawfully payable, fees lawfully payable, an immaterial financial interest under the R1,000 ceiling, or a fee/remuneration for outsourced services. A volume-tiered international trip falls into none of these categories and is a prohibited financial interest.",
          distractorAnalysis: {
            A: "Disclosure cannot cure a prohibited interest — the structure itself is unlawful.",
            C: "Logging in a policy or tax treatment does not legalise a prohibited financial interest.",
            D: "Charity diversion has no legal effect on the prohibition.",
          },
        },
        {
          id: "qc2-q4",
          level: 3,
          format: "Roman Numeral",
          prompt:
            "Which of the following are recognised steps within a compliant Conflict of Interest Management framework?\n\ni. Maintain a written Conflict of Interest Management Policy adopted by the FSP.\nii. Identify, record, and rank all actual and potential conflicts on an ongoing basis.\niii. Allow representatives to accept any non-cash gift from a product supplier provided it is not in cash.\niv. Disclose the existence and nature of the conflict to the affected client in writing.",
          options: [
            { letter: "A", text: "i, ii and iv only." },
            { letter: "B", text: "i, iii and iv only." },
            { letter: "C", text: "ii and iii only." },
            { letter: "D", text: "i, ii, iii and iv." },
          ],
          correct: "A",
          justification:
            "A compliant framework requires a written policy (i), ongoing identification and recording of conflicts (ii) and disclosure to the client (iv). Statement iii is incorrect — non-cash does not automatically equal lawful; the R1,000 immaterial-financial-interest ceiling and the prohibitions in Board Notice 58 still apply.",
          distractorAnalysis: {
            B: "Includes the false 'all non-cash is permitted' rule.",
            C: "Omits the policy and disclosure requirements and includes the false non-cash rule.",
            D: "Includes the false non-cash rule.",
          },
        },
        {
          id: "qc2-q5",
          level: 4,
          format: "Analysis",
          prompt:
            "An FSP receives a tiered, volume-based 'override commission' from a product supplier that increases in percentage as the FSP places more business with that supplier. The FSP discloses the existence of the override to clients on its website. A subsequent audit reveals that 78% of new client recommendations over the past year were directed to that supplier. Which of the following is the most accurate regulatory analysis?",
          options: [
            {
              letter: "A",
              text:
                "There is no breach because the override is disclosed and commission arrangements are permitted under Board Notice 58.",
            },
            {
              letter: "B",
              text:
                "Disclosure on a website is sufficient to cure any conflict; the concentration of recommendations is irrelevant.",
            },
            {
              letter: "C",
              text:
                "Even where the commission itself may be lawful, the concentration pattern is evidence that the conflict has not been adequately mitigated and that representatives may have prioritised the FSP's financial interest over client suitability — a section 2 and section 3A breach.",
            },
            {
              letter: "D",
              text:
                "The matter should be self-reported to the FAIS Ombud, who has jurisdiction to fine the FSP.",
            },
          ],
          correct: "C",
          justification:
            "Disclosure does not discharge the obligation to mitigate. Where override structures create observable bias in advice patterns, the FSP has failed in its mitigation duty under section 3A and is in breach of section 2 (acting in the client's interests). Concentration data is exactly the kind of evidence the Authority uses in on-site supervision.",
          distractorAnalysis: {
            A: "Lawful commission can still produce unlawful outcomes if it is not mitigated.",
            B: "Website disclosure alone is not 'in writing to the client' for material conflicts and does not cure mitigation failures.",
            D: "The FAIS Ombud adjudicates client complaints; conflict-of-interest enforcement sits with the Authority, not the Ombud.",
          },
        },
      ],
    },
  },

  /* --------------------------------------------------------------------- */
  /*  QC3 — Disclosure Rules and Impact on the FSP                         */
  /* --------------------------------------------------------------------- */
  {
    id: "Task 4(QC3)",
    order: 3,
    title: "QC3 — Disclosure Rules and Impact on the FSP",
    qcDescription:
      "Define the requirements and impact of disclosure rules on the FSP.",
    statutoryRefs: [
      "General Code of Conduct s4(4), s5, s5(e), s7, s14",
    ],
    youtubeId: "wjHYgLSeX2A",
    playlist: {
      listId: "PLDG_u2RxaazpfpGxSnl5CgpyZ4bJmPBE0",
      index: 12,
    },
    coreConcepts: [
      "Joint and several liability of the FSP for the conduct of its appointed representatives.",
      "The operational and licensing impact on an FSP when representatives fail to make required disclosures.",
      "The Key Individual's statutory duty to oversee and monitor representative disclosure adherence.",
    ],
    quiz: {
      questions: [
        {
          id: "qc3-q1",
          level: 1,
          format: "Knowledge",
          prompt:
            "An authorised FSP is liable to a client for the conduct of its appointed representatives on what statutory basis?",
          options: [
            {
              letter: "A",
              text:
                "Only where the FSP has expressly ratified the representative's conduct in writing.",
            },
            {
              letter: "B",
              text:
                "Jointly and severally with the representative, where the conduct was within the course and scope of the representative's mandate.",
            },
            {
              letter: "C",
              text:
                "Only after the FAIS Ombud has made a finding of mis-selling.",
            },
            {
              letter: "D",
              text:
                "Only where the representative is not under supervision.",
            },
          ],
          correct: "B",
          justification:
            "Under section 13 of the FAIS Act, an FSP is liable to a client for the actions of its representatives performed within the course and scope of the representative's mandate. This is a joint and several liability that does not depend on prior ratification or an Ombud finding.",
          distractorAnalysis: {
            A: "Express ratification is not required — liability flows from the appointment.",
            C: "Liability exists in law; an Ombud finding is a remedy, not a precondition.",
            D: "Supervision status does not extinguish FSP liability; if anything, it heightens it.",
          },
        },
        {
          id: "qc3-q2",
          level: 2,
          format: "Negative",
          prompt:
            "Which of the following is NOT a direct consequence that may flow from a systemic failure by an FSP's representative network to make the disclosures required by the General Code of Conduct?",
          options: [
            {
              letter: "A",
              text:
                "Administrative penalties and conditions imposed on the FSP's licence by the Authority.",
            },
            {
              letter: "B",
              text:
                "Civil liability to affected clients under section 13 of the FAIS Act.",
            },
            {
              letter: "C",
              text:
                "Debarment of the Key Individual where oversight failures are established.",
            },
            {
              letter: "D",
              text:
                "Automatic cancellation of the underlying product supplier's manufacturing licence.",
            },
          ],
          correct: "D",
          justification:
            "Disclosure failures by an FSP's representatives do not trigger automatic cancellation of a product supplier's licence. Consequences fall on the FSP and its Key Individual: administrative penalties, civil liability, and potential debarment of the KI for oversight failures.",
          distractorAnalysis: {
            A: "Administrative penalties are a recognised consequence under the FAIS Act.",
            B: "Civil liability flows from section 13.",
            C: "Debarment of the Key Individual is a real risk where oversight obligations were neglected.",
          },
        },
        {
          id: "qc3-q3",
          level: 3,
          format: "Scenario",
          prompt:
            "An internal audit finds that 30% of advice records over the past quarter contain no disclosure of the FSP's licence number or category. The Key Individual was provided with this information eight weeks earlier but did not investigate. Which is the most legally accurate description of the Key Individual's exposure?",
          options: [
            {
              letter: "A",
              text:
                "The Key Individual has no personal exposure because compliance is the role of the representatives.",
            },
            {
              letter: "B",
              text:
                "The Key Individual faces personal regulatory exposure (including debarment) because section 8 of the FAIS Act and the General Code impose ongoing oversight, monitoring and remediation duties.",
            },
            {
              letter: "C",
              text:
                "The Key Individual must wait for the Authority to issue a Notice before taking any action.",
            },
            {
              letter: "D",
              text:
                "The Key Individual's exposure is limited to a written warning by the FSP's board.",
            },
          ],
          correct: "B",
          justification:
            "A Key Individual is statutorily responsible for managing and overseeing the rendering of financial services by the FSP and its representatives. Ignoring known compliance gaps for an extended period is a textbook oversight failure that can result in administrative action, including debarment.",
          distractorAnalysis: {
            A: "Compliance duty sits both on the representative and the KI; the KI cannot delegate it away.",
            C: "Statutory duties are continuous and self-executing; the FSP must act, not wait.",
            D: "Internal warnings have no bearing on the KI's regulatory liability.",
          },
        },
        {
          id: "qc3-q4",
          level: 3,
          format: "Scenario",
          prompt:
            "A client lodges a complaint that they were never told the FSP only holds a Category I licence (and therefore cannot exercise investment discretion). The FSP's investigation reveals the representative did make a verbal disclosure but failed to record it. What is the most compliant remediation?",
          options: [
            {
              letter: "A",
              text:
                "Reject the complaint because a verbal disclosure was made.",
            },
            {
              letter: "B",
              text:
                "Reconstruct and reissue the disclosure document to the client in writing, log the breach in the compliance register, retrain the representative, and acknowledge the gap in the formal response to the complaint.",
            },
            {
              letter: "C",
              text:
                "Refund the client's fees and close the matter without internal logging.",
            },
            {
              letter: "D",
              text:
                "Refer the matter to the FAIS Ombud for a ruling before doing anything internally.",
            },
          ],
          correct: "B",
          justification:
            "Section 3 of the General Code requires disclosures to be made in plain language and kept on record (section 14 record-keeping). Where the disclosure was made but not recorded, the FSP must reconstruct the record, remediate the client, document the breach internally, and address the conduct gap.",
          distractorAnalysis: {
            A: "A verbal disclosure that cannot be evidenced is treated, for compliance purposes, as having not been made.",
            C: "Refunding without internal logging breaches record-keeping and oversight duties.",
            D: "The FSP must operate its internal complaints process first; Ombud escalation is a client right, not a first-step remedy.",
          },
        },
        {
          id: "qc3-q5",
          level: 4,
          format: "Analysis",
          prompt:
            "An FSP discovers, during preparation for an FSCA on-site inspection, that 12 of its 40 representatives have been using outdated disclosure documentation that still refers to the 'Registrar' instead of the 'Authority' and quotes superseded fee tables. What is the most defensible course of action prior to the inspection?",
          options: [
            {
              letter: "A",
              text:
                "Destroy the outdated records to prevent the inspectors from finding them.",
            },
            {
              letter: "B",
              text:
                "Immediately withdraw the outdated documentation, issue corrected disclosures to all affected clients, log the breach and its remediation in the compliance register, and proactively disclose the matter to the inspection team.",
            },
            {
              letter: "C",
              text:
                "Reissue the documents only to new clients going forward; leave existing clients undisturbed.",
            },
            {
              letter: "D",
              text:
                "Instruct representatives to claim the outdated documents are first drafts that were never sent.",
            },
          ],
          correct: "B",
          justification:
            "The Authority expects proactive remediation and transparency. Withdrawing the outdated documentation, remediating affected clients, logging the breach, and disclosing it to inspectors is consistent with the FSP's duties under sections 2 and 14 of the General Code and substantially reduces the likelihood of administrative sanctions.",
          distractorAnalysis: {
            A: "Destruction of records is itself a serious offence and obstruction of regulatory supervision.",
            C: "Failing to remediate existing clients perpetuates the breach.",
            D: "Misleading inspectors compounds the original breach with dishonest conduct in violation of section 2.",
          },
        },
      ],
    },
  },

  /* --------------------------------------------------------------------- */
  /*  QC4 — Application of the General Code of Conduct                     */
  /* --------------------------------------------------------------------- */
  {
    id: "Task 4(QC4)",
    order: 4,
    title: "QC4 — Application of the General Code of Conduct",
    qcDescription:
      "Apply the requirements of the General Code of Conduct for FSPs and Representatives.",
    statutoryRefs: [
      "General Code of Conduct s3, s4, s5, s7, s8, s14",
    ],
    youtubeId: "uPx93psjgV0",
    coreConcepts: [
      "Practical application of conduct rules to marketing, advertising and client communications.",
      "Statutory standards for direct marketing and promotional material.",
      "Operational alignment of daily advice practice with the six Treating Customers Fairly (TCF) outcomes.",
    ],
    quiz: {
      questions: [
        {
          id: "qc4-q1",
          level: 1,
          format: "Knowledge",
          prompt:
            "The Treating Customers Fairly (TCF) framework adopted by the Authority is built on how many fairness outcomes that FSPs must demonstrably deliver?",
          options: [
            { letter: "A", text: "Three" },
            { letter: "B", text: "Four" },
            { letter: "C", text: "Six" },
            { letter: "D", text: "Eight" },
          ],
          correct: "C",
          justification:
            "The TCF framework comprises six fairness outcomes spanning culture, product design, clear information, suitable advice, performance expectations, and ease of complaints and claims. These outcomes underpin the practical interpretation of the General Code.",
          distractorAnalysis: {
            A: "Three understates the framework.",
            B: "Four is a common but incorrect approximation.",
            D: "Eight conflates TCF outcomes with the eight RE5 tasks.",
          },
        },
        {
          id: "qc4-q2",
          level: 2,
          format: "Comprehension",
          prompt:
            "Under section 4 of the General Code, advertising by an FSP must comply with certain mandatory standards. Which option best captures the regulatory test that applies?",
          options: [
            {
              letter: "A",
              text:
                "The advert must be entertaining and reach as wide an audience as possible.",
            },
            {
              letter: "B",
              text:
                "The advert must not contain any statement, promise or forecast that is fraudulent, untrue or misleading, and must be readily reproducible by the FSP on request.",
            },
            {
              letter: "C",
              text:
                "The advert is exempt from the General Code provided it is published on a third-party platform.",
            },
            {
              letter: "D",
              text:
                "The advert is compliant if it is approved by the product supplier alone.",
            },
          ],
          correct: "B",
          justification:
            "Section 4 of the General Code requires that all advertising and marketing material be free from fraudulent, untrue or misleading statements, comply with clear language and content standards, and be capable of being reproduced by the FSP for at least the prescribed retention period.",
          distractorAnalysis: {
            A: "Reach and entertainment value are not regulatory tests.",
            C: "Third-party publication does not exempt the FSP from compliance.",
            D: "Product supplier approval does not discharge the FSP's own regulatory duties.",
          },
        },
        {
          id: "qc4-q3",
          level: 3,
          format: "Scenario",
          prompt:
            "An FSP launches a WhatsApp broadcast that says: 'Switch your retirement annuity today and earn guaranteed double-digit returns!'. The message includes a one-line generic risk warning at the end. Which application of the General Code best describes the position?",
          options: [
            {
              letter: "A",
              text:
                "The campaign is compliant because a risk warning has been included.",
            },
            {
              letter: "B",
              text:
                "The campaign breaches section 4 because the headline guarantees returns that no FSP may lawfully promise, and the risk warning does not cure the misleading impression created by the headline.",
            },
            {
              letter: "C",
              text:
                "The campaign is compliant because WhatsApp is not a 'public' medium.",
            },
            {
              letter: "D",
              text:
                "The campaign is compliant because the FSP has not received any complaints yet.",
            },
          ],
          correct: "B",
          justification:
            "Guaranteeing returns is expressly prohibited as a misleading representation under section 4. A residual risk warning cannot cure a prominently misleading headline; the message is judged on the overall impression created in the mind of a reasonable client.",
          distractorAnalysis: {
            A: "A risk footer does not neutralise a headline that breaches section 4.",
            C: "Section 4 applies regardless of the medium.",
            D: "Absence of complaints is not a defence; the breach is in the publication itself.",
          },
        },
        {
          id: "qc4-q4",
          level: 3,
          format: "Roman Numeral",
          prompt:
            "Which of the following are Treating Customers Fairly (TCF) outcomes that an FSP must demonstrably embed in its daily operations?\n\ni. Products and services marketed and sold in the retail market are designed to meet the needs of identified customer groups.\nii. Customers are provided with clear information and kept appropriately informed before, during and after the point of sale.\niii. Customers do not face unreasonable post-sale barriers to change product, switch provider, submit a claim or make a complaint.\niv. FSPs are guaranteed minimum margins by the Authority for every advice transaction.",
          options: [
            { letter: "A", text: "i, ii and iii only." },
            { letter: "B", text: "ii, iii and iv only." },
            { letter: "C", text: "i and iv only." },
            { letter: "D", text: "i, ii, iii and iv." },
          ],
          correct: "A",
          justification:
            "Statements i, ii and iii correspond to three of the six TCF outcomes. Statement iv is fabricated — the Authority does not guarantee FSP margins; the TCF framework regulates conduct, not profitability.",
          distractorAnalysis: {
            B: "Includes the fabricated 'guaranteed margins' outcome.",
            C: "Omits two genuine TCF outcomes and includes the fabricated one.",
            D: "Includes the fabricated outcome.",
          },
        },
        {
          id: "qc4-q5",
          level: 4,
          format: "Analysis Roman Numeral",
          prompt:
            "An FSP runs a multi-channel campaign: (a) an Instagram reel showing only past 12-month returns; (b) an email landing page with a small-print disclaimer; (c) a podcast advert that quotes 'industry-leading' returns without source; (d) a printed flyer that discloses all fees, risks, and the FSP's licence category in plain language.\n\nWhich of the following elements of the campaign are non-compliant with section 4 of the General Code?\n\ni. The Instagram reel.\nii. The email landing page small-print disclaimer (as the sole risk disclosure).\niii. The podcast 'industry-leading returns' claim.\niv. The printed flyer.",
          options: [
            { letter: "A", text: "i, ii and iii only." },
            { letter: "B", text: "i and iii only." },
            { letter: "C", text: "ii, iii and iv only." },
            { letter: "D", text: "i, ii, iii and iv." },
          ],
          correct: "A",
          justification:
            "Showing only short-period selective returns (i) creates a misleading impression. A sole small-print disclaimer (ii) does not satisfy the 'prominent and clear' standard for risk disclosure. Unsupported superlative performance claims (iii) breach the prohibition on misleading statements. The flyer (iv), by contrast, meets the plain-language, fees, risks and licence-category requirements.",
          distractorAnalysis: {
            B: "Omits the deficient small-print disclosure on the landing page.",
            C: "Wrongly includes the compliant flyer.",
            D: "Wrongly includes the compliant flyer.",
          },
        },
      ],
    },
  },

  /* --------------------------------------------------------------------- */
  /*  QC5 — Disclosures Before Rendering a Financial Service               */
  /* --------------------------------------------------------------------- */
  {
    id: "Task 4(Q5)",
    order: 5,
    title: "QC5 — Disclosures Before Rendering a Financial Service",
    qcDescription:
      "Explain the disclosures that need to be made by a Representative before rendering a financial service.",
    statutoryRefs: [
      "FAIS Act s4, s4(1)(d)(ii), s13(1)",
      "General Code of Conduct s5, s7",
    ],
    youtubeId: "H1hxXV7CBkM",
    coreConcepts: [
      "Mandatory pre-contact disclosures, including the FSP's full name, physical and postal addresses, telephone contact details and licence number.",
      "Disclosure of the representative's authorisation status and whether the representative operates under supervision.",
      "Disclosure of the FSP's licence categories, operational limitations and contractual relationship with product suppliers.",
    ],
    quiz: {
      questions: [
        {
          id: "qc5-q1",
          level: 1,
          format: "Knowledge",
          prompt:
            "Before rendering a financial service for the first time, an authorised FSP must, as a minimum, disclose which of the following identifying particulars to a client?",
          options: [
            {
              letter: "A",
              text:
                "The FSP's full business and trade name only.",
            },
            {
              letter: "B",
              text:
                "The FSP's full business and trade name, physical address, postal address and telephone contact details.",
            },
            {
              letter: "C",
              text:
                "Only the FSP's licence number.",
            },
            {
              letter: "D",
              text:
                "Only the representative's personal mobile number.",
            },
          ],
          correct: "B",
          justification:
            "Section 5 of the General Code requires the FSP to disclose its full business and trade name, registration number, contact details (postal and physical address, telephone) and FSP licence number, as a minimum, before rendering a service.",
          distractorAnalysis: {
            A: "Identity alone is insufficient.",
            C: "Licence number on its own does not satisfy the disclosure of contact and identity.",
            D: "A personal mobile number cannot substitute for the FSP's own contact details.",
          },
        },
        {
          id: "qc5-q2",
          level: 2,
          format: "Negative",
          prompt:
            "Which of the following is NOT a mandatory pre-contact disclosure required from a representative under section 5 of the General Code of Conduct?",
          options: [
            {
              letter: "A",
              text:
                "Whether the representative is operating under supervision in respect of the relevant financial products.",
            },
            {
              letter: "B",
              text:
                "The categories of financial products the FSP is authorised to render advice on.",
            },
            {
              letter: "C",
              text:
                "The current market price of every product the representative may discuss.",
            },
            {
              letter: "D",
              text:
                "The fact that the FSP holds professional indemnity insurance, if applicable.",
            },
          ],
          correct: "C",
          justification:
            "Pre-contact disclosure is about identity, authority, scope of services, conflict and complaints information — not real-time market pricing. Supervision status, category of authorisation, and (where applicable) professional indemnity insurance are recognised disclosures.",
          distractorAnalysis: {
            A: "Supervision status is a mandatory disclosure.",
            B: "Authorised product categories must be disclosed.",
            D: "Disclosure of PI cover (where the FSP carries it) is a recognised practice and required in some product contexts.",
          },
        },
        {
          id: "qc5-q3",
          level: 3,
          format: "Scenario",
          prompt:
            "A representative who is still under supervision contacts a prospective high-net-worth client for the first time to discuss a long-term investment. What is the legally compliant sequence of pre-service disclosures the representative must make on that initial call?",
          options: [
            {
              letter: "A",
              text:
                "Disclose only the product and recommended fees; supervision status need only be mentioned at signing.",
            },
            {
              letter: "B",
              text:
                "Identify the FSP and its contact and licence details, state the representative's name and the fact that the representative is operating under supervision, identify the categories of advice the FSP is authorised to render, and confirm the conflict-of-interest position before rendering any financial service.",
            },
            {
              letter: "C",
              text:
                "Defer all disclosures to the written record of advice that will be issued later.",
            },
            {
              letter: "D",
              text:
                "Disclose only the FSP's licence number and rely on the prospect to research the rest.",
            },
          ],
          correct: "B",
          justification:
            "Section 5 requires the relevant identifying, authority, scope and supervision disclosures to be made at or before the rendering of the service. Material elements such as supervision status cannot be deferred to a post-signing document.",
          distractorAnalysis: {
            A: "Supervision is a material disclosure; deferring it breaches section 5.",
            C: "Pre-service disclosures cannot be exclusively deferred to a later record.",
            D: "Self-research by the prospect is not a substitute for the FSP's positive disclosure duty.",
          },
        },
        {
          id: "qc5-q4",
          level: 3,
          format: "Roman Numeral",
          prompt:
            "Which of the following must be disclosed by a representative before rendering a financial service?\n\ni. The FSP's licence number and the categories for which it is licensed.\nii. Whether the representative is operating under supervision in respect of those categories.\niii. The existence and general nature of any conflict-of-interest arrangements that may affect the advice.\niv. The personal investment portfolio of the representative.",
          options: [
            { letter: "A", text: "i, ii and iii only." },
            { letter: "B", text: "i, ii and iv only." },
            { letter: "C", text: "ii, iii and iv only." },
            { letter: "D", text: "i, ii, iii and iv." },
          ],
          correct: "A",
          justification:
            "Statements i, ii and iii are core pre-service disclosures under section 5 and section 3A. Statement iv is not required and would itself create privacy and potential conflict concerns.",
          distractorAnalysis: {
            B: "Includes the irrelevant personal portfolio disclosure.",
            C: "Omits the FSP licence detail and includes the irrelevant disclosure.",
            D: "Includes the irrelevant disclosure.",
          },
        },
        {
          id: "qc5-q5",
          level: 4,
          format: "Analysis",
          prompt:
            "A representative onboarding a corporate client over two meetings makes the FSP and supervision disclosures verbally in meeting one but does not capture them in writing until two weeks later, when the client signs the engagement letter. In the interim, the representative provides recommendations on three policies. What is the most accurate compliance assessment?",
          options: [
            {
              letter: "A",
              text:
                "The conduct is fully compliant because all disclosures were ultimately captured before signing.",
            },
            {
              letter: "B",
              text:
                "The verbal disclosure at the first meeting satisfies the pre-service obligation provided it can be evidenced, but the FSP must also confirm those disclosures in writing as soon as reasonably possible; the two-week delay creates a record-keeping and remediation risk and any advice given before written confirmation must be reviewed.",
            },
            {
              letter: "C",
              text:
                "Verbal disclosures are never acceptable under section 5.",
            },
            {
              letter: "D",
              text:
                "Only the signing of the engagement letter has legal effect; everything before it is non-existent for FAIS purposes.",
            },
          ],
          correct: "B",
          justification:
            "Section 5 allows verbal pre-service disclosure provided written confirmation is provided as soon as reasonably possible, and section 14 requires those disclosures to be recorded. A two-week gap, while not automatically fatal, exposes the FSP to evidentiary and remediation risk on advice already provided.",
          distractorAnalysis: {
            A: "Capturing later does not erase the interim risk on advice already rendered.",
            C: "Verbal pre-service disclosure is permitted, subject to follow-up confirmation.",
            D: "Interactions before signing have full FAIS effect; ignoring them creates additional liability.",
          },
        },
      ],
    },
  },

  /* --------------------------------------------------------------------- */
  /*  QC6 — Disclosures When Rendering a Financial Service                 */
  /* --------------------------------------------------------------------- */
  {
    id: "Task 4(Q6)",
    order: 6,
    title: "QC6 — Disclosures When Rendering a Financial Service",
    qcDescription:
      "Explain disclosures that must be made by a Representative when rendering a financial service.",
    statutoryRefs: [
      "FAIS Act s2, s4, s4(1), s13(1)",
      "General Code of Conduct s5, s7, s7(1)(a) & (c)(iii)(bb)",
    ],
    youtubeId: "FTASaI1c_lE",
    playlist: {
      listId: "PLDG_u2RxaazpfpGxSnl5CgpyZ4bJmPBE0",
      index: 9,
    },
    coreConcepts: [
      "Disclosure of material product structure, investment parameters and historical performance, with appropriate context.",
      "Timing and positioning of disclosures regarding investment risks, exclusions, surrender penalties and absence of guarantees.",
      "Absolute prohibition on misleading, incomplete or selectively favourable product information.",
    ],
    quiz: {
      questions: [
        {
          id: "qc6-q1",
          level: 1,
          format: "Knowledge",
          prompt:
            "When historical performance data is presented to a client in relation to a financial product, the General Code requires that the disclosure be accompanied by a warning that:",
          options: [
            { letter: "A", text: "Past performance guarantees future returns." },
            {
              letter: "B",
              text: "Past performance is not necessarily an indication of future performance.",
            },
            { letter: "C", text: "Past performance is irrelevant to the decision." },
            {
              letter: "D",
              text: "Past performance has been independently audited by the Authority.",
            },
          ],
          correct: "B",
          justification:
            "Section 7 of the General Code requires past-performance data to be accompanied by a clear, prominent warning that past performance is not necessarily indicative of future performance, and that the disclosure must not create a misleading impression.",
          distractorAnalysis: {
            A: "Stating that past performance guarantees future returns is expressly prohibited.",
            C: "Past performance can be relevant context; the warning is about its limits, not its irrelevance.",
            D: "The Authority does not audit individual performance disclosures.",
          },
        },
        {
          id: "qc6-q2",
          level: 2,
          format: "Negative",
          prompt:
            "Which of the following is FALSE regarding the timing of material risk disclosures under section 7 of the General Code?",
          options: [
            {
              letter: "A",
              text:
                "Risk disclosures must be made in a manner and at a time that allows the client to make an informed decision.",
            },
            {
              letter: "B",
              text:
                "Risk disclosures may be deferred to a post-sale confirmation document, provided the disclosure is eventually made.",
            },
            {
              letter: "C",
              text:
                "Risks that are material to the suitability of the recommendation must be specifically drawn to the client's attention.",
            },
            {
              letter: "D",
              text:
                "Risk disclosures must be in plain language and free of any misleading implication.",
            },
          ],
          correct: "B",
          justification:
            "Section 7 requires material risk disclosures to be made before or at the point at which the client is making an informed decision. Deferral to a post-sale confirmation defeats the purpose of informed consent and is non-compliant.",
          distractorAnalysis: {
            A: "Correct statement — the test is informed decision-making.",
            C: "Correct — material risks must be specifically highlighted, not buried in generic disclaimers.",
            D: "Correct — plain language and absence of misleading implication are core to section 7.",
          },
        },
        {
          id: "qc6-q3",
          level: 3,
          format: "Scenario",
          prompt:
            "A representative is recommending a long-term endowment policy to a 64-year-old conservative client whose primary concern is preservation of capital. The product carries a market-value adjustment risk and significant early-surrender penalties in the first five years. Which course of action best satisfies section 7?",
          options: [
            {
              letter: "A",
              text:
                "Provide only the marketing brochure and let the client absorb the risk information at their own pace.",
            },
            {
              letter: "B",
              text:
                "Specifically and prominently draw the client's attention, both verbally and in writing, to the market-value adjustment risk, the five-year surrender penalty schedule, and the absence of any guarantee of capital, and confirm understanding before processing the application.",
            },
            {
              letter: "C",
              text:
                "Mention the risks only after the policy has been activated.",
            },
            {
              letter: "D",
              text:
                "Process the application and rely on the cooling-off period to remediate any later concerns.",
            },
          ],
          correct: "B",
          justification:
            "Section 7 requires material risks and exclusions to be specifically drawn to the client's attention and disclosed in plain language. The client's age and stated preference for capital preservation make these risks particularly material, intensifying the disclosure obligation.",
          distractorAnalysis: {
            A: "Passive delivery of a brochure does not satisfy the duty to draw risks specifically to the client's attention.",
            C: "Post-sale disclosure defeats informed consent and breaches section 7.",
            D: "The cooling-off period is a consumer remedy, not a substitute for upfront disclosure.",
          },
        },
        {
          id: "qc6-q4",
          level: 3,
          format: "Roman Numeral",
          prompt:
            "Which of the following must be disclosed to a client when a representative renders a financial service in respect of an investment product?\n\ni. The nature and material terms of the product, including investment parameters and asset allocation.\nii. The material risks associated with the product.\niii. The existence and effect of any restrictions on the client's ability to access or withdraw funds.\niv. The personal political views of the representative.",
          options: [
            { letter: "A", text: "i, ii and iii only." },
            { letter: "B", text: "i, ii and iv only." },
            { letter: "C", text: "ii, iii and iv only." },
            { letter: "D", text: "i, ii, iii and iv." },
          ],
          correct: "A",
          justification:
            "Statements i, ii and iii correspond directly to disclosure obligations under section 7. Statement iv has no statutory basis and is irrelevant — and arguably inappropriate — in a financial advisory context.",
          distractorAnalysis: {
            B: "Wrongly includes personal political views.",
            C: "Omits product terms and includes the irrelevant disclosure.",
            D: "Includes the irrelevant disclosure.",
          },
        },
        {
          id: "qc6-q5",
          level: 4,
          format: "Analysis",
          prompt:
            "A representative selectively presents the top three best-performing funds on a platform to a client without disclosing that the platform offers 60 funds in total, and without explaining the criteria used for selection. Two years later, the client complains that the selected funds underperformed peers and that they were not informed about the full universe of available funds. The most accurate regulatory analysis is:",
          options: [
            {
              letter: "A",
              text:
                "No breach occurred because the representative is entitled to recommend only those products the FSP wishes to promote.",
            },
            {
              letter: "B",
              text:
                "A breach occurred under section 2 (honesty and fairness) and section 7 (no misleading impression), because selective presentation of best performers without disclosing the selection methodology and the broader universe creates a materially misleading impression in the client's mind.",
            },
            {
              letter: "C",
              text:
                "No breach occurred because the funds were genuine and verifiable products.",
            },
            {
              letter: "D",
              text:
                "Section 7 disclosure duties only apply to the very first interaction; subsequent fund recommendations are exempt.",
            },
          ],
          correct: "B",
          justification:
            "Selective performance presentation without methodology disclosure is one of the most commonly enforced section 7 breaches. The duty is to avoid creating misleading impressions; cherry-picking peak performers does precisely that.",
          distractorAnalysis: {
            A: "Even where the FSP narrows recommendations, the narrowing criteria must be disclosed.",
            C: "Authenticity of the product is irrelevant to the misleading impression test.",
            D: "Section 7 applies on a continuing basis to all financial service rendering.",
          },
        },
      ],
    },
  },

  /* --------------------------------------------------------------------- */
  /*  QC7 — Disclosures Regarding Provider, Supplier and Financial Service */
  /* --------------------------------------------------------------------- */
  {
    id: "Task 4(QC7)",
    order: 7,
    title:
      "QC7 — Disclosures Regarding Provider, Supplier and Financial Service",
    qcDescription:
      "Describe the required disclosures regarding the provider, product supplier, and financial service.",
    statutoryRefs: [
      "FAIS Act s4, s4(1), s5, s7, s7(1), s15(3)",
    ],
    youtubeId: "Vt-HoxXicD4",
    playlist: {
      listId: "PLDG_u2RxaazpfpGxSnl5CgpyZ4bJmPBE0",
      index: 8,
    },
    coreConcepts: [
      "Disclosure of the corporate relationship and financial linkages between the FSP and the product supplier.",
      "Disclosure of the product supplier's legal status, contact details and complaints handling function.",
      "Distinguishing the disclosure consequences of Category I (advice/intermediary, no discretion) versus Category II (discretionary investment manager) authorisation.",
    ],
    quiz: {
      questions: [
        {
          id: "qc7-q1",
          level: 1,
          format: "Knowledge",
          prompt:
            "A Category II FSP is, in regulatory terms, an FSP that:",
          options: [
            {
              letter: "A",
              text:
                "May only execute client instructions and is prohibited from giving advice.",
            },
            {
              letter: "B",
              text:
                "Is authorised to exercise discretion in managing the investments of a client without prior reference for each transaction.",
            },
            {
              letter: "C",
              text:
                "Provides administration services only and may not hold a mandate from a client.",
            },
            {
              letter: "D",
              text:
                "Is exempt from the General Code of Conduct.",
            },
          ],
          correct: "B",
          justification:
            "A Category II FSP holds a discretionary mandate from clients and may make investment decisions without seeking client instruction on each transaction. This is the defining feature distinguishing Category II from Category I (advice and/or intermediary, no discretion).",
          distractorAnalysis: {
            A: "Describes a limited execution-only model, not a Category II discretionary licence.",
            C: "Administration-only services correspond to other categories and exclude the discretionary mandate.",
            D: "No category of FSP is exempt from the General Code.",
          },
        },
        {
          id: "qc7-q2",
          level: 2,
          format: "Comprehension",
          prompt:
            "When an FSP recommends a product manufactured by an associated product supplier (for example, a member of the same corporate group), the General Code requires the FSP to:",
          options: [
            {
              letter: "A",
              text:
                "Refrain from disclosing the relationship to avoid biasing the client.",
            },
            {
              letter: "B",
              text:
                "Disclose the nature of the relationship and any resulting conflict of interest, including the impact on the objectivity of the recommendation.",
            },
            {
              letter: "C",
              text:
                "Recommend the associated product on every occasion to support group profitability.",
            },
            {
              letter: "D",
              text:
                "Treat the associated supplier as a fully independent third party for disclosure purposes.",
            },
          ],
          correct: "B",
          justification:
            "Sections 3A, 5 and 7 require disclosure of all material relationships between the FSP and the product supplier and any resulting conflicts. The client is entitled to assess the objectivity of the recommendation in light of that relationship.",
          distractorAnalysis: {
            A: "Non-disclosure breaches the duty of honesty and the conflict-of-interest disclosure obligations.",
            C: "Recommendations must be based on suitability, not on group commercial alignment.",
            D: "Treating the relationship as if it did not exist is itself misleading.",
          },
        },
        {
          id: "qc7-q3",
          level: 3,
          format: "Scenario",
          prompt:
            "An FSP recommends a unit trust manufactured by an asset manager in which the FSP's parent company holds a 40% stake. The FSP's compliance officer asks how this should be disclosed to clients. The most compliant response is:",
          options: [
            {
              letter: "A",
              text:
                "No disclosure is required because the FSP itself does not own shares in the asset manager.",
            },
            {
              letter: "B",
              text:
                "A clear written disclosure must be made of the parent-company shareholding and the resulting potential conflict of interest, in a manner the client can readily understand prior to or at the time of recommendation.",
            },
            {
              letter: "C",
              text:
                "Disclosure can be made informally on the FSP's social media accounts.",
            },
            {
              letter: "D",
              text:
                "Disclosure is only necessary if the client specifically asks about ownership.",
            },
          ],
          correct: "B",
          justification:
            "An indirect material interest through a related party is precisely the kind of relationship section 3A and section 5 require to be disclosed in writing in a manner that supports informed decision-making.",
          distractorAnalysis: {
            A: "Indirect interests via the corporate group are caught by the conflict-of-interest framework.",
            C: "Social-media posting does not constitute disclosure to the specific client.",
            D: "Disclosure is a positive duty; it is not contingent on the client asking.",
          },
        },
        {
          id: "qc7-q4",
          level: 3,
          format: "Roman Numeral",
          prompt:
            "Which of the following must be disclosed to a client regarding the product supplier?\n\ni. The name and contact details of the product supplier.\nii. The legal status of the product supplier and its complaints handling contact.\niii. The existence of any contractual relationship or fees received by the FSP from the supplier.\niv. The personal cellphone numbers of the product supplier's directors.",
          options: [
            { letter: "A", text: "i, ii and iii only." },
            { letter: "B", text: "i, ii and iv only." },
            { letter: "C", text: "ii, iii and iv only." },
            { letter: "D", text: "i, ii, iii and iv." },
          ],
          correct: "A",
          justification:
            "Items i–iii relate to lawful provider/supplier transparency under sections 5 and 7. Item iv is neither required nor lawful — it implicates personal data protection law and would not feature in any disclosure framework.",
          distractorAnalysis: {
            B: "Wrongly includes the personal cellphone numbers of directors.",
            C: "Omits the supplier's name and contact details and includes the unlawful disclosure.",
            D: "Includes the unlawful disclosure.",
          },
        },
        {
          id: "qc7-q5",
          level: 4,
          format: "Analysis",
          prompt:
            "An FSP holds dual authorisation as both a Category I (intermediary) and Category II (discretionary investment manager) FSP. A client signs a discretionary mandate but later complains that the FSP made unilateral asset-allocation changes without specific consent for each switch. The most accurate analysis is:",
          options: [
            {
              letter: "A",
              text:
                "The FSP is in breach because all switches require specific client consent regardless of mandate.",
            },
            {
              letter: "B",
              text:
                "The complaint depends on whether the discretionary mandate, and the disclosures made at onboarding, clearly explained that the FSP was acting in its Category II capacity and that asset-allocation decisions would be taken without per-transaction consent; if the disclosures were clear and the mandate properly scoped, the FSP acted within authority.",
            },
            {
              letter: "C",
              text:
                "Category II FSPs may make any change at any time without disclosure obligations.",
            },
            {
              letter: "D",
              text:
                "The FAIS Ombud has no jurisdiction over Category II FSPs.",
            },
          ],
          correct: "B",
          justification:
            "The defining feature of Category II is the discretionary mandate, but the client must have understood at onboarding that they were granting discretion. Compliance therefore hinges on clarity of the mandate and quality of the disclosures made by the FSP in its Category II capacity.",
          distractorAnalysis: {
            A: "Specific per-transaction consent is the Category I norm, not the Category II norm.",
            C: "Discretion does not extinguish ongoing reporting and disclosure obligations.",
            D: "The FAIS Ombud has jurisdiction across categories where conduct of business is in issue.",
          },
        },
      ],
    },
  },
];
