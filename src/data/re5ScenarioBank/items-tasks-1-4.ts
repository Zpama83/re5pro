/**
 * Scenario and combination items — FSCA Tasks 1 to 4.
 *
 * DRAFT — authored by an LLM, pending compliance-officer review. Not served to
 * candidates; see ./types.ts for the gate and docs/QUALITY-ASSURANCE.md §4.
 *
 * Every `statutoryRefs` entry is a provision the reviewer should check the
 * keyed answer against. Where an item turns on a figure or a period, that
 * figure is named in the justification so it can be checked directly rather
 * than inferred.
 */
import type { ScenarioItem } from "./types";

export const tasks1to4: ScenarioItem[] = [
  /* ── Task 1 — FAIS regulatory framework ─────────────────────────────── */
  {
    id: "RE5-S-T1-01",
    taskId: 1,
    topic: "FAIS Act",
    level: 3,
    style: "Scenario",
    prompt:
      "A client phones an FSP's call centre and asks what the minimum monthly contribution is on a retirement annuity the FSP administers. The consultant reads the figure from the product brochure, confirms the debit order date, and ends the call without suggesting the client do anything. Which of the following best describes what the consultant has rendered?",
    options: [
      { letter: "A", text: "Factual information, which falls outside the definition of advice" },
      { letter: "B", text: "Advice, because a specific financial product was discussed with the client" },
      { letter: "C", text: "An intermediary service, because the consultant acted between the client and the product supplier" },
      { letter: "D", text: "Advice, because the client may act on what they were told" },
    ],
    correct: "A",
    justification:
      "Advice is a recommendation, guidance or proposal of a financial nature furnished to a client. The definition expressly excludes factual information given in describing a financial product and information given in answer to routine administrative queries. The consultant made no recommendation, so nothing turning on FAIS advice arises.",
    distractorAnalysis: {
      B: "Discussing a product is not enough. What makes an interaction advice is the recommendation, guidance or proposal, not the subject matter.",
      C: "An intermediary service is an act performed with a view to a client transacting in a product, or the management or administration of a product on a client's behalf. Reading a figure from a brochure is neither.",
      D: "The test is what the representative furnished, not what the client might subsequently choose to do with it.",
    },
    statutoryRefs: [
      "FAIS Act 37 of 2002, s 1 — definition of 'advice', including the exclusions",
      "FAIS Act 37 of 2002, s 1 — definition of 'intermediary service'",
    ],
  },
  {
    id: "RE5-S-T1-02",
    taskId: 1,
    topic: "FAIS Act",
    level: 3,
    style: "MostBestLeast",
    prompt:
      "Four people each perform one of the following functions for reward. Which of them MOST clearly requires authorisation as a financial services provider, or appointment as a representative, under the FAIS Act?",
    options: [
      { letter: "A", text: "A bookkeeper who captures premium payments onto an insurer's system from a schedule the insurer supplies" },
      { letter: "B", text: "A motor dealership employee who completes and submits a client's application for credit life cover" },
      { letter: "C", text: "A journalist who writes a newspaper column comparing the published fees of several unit trust funds" },
      { letter: "D", text: "A receptionist who books appointments between clients and the FSP's advisers" },
    ],
    correct: "B",
    justification:
      "Completing and submitting an application for a financial product on a client's behalf is an act performed with a view to the client entering into a transaction in respect of that product — an intermediary service. Rendering it for reward without authorisation or appointment contravenes the Act.",
    distractorAnalysis: {
      A: "Capturing data from the product supplier's own schedule is clerical and administrative work. It is not performed on a client's behalf with a view to transacting.",
      C: "Commentary published to the public at large is not furnished to a client. FAIS regulates advice and intermediary services rendered to clients.",
      D: "Arranging a meeting involves no financial product and no transaction in one.",
    },
    statutoryRefs: [
      "FAIS Act 37 of 2002, s 1 — 'advice', 'intermediary service', 'client'",
      "FAIS Act 37 of 2002, s 7(1) — prohibition on rendering financial services without authorisation",
    ],
  },
  {
    id: "RE5-S-T1-03",
    taskId: 1,
    topic: "FSCA & Regulation",
    level: 3,
    style: "Scenario",
    prompt:
      "A long-term insurer is found to have misrepresented the exclusions in a funeral policy in its marketing material, and separately to have allowed its capital adequacy to fall below the required level. Under the Twin Peaks model established by the Financial Sector Regulation Act, which body has the primary mandate for each issue?",
    options: [
      { letter: "A", text: "The Financial Sector Conduct Authority for both" },
      { letter: "B", text: "The Prudential Authority for both" },
      { letter: "C", text: "The Financial Sector Conduct Authority for the marketing material; the Prudential Authority for the capital adequacy" },
      { letter: "D", text: "The Prudential Authority for the marketing material; the Financial Sector Conduct Authority for the capital adequacy" },
    ],
    correct: "C",
    justification:
      "Twin Peaks splits the two mandates. The Financial Sector Conduct Authority regulates market conduct — how institutions treat customers, including disclosure and marketing. The Prudential Authority, within the South African Reserve Bank, regulates the safety and soundness of institutions, including capital adequacy and solvency.",
    distractorAnalysis: {
      A: "Capital adequacy is a prudential matter. The Authority's mandate is conduct, not solvency.",
      B: "Marketing material that misleads customers is a conduct matter and falls to the Authority.",
      D: "This reverses the two mandates.",
    },
    statutoryRefs: [
      "Financial Sector Regulation Act 9 of 2017 — objectives and functions of the Prudential Authority",
      "Financial Sector Regulation Act 9 of 2017 — objectives and functions of the Financial Sector Conduct Authority",
    ],
  },
  {
    id: "RE5-S-T1-04",
    taskId: 1,
    topic: "FAIS Advanced",
    level: 4,
    style: "RomanNumeral",
    prompt:
      "Consider the following four interactions between a representative and a client:\ni. Recommending that the client replace an existing endowment with a new one.\nii. Sending the client the annual statement the product supplier produced.\niii. Explaining which of three medical schemes would best suit the client's family circumstances.\niv. Confirming the client's policy number in answer to a telephone query.\nWhich of these constitute 'advice' as defined in the FAIS Act?",
    options: [
      { letter: "A", text: "i, ii and iii only" },
      { letter: "B", text: "i, iii and iv only" },
      { letter: "C", text: "All four" },
      { letter: "D", text: "i and iii only" },
    ],
    correct: "D",
    justification:
      "Advice is a recommendation, guidance or proposal of a financial nature furnished to a client in respect of a financial product. Recommending a replacement (i) and guiding a client between schemes (iii) both do that. Forwarding a statement (ii) and confirming a policy number (iv) are the furnishing of factual information and routine administration, which the definition excludes.",
    distractorAnalysis: {
      A: "Forwarding the product supplier's own statement adds no recommendation, guidance or proposal.",
      B: "Confirming a policy number is a routine administrative query, expressly excluded.",
      C: "Two of the four are excluded from the definition; treating every client interaction as advice misreads it.",
    },
    statutoryRefs: ["FAIS Act 37 of 2002, s 1 — definition of 'advice' and its exclusions"],
  },
  {
    id: "RE5-S-T1-05",
    taskId: 1,
    topic: "FAIS Advanced",
    level: 4,
    style: "RomanNumeral",
    prompt:
      "An authorised FSP advises on short-term insurance and also arranges unsecured personal loans for the same clients. Which combination of statements is correct?\ni. The short-term insurance advice falls within the FAIS Act.\nii. The personal loans fall within the FAIS Act because the FSP holds a licence.\niii. The personal-loan business is regulated under the National Credit Act.\niv. The personal-loan business is not exempt from regulation merely because the FSP holds a FAIS licence.",
    options: [
      { letter: "A", text: "i, iii and iv only" },
      { letter: "B", text: "i and iii only" },
      { letter: "C", text: "i, ii and iii only" },
      { letter: "D", text: "ii and iv only" },
    ],
    correct: "A",
    justification:
      "FAIS applies to advice and intermediary services in respect of the financial products it defines. Short-term insurance is such a product; a credit agreement is not. Credit is regulated under the National Credit Act, and holding a FAIS licence neither extends FAIS to credit nor exempts the credit business from its own regulator.",
    distractorAnalysis: {
      B: "True as far as it goes, but it omits the point that a FAIS licence confers no exemption on the credit business.",
      C: "Statement ii is wrong. A licence does not extend the Act to products outside the statutory definition.",
      D: "Statement ii is wrong, and this combination leaves out the two statements that are correct.",
    },
    statutoryRefs: [
      "FAIS Act 37 of 2002, s 1 — definition of 'financial product'",
      "National Credit Act 34 of 2005 — scope of application",
    ],
  },

  /* ── Task 2 — Maintaining the FSP licence ───────────────────────────── */
  {
    id: "RE5-S-T2-01",
    taskId: 2,
    topic: "FSP Licensing",
    level: 3,
    style: "Scenario",
    prompt:
      "An FSP intends to move its head office to a new province, appoint a compliance officer, and add a second product sub-category to the advice it gives. Which of these may it do without first obtaining the Authority's approval?",
    options: [
      { letter: "A", text: "All three, provided it notifies the Authority afterwards" },
      { letter: "B", text: "The move of business address only" },
      { letter: "C", text: "The move of business address and the appointment of the compliance officer" },
      { letter: "D", text: "None of the three" },
    ],
    correct: "B",
    justification:
      "A change of business address is a change to the FSP's business information, which is notifiable to the Authority rather than subject to approval. A compliance officer must be approved by the Authority before appointment, and adding a sub-category is an amendment of the licence, which requires an application and a decision.",
    distractorAnalysis: {
      A: "Two of the three require a decision by the Authority before the FSP may act, not a notification afterwards.",
      C: "Compliance officers are appointed subject to approval by the Authority, not merely notified.",
      D: "A change of address does not require approval; it must be notified.",
    },
    statutoryRefs: [
      "FAIS Act 37 of 2002, s 8 — application for and amendment of an authorisation",
      "FAIS Act 37 of 2002, s 17 — compliance officers and their approval",
      "Board Notice 194 of 2017 — notification of changes to information supplied",
    ],
  },
  {
    id: "RE5-S-T2-02",
    taskId: 2,
    topic: "FSP Licensing",
    level: 3,
    style: "Scenario",
    prompt:
      "An FSP has rendered no financial services for two years and has told the Authority in writing that it no longer wishes to conduct financial services business. What is the status of its licence?",
    options: [
      { letter: "A", text: "Suspended, pending an investigation by the Authority" },
      { letter: "B", text: "Provisionally reinstated until the FSP resumes business" },
      { letter: "C", text: "Lapsed, because the FSP has ceased to operate as a financial services provider" },
      { letter: "D", text: "Withdrawn, because the FSP no longer meets the fit and proper requirements" },
    ],
    correct: "C",
    justification:
      "A licence lapses when the provider ceases to operate as a financial services provider, including where it surrenders the licence or informs the Authority that it no longer conducts the business. Lapsing follows from the FSP's own cessation; it is not an enforcement outcome.",
    distractorAnalysis: {
      A: "Suspension is a step the Authority takes against an FSP, following a process. Nothing here suggests an investigation.",
      B: "There is no such status. A lapsed licence is not held in abeyance pending a return to business.",
      D: "Withdrawal is an enforcement outcome on specified grounds. The FSP has not failed a requirement; it has stopped trading.",
    },
    statutoryRefs: [
      "FAIS Act 37 of 2002, s 11 — lapsing of a licence",
      "FAIS Act 37 of 2002, s 9 — suspension and withdrawal of a licence",
    ],
  },
  {
    id: "RE5-S-T2-03",
    taskId: 2,
    topic: "FSP Licensing",
    level: 3,
    style: "MostBestLeast",
    prompt:
      "The Authority grants an FSP a licence subject to a condition that it may not render intermediary services in one specified sub-category until a suitably qualified key individual has been approved for it. The FSP considers the condition unreasonable. What is the MOST appropriate course of action?",
    options: [
      { letter: "A", text: "Render the services anyway, and argue the condition is unreasonable if the Authority queries it" },
      { letter: "B", text: "Ask the FSP's compliance officer to waive the condition in writing" },
      { letter: "C", text: "Treat the condition as spent, on the basis that the licence itself has been granted" },
      { letter: "D", text: "Comply with the condition, and apply to the Financial Services Tribunal for reconsideration of the decision" },
    ],
    correct: "D",
    justification:
      "Conditions attached to a licence are binding, and rendering services contrary to them contravenes the Act. A person aggrieved by a decision of a financial sector regulator may apply to the Financial Services Tribunal to have that decision reconsidered. Compliance comes first; the remedy is the Tribunal, not self-help.",
    distractorAnalysis: {
      A: "Rendering services contrary to a licence condition is a contravention, whatever the FSP thinks of the condition's merits.",
      B: "A compliance officer monitors and reports. No compliance officer can waive a condition imposed by the Authority.",
      C: "A condition forms part of the licence. The grant does not extinguish it.",
    },
    statutoryRefs: [
      "FAIS Act 37 of 2002, s 8 — conditions and restrictions attached to an authorisation",
      "Financial Sector Regulation Act 9 of 2017, Chapter 15 — Financial Services Tribunal and reconsideration of decisions",
    ],
  },
  {
    id: "RE5-S-T2-04",
    taskId: 2,
    topic: "FSP Licensing",
    level: 4,
    style: "RomanNumeral",
    prompt:
      "Which of the following would entitle the Authority to suspend or withdraw an FSP's licence?\ni. The FSP no longer complies with the fit and proper requirements.\nii. The FSP obtained the licence by submitting materially false information.\niii. The FSP has failed to comply with a requirement of the Act, including the payment of levies due.\niv. The FSP's profits have declined for three consecutive years.",
    options: [
      { letter: "A", text: "i, ii and iii only" },
      { letter: "B", text: "i and ii only" },
      { letter: "C", text: "ii and iii only" },
      { letter: "D", text: "All four" },
    ],
    correct: "A",
    justification:
      "The grounds turn on compliance: an FSP that no longer meets the fit and proper requirements, that obtained its licence through false or misleading information, or that fails to comply with a provision of the Act may have its licence suspended or withdrawn. Profitability is not a statutory ground; financial soundness is measured against the prescribed requirements, which are not the same thing.",
    distractorAnalysis: {
      B: "Omits failure to comply with the Act, which is itself a ground.",
      C: "Omits the loss of fit and proper status, which is the most commonly applied ground of the three.",
      D: "A decline in profits is not, of itself, a ground. A profitable FSP can breach the Act and an unprofitable one can comply with it.",
    },
    statutoryRefs: [
      "FAIS Act 37 of 2002, s 9 — grounds for suspension and withdrawal",
      "Board Notice 194 of 2017 — financial soundness requirements",
    ],
  },
  {
    id: "RE5-S-T2-05",
    taskId: 2,
    topic: "FSP Licensing",
    level: 4,
    style: "Sequencing",
    prompt:
      "Place the following in the order in which they occur when a new FSP is licensed and begins operating.\ni. A key individual is approved for the categories applied for.\nii. The FSP submits its licence application with the supporting fit and proper evidence.\niii. Representatives are appointed and entered in the FSP's register.\niv. The FSP renders its first financial service to a client.",
    options: [
      { letter: "A", text: "i, ii, iii, iv" },
      { letter: "B", text: "ii, i, iii, iv" },
      { letter: "C", text: "ii, iii, i, iv" },
      { letter: "D", text: "iii, ii, i, iv" },
    ],
    correct: "B",
    justification:
      "The application comes first, and the approval of the key individual forms part of the licensing decision that follows it. Representatives can only be appointed by an authorised FSP, and must be entered in its register. Services may be rendered only once the FSP is authorised.",
    distractorAnalysis: {
      A: "A key individual is approved in respect of an application. There is nothing to approve before the application is made.",
      C: "Representatives cannot be appointed before the FSP is authorised, so they cannot precede the key individual's approval.",
      D: "Appointing representatives before applying for a licence would mean rendering services without authorisation.",
    },
    statutoryRefs: [
      "FAIS Act 37 of 2002, ss 7 and 8 — authorisation and application",
      "FAIS Act 37 of 2002, s 13 — appointment of representatives and the register",
    ],
  },

  /* ── Task 3 — Role of the Key Individual ────────────────────────────── */
  {
    id: "RE5-S-T3-01",
    taskId: 3,
    topic: "Key Individual",
    level: 3,
    style: "Scenario",
    prompt:
      "An FSP's key individual signs off the monthly compliance report each month without reading it. The Authority later finds that representatives have been rendering services in a sub-category for which none of them is competent. Which statement best describes the key individual's position?",
    options: [
      { letter: "A", text: "The key individual is not at fault, because the representatives rendered the services" },
      { letter: "B", text: "Responsibility lies with the compliance officer, who compiled the reports" },
      { letter: "C", text: "The key individual has failed in the duty to manage and oversee the rendering of financial services, and may be held personally accountable" },
      { letter: "D", text: "The FSP's licence lapses automatically once the failure is discovered" },
    ],
    correct: "C",
    justification:
      "A key individual is the person responsible for managing or overseeing the FSP's rendering of financial services. Signing a report without reading it is not oversight. Ensuring representatives are competent for the sub-categories they operate in falls squarely within that duty, and failure to discharge it may lead to personal consequences, including withdrawal of approval or debarment.",
    distractorAnalysis: {
      A: "Oversight is the key individual's own statutory function. Delegating the act does not delegate the duty.",
      B: "A compliance officer monitors and reports. Accountability for how the business is run remains with the key individual.",
      D: "Lapsing follows cessation of operations, not a compliance failure. Enforcement here would take a different route.",
    },
    statutoryRefs: [
      "FAIS Act 37 of 2002, s 1 — definition of 'key individual'",
      "Board Notice 194 of 2017 — competence requirements for key individuals and representatives",
    ],
  },
  {
    id: "RE5-S-T3-02",
    taskId: 3,
    topic: "Key Individual",
    level: 3,
    style: "MostBestLeast",
    prompt:
      "An FSP's only approved key individual is convicted of fraud arising out of conduct at a previous employer, years before he joined this FSP. The FSP argues that the conviction concerns another firm entirely and has no bearing on its own business. Which is the MOST accurate statement of the FSP's position?",
    options: [
      { letter: "A", text: "The FSP may continue trading indefinitely while it looks for a replacement" },
      { letter: "B", text: "The conviction affects the individual personally and has no bearing on the FSP's licence" },
      { letter: "C", text: "The FSP's representatives may continue unsupervised, because each is individually competent" },
      { letter: "D", text: "The FSP must notify the Authority, and may not render services in categories for which it has no approved key individual" },
    ],
    correct: "D",
    justification:
      "Honesty, integrity and good standing is a continuing fit and proper requirement for key individuals, and a fraud conviction defeats it. The FSP must notify the Authority of the change, and it cannot operate a category for which no approved key individual is responsible.",
    distractorAnalysis: {
      A: "Operating without an approved key individual for a category is not permitted, however genuine the search for a replacement.",
      B: "Honesty and integrity attach to the person, not to the firm where the conduct occurred. A conviction elsewhere still defeats the requirement here, and the key individual's standing is one of the things on which this FSP's licence rests.",
      C: "Individual competence is a separate requirement. It does not substitute for the management and oversight function.",
    },
    statutoryRefs: [
      "Board Notice 194 of 2017 — honesty, integrity and good standing",
      "FAIS Act 37 of 2002, ss 8 and 9 — authorisation, and suspension or withdrawal",
    ],
  },
  {
    id: "RE5-S-T3-03",
    taskId: 3,
    topic: "Key Individual",
    level: 3,
    style: "Scenario",
    prompt:
      "An FSP is authorised for Category I advice on long-term insurance, and its key individual is approved for that sub-category only. The FSP now wishes to begin advising on participatory interests in collective investment schemes. What must happen first?",
    options: [
      { letter: "A", text: "The FSP must apply to amend its licence, and a key individual must be approved for the new sub-category" },
      { letter: "B", text: "Nothing — approval for one Category I sub-category extends to all of them" },
      { letter: "C", text: "The FSP may begin at once and regularise the position within twelve months" },
      { letter: "D", text: "Only the representatives need to meet the competence requirements for the new sub-category" },
    ],
    correct: "A",
    justification:
      "Authorisations and approvals are granted per category and sub-category. A key individual's approval does not extend to a sub-category for which competence has not been demonstrated, and the FSP's own licence must be amended before it renders the service.",
    distractorAnalysis: {
      B: "Category I covers many distinct sub-categories with different competence requirements. Approval is not granted wholesale.",
      C: "There is no grace period allowing a service to be rendered outside the licence while the paperwork catches up.",
      D: "Representative competence is necessary but not sufficient. The licence and the key individual approval must both cover the sub-category.",
    },
    statutoryRefs: [
      "FAIS Act 37 of 2002, s 8 — categories and sub-categories of authorisation",
      "Board Notice 194 of 2017 — competence requirements per sub-category",
    ],
  },
  {
    id: "RE5-S-T3-04",
    taskId: 3,
    topic: "Key Individual",
    level: 4,
    style: "RomanNumeral",
    prompt:
      "Which of the following responsibilities belong to the key individual rather than to the representative?\ni. Managing or overseeing the FSP's rendering of financial services.\nii. Conducting the needs analysis before advice is given to a client.\niii. Ensuring the FSP maintains an up-to-date register of representatives.\niv. Ensuring representatives work under supervision until they meet the competence requirements.",
    options: [
      { letter: "A", text: "i and iv only" },
      { letter: "B", text: "i, iii and iv only" },
      { letter: "C", text: "ii and iii only" },
      { letter: "D", text: "i, ii and iv only" },
    ],
    correct: "B",
    justification:
      "Managing and overseeing the business, maintaining the register of representatives, and ensuring that those not yet competent work under supervision are all functions of management and oversight. The needs analysis is performed by whoever renders the advice to the client, which is ordinarily the representative.",
    distractorAnalysis: {
      A: "Omits the register of representatives, which is maintained under the key individual's oversight.",
      C: "The needs analysis is not a key individual function, and this combination leaves out oversight itself.",
      D: "Includes the needs analysis, which belongs to the person rendering the advice.",
    },
    statutoryRefs: [
      "FAIS Act 37 of 2002, s 1 — 'key individual'; s 13 — representatives and the register",
      "General Code of Conduct (Board Notice 80 of 2003), s 8 — suitability and the needs analysis",
    ],
  },
  {
    id: "RE5-S-T3-05",
    taskId: 3,
    topic: "Key Individual",
    level: 4,
    style: "MostBestLeast",
    prompt:
      "The only approved key individual of a Category I FSP resigns with immediate effect on a Friday afternoon. Which action is the MOST urgent?",
    options: [
      { letter: "A", text: "Update the FSP's website to remove the key individual's name" },
      { letter: "B", text: "Write to all clients informing them that the key individual has left" },
      { letter: "C", text: "Notify the Authority of the departure, and stop rendering services in the affected categories until an approved key individual is in place" },
      { letter: "D", text: "Promote the most senior representative to key individual with effect from Monday" },
    ],
    correct: "C",
    justification:
      "The FSP cannot render services in a category with no approved key individual responsible for overseeing it, and the departure changes the information on which the licence was granted, so the Authority must be told. Everything else is secondary to stopping the activity that is no longer lawfully covered.",
    distractorAnalysis: {
      A: "Housekeeping. It neither notifies the Authority nor stops the services that are now uncovered.",
      B: "There may be good reasons to tell clients, but it does not address the fact that the FSP is operating without an approved key individual.",
      D: "A representative cannot become a key individual by internal promotion. Approval by the Authority is required first.",
    },
    statutoryRefs: [
      "FAIS Act 37 of 2002, ss 8 and 13 — authorisation, approval of key individuals, notification of changes",
      "Board Notice 194 of 2017 — competence and approval of key individuals",
    ],
  },

  /* ── Task 4 — General Code of Conduct ───────────────────────────────── */
  {
    id: "RE5-S-T4-01",
    taskId: 4,
    topic: "Code of Conduct",
    level: 3,
    style: "Scenario",
    prompt:
      "A client asks a representative to cancel a twelve-year-old endowment and redirect the premium into a new endowment with a different insurer, on which the representative would earn a higher commission. The representative genuinely believes the new product is better. What does the General Code of Conduct require?",
    options: [
      { letter: "A", text: "The representative may proceed, because the client requested the change" },
      { letter: "B", text: "The representative must decline, because replacing a financial product is prohibited" },
      { letter: "C", text: "The representative must obtain the Authority's approval before replacing the product" },
      { letter: "D", text: "The representative must disclose the actual and potential financial implications, costs and consequences of the replacement, and the conflict of interest, before the client decides" },
    ],
    correct: "D",
    justification:
      "Where a financial product is to be replaced by another, the provider must fully disclose to the client the actual and potential financial implications, costs and consequences of the replacement. The higher commission is a financial interest that may influence the recommendation, so it must be disclosed as a conflict of interest.",
    distractorAnalysis: {
      A: "A client's request does not displace the disclosure duty. Replacement is a recognised source of client harm, which is precisely why it is regulated.",
      B: "Replacement is not prohibited. It is permitted subject to disclosure.",
      C: "No such approval exists. The obligation runs to the client, not to the Authority.",
    },
    statutoryRefs: [
      "General Code of Conduct (Board Notice 80 of 2003), s 8 — replacement of a financial product",
      "General Code of Conduct, s 3A — conflicts of interest and financial interests",
    ],
  },
  {
    id: "RE5-S-T4-02",
    taskId: 4,
    topic: "Code of Conduct",
    level: 3,
    style: "Scenario",
    prompt:
      "A client insists on buying a particular investment product and refuses to answer questions about their existing portfolio or their objectives. The representative believes the product may not be suitable. What does the Code require?",
    options: [
      { letter: "A", text: "Proceed, having alerted the client to the limitations placed on the advice and the risk that the product may not be fully appropriate, and having recorded that the client was so alerted" },
      { letter: "B", text: "Refuse the transaction outright" },
      { letter: "C", text: "Proceed without comment, because the decision is the client's" },
      { letter: "D", text: "Complete the needs analysis on assumptions and present it to the client as though it were complete" },
    ],
    correct: "A",
    justification:
      "Where a client refuses to provide information, or insists on a particular product, the provider must alert the client to the limitations this places on the advice and to the risk that the product may not be fully appropriate, and must record that the client was alerted.",
    distractorAnalysis: {
      B: "The Code does not require refusal. It requires that the client be told what the gap in information means.",
      C: "Saying nothing leaves the client unaware of a risk the representative has identified, which is the opposite of what the Code requires.",
      D: "Presenting an assumed analysis as a completed one misleads the client and falsifies the record of advice.",
    },
    statutoryRefs: [
      "General Code of Conduct (Board Notice 80 of 2003), s 8 — suitability, and client refusal to provide information",
      "General Code of Conduct, s 9 — record of advice",
    ],
  },
  {
    id: "RE5-S-T4-03",
    taskId: 4,
    topic: "Ethics",
    level: 3,
    style: "MostBestLeast",
    prompt:
      "A product supplier offers an FSP a free overseas 'training' trip for its three highest-producing representatives. Which is the BEST characterisation under the Code?",
    options: [
      { letter: "A", text: "A permissible immaterial financial interest, because no cash changes hands" },
      { letter: "B", text: "A conflict of interest that must be avoided, or where it cannot be avoided, mitigated and disclosed to affected clients" },
      { letter: "C", text: "Irrelevant to the Code, because the arrangement is between the FSP and the product supplier" },
      { letter: "D", text: "Acceptable provided the representatives declare the value on their tax returns" },
    ],
    correct: "B",
    justification:
      "An incentive tied to production volumes from one supplier may influence the objectivity of advice. The Code requires providers to avoid conflicts of interest and, where a conflict cannot be avoided, to mitigate it and disclose it to the client at the earliest reasonable opportunity, together with the measures taken.",
    distractorAnalysis: {
      A: "An immaterial financial interest is capped at a small prescribed value. A trip of this kind is neither immaterial nor an ordinary commission.",
      C: "The Code governs conflicts precisely because arrangements between providers and suppliers affect the advice clients receive.",
      D: "A tax declaration has nothing to do with the client's right to know what may be influencing the advice.",
    },
    statutoryRefs: [
      "General Code of Conduct (Board Notice 80 of 2003), s 3A — conflicts of interest, financial interests and the conflict of interest management policy",
      "General Code of Conduct, s 1 — definition of 'immaterial financial interest'",
    ],
  },
  {
    id: "RE5-S-T4-04",
    taskId: 4,
    topic: "Client Relations",
    level: 4,
    style: "RomanNumeral",
    prompt:
      "Which of the following must a provider disclose to a client at the earliest reasonable opportunity?\ni. The provider's licence categories and the products it is authorised to advise on.\nii. Whether the provider holds professional indemnity or fidelity insurance cover.\niii. Any conflict of interest in relation to the transaction.\niv. That the client may confirm the provider's licence details with the Authority.",
    options: [
      { letter: "A", text: "i and iii only" },
      { letter: "B", text: "i, ii and iii only" },
      { letter: "C", text: "All four" },
      { letter: "D", text: "i, iii and iv only" },
    ],
    correct: "C",
    justification:
      "The Code's disclosure requirements cover the provider's identity and contact details, the categories and products it is licensed for, whether professional indemnity or fidelity cover is held, any conflict of interest, and the client's entitlement to verify the provider's licence details with the Authority.",
    distractorAnalysis: {
      A: "Omits both the insurance disclosure and the client's right of verification, each of which the Code requires.",
      B: "Omits the client's entitlement to confirm the licence details with the Authority.",
      D: "Omits whether professional indemnity or fidelity cover is held — a disclosure required whether or not the cover exists.",
    },
    statutoryRefs: [
      "General Code of Conduct (Board Notice 80 of 2003), s 4 — information about the provider",
      "General Code of Conduct, s 3A — disclosure of conflicts of interest",
    ],
  },
  {
    id: "RE5-S-T4-05",
    taskId: 4,
    topic: "Code of Conduct",
    level: 4,
    style: "RomanNumeral",
    prompt:
      "An FSP's outbound call centre sells a funeral policy during a single recorded telephone call. Which combination of obligations applies?\ni. The information that must ordinarily be given in writing may be given orally during the call.\nii. The provider must confirm that information in writing within thirty days of the transaction.\niii. The provider must keep a recording of the telephone discussion.\niv. No suitability assessment is required, because the sale is direct marketing.",
    options: [
      { letter: "A", text: "i and iii only" },
      { letter: "B", text: "iii and iv only" },
      { letter: "C", text: "ii and iv only" },
      { letter: "D", text: "i, ii and iii only" },
    ],
    correct: "D",
    justification:
      "In direct marketing the Code allows the required information to be given orally, but the provider must confirm it in writing within thirty days and must keep a record of the telephone discussion. Direct marketing changes how the information is delivered; it does not remove the obligation to act in the client's interests where advice is given.",
    distractorAnalysis: {
      A: "Correct as far as it goes, but omits the thirty-day written confirmation, which is the point of the concession.",
      B: "Statement iv is wrong. The channel does not suspend the suitability obligation.",
      C: "Statement iv is wrong, and this combination omits the oral-disclosure concession and the recording requirement.",
    },
    statutoryRefs: [
      "General Code of Conduct (Board Notice 80 of 2003) — direct marketing provisions, including oral disclosure, written confirmation and recording",
      "General Code of Conduct, s 8 — suitability",
    ],
  },
];
