import type { DKQuizQuestion } from "@/types/deeperKnowledge";

export const deeperKnowledgeQuizzes: Record<string, DKQuizQuestion[]> = {
  "ch1-fais-act": [
    {
      question: "What are the two core purposes of the FAIS Act?",
      options: [
        "Professionalisation of the financial services sector and protection of consumers",
        "Regulation of banks and insurance companies",
        "Collection of levies and licensing of brokers",
        "Supervision of the JSE and regulation of unit trusts",
      ],
      correctIndex: 0,
      explanation:
        "The FAIS Act has two core purposes: to professionalise the financial services sector by setting minimum standards, and to protect consumers who use financial products and services.",
    },
    {
      question: "The FAIS Act follows a functional approach. What does this mean?",
      options: [
        "It only regulates insurance companies",
        "It regulates certain functions (advice and intermediary services) across all types of institutions",
        "It regulates all functions within banking institutions only",
        "It applies only to institutions that have more than 50 employees",
      ],
      correctIndex: 1,
      explanation:
        "A functional approach means FAIS regulates the function of providing financial advice and intermediary services regardless of whether it is performed by an insurer, bank, or brokerage. This contrasts with an institutional approach which regulates specific types of institutions.",
    },
    {
      question: "Which section of the FAIS Act deals with the authorisation requirement?",
      options: [
        "Section 13",
        "Section 17",
        "Section 7",
        "Section 34",
      ],
      correctIndex: 2,
      explanation:
        "Section 7 of the FAIS Act prohibits any person from acting as an FSP without a Section 8 license or as a representative without a Section 13 appointment.",
    },
    {
      question: "The Financial Sector Conduct Authority (FSCA) replaced which body?",
      options: [
        "The South African Reserve Bank",
        "The National Treasury",
        "The Financial Services Board (FSB)",
        "The Prudential Authority",
      ],
      correctIndex: 2,
      explanation:
        "The FSCA was established by the FSR Act and replaced the Financial Services Board (FSB) as the market conduct regulator. The FSCA now administers the FAIS Act.",
    },
    {
      question: "A person who renders financial services without authorisation under the FAIS Act is committing:",
      options: [
        "An administrative oversight that can be corrected with a fine",
        "A civil offence only",
        "A criminal offence",
        "A breach that only affects the employer",
      ],
      correctIndex: 2,
      explanation:
        "Operating without authorisation under Section 7(1) is a criminal offence under the FAIS Act. It can result in fines and imprisonment.",
    },
    {
      question: "Which of the following is NOT a role-player in terms of the FAIS Act?",
      options: [
        "The Registrar of Financial Services Providers",
        "The FAIS Ombud",
        "The Competition Commission",
        "Compliance Officers",
      ],
      correctIndex: 2,
      explanation:
        "The Competition Commission is not a role-player under the FAIS Act. The key role-players include the Registrar, the FAIS Ombud, FSPs, key individuals, representatives, and compliance officers.",
    },
    {
      question: "When did the FAIS Act come into operation?",
      options: [
        "30 September 2002",
        "15 November 2004",
        "1 January 2003",
        "30 September 2004",
      ],
      correctIndex: 3,
      explanation:
        "The FAIS Act (Act 37 of 2002) was assented to in 2002 but came into full operation on 30 September 2004.",
    },
    {
      question: "The twin-peaks regulatory model established by the FSR Act comprises:",
      options: [
        "The National Treasury and the Reserve Bank",
        "The Prudential Authority and the Financial Sector Conduct Authority",
        "The FAIS Ombud and the Registrar",
        "The JSE and the Competition Commission",
      ],
      correctIndex: 1,
      explanation:
        "The FSR Act established the twin-peaks model with the Prudential Authority (financial soundness) housed at the Reserve Bank, and the FSCA (market conduct and consumer protection).",
    },
  ],

  "ch1-fsp-licensing": [
    {
      question: "How many FSP license categories exist under the FAIS Act?",
      options: [
        "Three (I, II, III)",
        "Four (I, II, III, IV)",
        "Five (I, II, IIA, III, IV)",
        "Six (I, IA, II, IIA, III, IV)",
      ],
      correctIndex: 2,
      explanation:
        "There are five license categories: Category I (advisory/intermediary), Category II (discretionary), Category IIA (hedge fund), Category III (administrative), and Category IV (assistance business).",
    },
    {
      question: "Which FSP license category covers discretionary management of client assets?",
      options: [
        "Category I",
        "Category II",
        "Category III",
        "Category IV",
      ],
      correctIndex: 1,
      explanation:
        "Category II covers Discretionary FSPs — those authorised to manage client portfolios on a discretionary basis, making investment decisions without needing to obtain the client's prior approval for each transaction.",
    },
    {
      question: "The definition of 'advice' under the FAIS Act includes:",
      options: [
        "Only written recommendations about financial products",
        "Any recommendation or guidance provided to a client regarding the purchase of a financial product",
        "Only guidance given by a key individual",
        "Factual information about a product without any recommendation",
      ],
      correctIndex: 1,
      explanation:
        "Advice under FAIS includes any recommendation, guidance, or proposal provided to a client regarding the purchase, investment in, or disposal of a financial product. Providing factual information without a recommendation is not considered advice.",
    },
    {
      question: "Where must an FSP display its license?",
      options: [
        "Only at the head office",
        "In a safe or secure location away from public view",
        "Prominently in every business premises, and referenced on all business documentation and marketing material",
        "Only on the FSP's website",
      ],
      correctIndex: 2,
      explanation:
        "Section 8(8) requires a licensee to display certified copies of the license prominently in every business premises and ensure all business documentation, advertisements, and promotional material reference the license number.",
    },
    {
      question: "An 'intermediary service' under FAIS refers to:",
      options: [
        "Providing advice to clients about which products to buy",
        "Any act other than furnishing advice, performed for or on behalf of a client in relation to a financial product",
        "Only the collection of premiums on behalf of an insurer",
        "Administrative work performed at the head office of an FSP",
      ],
      correctIndex: 1,
      explanation:
        "An intermediary service is any act other than advice, performed by a person for or on behalf of a client or product supplier, that results in or facilitates a client entering into, varying, or disposing of a financial product.",
    },
    {
      question: "Which subcategory of long-term insurance covers risk-only products like funeral policies?",
      options: [
        "Subcategory A",
        "Subcategory B1",
        "Subcategory B2",
        "Subcategory C",
      ],
      correctIndex: 3,
      explanation:
        "Long-term Insurance Subcategory C covers risk-only products with no investment component, including funeral policies and pure risk life cover. Subcategory A covers fund member benefits, B1 covers investment-linked products, and B2 covers other non-linked products.",
    },
  ],

  "ch1-compliance-officers": [
    {
      question: "When must an FSP appoint a compliance officer?",
      options: [
        "When the FSP has more than 100 representatives",
        "When the FSP has more than one key individual or one or more representatives",
        "Only when directed to do so by the Registrar",
        "Only when the FSP operates in more than one province",
      ],
      correctIndex: 1,
      explanation:
        "Section 17(1)(a) requires any FSP with more than one key individual or one or more representatives to appoint a compliance officer. A sole proprietor FSP with no representatives manages its own compliance.",
    },
    {
      question: "What is the difference between Phase I and Phase II approval for compliance officers?",
      options: [
        "Phase I covers qualifications; Phase II covers approval to render compliance services to a specific FSP",
        "Phase I covers FSPs with fewer than 10 representatives; Phase II covers larger FSPs",
        "Phase I is temporary; Phase II is permanent approval",
        "Phase I is for internal compliance officers; Phase II is for external ones",
      ],
      correctIndex: 0,
      explanation:
        "Phase I approval pertains to the Registrar's approval of qualifications, experience, and personal character. Phase II approval is the approval to render compliance services to a specific FSP, assessing resources, independence, and absence of conflicts.",
    },
    {
      question: "A compliance officer must report material breaches to the Registrar:",
      options: [
        "Only in the annual compliance report",
        "Only when instructed to do so by the FSP's board",
        "At any time — not just in the annual report",
        "Only after obtaining legal advice",
      ],
      correctIndex: 2,
      explanation:
        "Compliance officers have a duty to report material breaches to the Registrar at any time they become aware of them — this obligation exists independently of the annual compliance report cycle.",
    },
    {
      question: "The word 'monitor' in the context of compliance means:",
      options: [
        "To watch and observe passively without taking action",
        "To critically observe, check, assess, and report on compliance with requirements",
        "To count the number of transactions processed",
        "To review financial statements for accounting accuracy",
      ],
      correctIndex: 1,
      explanation:
        "In compliance terms, 'monitor' means to critically observe, check, assess, and provide recommendations and report on compliance. It is an active, not passive, function that requires the compliance officer to take steps to verify compliance.",
    },
    {
      question: "Who is ultimately responsible for signing off the annual compliance report?",
      options: [
        "The external auditor",
        "The compliance officer alone",
        "The key individual / FSP management",
        "The FAIS Ombud",
      ],
      correctIndex: 2,
      explanation:
        "While the compliance officer prepares the report, the key individual and FSP management are responsible for establishing the compliance function and must sign off on the annual compliance report, taking responsibility for its contents.",
    },
    {
      question: "An internal compliance officer may delegate compliance services to an external compliance officer only if:",
      options: [
        "The external officer charges lower fees",
        "The external officer has Phase I and Phase II approval and the FSP consents",
        "The FSP has more than 50 representatives",
        "An internal compliance officer may never delegate to an external officer",
      ],
      correctIndex: 1,
      explanation:
        "Delegation of compliance services requires that the external compliance officer has both Phase I and Phase II approval for the specific FSP, and that the FSP consents to the delegation arrangement.",
    },
  ],

  "ch2-maintaining-license": [
    {
      question: "Within how many days must an FSP notify the Registrar of a change to its profile information?",
      options: [
        "7 days",
        "15 days",
        "30 days",
        "60 days",
      ],
      correctIndex: 1,
      explanation:
        "The FAIS Act requires FSPs to notify the Registrar in writing within 15 days of any change to information provided during the application process, including changes to directors, compliance officers, representatives, bank details, and contact information.",
    },
    {
      question: "By what date must annual FSCA levies be paid?",
      options: [
        "31 March each year",
        "30 June each year",
        "31 October each year",
        "31 December each year",
      ],
      correctIndex: 2,
      explanation:
        "Annual FSCA levies must be paid by 31 October each year. Non-payment is a ground for suspension or withdrawal of the FSP's license under Section 9.",
    },
    {
      question: "Which of the following is NOT a ground for suspension or withdrawal of a FAIS license?",
      options: [
        "Failure to meet fit and proper requirements",
        "Failure to pay levies",
        "Having fewer than five representatives",
        "Not having an approved key individual",
      ],
      correctIndex: 2,
      explanation:
        "There is no minimum number of representatives required. The grounds for suspension/withdrawal include: failure to meet fit and proper requirements, failure to comply with the Act, unpaid levies, absence of an approved KI, failure to comply with directives, and failure to comply with license conditions.",
    },
    {
      question: "Can a suspended FSP continue to render financial services?",
      options: [
        "Yes, but only to existing clients",
        "Yes, but only through its key individual",
        "No, a suspended FSP must cease all FAIS-related business",
        "Yes, but only if they pay the outstanding levies within 30 days",
      ],
      correctIndex: 2,
      explanation:
        "A suspended FSP must cease all financial services activities. The suspension effectively prevents the FSP from conducting any FAIS-related business until the suspension is lifted or the matter is resolved.",
    },
    {
      question: "The annual levy for a Category I FSP is calculated as:",
      options: [
        "A flat fee regardless of size",
        "A percentage of annual turnover",
        "A base amount plus a per-person amount for each KI and representative",
        "A percentage of commission earned",
      ],
      correctIndex: 2,
      explanation:
        "FSCA levies are calculated as a base amount plus an additional per-person amount for each key individual and representative registered with the FSP. This means larger FSPs with more representatives pay higher levies.",
    },
    {
      question: "The Registrar may suspend a license without following the normal procedure (urgent suspension) when:",
      options: [
        "The FSP is late in filing its annual return",
        "There is a danger that clients may suffer financial prejudice",
        "The FSP changes its auditor",
        "The FSP relocates its head office",
      ],
      correctIndex: 1,
      explanation:
        "Urgent suspension may be imposed without following the normal hearing procedure when the Registrar is satisfied that there is danger that clients may suffer financial prejudice. This is an emergency measure to protect consumers.",
    },
  ],

  "ch2-undesirable-practices": [
    {
      question: "What constitutes an undesirable business practice under FAIS?",
      options: [
        "Only practices specifically listed in the Act",
        "Any conduct the Registrar determines is harmful to consumers or the industry",
        "Only criminal offences",
        "Only practices that result in a client complaint to the Ombud",
      ],
      correctIndex: 1,
      explanation:
        "Undesirable business practices are broader than specific offences — the Registrar has the power to declare any conduct an undesirable business practice if it harms consumers or undermines the integrity of the financial services industry.",
    },
    {
      question: "'Churning' in the context of FAIS refers to:",
      options: [
        "Processing a high volume of legitimate transactions",
        "Systematically replacing existing products with new ones primarily to generate new commission",
        "Moving clients from one FSP to another",
        "Processing insurance claims quickly",
      ],
      correctIndex: 1,
      explanation:
        "Churning is the practice of systematically advising clients to replace existing financial products with new ones, primarily motivated by the representative's desire to earn new commission rather than acting in the client's best interest.",
    },
    {
      question: "Which of the following is a criminal offence under the FAIS Act?",
      options: [
        "Failing to send a birthday card to a client",
        "Operating without a FAIS license (contravention of Section 7(1))",
        "Not having a website",
        "Charging fees higher than competitors",
      ],
      correctIndex: 1,
      explanation:
        "Operating without authorisation under Section 7(1) is a prescribed criminal offence. Other offences include making false statements in applications, contravening Registrar directives, and obstructing the Registrar.",
    },
    {
      question: "Administrative penalties under FAIS can be imposed by:",
      options: [
        "Only the courts",
        "The FAIS Ombud",
        "The Registrar / FSCA",
        "The South African Police Service",
      ],
      correctIndex: 2,
      explanation:
        "The Registrar / FSCA has the authority to impose administrative penalties on FSPs and their representatives for contraventions of the FAIS Act, without needing to go through the courts.",
    },
    {
      question: "A client who suffers financial loss due to an FSP's breach of the FAIS Act may seek:",
      options: [
        "Only a criminal prosecution",
        "Only a complaint to the Ombud",
        "Civil remedies including damages, in addition to complaints to the Ombud",
        "Only an apology from the FSP",
      ],
      correctIndex: 2,
      explanation:
        "Consumers have multiple avenues for redress: filing a complaint with the FAIS Ombud, pursuing civil remedies (including claiming damages through the courts), and the Registrar may also take separate enforcement action.",
    },
  ],

  "ch3-key-individual": [
    {
      question: "A key individual is defined as a natural person responsible for:",
      options: [
        "Processing client applications at the FSP",
        "Managing or overseeing the activities of the FSP relating to the rendering of financial services",
        "Auditing the financial statements of the FSP",
        "Handling complaints on behalf of the FSP",
      ],
      correctIndex: 1,
      explanation:
        "Section 1(1) defines a key individual as any natural person responsible for managing or overseeing, either alone or together with others, the activities of the FSP relating to the rendering of financial services.",
    },
    {
      question: "Fit and proper requirements for key individuals include all of the following EXCEPT:",
      options: [
        "Honesty, integrity, and good standing",
        "Completion of regulatory examinations",
        "Ownership of at least 10% of the FSP",
        "Competence including qualifications and experience",
      ],
      correctIndex: 2,
      explanation:
        "There is no requirement for key individuals to own any part of the FSP. Fit and proper requirements cover: honesty, integrity, and good standing; competence (qualifications, regulatory exams, experience); and operational requirements.",
    },
    {
      question: "How often must key individuals maintain their fit and proper status?",
      options: [
        "Only at the time of initial appointment",
        "Every five years during re-registration",
        "Continuously — it is an ongoing obligation under Section 8A",
        "Only when the Registrar requests a review",
      ],
      correctIndex: 2,
      explanation:
        "Section 8A makes fit and proper compliance an ongoing obligation. Key individuals must continue to meet all requirements at all times, not just at the point of initial approval.",
    },
    {
      question: "If a key individual is found guilty of a criminal offence involving dishonesty, the FSP must:",
      options: [
        "Wait until the annual compliance report to disclose it",
        "Notify the Registrar within 15 days and the KI must cease FAIS oversight",
        "Simply issue a warning to the key individual",
        "Allow the KI to continue while the appeal process is underway",
      ],
      correctIndex: 1,
      explanation:
        "The KI no longer meets honesty, integrity, and good standing requirements. The FSP must notify the Registrar within 15 days and the KI must cease managing or overseeing FAIS-related activities until the Registrar makes a determination.",
    },
    {
      question: "CPD (Continuous Professional Development) for key individuals requires:",
      options: [
        "No CPD — only representatives need CPD",
        "A minimum number of CPD hours/credits per compliance period, including ethics hours",
        "Attendance at one conference per year",
        "Completion of a new qualification every three years",
      ],
      correctIndex: 1,
      explanation:
        "Key individuals must complete a minimum number of CPD credits per compliance period, which includes a specified number of ethics hours. CPD ensures ongoing competence and knowledge of regulatory changes.",
    },
    {
      question: "A sole proprietor FSP is:",
      options: [
        "Not required to have a key individual",
        "Inherently the key individual of the FSP",
        "Required to appoint an external key individual",
        "Exempt from fit and proper requirements",
      ],
      correctIndex: 1,
      explanation:
        "A sole proprietor who operates as an FSP is inherently the key individual, as they are the person managing and overseeing the rendering of financial services. They must meet all KI fit and proper requirements.",
    },
  ],

  "ch4-general-code": [
    {
      question: "The general duty under the Code of Conduct requires a provider to render financial services:",
      options: [
        "As quickly as possible to maximise client convenience",
        "Honestly, fairly, with due skill, care and diligence, and in the interests of clients",
        "In a manner that maximises the FSP's commission income",
        "Only through face-to-face meetings with clients",
      ],
      correctIndex: 1,
      explanation:
        "Section 2 of the General Code prescribes the overarching duty: a provider must at all times render financial services honestly, fairly, with due skill, care and diligence, and in the interests of clients and the integrity of the financial services industry.",
    },
    {
      question: "Before rendering a financial service, an FSP must disclose all of the following EXCEPT:",
      options: [
        "The FSP's license details and authorised products",
        "Any ownership or financial interest that could influence advice",
        "The complaints procedure",
        "The FSP's annual profit figures",
      ],
      correctIndex: 3,
      explanation:
        "The FSP must disclose its identity and license details, authorised categories, any conflicts of interest (ownership/financial interests), and the complaints procedure. Annual profit figures are not a required disclosure.",
    },
    {
      question: "When must disclosure be made to a client?",
      options: [
        "Within 30 days after the financial service is rendered",
        "Before rendering the financial service",
        "Only if the client requests disclosure",
        "At the annual review meeting",
      ],
      correctIndex: 1,
      explanation:
        "Disclosure must be made before the financial service is rendered — not after. The client must have the information needed to make an informed decision before any advice is given or product is sold.",
    },
    {
      question: "A 'record of advice' must include:",
      options: [
        "Only the product recommended",
        "The client's financial needs, the advice given, the products recommended, and the reasons why the products are suitable",
        "Only the commission amount",
        "Only the client's signature",
      ],
      correctIndex: 1,
      explanation:
        "A record of advice must document the client's financial situation and needs, the advice given, the specific financial products recommended, and the reasons why those products are considered suitable for the client.",
    },
    {
      question: "An FSP's conflict of interest policy must be:",
      options: [
        "Kept confidential from all employees",
        "Written, implemented, trained on, monitored, and records of conflicts kept",
        "Only discussed at board meetings",
        "Filed with the Ombud annually",
      ],
      correctIndex: 1,
      explanation:
        "BN 58/2010 requires the FSP to have a written conflict of interest policy, ensure all staff are trained on it, monitor compliance, and maintain records of all conflicts identified and how they were managed.",
    },
    {
      question: "Regarding custody of client financial products or funds, an FSP must:",
      options: [
        "Mix client funds with the FSP's own operating funds for efficiency",
        "Keep client funds separate from the FSP's own funds in a separate trust or designated account",
        "Invest client funds in the FSP's own business",
        "Only handle cash payments, never electronic transfers",
      ],
      correctIndex: 1,
      explanation:
        "FSPs must keep client funds strictly separate from their own business funds. Client funds must be held in a designated trust account or separate account, with proper records and controls to protect client assets.",
    },
    {
      question: "Direct marketing communications must:",
      options: [
        "Be sent to as many people as possible to maximise sales",
        "Not include the FSP's details to protect privacy",
        "Clearly identify the FSP, include opt-out instructions, and comply with applicable legislation",
        "Only occur between 9am and 5pm on weekdays",
      ],
      correctIndex: 2,
      explanation:
        "Direct marketing must clearly identify the FSP, state the purpose, include opt-out instructions, and comply with both the FAIS Code and applicable consumer protection/electronic communications legislation.",
    },
    {
      question: "When an FSP terminates its business, it must:",
      options: [
        "Simply close its doors and stop operating",
        "Notify the Registrar within 15 days, make arrangements for clients, and ensure orderly wind-down",
        "Transfer all clients to the nearest FSP without informing them",
        "Delete all client records to protect privacy",
      ],
      correctIndex: 1,
      explanation:
        "An FSP terminating business must notify the Registrar, make proper arrangements for clients' ongoing needs, ensure an orderly wind-down, and maintain records as required. Client interests must be protected throughout the process.",
    },
  ],

  "ch5-record-keeping": [
    {
      question: "For how long must an FSP maintain records under the FAIS Act?",
      options: [
        "Three years",
        "Five years minimum",
        "Seven years",
        "Ten years",
      ],
      correctIndex: 1,
      explanation:
        "Section 18 requires a minimum of five years for FAIS-related records. This is a floor — other legislation may require longer retention for specific types of records.",
    },
    {
      question: "A Suspicious Transaction Report (STR) must be filed with the FIC within:",
      options: [
        "24 hours",
        "5 business days",
        "15 days of forming the suspicion",
        "30 days",
      ],
      correctIndex: 2,
      explanation:
        "STRs must be filed with the Financial Intelligence Centre within 15 days of the person forming the suspicion that a transaction is suspicious or unusual.",
    },
    {
      question: "A Cash Threshold Report (CTR) must be filed for cash transactions above:",
      options: [
        "R10,000",
        "R24,999.99",
        "R50,000",
        "R100,000",
      ],
      correctIndex: 1,
      explanation:
        "Cash Threshold Reports must be filed with the FIC within 2 days for any cash transaction above R24,999.99 (i.e., R25,000 or more).",
    },
    {
      question: "'Tipping off' in the context of FICA refers to:",
      options: [
        "Providing a gratuity to a compliance officer",
        "Warning a client that a Suspicious Transaction Report has been or will be filed",
        "Sharing market tips with clients",
        "Informing the Registrar about a competitor's activities",
      ],
      correctIndex: 1,
      explanation:
        "Tipping off means informing or warning a person that an STR has been filed or is being considered in respect of their transactions. It is a criminal offence under FICA because it could allow the suspect to destroy evidence or flee.",
    },
    {
      question: "'Structuring' in the context of money laundering means:",
      options: [
        "Organizing client files in a logical manner",
        "Breaking large cash transactions into smaller amounts to avoid reporting thresholds",
        "Setting up a corporate structure for the FSP",
        "Creating a hierarchical management structure",
      ],
      correctIndex: 1,
      explanation:
        "Structuring (also called 'smurfing') involves deliberately breaking large cash transactions into smaller amounts below the R25,000 reporting threshold to avoid triggering a Cash Threshold Report. It is a red flag for money laundering.",
    },
    {
      question: "Records that must be maintained under FAIS include all of the following EXCEPT:",
      options: [
        "Premature cancellations of transactions",
        "Complaints received",
        "Employees' personal medical records",
        "Cases of non-compliance by representatives",
      ],
      correctIndex: 2,
      explanation:
        "Section 18 requires records of premature cancellations, complaints, continued compliance, cases of non-compliance, and representative compliance. Employee medical records are not part of FAIS record-keeping requirements.",
    },
  ],

  "ch6-money-laundering": [
    {
      question: "The three stages of money laundering are:",
      options: [
        "Collection, distribution, and investment",
        "Placement, layering, and integration",
        "Deposit, transfer, and withdrawal",
        "Identification, verification, and reporting",
      ],
      correctIndex: 1,
      explanation:
        "Placement is getting dirty money into the financial system; layering is moving it through multiple transactions to obscure its origin; integration is making it appear as legitimate income. FSPs must be vigilant at all stages.",
    },
    {
      question: "Under FICA, FSPs are classified as:",
      options: [
        "Regulated entities",
        "Reporting institutions",
        "Accountable institutions",
        "Supervisory bodies",
      ],
      correctIndex: 2,
      explanation:
        "FSPs are classified as 'accountable institutions' under FICA, which imposes obligations to identify and verify clients, keep records, report suspicious transactions, and implement internal rules and training.",
    },
    {
      question: "Enhanced due diligence applies to:",
      options: [
        "All clients equally",
        "Only clients with accounts over R1 million",
        "High-risk clients and politically exposed persons (PEPs)",
        "Only foreign nationals",
      ],
      correctIndex: 2,
      explanation:
        "Enhanced due diligence (EDD) is required for clients assessed as high-risk and for politically exposed persons (PEPs) — individuals who hold or have held prominent public positions, including their family members and close associates.",
    },
    {
      question: "An FSP's FICA internal rules must cover:",
      options: [
        "Only client identification procedures",
        "Client identification and verification, record-keeping, suspicious transaction reporting, and staff training",
        "Only the reporting of large cash transactions",
        "Only the training of compliance officers",
      ],
      correctIndex: 1,
      explanation:
        "FICA internal rules must be comprehensive, covering: establishment and verification of client identity, record-keeping procedures, processes for identifying and reporting suspicious transactions, and staff training on AML obligations.",
    },
    {
      question: "For natural persons, client identification under FICA requires:",
      options: [
        "Only a verbal confirmation of identity",
        "Full name, date of birth, identity number, and residential address — all verified",
        "Only a business card",
        "Only a driver's license number",
      ],
      correctIndex: 1,
      explanation:
        "For natural persons, FICA requires the FSP to obtain and verify: full name, date of birth, identity number, and residential address. Verification must be done against reliable and independent source documents.",
    },
    {
      question: "Failure to train employees on FICA obligations can result in:",
      options: [
        "A verbal warning only",
        "No consequences if no suspicious transactions occurred",
        "Administrative sanctions on the FSP, and personal liability for representatives who fail to report",
        "A recommendation for improvement in the next compliance report",
      ],
      correctIndex: 2,
      explanation:
        "Training is a legal requirement under FICA, not optional. The FSP faces administrative sanctions for failing to train staff, and individual representatives may be held personally liable if they fail to identify and report suspicious transactions due to lack of training.",
    },
  ],

  "ch7-ombud": [
    {
      question: "What is the maximum award the FAIS Ombud can make?",
      options: [
        "R100,000",
        "R500,000",
        "R800,000",
        "R1,000,000",
      ],
      correctIndex: 2,
      explanation:
        "The FAIS Ombud's maximum award is R800,000, unless both parties agree to a higher amount. For claims exceeding this amount, the complainant would need to pursue the matter through the courts.",
    },
    {
      question: "Within what period must a complaint generally be filed with the FAIS Ombud?",
      options: [
        "Within 1 year of the event",
        "Within 3 years, extendable to 6 years in certain circumstances",
        "Within 5 years",
        "There is no time limit",
      ],
      correctIndex: 1,
      explanation:
        "A complaint must generally be filed within three years of the event giving rise to the complaint. In certain circumstances, this period may be extended to six years.",
    },
    {
      question: "Who pays the case fees in an Ombud investigation?",
      options: [
        "The complainant (client)",
        "The FSP — regardless of the outcome",
        "The party who loses the case",
        "The case fees are paid by the FSCA",
      ],
      correctIndex: 1,
      explanation:
        "Case fees are payable by the FSP regardless of whether the complaint is upheld or dismissed. This ensures that the complaint process remains free and accessible to consumers.",
    },
    {
      question: "If an FSP fails to respond to the Ombud's investigation, the Ombud may:",
      options: [
        "Simply close the case",
        "Make a default determination based on the complainant's version",
        "Refer the matter back to the FSP for another 90 days",
        "Reduce the case fees as a penalty",
      ],
      correctIndex: 1,
      explanation:
        "If the FSP fails to cooperate, the Ombud may make a default determination against the FSP based on the complainant's version of events. This determination can be enforced as a court order.",
    },
    {
      question: "An Ombud determination becomes binding when:",
      options: [
        "The Ombud signs it",
        "The complainant accepts it",
        "The FSP acknowledges receipt",
        "30 days after it is issued",
      ],
      correctIndex: 1,
      explanation:
        "The Ombud's determination is binding on the FSP if the complainant accepts it. If the complainant does not accept it, they retain the right to pursue other legal remedies. The FSP cannot reject a determination accepted by the complainant.",
    },
    {
      question: "The FAIS Ombud can also facilitate resolution through:",
      options: [
        "Criminal prosecution",
        "Mediation and settlement",
        "Debarment of representatives",
        "Suspension of the FSP's license",
      ],
      correctIndex: 1,
      explanation:
        "Besides making formal determinations, the Ombud can mediate between parties and facilitate settlements. This often results in faster, mutually agreeable outcomes without the need for a formal determination.",
    },
  ],

  "ch8-representatives": [
    {
      question: "A representative under FAIS is a person who:",
      options: [
        "Owns shares in an FSP",
        "Renders financial services to clients for or on behalf of an FSP",
        "Only performs administrative duties at an FSP",
        "Audits the FSP's accounts",
      ],
      correctIndex: 1,
      explanation:
        "A representative is defined as a person who renders financial services (advice and/or intermediary services) to clients for or on behalf of an authorised FSP, under the FSP's supervision.",
    },
    {
      question: "Before appointing a representative, an FSP must verify:",
      options: [
        "Only that the person has a valid driver's license",
        "Only that the person has a qualification",
        "That the person meets all fit and proper requirements, including checking the debarment register",
        "Only that the person is over 18 years old",
      ],
      correctIndex: 2,
      explanation:
        "The FSP must verify all fit and proper requirements before appointment: honesty and integrity (including checking the debarment register for previous debarments), qualifications, regulatory exam status, and relevant experience.",
    },
    {
      question: "The representative register must be updated and changes reported to the Registrar within:",
      options: [
        "7 days",
        "15 days",
        "30 days",
        "60 days",
      ],
      correctIndex: 1,
      explanation:
        "Changes to the representative register must be reported to the Registrar within 15 days. The register must include personal details, appointed categories, fit and proper status, and supervision arrangements.",
    },
    {
      question: "What is the difference between 'direct supervision' and 'ongoing supervision'?",
      options: [
        "Direct supervision is by the compliance officer; ongoing is by the KI",
        "Direct supervision occurs daily to weekly in the initial period; ongoing supervision occurs fortnightly to monthly thereafter",
        "Direct supervision is for Category I only; ongoing is for Category II",
        "There is no difference — they are the same thing",
      ],
      correctIndex: 1,
      explanation:
        "Direct supervision is intensive (daily to weekly contact) and occurs during the initial period after appointment. Ongoing supervision is less frequent (fortnightly to monthly) and applies after the representative has gained sufficient experience.",
    },
    {
      question: "A debarred representative may be reappointed:",
      options: [
        "Never — debarment is permanent",
        "After following specific rehabilitation procedures and obtaining Registrar approval",
        "After waiting one year",
        "By simply moving to a different FSP",
      ],
      correctIndex: 1,
      explanation:
        "Debarment is not necessarily permanent. A debarred person may be reappointed after following specific rehabilitation procedures, which may include meeting certain conditions set by the Registrar and demonstrating fitness to re-enter the industry.",
    },
    {
      question: "The grounds for debarment of a representative include:",
      options: [
        "Taking annual leave without prior approval",
        "Changing residential address without notifying the FSP",
        "Contravening the FAIS Act, no longer meeting fit and proper requirements, or misconduct",
        "Failing to attend the FSP's annual conference",
      ],
      correctIndex: 2,
      explanation:
        "Grounds for debarment include: contravention of the FAIS Act or Code of Conduct, no longer meeting fit and proper requirements, dishonesty or misconduct, incompetence, and actions that bring the industry into disrepute.",
    },
    {
      question: "A supervisor of a representative under supervision must have:",
      options: [
        "Any qualification in finance",
        "At least one year of experience in the relevant product category and be fully qualified",
        "At least ten years of industry experience",
        "A law degree",
      ],
      correctIndex: 1,
      explanation:
        "The supervisor must be a qualified representative or key individual with at least one year of experience in the relevant product category. They must be competent to provide guidance and assess the supervised representative's work.",
    },
  ],

  "ch1-fsr-act": [
    {
      question: "The primary objective of the Prudential Authority is to:",
      options: [
        "Protect consumers from unfair treatment",
        "Promote and enhance the safety and soundness of financial institutions",
        "Resolve complaints between clients and FSPs",
        "Regulate the Johannesburg Stock Exchange",
      ],
      correctIndex: 1,
      explanation:
        "The Prudential Authority (housed at the Reserve Bank) focuses on the safety and soundness of financial institutions — their capital adequacy, liquidity, risk management, and governance.",
    },
    {
      question: "The FSCA's objective includes all of the following EXCEPT:",
      options: [
        "Enhancing the efficiency and integrity of financial markets",
        "Promoting fair customer treatment",
        "Setting monetary policy and interest rates",
        "Providing financial customers with financial education",
      ],
      correctIndex: 2,
      explanation:
        "Setting monetary policy and interest rates is the function of the South African Reserve Bank, not the FSCA. The FSCA focuses on market conduct — how financial institutions design, market, and sell products and treat customers.",
    },
    {
      question: "Under the FSR Act, memoranda of understanding between regulators must be:",
      options: [
        "Renewed every year",
        "Established within 6 months and reviewed every 3 years",
        "Signed only by the Minister of Finance",
        "Published in the Government Gazette monthly",
      ],
      correctIndex: 1,
      explanation:
        "The FSR Act requires regulators to establish MOUs within 6 months and review them every 3 years. These MOUs ensure cooperation, information sharing, and consistent regulatory strategies between the PA and FSCA.",
    },
    {
      question: "The Financial Stability Oversight Committee's role is to:",
      options: [
        "Issue FAIS licenses",
        "Facilitate coordination between financial sector regulators to maintain financial stability",
        "Handle client complaints",
        "Audit FSPs' financial statements",
      ],
      correctIndex: 1,
      explanation:
        "The Financial Stability Oversight Committee facilitates coordination between the financial sector regulators (PA, FSCA) and the Reserve Bank to identify and respond to risks to financial stability.",
    },
    {
      question: "Under the twin-peaks model, licensing decisions may require:",
      options: [
        "Only FSCA approval",
        "Only Prudential Authority approval",
        "Concurrence of both the PA and FSCA where applicable",
        "Parliamentary approval",
      ],
      correctIndex: 2,
      explanation:
        "Where both prudential and conduct requirements apply, licensing decisions require concurrence from both regulators. This prevents situations where an institution is authorised for conduct purposes but lacks financial capacity.",
    },
  ],
};
