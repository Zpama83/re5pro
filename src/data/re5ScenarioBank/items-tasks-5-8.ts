/**
 * Scenario and combination items — FSCA Tasks 5 to 8.
 *
 * DRAFT — authored by an LLM, pending compliance-officer review. Not served to
 * candidates; see ./types.ts for the gate and docs/QUALITY-ASSURANCE.md §4.
 *
 * The FICA, debarment and CPD items below turn on figures and periods that
 * have moved in recent years. Each is stated explicitly in the justification
 * rather than left implicit, so a reviewer can check it against the current
 * Board Notice or Regulation without having to reconstruct the reasoning.
 */
import type { ScenarioItem } from "./types";

export const tasks5to8: ScenarioItem[] = [
  /* ── Task 5 — Record-keeping ────────────────────────────────────────── */
  {
    id: "RE5-S-T5-01",
    taskId: 5,
    topic: "Record Keeping",
    level: 3,
    style: "Scenario",
    prompt:
      "A client cancels a policy the FSP placed four years ago and asks the FSP to delete every record of the advice that led to it. How should the FSP respond?",
    options: [
      { letter: "A", text: "Retain the records for the statutory minimum period, which runs for five years from the termination of the product or the rendering of the service" },
      { letter: "B", text: "Delete the records, because the client has the right to require deletion of their personal information" },
      { letter: "C", text: "Retain the records for one further year and then delete them" },
      { letter: "D", text: "Hand the records to the client and retain nothing" },
    ],
    correct: "A",
    justification:
      "FAIS requires records to be kept for a minimum of five years after the termination of a product or the rendering of the financial service. A client's deletion request cannot override a statutory retention obligation, and the privacy legislation expressly permits retention where it is required by law.",
    distractorAnalysis: {
      B: "The right to deletion is qualified. It does not extend to records an FSP is obliged by law to keep.",
      C: "The five-year clock runs from termination of the product or the rendering of the service, not from the date of the advice.",
      D: "Handing over copies does not discharge the FSP's own obligation to hold the records.",
    },
    statutoryRefs: [
      "FAIS Act 37 of 2002, s 18 — maintenance of records",
      "Protection of Personal Information Act 4 of 2013 — retention of records where required by law",
    ],
  },
  {
    id: "RE5-S-T5-02",
    taskId: 5,
    topic: "Record Keeping",
    level: 3,
    style: "MostBestLeast",
    prompt:
      "An FSP keeps all client records electronically in a cloud service and holds no paper copies. Which is the MOST accurate statement?",
    options: [
      { letter: "A", text: "This contravenes the FAIS Act, which requires original signed documents" },
      { letter: "B", text: "This is acceptable provided the records are kept safe from destruction and can be reproduced in legible written or printed form" },
      { letter: "C", text: "This is acceptable only if the Authority has approved the cloud provider" },
      { letter: "D", text: "This is acceptable only for records less than one year old" },
    ],
    correct: "B",
    justification:
      "The Act permits records to be kept in electronic or recorded form. What matters is that they are kept safe from destruction and that they can be reproduced in a legible written or printed form on request.",
    distractorAnalysis: {
      A: "Nothing in the Act requires paper originals. It sets outcomes — safety and reproducibility — rather than a medium.",
      C: "There is no approval regime for storage providers. The obligation rests on the FSP, whichever service it uses.",
      D: "The permitted form does not change with the age of the record.",
    },
    statutoryRefs: ["FAIS Act 37 of 2002, s 18 — form in which records may be kept"],
  },
  {
    id: "RE5-S-T5-03",
    taskId: 5,
    topic: "Record Keeping",
    level: 3,
    style: "Scenario",
    prompt:
      "A representative recommends a product other than the one the needs analysis pointed to, because the client's budget could not support the ideal option. What must the record of advice reflect?",
    options: [
      { letter: "A", text: "The product eventually bought, and nothing more" },
      { letter: "B", text: "The client's signature confirming the sale" },
      { letter: "C", text: "A summary of the information and material on which the advice was based, the products that were considered, and why the product selected was likely to satisfy the client's needs and objectives" },
      { letter: "D", text: "The commission earned on the transaction" },
    ],
    correct: "C",
    justification:
      "The record of advice must show the basis on which the advice was given: a summary of the information and material relied on, the financial products that were considered, and why the product selected was likely to satisfy the client's identified needs and objectives. A constrained recommendation is exactly the case the record exists to explain.",
    distractorAnalysis: {
      A: "The outcome alone does not show the reasoning, which is what makes the advice reviewable later.",
      B: "A signature evidences agreement to a transaction. It says nothing about the basis for the advice.",
      D: "Commission must be disclosed to the client, but it is not what the record of advice is for.",
    },
    statutoryRefs: [
      "General Code of Conduct (Board Notice 80 of 2003), s 9 — record of advice",
      "General Code of Conduct, s 8 — suitability",
    ],
  },
  {
    id: "RE5-S-T5-04",
    taskId: 5,
    topic: "Record Keeping",
    level: 4,
    style: "RomanNumeral",
    prompt:
      "Which of the following must an FSP maintain records of?\ni. Premature cancellations of transactions or financial products by clients.\nii. Complaints received, and an indication of whether they were resolved.\niii. Cases of non-compliance with the Act, and the reasons for that non-compliance.\niv. The personal bank statements of each representative.",
    options: [
      { letter: "A", text: "i and ii only" },
      { letter: "B", text: "ii and iii only" },
      { letter: "C", text: "All four" },
      { letter: "D", text: "i, ii and iii only" },
    ],
    correct: "D",
    justification:
      "The Act requires an FSP to keep records of premature cancellations by clients, of complaints received together with an indication of whether they were resolved, of cases of non-compliance with the Act and the reasons for them, and of the continued compliance of representatives with the fit and proper requirements. A representative's personal bank statements are not a prescribed record.",
    distractorAnalysis: {
      A: "Omits non-compliance records, which the Act requires along with the reasons for the non-compliance.",
      B: "Omits premature cancellations, which are recorded because they are an early signal of unsuitable advice.",
      C: "Personal bank statements are not a prescribed FAIS record. Financial soundness is assessed against the FSP, not by collecting representatives' private banking.",
    },
    statutoryRefs: ["FAIS Act 37 of 2002, s 18(1) — records an FSP must maintain"],
  },
  {
    id: "RE5-S-T5-05",
    taskId: 5,
    topic: "Record Keeping",
    level: 4,
    style: "RomanNumeral",
    prompt:
      "An FSP's new IT provider proposes purging every client record older than three years to save storage costs. Which combination of consequences would follow?\ni. The FSP would breach the FAIS retention requirement.\nii. The FSP may be unable to produce records that a FAIS Ombud investigation requires.\niii. The FSP would breach its separate obligation to retain customer due diligence records.\niv. The FSP would be protected, because privacy legislation requires personal information to be deleted.",
    options: [
      { letter: "A", text: "i, ii and iii only" },
      { letter: "B", text: "i and ii only" },
      { letter: "C", text: "ii, iii and iv only" },
      { letter: "D", text: "All four" },
    ],
    correct: "A",
    justification:
      "Three years is short of the five FAIS requires, and the anti-money-laundering legislation imposes its own retention obligation on customer due diligence and transaction records. Without records the FSP cannot answer an Ombud complaint, which in practice tends to be decided against it. Privacy legislation requires deletion only where retention is no longer authorised, and retention required by law is authorised.",
    distractorAnalysis: {
      B: "Omits the anti-money-laundering retention obligation, which runs in parallel with FAIS and is not satisfied by it.",
      C: "Statement iv inverts the privacy position, and this combination also omits the FAIS breach itself.",
      D: "Statement iv is wrong: deletion is not required where the law obliges the FSP to retain.",
    },
    statutoryRefs: [
      "FAIS Act 37 of 2002, s 18 — five-year retention",
      "Financial Intelligence Centre Act 38 of 2001 — record-keeping obligations of accountable institutions",
      "Protection of Personal Information Act 4 of 2013 — retention and deletion",
    ],
  },

  /* ── Task 6 — FICA / AML / CTF ──────────────────────────────────────── */
  {
    id: "RE5-S-T6-01",
    taskId: 6,
    topic: "FICA & AML",
    level: 3,
    style: "Scenario",
    prompt:
      "A client pays a single premium of R62,000 in cash at an accountable institution's offices. There is nothing otherwise unusual about the client or the transaction. What must the institution do?",
    options: [
      { letter: "A", text: "Nothing, because the payment relates to a legitimate product" },
      { letter: "B", text: "File a cash threshold report with the Financial Intelligence Centre, because the amount is at or above the prescribed threshold" },
      { letter: "C", text: "File a suspicious transaction report, because cash payments are inherently suspicious" },
      { letter: "D", text: "Refuse the payment and require an electronic transfer" },
    ],
    correct: "B",
    justification:
      "A cash transaction at or above the prescribed threshold — R50,000, the threshold having been expressed as amounts exceeding R49,999.99 — must be reported to the Financial Intelligence Centre as a cash threshold report, within the prescribed period. The trigger is the amount, not suspicion.",
    distractorAnalysis: {
      A: "The reporting obligation attaches to the transaction, whatever the underlying product. Legitimacy is not the test.",
      C: "Cash alone is not a ground for suspicion. A suspicious transaction report serves a different purpose and arises on different facts; filing one here would misuse it.",
      D: "Nothing obliges the institution to refuse cash. The obligation is to report it.",
    },
    statutoryRefs: [
      "Financial Intelligence Centre Act 38 of 2001, s 28 — cash threshold reporting",
      "Money Laundering and Terrorist Financing Control Regulations — prescribed threshold and reporting period (verify the current figures)",
    ],
  },
  {
    id: "RE5-S-T6-02",
    taskId: 6,
    topic: "FICA & AML",
    level: 3,
    style: "Scenario",
    prompt:
      "Having filed a suspicious transaction report, an institution's representative is asked by the client why their withdrawal is taking so long. What may the representative say about the report?",
    options: [
      { letter: "A", text: "That a report has been filed with the Financial Intelligence Centre" },
      { letter: "B", text: "That the institution suspects money laundering but cannot prove it" },
      { letter: "C", text: "Nothing — disclosing the report to the client is an offence" },
      { letter: "D", text: "That the compliance officer has flagged the account for review" },
    ],
    correct: "C",
    justification:
      "It is an offence to disclose information that might prejudice an investigation, including the fact that a report has been or will be made. This is the tipping-off prohibition, and it applies to disclosure to the client and to anyone else outside the permitted channels.",
    distractorAnalysis: {
      A: "This is precisely the disclosure the prohibition is aimed at.",
      B: "Describing the suspicion conveys the substance of the report and defeats the purpose of the prohibition just as surely as naming it.",
      D: "An oblique explanation that signals scrutiny of the account still risks prejudicing the investigation.",
    },
    statutoryRefs: [
      "Financial Intelligence Centre Act 38 of 2001, s 29 — reporting of suspicious and unusual transactions",
      "Financial Intelligence Centre Act 38 of 2001 — prohibition on tipping off",
    ],
  },
  {
    id: "RE5-S-T6-03",
    taskId: 6,
    topic: "FICA & AML",
    level: 3,
    style: "Scenario",
    prompt:
      "An institution onboards a private company. Two individuals each hold 30% of the shares, three others hold 10% each, and a sixth person, who holds no shares at all, has the power under a shareholders' agreement to appoint the majority of the board. Who must be identified as beneficial owners?",
    options: [
      { letter: "A", text: "The two 30% shareholders only" },
      { letter: "B", text: "All five shareholders" },
      { letter: "C", text: "Nobody, because the company is a legal person in its own right" },
      { letter: "D", text: "The two 30% shareholders, and the person who controls the appointment of the board" },
    ],
    correct: "D",
    justification:
      "Beneficial ownership tests both ownership and control. The natural persons holding a controlling interest — conventionally taken as 25% or more of the voting rights — must be identified, and so must any natural person who exercises effective control by other means, such as the power to appoint a majority of the board.",
    distractorAnalysis: {
      A: "Stops at the shareholding test and misses control exercised without shares, which is the more common way real control is hidden.",
      B: "The 10% holders fall below the threshold at which a shareholding, on its own, indicates control.",
      C: "The whole purpose of the enquiry is to look past the legal person to the natural persons behind it.",
    },
    statutoryRefs: [
      "Financial Intelligence Centre Act 38 of 2001 — customer due diligence and beneficial ownership of legal persons",
      "The institution's own Risk Management and Compliance Programme",
    ],
  },
  {
    id: "RE5-S-T6-04",
    taskId: 6,
    topic: "FICA & AML",
    level: 4,
    style: "RomanNumeral",
    prompt:
      "Which of the following must an accountable institution's Risk Management and Compliance Programme address?\ni. How the institution identifies and verifies clients, including beneficial owners.\nii. How the institution determines whether a prospective client is a prominent influential person.\niii. How the institution conducts ongoing due diligence and monitors transactions.\niv. The commission structure applicable to the institution's representatives.",
    options: [
      { letter: "A", text: "i, ii and iii only" },
      { letter: "B", text: "i and iii only" },
      { letter: "C", text: "ii and iv only" },
      { letter: "D", text: "All four" },
    ],
    correct: "A",
    justification:
      "The programme must set out how the institution identifies and verifies clients and beneficial owners, how it establishes whether a client is a prominent influential person, how it conducts ongoing due diligence and monitors for unusual activity, and how it keeps records and reports. Commission structures are a conduct matter under FAIS and have no place in it.",
    distractorAnalysis: {
      B: "Omits the prominent influential person determination, which is a specific requirement of the programme.",
      C: "Commission structures are not part of the programme, and this combination omits the core client due diligence requirements.",
      D: "Three of the four belong. Including commission structures confuses the FAIS conduct regime with the anti-money-laundering one.",
    },
    statutoryRefs: [
      "Financial Intelligence Centre Act 38 of 2001 — Risk Management and Compliance Programme",
      "Financial Intelligence Centre Act 38 of 2001 — customer due diligence, prominent influential persons, ongoing due diligence",
    ],
  },
  {
    id: "RE5-S-T6-05",
    taskId: 6,
    topic: "FICA & AML",
    level: 4,
    style: "RomanNumeral",
    prompt:
      "An institution has onboarded clients for two years using only a copy of an identity document, with no verification against an independent source, no beneficial ownership enquiry for its corporate clients, and no documented Risk Management and Compliance Programme. Which combination best describes its position?\ni. It has failed to conduct adequate customer due diligence.\nii. It has breached obligations that exist independently of the FAIS Act.\niii. It may be subject to administrative sanction by its supervisory body.\niv. It is protected, because none of its clients has turned out to be a money launderer.",
    options: [
      { letter: "A", text: "i and iii only" },
      { letter: "B", text: "i, ii and iii only" },
      { letter: "C", text: "i, ii and iv only" },
      { letter: "D", text: "ii and iii only" },
    ],
    correct: "B",
    justification:
      "The anti-money-laundering obligations bind accountable institutions in their own right, separately from FAIS. Inadequate verification, the absence of a beneficial ownership enquiry and the absence of a documented programme are each contraventions, and a supervisory body may impose administrative sanctions for them.",
    distractorAnalysis: {
      A: "Correct as far as it goes, but it misses that these duties arise outside FAIS — which is why FAIS compliance offers no answer to them.",
      C: "Statement iv is wrong. The contravention is the failure to perform the duty, not the occurrence of harm.",
      D: "Omits the failure of customer due diligence, which is the substance of what went wrong.",
    },
    statutoryRefs: [
      "Financial Intelligence Centre Act 38 of 2001 — customer due diligence, beneficial ownership, Risk Management and Compliance Programme",
      "Financial Intelligence Centre Act 38 of 2001 — administrative sanctions",
    ],
  },

  /* ── Task 7 — Complaints and the FAIS Ombud ─────────────────────────── */
  {
    id: "RE5-S-T7-01",
    taskId: 7,
    topic: "Complaints",
    level: 3,
    style: "Scenario",
    prompt:
      "A client lodges a written complaint with an FSP. Eight weeks later the FSP has neither resolved it nor responded. What is the client entitled to do?",
    options: [
      { letter: "A", text: "Nothing, until six months have passed" },
      { letter: "B", text: "Refer the matter to the Prudential Authority" },
      { letter: "C", text: "Refer the complaint to the FAIS Ombud, the internal resolution period having expired without resolution" },
      { letter: "D", text: "Approach the High Court, which is the only remaining forum" },
    ],
    correct: "C",
    justification:
      "An FSP must attempt to resolve a complaint within six weeks of receiving it. Where that period passes without resolution, or where the complaint is rejected, the client may refer it to the FAIS Ombud.",
    distractorAnalysis: {
      A: "Six months is the period within which a client must refer a rejected complaint onwards. It is not a waiting period before the client may act.",
      B: "The Prudential Authority supervises the soundness of institutions. Client complaints about financial services are not its function.",
      D: "The Ombud exists precisely so that clients are not confined to litigation.",
    },
    statutoryRefs: [
      "FAIS Act 37 of 2002, s 27 — submission of complaints to the Ombud",
      "General Code of Conduct (Board Notice 80 of 2003) — internal complaint resolution",
    ],
  },
  {
    id: "RE5-S-T7-02",
    taskId: 7,
    topic: "Complaints",
    level: 3,
    style: "MostBestLeast",
    prompt:
      "A client claims R1.4 million from an FSP arising out of advice given three years ago. Which is the MOST accurate statement about the FAIS Ombud's jurisdiction?",
    options: [
      { letter: "A", text: "The Ombud may determine the claim in full, as no monetary limit applies" },
      { letter: "B", text: "The Ombud must refer the matter to the Financial Services Tribunal" },
      { letter: "C", text: "The Ombud has no jurisdiction over a claim above the maximum, and the client has no remedy" },
      { letter: "D", text: "The Ombud may not award more than the prescribed maximum of R800,000, excluding interest and costs; the client may abandon the excess or pursue the full claim in court" },
    ],
    correct: "D",
    justification:
      "The Ombud's award is capped at the prescribed maximum of R800,000, excluding interest and costs. A complainant who wants the Ombud to decide the matter may abandon the portion above the cap; otherwise the full claim can be pursued through the courts.",
    distractorAnalysis: {
      A: "There is a prescribed cap. Treating the Ombud as an unlimited forum misstates its jurisdiction.",
      B: "The Tribunal reconsiders decisions of financial sector regulators. It does not hear client claims against FSPs.",
      C: "The size of the claim does not leave the client without a remedy; it affects which forum can give the full remedy.",
    },
    statutoryRefs: [
      "FAIS Act 37 of 2002, s 28 — determinations by the Ombud",
      "Rules on Proceedings of the Office of the Ombud for Financial Services Providers — monetary limit (verify the current figure)",
    ],
  },
  {
    id: "RE5-S-T7-03",
    taskId: 7,
    topic: "Complaints",
    level: 3,
    style: "Scenario",
    prompt:
      "An FSP is aggrieved by a decision of the Authority to withdraw the approval of one of its key individuals. Where should it take the matter?",
    options: [
      { letter: "A", text: "The Financial Services Tribunal, which reconsiders decisions of financial sector regulators" },
      { letter: "B", text: "The FAIS Ombud, which hears all disputes arising under the FAIS Act" },
      { letter: "C", text: "The Financial Intelligence Centre" },
      { letter: "D", text: "The National Consumer Commission" },
    ],
    correct: "A",
    justification:
      "The two forums do different work. The FAIS Ombud resolves complaints brought by clients against FSPs. A person aggrieved by a decision of a financial sector regulator applies to the Financial Services Tribunal for reconsideration of that decision.",
    distractorAnalysis: {
      B: "The Ombud's jurisdiction is over client complaints, not over decisions the Authority has taken.",
      C: "The Financial Intelligence Centre receives and analyses reports on money laundering and terrorist financing. It has no review function.",
      D: "The National Consumer Commission administers consumer protection legislation, which does not cover decisions of financial sector regulators.",
    },
    statutoryRefs: [
      "Financial Sector Regulation Act 9 of 2017, Chapter 15 — Financial Services Tribunal and reconsideration of decisions",
      "FAIS Act 37 of 2002, s 20 — Office of the Ombud for Financial Services Providers",
    ],
  },
  {
    id: "RE5-S-T7-04",
    taskId: 7,
    topic: "Complaints",
    level: 4,
    style: "RomanNumeral",
    prompt:
      "Which of the following are required before the FAIS Ombud may consider a matter?\ni. It is submitted by a client, or by someone acting on a client's behalf.\nii. It relates to a financial service rendered on or after the date the Act took effect.\niii. It alleges conduct by the FSP that has caused, or is likely to cause, the client prejudice or damage.\niv. The amount claimed exceeds R100,000.",
    options: [
      { letter: "A", text: "i and iii only" },
      { letter: "B", text: "i, ii and iii only" },
      { letter: "C", text: "ii, iii and iv only" },
      { letter: "D", text: "All four" },
    ],
    correct: "B",
    justification:
      "A complaint must be brought by or on behalf of a client, must concern a financial service rendered on or after the Act took effect, and must allege a contravention, deliberate or negligent conduct, or unfair treatment that has caused or is likely to cause prejudice or damage. There is no minimum value: the cap limits what the Ombud may award, not what it may hear.",
    distractorAnalysis: {
      A: "Omits the requirement that the service was rendered on or after the Act took effect, which excludes older conduct.",
      C: "Statement iv is wrong, and this combination also omits the requirement that the complaint come from a client.",
      D: "Statement iv confuses the Ombud's maximum award with a threshold for entry, which would shut small claims out of the very forum designed for them.",
    },
    statutoryRefs: [
      "FAIS Act 37 of 2002, s 1 — definition of 'complaint'",
      "FAIS Act 37 of 2002, s 27 — matters the Ombud may consider",
    ],
  },
  {
    id: "RE5-S-T7-05",
    taskId: 7,
    topic: "Complaints",
    level: 4,
    style: "Sequencing",
    prompt:
      "Place the following in the order the FAIS complaints framework contemplates.\ni. The client refers the complaint to the FAIS Ombud.\nii. The FSP receives the written complaint and records it.\niii. The FSP rejects the complaint, and notifies the client of the reasons and of the right to refer it onwards.\niv. The FSP attempts to resolve the complaint internally within the prescribed period.",
    options: [
      { letter: "A", text: "ii, iii, iv, i" },
      { letter: "B", text: "iv, ii, iii, i" },
      { letter: "C", text: "ii, iv, iii, i" },
      { letter: "D", text: "ii, iv, i, iii" },
    ],
    correct: "C",
    justification:
      "The FSP receives and records the complaint, attempts to resolve it internally within the prescribed period, and where it rejects the complaint must give the client reasons and tell the client that the matter may be referred to the Ombud. Only then does the referral arise.",
    distractorAnalysis: {
      A: "Rejection cannot precede the attempt at internal resolution; the rejection is the outcome of that attempt.",
      B: "There is nothing to resolve before the complaint has been received.",
      D: "Referral to the Ombud follows the internal process and the notification of rejection, not the other way round.",
    },
    statutoryRefs: [
      "General Code of Conduct (Board Notice 80 of 2003) — internal complaint resolution, records and notification",
      "FAIS Act 37 of 2002, s 27 — referral to the Ombud",
    ],
  },

  /* ── Task 8 — Operating as a representative ─────────────────────────── */
  {
    id: "RE5-S-T8-01",
    taskId: 8,
    topic: "Fit & Proper",
    level: 3,
    style: "Scenario",
    prompt:
      "A representative's date of first appointment is 1 March 2025. She has not yet passed the regulatory examination and works under supervision. On 1 September 2026 she still has not passed it. Which statement is correct?",
    options: [
      { letter: "A", text: "She must be debarred immediately for failing to meet the competence requirements" },
      { letter: "B", text: "She may now render services without supervision, because more than twelve months have passed" },
      { letter: "C", text: "Her date of first appointment resets each time she moves to a new FSP" },
      { letter: "D", text: "She is still within the period allowed from her date of first appointment, and may continue to render services under supervision until it expires" },
    ],
    correct: "D",
    justification:
      "A new entrant must pass the regulatory examination within two years of the date of first appointment — here, by 1 March 2027. Until she passes it she renders services under supervision. The date of first appointment attaches to the individual and does not restart on a change of FSP.",
    distractorAnalysis: {
      A: "Debarment follows a failure of honesty and integrity or a material contravention. A competence period that has not yet expired is neither.",
      B: "Supervision continues until the competence requirements are met, not until an arbitrary period of service has passed.",
      C: "If it reset on each move, a representative could stay indefinitely unqualified by changing employers, which is precisely what the rule prevents.",
    },
    statutoryRefs: [
      "Board Notice 194 of 2017 — competence, regulatory examinations and the period from date of first appointment (verify the current period)",
      "FAIS Act 37 of 2002, s 13 — representatives and supervision",
    ],
  },
  {
    id: "RE5-S-T8-02",
    taskId: 8,
    topic: "Supervision",
    level: 3,
    style: "MostBestLeast",
    prompt:
      "A representative working under supervision meets a client alone and gives advice on a long-term insurance policy. Which is the MOST accurate statement?",
    options: [
      { letter: "A", text: "This may be permitted, provided the supervision arrangement meets the prescribed requirements and the supervisor reviews the work as required" },
      { letter: "B", text: "This is permitted without qualification, because supervision is a formality" },
      { letter: "C", text: "This is prohibited: a supervised representative may never meet a client alone" },
      { letter: "D", text: "This is permitted only where the client consents in writing to being advised by a supervised representative" },
    ],
    correct: "A",
    justification:
      "Supervision does not require the supervisor to be physically present at every client interaction. It requires a documented arrangement meeting the prescribed requirements, covering the level and frequency of supervision and the review of work performed, with the supervisor remaining accountable for the advice.",
    distractorAnalysis: {
      B: "Supervision carries real obligations for both the supervisor and the FSP. Treating it as a formality is how competence gaps reach clients.",
      C: "Physical presence at every meeting is not what supervision requires, and no such blanket prohibition exists.",
      D: "Client consent is not the mechanism. The safeguard is the supervision arrangement and the supervisor's review.",
    },
    statutoryRefs: [
      "Board Notice 194 of 2017 — requirements for working under supervision",
      "FAIS Act 37 of 2002, s 13 — representatives",
    ],
  },
  {
    id: "RE5-S-T8-03",
    taskId: 8,
    topic: "Fit & Proper",
    level: 3,
    style: "Scenario",
    prompt:
      "Three months after a representative resigns, the FSP discovers that he had been misappropriating client premiums while employed. May the FSP debar him?",
    options: [
      { letter: "A", text: "No — debarment is possible only while the person is still a representative of the FSP" },
      { letter: "B", text: "Yes, provided the conduct occurred while he was a representative and the FSP acts within six months of his ceasing to be one" },
      { letter: "C", text: "No — only the Authority may debar a person who has already left" },
      { letter: "D", text: "Yes, but only with the former representative's written consent" },
    ],
    correct: "B",
    justification:
      "An FSP must debar a person who no longer meets the honesty and integrity requirements or who has materially contravened the Act. Where the person has already left, the FSP may still debar in respect of conduct that occurred while they were a representative, provided it acts within six months of the person ceasing to be a representative.",
    distractorAnalysis: {
      A: "If this were so, resigning ahead of discovery would defeat debarment entirely, which is why the six-month window exists.",
      C: "The Authority has its own debarment power, but it does not displace the FSP's duty in respect of its own former representative.",
      D: "Debarment is not consensual. It is a process the FSP must conduct fairly, which is a different thing.",
    },
    statutoryRefs: [
      "FAIS Act 37 of 2002, s 14 — debarment of representatives, including former representatives",
      "FSCA guidance on debarment (verify the current period)",
    ],
  },
  {
    id: "RE5-S-T8-04",
    taskId: 8,
    topic: "Fit & Proper",
    level: 4,
    style: "RomanNumeral",
    prompt:
      "Which of the following must an FSP do when debarring a representative?\ni. Give the representative notice of the intention to debar, and the reasons for it.\nii. Give the representative a reasonable opportunity to make a submission in response.\niii. Notify the Authority of the debarment within the prescribed period.\niv. Obtain the Authority's prior approval before the debarment takes effect.",
    options: [
      { letter: "A", text: "i and ii only" },
      { letter: "B", text: "ii, iii and iv only" },
      { letter: "C", text: "i, ii and iii only" },
      { letter: "D", text: "All four" },
    ],
    correct: "C",
    justification:
      "Debarment by an FSP requires a fair process — notice of the intention and the grounds, and a reasonable opportunity for the representative to respond — followed by notification to the Authority within the prescribed period. The FSP debars; the Authority is informed of the outcome.",
    distractorAnalysis: {
      A: "Omits the notification to the Authority, without which the debarment is not recorded on the central register.",
      B: "Includes prior approval, which is not required, and omits the notice of intention that begins the fair process.",
      D: "Requiring the Authority's prior approval would turn the FSP's own statutory duty into an application, which is not how section 14 operates.",
    },
    statutoryRefs: [
      "FAIS Act 37 of 2002, s 14 — debarment process and notification",
      "FSCA guidance on debarment (verify the current notification periods)",
    ],
  },
  {
    id: "RE5-S-T8-05",
    taskId: 8,
    topic: "Fit & Proper",
    level: 4,
    style: "RomanNumeral",
    prompt:
      "A representative is appointed on 1 December, part-way through a continuous professional development cycle, and is authorised for a single sub-category. Which combination is correct?\ni. The requirement for that first cycle is calculated pro rata.\nii. There is no obligation until the start of the next cycle.\niii. The number of hours depends on how many sub-categories the representative is authorised for.\niv. Hours earned may be carried over indefinitely into later cycles.",
    options: [
      { letter: "A", text: "ii and iii only" },
      { letter: "B", text: "i, iii and iv only" },
      { letter: "C", text: "iii and iv only" },
      { letter: "D", text: "i and iii only" },
    ],
    correct: "D",
    justification:
      "The cycle runs from 1 June to 31 May. A person who becomes subject to the requirement part-way through a cycle calculates it pro rata for the remainder of that cycle, and the number of hours depends on how many sub-categories the person is authorised for. Hours belong to the cycle in which they are earned; they are not banked indefinitely.",
    distractorAnalysis: {
      A: "Statement ii is wrong. The obligation begins when the person becomes subject to it, not at the next cycle.",
      B: "Statement iv is wrong. Carrying hours forward without limit would let a single burst of activity satisfy years of the requirement.",
      C: "Combines the one correct statement about hours with the incorrect carry-over claim, and omits the pro rata rule.",
    },
    statutoryRefs: [
      "Board Notice 194 of 2017 — continuous professional development, cycle dates, hours and pro rata calculation (verify the current hours)",
    ],
  },
];
