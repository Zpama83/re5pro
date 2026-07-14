import type { DKTopic } from "@/types/deeperKnowledge";
import { deeperKnowledgeQuizzes } from "./deeperKnowledgeQuizzes";

const _topics: DKTopic[] = [
  {
    id: "ch1-fais-act",
    slug: "fais-act-regulatory-framework",
    title: "The FAIS Act as a Regulatory Framework",
    summary:
      "Understand the Financial Advisory and Intermediary Services Act — its purpose, role-players, and how it professionalises the financial services sector while protecting consumers.",
    sort_order: 1,
    created_at: "2026-01-01",
    updated_at: "2026-01-01",
    regulatory_refs: {
      "FAIS Act": "Act 37 of 2002",
      "FSR Act": "Act 9 of 2017",
      Task: "Task 1",
    },
    related_concepts: ["ch1-fsp-licensing", "ch1-compliance-officers", "ch2-maintaining-license"],
    principle: {
      statement:
        "The FAIS Act is market conduct regulation — it sets minimum standards for how authorised financial services providers must conduct business with clients. Its two core purposes are professionalisation of the financial services sector and protection of consumers.",
      mischief:
        "Before the FAIS Act, there was no unified regulation governing how financial advice and intermediary services were rendered to consumers, leaving clients vulnerable to incompetent or dishonest advice across insurance, banking and investment sectors.",
      consumerHarm:
        "Without this framework, consumers could receive biased advice from unqualified individuals, have no recourse for complaints, and face financial loss through products sold without proper disclosure or suitability analysis.",
    },
    legislation: [
      {
        source: "FAIS Act Section 7 — Authorisation",
        text: "A person may not act or offer to act as a financial services provider unless such person has been issued with a license under Section 8; or a representative, unless such person has been appointed as a representative of an authorised financial services provider under Section 13.",
        interpretation:
          "No individual or entity may provide financial services without proper FAIS authorisation. FSPs need a Section 8 license; representatives need a Section 13 appointment by an authorised FSP. Operating without authorisation is an offence.",
      },
      {
        source: "FAIS Act — Functional Approach",
        text: "The FAIS Act follows a functional approach and not an institutional approach. This means the Act regulates certain functions across institutions (insurance companies, brokerages and banks).",
        interpretation:
          "Unlike the Banks Act which only regulates banks, FAIS regulates the function of providing financial services regardless of which type of institution performs it. If you give advice or perform intermediary services on any financial product, FAIS applies to you.",
      },
      {
        source: "FSR Act — Establishment of Regulators",
        text: "The FSR Act establishes the Prudential Authority and the Financial Sector Conduct Authority (FSCA), conferring powers to preserve and enhance financial stability.",
        interpretation:
          "The FSR Act created the twin-peaks regulatory model: the Prudential Authority focuses on financial soundness of institutions, while the FSCA (which replaced the FSB) focuses on market conduct and consumer protection. Both report to the Reserve Bank.",
      },
    ],
    scenarios: [
      {
        type: "compliant",
        title: "Properly authorised FSP renders advice",
        narrative:
          "BlueStar Financial holds a Category I FAIS license and has appointed Sarah as a representative under Section 13. Sarah gives investment advice to a client after completing her RE5 exam, Class of Business training, and CPD requirements. She makes full disclosure and provides advice within the subcategories her FSP is licensed for.",
        key_learning:
          "Both the FSP (through its license) and the representative (through proper appointment and fitness) must be authorised before any financial service is rendered.",
      },
      {
        type: "breach",
        title: "Unlicensed individual gives financial advice",
        narrative:
          "James, who works for a motor dealership, regularly advises customers to take specific insurance products beyond just the warranty. He is not registered as a representative and his employer does not hold a FAIS license for insurance intermediary services.",
        key_learning:
          "Any person who gives advice or renders intermediary services on financial products must either be a licensed FSP or an appointed representative. Operating without authorisation is a criminal offence under FAIS.",
        consequences:
          "The FSP can be fined, have its license suspended or withdrawn, and may face criminal prosecution. The consumer may also have recourse through the FAIS Ombud.",
      },
      {
        type: "gray",
        title: "Administrative clerk handling client paperwork",
        narrative:
          "Anne works as an assistant at a dealership, uploading finance applications and preparing warranty documents for the Business Manager. She does not provide advice or sell products — she only handles administrative paperwork.",
        key_learning:
          "If a person only performs clerical tasks that do not involve exercising judgement or providing advice/intermediary services, they need not be registered as a representative. However, preparing warranty documents could constitute intermediary services if it involves actions that result in a client entering into a financial product transaction.",
      },
    ],
    simulator: null,
    exam_relevance: {
      frequencyInExams:
        "Very High — expect 8-12 questions on FAIS Act fundamentals, role-players, and the regulatory framework. This is the foundation for the entire exam.",
      sampleQuestions: [
        "Which of the following would qualify as a representative of an FSP in terms of the FAIS Act?",
        "The FAIS Act follows a functional approach. What does this mean?",
        "What are the two core purposes of the FAIS Act?",
        "Which role-player in the FAIS Act resolves disputes between consumers and FSPs?",
        "When did the FAIS Act come into operation?",
      ],
      keyPhrases: [
        "functional approach",
        "market conduct regulation",
        "Section 7 authorisation",
        "Section 8 license",
        "Section 13 appointment",
        "professionalisation",
        "consumer protection",
        "FSR Act twin peaks",
        "Prudential Authority",
        "FSCA",
      ],
    },
  },
  {
    id: "ch1-fsp-licensing",
    slug: "fsp-licensing-categories",
    title: "FSP Licensing Categories & Financial Products",
    summary:
      "Master the five FSP license categories (I, II, IIA, III, IV), the financial products and subcategories within each, and how licensing conditions restrict which services an FSP may render.",
    sort_order: 2,
    created_at: "2026-01-01",
    updated_at: "2026-01-01",
    regulatory_refs: {
      "FAIS Act": "Section 8",
      "BN 123/2009": "Licensing Conditions",
      Task: "Task 1",
    },
    related_concepts: ["ch1-fais-act", "ch2-maintaining-license"],
    principle: {
      statement:
        "FSPs are categorised into five license categories based on the type of financial services they render. Each category has specific subcategories of financial products, and the FSP may only operate within the categories and subcategories specified in its license.",
      mischief:
        "Without clear categorisation, FSPs could render services beyond their competence — for example, an advisory firm might offer discretionary portfolio management without the necessary expertise, controls, or capital requirements.",
      consumerHarm:
        "A client investing through an FSP that lacks proper discretionary management authorisation (Category II) may have no regulatory protection if the FSP makes poor investment decisions, as the FSP was never assessed for that function.",
    },
    legislation: [
      {
        source: "FAIS Act Section 8 — Application for Authorisation",
        text: "The license authorises the licensee to carry on business in respect of financial advisory and/or intermediary services in respect of the specified financial products.",
        interpretation:
          "Category I covers general advice and intermediary services. Category II covers discretionary FSPs. Category IIA covers hedge fund FSPs. Category III covers administrative FSPs. Category IV covers assistance business FSPs. Each has specific product subcategories like Long-term Insurance A, B1, C, Short-term Personal/Commercial lines, etc.",
      },
      {
        source: "FAIS Act Section 8(8) — Display of License",
        text: "A licensee must display certified copies of the license in a prominent and durable manner in every business premises and must ensure that all business documentation, advertisements and other promotional material refers to the license.",
        interpretation:
          "Clients must be able to verify that the FSP is properly authorised. The license number must appear on all marketing materials and business documents. Failure to display the license is a contravention of the FAIS Act.",
      },
    ],
    scenarios: [
      {
        type: "compliant",
        title: "FSP operates within licensed subcategories",
        narrative:
          "FinAdvice Holdings holds a Category I license for Long-term Insurance Subcategory B1 and Short-term Personal Lines. When a client asks about investment products (Category II), the representative explains that this falls outside their license and refers the client to a properly licensed discretionary FSP.",
        key_learning:
          "Representatives must know which subcategories their FSP is licensed for and must never render services outside those categories. Referring clients to appropriately licensed providers is the correct response.",
      },
      {
        type: "breach",
        title: "FSP renders services outside license categories",
        narrative:
          "A Category I FSP licensed only for short-term insurance begins advising clients on collective investment schemes without applying for the additional subcategory. The representative provides advice on unit trusts because the client requested it.",
        consequences:
          "The FSP has contravened its licensing conditions. The Registrar may suspend or withdraw the license under Section 9. Both the FSP and representative may face penalties. Any transactions concluded may still be valid between the product supplier and client, but the FSP bears regulatory consequences.",
      },
    ],
    simulator: null,
    exam_relevance: {
      frequencyInExams:
        "High — 4-6 questions on license categories, subcategories, and the distinction between advice and intermediary services.",
      sampleQuestions: [
        "Which category covers all persons authorised as Discretionary FSPs?",
        "What is the definition of 'advice' under the FAIS Act?",
        "What is the definition of 'intermediary service' under the FAIS Act?",
        "Where must an FSP display its license?",
      ],
      keyPhrases: [
        "Category I",
        "Category II discretionary",
        "Category IIA hedge fund",
        "Category III administrative",
        "Category IV assistance",
        "advice definition",
        "intermediary service",
        "subcategory",
        "display of license",
      ],
    },
  },
  {
    id: "ch1-compliance-officers",
    slug: "compliance-officers-function",
    title: "Compliance Officers & the Compliance Function",
    summary:
      "Understand the appointment, approval, duties, and reporting obligations of compliance officers — including Phase I and Phase II approval, delegation rules, and conflict of interest requirements.",
    sort_order: 3,
    created_at: "2026-01-01",
    updated_at: "2026-01-01",
    regulatory_refs: {
      "FAIS Act": "Section 17",
      "BN 127/2010": "Compliance Officer Approval",
      "BN 126/2010": "Compliance Under Supervision",
      Task: "Task 1",
    },
    related_concepts: ["ch1-fais-act", "ch1-fsp-licensing"],
    principle: {
      statement:
        "An FSP with more than one key individual or one or more representatives must appoint a compliance officer to oversee the compliance function, monitor compliance with the FAIS Act, and take responsibility for liaison with the Registrar.",
      mischief:
        "Without an independent compliance function, FSPs could operate unchecked, failing to meet regulatory obligations, mishandling client funds, or allowing unqualified representatives to render services.",
      consumerHarm:
        "Clients could receive services from an FSP that routinely breaches the Code of Conduct without any internal mechanism to detect, report, or correct the breaches — leading to ongoing harm without recourse.",
    },
    legislation: [
      {
        source: "FAIS Act Section 17(1)(a)",
        text: "Any authorised FSP with more than one key individual or one or more representatives must appoint one or more compliance officers to oversee the provider's compliance function and to monitor compliance with this Act.",
        interpretation:
          "The compliance function is mandatory for FSPs with representatives or multiple key individuals. The FSP/key individual is responsible for establishing the function; the compliance officer is responsible for executing it. An FSP with one KI and no representatives manages its own compliance.",
      },
      {
        source: "BN 127 of 2010 — Phase I and II Approval",
        text: "Phase I approval pertains to the Registrar's approval of qualifications, experience, and personal character. Phase II approval pertains to the approval to render compliance services to a specific FSP.",
        interpretation:
          "A compliance officer must obtain Phase I approval (qualifications, 3 years experience, regulatory exam, honesty/integrity) and then Phase II approval (adequate resources, access to senior management, ability to act independently, no conflict of interest) before rendering compliance services to a specific FSP.",
      },
    ],
    scenarios: [
      {
        type: "compliant",
        title: "Compliance officer reports material breach",
        narrative:
          "Moira, a compliance officer at an insurance FSP, discovers that several representatives are not disclosing commission structures to clients as required by the General Code. She immediately reports the material breach to the FAIS Registrar as required, documents her findings, and makes written recommendations to the FSP for remedial action.",
        key_learning:
          "Compliance officers must report material breaches to the Registrar at any time — not just in the annual compliance report. The duty to report exists independently of whether the FSP acts on the recommendations.",
      },
      {
        type: "breach",
        title: "Conflict of interest between compliance and other roles",
        narrative:
          "An FSP appoints its head of sales as the internal compliance officer. This person is responsible for both driving sales targets and monitoring compliance with disclosure requirements. When compliance findings would reduce sales productivity, they are downplayed in reports.",
        consequences:
          "The compliance officer cannot act independently or objectively when their duties conflict with their management role. The Registrar may withdraw approval if the compliance officer does not meet Phase II requirements for independence and objectivity.",
      },
    ],
    simulator: null,
    exam_relevance: {
      frequencyInExams:
        "High — 4-6 questions on compliance officer duties, appointment requirements, Phase I/II approval, and reporting obligations.",
      sampleQuestions: [
        "When must an FSP appoint a compliance officer?",
        "What does 'monitor' mean in compliance terms?",
        "What is the difference between Phase I and Phase II approval?",
        "Who is responsible for signing off the annual compliance report?",
        "Can an internal compliance officer delegate compliance services?",
      ],
      keyPhrases: [
        "Section 17",
        "Phase I approval",
        "Phase II approval",
        "compliance function",
        "monitor compliance",
        "material breach",
        "conflict of interest",
        "annual compliance report",
        "BN 127 of 2010",
        "liaison with Registrar",
      ],
    },
  },
  {
    id: "ch2-maintaining-license",
    slug: "maintaining-fsp-license",
    title: "Maintaining an FSP License",
    summary:
      "Learn the ongoing obligations to maintain a FAIS license — licensing conditions, profile changes, levies, display requirements, and what happens when conditions are not met including suspension and withdrawal.",
    sort_order: 4,
    created_at: "2026-01-01",
    updated_at: "2026-01-01",
    regulatory_refs: {
      "FAIS Act": "Sections 8-9",
      "BN 123/2009": "Licensing Conditions",
      "BN 81/2016": "Levies",
      Task: "Task 2",
    },
    related_concepts: ["ch1-fsp-licensing", "ch2-undesirable-practices", "ch2-offences"],
    principle: {
      statement:
        "An FSP license carries ongoing conditions. The FSP must inform the Registrar within 15 days of any changes to licensing details, maintain the services of approved key individuals, submit the representative register, pay levies, and display the license prominently.",
      mischief:
        "If licensees could change critical business details (directors, compliance officers, product categories) without notifying the Registrar, the regulatory oversight system would be undermined — the Registrar would be unable to assess whether the FSP still meets fit and proper requirements.",
      consumerHarm:
        "A consumer dealing with an FSP whose key individual has left and not been replaced might receive unsupervised advice from unqualified representatives, with no accountability structure in place.",
    },
    legislation: [
      {
        source: "FAIS Act Section 8 — Licensing Conditions",
        text: "The financial services provider must inform the Registrar in writing, within 15 days after the change has taken place, of any change in respect of business information provided during the application process.",
        interpretation:
          "The 15-day notification rule is critical. Changes include: business name, directors, shareholders, bank details, compliance officer, auditor, representatives, key individuals, and contact details. Each profile change requires specific forms (FSP 1-13) and applicable fees.",
      },
      {
        source: "FAIS Act Section 9 — Suspension and Withdrawal",
        text: "The Registrar may suspend or withdraw any license if satisfied that the licensee no longer meets fit and proper requirements, failed to comply with the Act, or failed to pay levies.",
        interpretation:
          "Suspension or withdrawal can happen for seven specified reasons including failure to meet fit and proper requirements, failure to comply with FAIS provisions, unpaid levies, not having an approved KI, failure to comply with directives, or failure to comply with license conditions. The Registrar must follow proper procedure except in urgent cases.",
      },
    ],
    scenarios: [
      {
        type: "compliant",
        title: "FSP notifies Registrar of key individual change",
        narrative:
          "When the key individual at Prestige Financial resigns, the FSP immediately initiates the appointment of a new KI, submits the required profile change forms within 15 days, and ensures the departing KI does not manage or oversee FAIS-related business after departure.",
        key_learning:
          "The FSP must at all times have an approved key individual. When a KI leaves, the process to replace them must begin immediately, with notification to the Registrar within 15 days. The departing KI must cease oversight functions immediately.",
      },
      {
        type: "breach",
        title: "FSP fails to pay FSCA levies",
        narrative:
          "A Category I FSP with 50 representatives fails to pay the annual levy by the 31 October deadline. The FSP ignores reminder notices. After 30 days of non-payment, the Registrar initiates suspension proceedings.",
        consequences:
          "Non-payment of levies is a ground for suspension or withdrawal under Section 9. The FSP's license can be suspended, preventing it from conducting any FAIS-related business. Levies are calculated as a base amount plus a per-person amount for each KI and representative.",
      },
    ],
    simulator: null,
    exam_relevance: {
      frequencyInExams:
        "High — 4-5 questions on licensing conditions, the 15-day rule, levy calculations, display requirements, and grounds for suspension/withdrawal.",
      sampleQuestions: [
        "Within how many days must an FSP notify the Registrar of a profile change?",
        "What are the grounds for suspension or withdrawal of a FAIS license?",
        "How is the annual FSCA levy for a Category I FSP calculated?",
        "What must an FSP do if its license is suspended?",
        "Can a suspended FSP continue to render financial services?",
      ],
      keyPhrases: [
        "15 days notification",
        "profile change",
        "FSP Form 1-13",
        "levies payable",
        "31 October deadline",
        "suspension and withdrawal",
        "Section 9",
        "display of license",
        "licensing conditions",
        "urgent suspension",
      ],
    },
  },
  {
    id: "ch2-undesirable-practices",
    slug: "undesirable-business-practices",
    title: "Undesirable Business Practices & FAIS Offences",
    summary:
      "Understand what constitutes an undesirable business practice, the Registrar's powers to address them, prescribed FAIS offences, civil remedies, and administrative penalties.",
    sort_order: 5,
    created_at: "2026-01-01",
    updated_at: "2026-01-01",
    regulatory_refs: {
      "FAIS Act": "Sections 34-36",
      Task: "Task 2",
    },
    related_concepts: ["ch2-maintaining-license", "ch7-ombud"],
    principle: {
      statement:
        "The Registrar has the power to declare certain conduct as undesirable business practices and to prohibit FSPs from engaging in such practices. FAIS also prescribes specific criminal offences and provides for administrative penalties and civil remedies.",
      mischief:
        "Without clear prohibitions on undesirable practices, FSPs could engage in conduct that technically doesn't breach a specific section but still harms consumers or undermines market integrity.",
      consumerHarm:
        "Consumers exposed to undesirable practices (such as churning policies, misrepresenting products, or failing to disclose material information) may suffer significant financial losses with limited awareness of the harm.",
    },
    legislation: [
      {
        source: "FAIS Act — Undesirable Business Practices",
        text: "The Registrar may declare conduct to be an undesirable business practice and direct FSPs to cease such conduct.",
        interpretation:
          "Undesirable practices are broader than specific offences — they cover any conduct the Registrar determines is harmful to consumers or the industry. The Registrar can issue directives, impose conditions, and take enforcement action including administrative penalties.",
      },
      {
        source: "FAIS Act — Offences and Penalties",
        text: "Contravention of Section 7(1) (operating without authorisation) or Section 13 (representative requirements) is a criminal offence subject to penalties including fines and imprisonment.",
        interpretation:
          "FAIS offences include: operating without a license, making false statements in applications, contravening Registrar directives, failing to maintain records, and obstructing the Registrar. Anti-money laundering controls under FICA are also integrated as compliance obligations.",
      },
    ],
    scenarios: [
      {
        type: "breach",
        title: "Representative churns client policies",
        narrative:
          "A representative systematically advises clients to replace existing life insurance policies with new ones every 18 months, primarily to generate new commission income. The advice is not in the clients' best interest as it results in higher premiums and new waiting periods.",
        consequences:
          "This constitutes an undesirable business practice. The Registrar may declare the practice undesirable, direct the FSP to cease, impose administrative penalties, and the clients may seek civil remedies. The representative may be debarred.",
      },
      {
        type: "compliant",
        title: "FSP implements anti-money laundering controls",
        narrative:
          "An FSP implements comprehensive AML controls as required by FICA: client identification and verification procedures, suspicious transaction reporting to the FIC, record-keeping of all transactions, and staff training on recognising suspicious activities.",
        key_learning:
          "FAIS compliance extends beyond the FAIS Act itself — FSPs must also comply with FICA requirements, and the compliance officer must monitor and report on both FAIS and FICA compliance.",
      },
    ],
    simulator: null,
    exam_relevance: {
      frequencyInExams:
        "Medium — 2-3 questions on undesirable practices, offences, civil remedies, and administrative penalties.",
      sampleQuestions: [
        "What constitutes an undesirable business practice under FAIS?",
        "What are the criminal offences prescribed by the FAIS Act?",
        "What civil remedies are available to consumers harmed by FAIS breaches?",
      ],
      keyPhrases: [
        "undesirable business practice",
        "administrative penalties",
        "civil remedies",
        "FAIS offences",
        "churning",
        "Section 7(1)",
        "Registrar directive",
      ],
    },
  },
  {
    id: "ch3-key-individual",
    slug: "key-individual-role",
    title: "The Key Individual — Roles, Requirements & Competence",
    summary:
      "Master the definition, roles, responsibilities, fit and proper requirements, competence standards, experience requirements, and ongoing training obligations of key individuals under FAIS.",
    sort_order: 6,
    created_at: "2026-01-01",
    updated_at: "2026-01-01",
    regulatory_refs: {
      "FAIS Act": "Sections 8A, 13",
      "BN 106/2008": "Fit & Proper",
      Task: "Task 3",
    },
    related_concepts: ["ch1-fais-act", "ch8-representatives", "ch1-compliance-officers"],
    principle: {
      statement:
        "A key individual is responsible for managing or overseeing the activities of the FSP relating to the rendering of financial services. They must meet and continue to meet fit and proper requirements including honesty, integrity, good standing, competence (qualifications, regulatory exams, experience), and operational requirements.",
      mischief:
        "Without competent oversight at the management level, representatives could render unsuitable advice unchecked, internal controls could fail, and the FSP could drift into non-compliance without detection.",
      consumerHarm:
        "Consumers rely on the FSP's management structure to ensure that representatives are qualified, supervised, and acting in clients' interests. An unfit key individual means the entire consumer protection framework fails at its foundation.",
    },
    legislation: [
      {
        source: "FAIS Act Section 1(1) — Key Individual Definition",
        text: "Key individual means any natural person responsible for managing or overseeing, either alone or together with other so responsible persons, the activities of the body, trust or partnership relating to the rendering of any financial service.",
        interpretation:
          "Key individuals include directors, provincial managers, and other persons in executive control over FAIS-related activities. Not every supervisor or director is a key individual — the role specifically relates to managing or overseeing the rendering of financial services. A sole proprietor FSP is inherently the key individual.",
      },
      {
        source: "FAIS Act Section 8A — Ongoing Fit and Proper",
        text: "An authorised FSP, key individual, representative, and key individual of a representative must continue to comply with the fit and proper requirements.",
        interpretation:
          "Fit and proper is not a once-off assessment at appointment — it is an ongoing obligation. Key individuals must maintain honesty, integrity and good standing; meet qualification and CPD requirements; pass regulatory examinations; and maintain the required experience levels for their product categories.",
      },
    ],
    scenarios: [
      {
        type: "compliant",
        title: "KI ensures representatives meet fit and proper requirements",
        narrative:
          "Marcus, a key individual at a Category I FSP, maintains a tracking system for all representatives' qualifications, CPD credits, regulatory exam completions, and experience hours. He conducts quarterly reviews and proactively identifies representatives approaching CPD deadlines.",
        key_learning:
          "The KI's oversight duty includes ensuring all representatives under their management maintain fit and proper status at all times. Proactive tracking prevents compliance breaches.",
      },
      {
        type: "breach",
        title: "Key individual fails to disclose personal circumstances change",
        narrative:
          "A key individual is found guilty of fraud in his personal capacity but fails to inform the FSP or the Registrar. He continues to manage representatives and oversee the rendering of financial services. The FSP discovers the conviction months later during an internal audit.",
        consequences:
          "The KI no longer meets the honesty, integrity and good standing requirements. The FSP must notify the Registrar within 15 days of becoming aware. The KI must cease managing FAIS-related activities until the Registrar has been notified and has made a determination. The Registrar may impose new conditions or withdraw the FSP's license.",
      },
    ],
    simulator: null,
    exam_relevance: {
      frequencyInExams:
        "High — 5-7 questions on KI definition, fit and proper requirements, experience requirements per category, CPD obligations, and supervisory duties.",
      sampleQuestions: [
        "What is the definition of a key individual under FAIS?",
        "What are the fit and proper requirements for key individuals?",
        "How many years of experience does a Category I KI need?",
        "What happens if a KI no longer meets fit and proper requirements?",
        "What are the CPD requirements for key individuals?",
      ],
      keyPhrases: [
        "managing or overseeing",
        "fit and proper",
        "honesty integrity good standing",
        "Section 8A ongoing",
        "competence requirements",
        "regulatory examination",
        "CPD continuous professional development",
        "experience requirements",
        "product categories",
        "Class of Business training",
      ],
    },
  },
  {
    id: "ch4-general-code",
    slug: "general-code-of-conduct",
    title: "The General Code of Conduct for FSPs",
    summary:
      "Deep dive into the General Code of Conduct — conflict of interest management, disclosure requirements, custody of funds, marketing rules, complaints handling, and termination of business.",
    sort_order: 7,
    created_at: "2026-01-01",
    updated_at: "2026-01-01",
    regulatory_refs: {
      "General Code": "BN 80/2003",
      "FAIS Act": "Section 15",
      "BN 58/2010": "Conflict of Interest",
      Task: "Task 4",
    },
    related_concepts: ["ch1-fais-act", "ch7-ombud", "ch8-representatives"],
    principle: {
      statement:
        "A provider must at all times render financial services honestly, fairly, with due skill, care and diligence, and in the interests of clients and the integrity of the financial services industry. The General Code prescribes specific requirements for disclosure, advice, custody, marketing, and complaints.",
      mischief:
        "Without standardised conduct rules, FSPs could prioritise their own financial interests over client needs — selling products that generate higher commissions rather than those most suitable, withholding negative information, or mishandling client funds.",
      consumerHarm:
        "A client who receives advice without proper disclosure of the representative's commission structure, the FSP's relationship with the product supplier, or the risks of the product cannot make an informed decision and may purchase unsuitable products.",
    },
    legislation: [
      {
        source: "General Code Section 2 — General Duty",
        text: "A provider must at all times render financial services honestly, fairly, with due skill, care and diligence, and in the interests of clients and the integrity of the financial services industry.",
        interpretation:
          "This is the overarching duty that underpins all other Code provisions. 'Honestly' means no deception. 'Fairly' means equitable treatment. 'Due skill, care and diligence' means competent service. 'In the interests of clients' means client needs come first.",
      },
      {
        source: "General Code — Disclosure Before Rendering Service",
        text: "Before rendering a financial service, the provider must disclose: the name, contact details, and license details of the FSP; the nature of financial services the FSP is authorised for; details of any ownership interest or financial interest; and the complaints procedure.",
        interpretation:
          "Disclosure must happen before the financial service is rendered — not after. The client must know who they're dealing with, what the FSP is authorised to do, any conflicts of interest, and how to complain if things go wrong.",
      },
      {
        source: "BN 58/2010 — Conflict of Interest",
        text: "An FSP must have a conflict of interest policy in place and must disclose any actual or potential conflict of interest to the client before rendering financial services.",
        interpretation:
          "Conflicts include ownership interests in product suppliers, commission arrangements, fee-sharing agreements, and any other interest that could influence advice. The FSP must have a written policy, train staff, monitor compliance, and keep records of conflicts identified and managed.",
      },
    ],
    scenarios: [
      {
        type: "compliant",
        title: "Full disclosure before rendering advice",
        narrative:
          "Before advising Mrs Ndlovu on a retirement annuity, the representative discloses: the FSP's license details, the range of products they are authorised for, commission payable by the product supplier (12% initial + 2.5% ongoing), the FSP's ownership relationship with the product supplier, and the complaints procedure. She provides this in writing and allows time for the client to ask questions.",
        key_learning:
          "Disclosure must be proactive, complete, and timely — before the service is rendered. The representative must cover all mandatory disclosures and provide the client with adequate opportunity to process the information.",
      },
      {
        type: "breach",
        title: "Failure to disclose conflict of interest",
        narrative:
          "An FSP representative advises a client to invest in Fund X without disclosing that the FSP receives a 3% override commission from Fund X's management company — significantly more than the 0.5% received from comparable funds. The representative recommends Fund X as 'the best option' without disclosing the financial incentive.",
        consequences:
          "This breaches the conflict of interest provisions and the General Code's disclosure requirements. The advice may be set aside by the Ombud. The representative may face debarment and the FSP may face penalties. The client may claim damages.",
      },
    ],
    simulator: {
      start: "start",
      nodes: {
        start: {
          text: "A new client walks in and wants investment advice. What do you do first?",
          choices: [
            { label: "Start discussing investment products immediately", next: "no_disclosure" },
            { label: "Make the required disclosures before rendering any service", next: "disclosure_done" },
          ],
        },
        no_disclosure: {
          text: "You recommended a product without making disclosures. The client later discovers your FSP receives higher commission from this product. You've breached the General Code.",
          outcome: "breach",
        },
        disclosure_done: {
          text: "You've disclosed your FSP details, authorised products, commission structures, and complaint procedures. Now the client wants advice on a retirement annuity. What next?",
          choices: [
            { label: "Recommend the product with the highest commission", next: "bad_advice" },
            { label: "Conduct a needs analysis and recommend suitable products", next: "good_advice" },
          ],
        },
        bad_advice: {
          text: "Recommending products based on commission rather than client needs breaches the duty to act in the client's interest and the conflict of interest provisions.",
          outcome: "breach",
        },
        good_advice: {
          text: "You conducted a thorough needs analysis, assessed suitability, recommended appropriate products, documented the advice record, and provided the client with all required information. Well done!",
          outcome: "compliant",
        },
      },
    },
    exam_relevance: {
      frequencyInExams:
        "Very High — 8-10 questions covering disclosure, conflict of interest, custody, marketing, complaints, and the general duty. This is the second-largest exam topic after Chapter 1.",
      sampleQuestions: [
        "What disclosures must be made before rendering a financial service?",
        "What is the general duty of a provider under the Code of Conduct?",
        "What constitutes a conflict of interest under FAIS?",
        "What are the requirements for custody of client financial products and funds?",
        "What are the direct marketing requirements?",
        "How must complaints be handled by an FSP?",
      ],
      keyPhrases: [
        "honestly fairly with due skill care and diligence",
        "disclosure before rendering",
        "conflict of interest policy",
        "custody of funds",
        "record of advice",
        "needs analysis",
        "suitability",
        "complaints procedure",
        "direct marketing",
        "advertising requirements",
        "termination of business",
      ],
    },
  },
  {
    id: "ch5-record-keeping",
    slug: "record-keeping-requirements",
    title: "Regulated Record-Keeping & Confidentiality",
    summary:
      "Understand FICA record-keeping duties, reporting obligations (STRs, CTRs, TPRs), third-party outsourcing, confidentiality of client information, and the security requirements for maintaining records.",
    sort_order: 8,
    created_at: "2026-01-01",
    updated_at: "2026-01-01",
    regulatory_refs: {
      "FAIS Act": "Section 18",
      FICA: "Act 38 of 2001",
      Task: "Task 5",
    },
    related_concepts: ["ch6-money-laundering", "ch4-general-code"],
    principle: {
      statement:
        "An FSP must maintain records for a minimum of five years including premature cancellations, complaints received, compliance status, cases of non-compliance, and representative compliance. FICA imposes additional record-keeping and reporting duties in respect of client identification and suspicious transactions.",
      mischief:
        "Without proper records, regulatory oversight becomes impossible — the Registrar cannot assess compliance, the Ombud cannot investigate complaints, and law enforcement cannot trace money laundering or terrorist financing.",
      consumerHarm:
        "A client who files a complaint three years after receiving bad advice may find that the FSP has no record of the advice given, the needs analysis conducted, or the disclosures made — making it impossible to establish what happened and obtain redress.",
    },
    legislation: [
      {
        source: "FAIS Act Section 18 — Maintenance of Records",
        text: "An authorised FSP must maintain records for a minimum of five years including premature cancellations of transactions, complaints received, continued compliance with requirements, cases of non-compliance, and continued compliance by representatives.",
        interpretation:
          "The five-year minimum is a floor, not a ceiling — some records may need to be kept longer under other legislation. Records must cover both positive compliance (evidence that requirements are being met) and negative incidents (complaints, cancellations, non-compliance).",
      },
      {
        source: "FICA — Reporting Duties",
        text: "FSPs must report suspicious and unusual transactions (STRs) to the Financial Intelligence Centre, file cash threshold reports (CTRs) for cash transactions above R24,999.99, and file terrorist property reports (TPRs).",
        interpretation:
          "STRs must be filed within 15 days of forming the suspicion. CTRs must be filed within 2 days. TPRs must be filed immediately. Tipping off — warning a client that an STR has been filed — is a criminal offence. FSPs must also conduct client due diligence (CDD) and keep records of identification documents.",
      },
    ],
    scenarios: [
      {
        type: "compliant",
        title: "FSP maintains comprehensive records",
        narrative:
          "An FSP maintains electronic records of all advice records, client needs analyses, disclosure documents, commission received, complaints, and compliance monitoring reports. Records are backed up daily, stored securely with access controls, and retained for a minimum of five years. When the Registrar requests records during an on-site inspection, they are available within a reasonable time.",
        key_learning:
          "Good record-keeping serves multiple purposes: regulatory compliance, complaint resolution, audit trail, and business continuity. Records must be accessible, accurate, and secure.",
      },
      {
        type: "breach",
        title: "Failure to file suspicious transaction report",
        narrative:
          "A representative notices that a client makes multiple cash deposits just below the R25,000 threshold (structuring) to purchase an investment product. The representative processes the transaction without filing a suspicious transaction report because the individual amounts are below the reporting threshold.",
        consequences:
          "Structuring is a red flag for money laundering. The representative and FSP have breached FICA by failing to file an STR. Criminal penalties include fines up to R100 million and imprisonment up to 15 years. The FSP may also face FAIS sanctions.",
      },
    ],
    simulator: null,
    exam_relevance: {
      frequencyInExams:
        "Medium-High — 3-5 questions on record-keeping periods, FICA reporting duties, confidentiality rules, and outsourcing requirements.",
      sampleQuestions: [
        "For how long must an FSP maintain records?",
        "What types of reports must be filed under FICA?",
        "Within how many days must an STR be filed?",
        "What is 'tipping off' and why is it illegal?",
        "What are the confidentiality requirements for client information?",
      ],
      keyPhrases: [
        "five years minimum",
        "suspicious transaction report STR",
        "cash threshold report CTR",
        "terrorist property report TPR",
        "15 days STR",
        "2 days CTR",
        "tipping off",
        "client due diligence CDD",
        "R24999.99 threshold",
        "structuring",
        "confidentiality",
      ],
    },
  },
  {
    id: "ch6-money-laundering",
    slug: "money-laundering-terrorist-financing",
    title: "Money Laundering & Terrorist Financing Controls",
    summary:
      "Learn FICA requirements specific to FSPs — client identification, internal rules, staff training obligations, suspicious transaction identification, and the three stages of money laundering.",
    sort_order: 9,
    created_at: "2026-01-01",
    updated_at: "2026-01-01",
    regulatory_refs: {
      FICA: "Act 38 of 2001",
      "FICA Amendment": "Act 11 of 2008",
      Task: "Task 6",
    },
    related_concepts: ["ch5-record-keeping", "ch4-general-code"],
    principle: {
      statement:
        "The Financial Intelligence Centre Act (FICA) imposes obligations on FSPs as 'accountable institutions' to identify and verify clients, keep records, report suspicious transactions, and implement internal rules and training to prevent money laundering and terrorist financing.",
      mischief:
        "Financial services can be exploited to launder proceeds of crime or fund terrorism. Without robust controls, FSPs become unwitting conduits for illegal funds entering the legitimate financial system.",
      consumerHarm:
        "Money laundering through financial products inflates product costs, undermines market integrity, and can result in FSPs being shut down — harming legitimate clients who lose access to their financial products and services.",
    },
    legislation: [
      {
        source: "FICA — Client Identification and Verification",
        text: "An accountable institution must establish and verify the identity of any person with whom it enters into a single transaction or business relationship.",
        interpretation:
          "FSPs must obtain and verify identity documents before entering into any financial transaction. For natural persons: full name, date of birth, identity number, residential address. For legal persons: registered name, registration number, registered address, and details of directors/members. Enhanced due diligence applies to high-risk clients and politically exposed persons (PEPs).",
      },
      {
        source: "FICA — Internal Rules",
        text: "An accountable institution must formulate and implement internal rules concerning the establishment and verification of identity, record-keeping, reporting of suspicious transactions, and training.",
        interpretation:
          "Internal rules are not optional — they must be formalised, documented, and regularly updated. All staff must be trained on these rules, and the training must be documented. The compliance function must monitor adherence to the internal rules.",
      },
    ],
    scenarios: [
      {
        type: "compliant",
        title: "FSP identifies suspicious transaction patterns",
        narrative:
          "A representative notices that a new client wants to make several large cash purchases of endowment policies, cannot explain the source of funds, is evasive about personal details, and uses different identity documents for different transactions. The representative reports the suspicion to the FSP's compliance officer, who files an STR with the FIC within 15 days.",
        key_learning:
          "The three stages of money laundering are: placement (getting dirty money into the system), layering (moving it through multiple transactions to obscure its origin), and integration (making it appear legitimate). FSPs must be vigilant at all stages, especially placement.",
      },
      {
        type: "breach",
        title: "FSP fails to implement FICA training",
        narrative:
          "An FSP has not conducted AML training for its representatives for over two years. When asked during an on-site inspection, representatives cannot explain what constitutes a suspicious transaction or the process for reporting one.",
        consequences:
          "Failure to train employees on FICA obligations is a contravention of the Act. The FSP may face administrative sanctions, and individual representatives may be held personally liable for failing to report suspicious transactions they should have identified with proper training.",
      },
    ],
    simulator: null,
    exam_relevance: {
      frequencyInExams:
        "Medium — 3-4 questions on FICA requirements, the three stages of money laundering, reporting obligations, and client identification requirements.",
      sampleQuestions: [
        "What are the three stages of money laundering?",
        "What are the FICA obligations of an FSP as an accountable institution?",
        "What constitutes a suspicious transaction?",
        "What internal rules must an FSP implement under FICA?",
      ],
      keyPhrases: [
        "placement layering integration",
        "accountable institution",
        "client identification verification",
        "internal rules",
        "suspicious transaction",
        "politically exposed person PEP",
        "Financial Intelligence Centre",
        "FICA training",
        "enhanced due diligence",
        "know your client KYC",
      ],
    },
  },
  {
    id: "ch7-ombud",
    slug: "fais-ombud-complaints",
    title: "The FAIS Ombud — Role, Powers & Complaints Process",
    summary:
      "Understand the role and authority of the Ombud for FSPs, the complaints process from filing to determination, the FSP's obligations during an investigation, case fees, costs, and enforcement of determinations.",
    sort_order: 10,
    created_at: "2026-01-01",
    updated_at: "2026-01-01",
    regulatory_refs: {
      "FAIS Act": "Sections 20-31",
      Task: "Task 7",
    },
    related_concepts: ["ch4-general-code", "ch2-undesirable-practices"],
    principle: {
      statement:
        "The FAIS Ombud is an independent dispute resolution body that investigates and resolves complaints by clients against FSPs and their representatives. The Ombud has the power to make binding determinations, award compensation up to R800,000, and refer matters to the FSCA for enforcement.",
      mischief:
        "Without an accessible, cost-effective dispute resolution mechanism, consumers would need to resort to expensive litigation to resolve complaints against FSPs — effectively denying recourse to most consumers.",
      consumerHarm:
        "A client who receives unsuitable advice resulting in financial loss needs a mechanism to seek redress without bearing the full cost of legal proceedings. The Ombud provides this at no cost to the complainant.",
    },
    legislation: [
      {
        source: "FAIS Act Section 20 — Office of the Ombud",
        text: "The Ombud for Financial Services Providers is established to resolve disputes between consumers and FSPs in respect of financial services rendered.",
        interpretation:
          "The Ombud's jurisdiction covers complaints about financial services rendered by FSPs or their representatives. A 'complaint' is defined as a specific grievance relating to a financial service rendered or which should have been rendered. The complaint must be filed within three years, extendable to six years in certain circumstances.",
      },
      {
        source: "FAIS Act Section 27 — Powers of the Ombud",
        text: "The Ombud may investigate any complaint and make a determination which may include an order for the FSP to pay compensation, take steps to remedy the situation, or refrain from certain conduct.",
        interpretation:
          "The Ombud's determination is binding on the FSP if the complainant accepts it. The maximum award is R800,000 (unless parties agree otherwise). The Ombud can also mediate and facilitate settlements. Case fees are payable by the FSP regardless of outcome. FSPs must cooperate fully with investigations.",
      },
    ],
    scenarios: [
      {
        type: "compliant",
        title: "FSP cooperates fully with Ombud investigation",
        narrative:
          "When the Ombud's office contacts BlueStar Financial about a complaint that a representative sold an unsuitable product, the FSP immediately gathers all relevant records (advice record, needs analysis, disclosure documents, communication records), appoints a contact person, and provides a detailed response within the timeframe specified by the Ombud.",
        key_learning:
          "FSPs are legally obligated to cooperate with the Ombud. This includes providing all requested documentation, making representatives available for questioning, and responding within specified timeframes. Non-cooperation can result in adverse findings and referral to the FSCA.",
      },
      {
        type: "breach",
        title: "FSP ignores Ombud correspondence",
        narrative:
          "An FSP receives a complaint notification from the Ombud but ignores it, hoping the complaint will go away. After multiple follow-up notices, the Ombud makes a default determination against the FSP based on the complainant's version of events.",
        consequences:
          "Failure to respond to the Ombud constitutes a contravention of the FAIS Act. The Ombud may make a default determination, which can be enforced as a court order. The FSP may also face additional penalties from the FSCA for non-cooperation. Case fees remain payable.",
      },
    ],
    simulator: null,
    exam_relevance: {
      frequencyInExams:
        "Medium — 3-4 questions on the Ombud's role, powers, complaint procedures, maximum award amounts, and the FSP's obligations during an investigation.",
      sampleQuestions: [
        "What is the maximum award the FAIS Ombud can make?",
        "Within what period must a complaint be filed with the Ombud?",
        "What are the FSP's obligations when the Ombud investigates a complaint?",
        "What happens if an FSP does not comply with an Ombud determination?",
        "Who pays the case fees in an Ombud investigation?",
      ],
      keyPhrases: [
        "R800000 maximum",
        "three years to file",
        "binding determination",
        "case fees FSP pays",
        "cooperate with investigation",
        "Section 20-31",
        "mediation",
        "default determination",
        "enforceable as court order",
        "FAIS Ombud",
      ],
    },
  },
  {
    id: "ch8-representatives",
    slug: "representatives-under-fais",
    title: "Representatives — Appointment, Fit & Proper, Supervision & Debarment",
    summary:
      "Complete guide to the representative's role under FAIS — appointment requirements, the representatives register, fit and proper requirements (honesty/integrity, competence, qualifications, experience, CPD), supervision arrangements, and the debarment process.",
    sort_order: 11,
    created_at: "2026-01-01",
    updated_at: "2026-01-01",
    regulatory_refs: {
      "FAIS Act": "Section 13-14",
      "BN 106/2008": "Fit & Proper",
      "BN 82/2003": "Debarment",
      Task: "Task 8",
    },
    related_concepts: ["ch3-key-individual", "ch4-general-code", "ch1-fais-act"],
    principle: {
      statement:
        "A representative is a person who renders financial services to clients for or on behalf of an FSP. Representatives must be appointed under Section 13, meet and maintain fit and proper requirements, be registered on the FSP's representative register, and may be debarred for misconduct or incompetence.",
      mischief:
        "Without clear requirements for representative appointment and ongoing competence, unqualified or dishonest individuals could render financial services to vulnerable consumers, causing financial harm and undermining industry professionalism.",
      consumerHarm:
        "A consumer who receives advice from an incompetent or dishonest representative who was never properly screened, trained, or supervised may suffer significant financial loss on a product that should never have been recommended.",
    },
    legislation: [
      {
        source: "FAIS Act Section 13(1) — Appointment of Representatives",
        text: "No person may act as a representative unless such person has been appointed as a representative of an authorised FSP under Section 13 and meets the fit and proper requirements.",
        interpretation:
          "The FSP must formally appoint representatives, verify their fit and proper status, register them on the representative register, and ensure ongoing compliance. A debarred person may only be reappointed after following specific rehabilitation procedures.",
      },
      {
        source: "FAIS Act — Representative Register",
        text: "The FSP must maintain a register of representatives and key individuals of such representatives, which must be regularly updated and be available to the Registrar for reference or inspection purposes.",
        interpretation:
          "The register must include personal information, categories and subcategories appointed for, fit and proper status (qualifications, regulatory exam, CPD, experience), supervision status, and any changes. Updates must be sent to the Registrar within 15 days.",
      },
      {
        source: "BN 106/2008 — Fit and Proper Requirements",
        text: "Representatives must meet requirements in respect of personal character (honesty, integrity, good standing), competence (qualifications, regulatory exams, experience, Class of Business training, product-specific training, and CPD).",
        interpretation:
          "Honesty & integrity: no criminal record for dishonesty, not an unrehabilitated insolvent, not previously debarred (without rehabilitation). Competence: approved qualification, passed RE5 regulatory exam, minimum experience period, completed Class of Business training for relevant products, and ongoing CPD credits.",
      },
    ],
    scenarios: [
      {
        type: "compliant",
        title: "Representative under supervision completes requirements",
        narrative:
          "Thandi is appointed as a representative under supervision. Her supervisor, who has at least one year of experience in the relevant category, provides direct supervision (daily to weekly) during the first year and ongoing supervision (fortnightly to monthly) thereafter. Thandi completes her RE5 exam and accumulates the required experience hours within the supervision period.",
        key_learning:
          "Supervision has specific requirements: the supervisor must be qualified and experienced, supervision levels progress from direct to ongoing, and the supervision period cannot exceed a set timeframe. The FSP must maintain records of supervision activities.",
      },
      {
        type: "breach",
        title: "FSP appoints previously debarred representative",
        narrative:
          "An FSP appoints James as a representative without checking the debarment register. James was debarred by a previous employer for misappropriating client funds. He is appointed and begins rendering financial services to new clients.",
        consequences:
          "The FSP has breached Section 13 by failing to verify James's status before appointment. The FSP may face penalties, and any financial services rendered by James may expose the FSP to liability. The debarment register must be checked before every appointment.",
      },
    ],
    simulator: {
      start: "start",
      nodes: {
        start: {
          text: "Your FSP wants to appoint a new representative. What is the first step?",
          choices: [
            { label: "Let them start working immediately and sort paperwork later", next: "bad_start" },
            { label: "Verify fit and proper requirements before appointment", next: "check_fit" },
          ],
        },
        bad_start: {
          text: "Allowing someone to render financial services before verifying fit and proper status is a breach of Section 13. They must not render services until all requirements are confirmed.",
          outcome: "breach",
        },
        check_fit: {
          text: "You've verified: no debarment, clean criminal record for dishonesty, not insolvent. The candidate has qualifications but hasn't completed the RE5 exam. What now?",
          choices: [
            { label: "Appoint them as a full representative since they have qualifications", next: "no_re5" },
            { label: "Appoint under supervision until they complete the RE5 exam", next: "supervised" },
          ],
        },
        no_re5: {
          text: "A representative without the regulatory exam cannot be appointed as a fully qualified representative. They must either pass RE5 first or be placed under supervision.",
          outcome: "breach",
        },
        supervised: {
          text: "Correct! The representative is appointed under supervision with a qualified supervisor. You update the representative register and notify the Registrar within 15 days. The supervisor provides direct supervision during the initial period.",
          outcome: "compliant",
        },
      },
    },
    exam_relevance: {
      frequencyInExams:
        "Very High — 6-8 questions on representative requirements, the register, supervision arrangements, debarment process, and fit and proper requirements.",
      sampleQuestions: [
        "What is the definition of a representative under FAIS?",
        "What information must be included in the representative register?",
        "Within how many days must the representative register be updated?",
        "What are the grounds for debarment of a representative?",
        "What is the difference between direct and ongoing supervision?",
        "What are the fit and proper requirements for representatives?",
        "Can a debarred person be reappointed as a representative?",
      ],
      keyPhrases: [
        "Section 13 appointment",
        "representative register",
        "15 days update",
        "fit and proper",
        "honesty integrity good standing",
        "RE5 regulatory exam",
        "supervision direct ongoing",
        "debarment",
        "Class of Business training",
        "CPD credits",
        "product-specific training",
        "rehabilitation debarred",
      ],
    },
  },
  {
    id: "ch1-fsr-act",
    slug: "fsr-act-twin-peaks",
    title: "The Financial Sector Regulation Act & Twin Peaks",
    summary:
      "Understand the FSR Act's twin-peaks model — the Prudential Authority, the FSCA, the Financial Stability Oversight Committee, licensing requirements, and how financial sector regulators cooperate.",
    sort_order: 12,
    created_at: "2026-01-01",
    updated_at: "2026-01-01",
    regulatory_refs: {
      "FSR Act": "Act 9 of 2017",
      Task: "Task 1",
    },
    related_concepts: ["ch1-fais-act", "ch1-fsp-licensing"],
    principle: {
      statement:
        "The FSR Act established a twin-peaks regulatory system: the Prudential Authority (housed at the Reserve Bank) supervises financial soundness, while the FSCA supervises market conduct. Both must cooperate with each other and with the Reserve Bank to maintain financial stability.",
      mischief:
        "The previous regulatory system had fragmented oversight across multiple regulators with inconsistent standards and gaps in supervision. The twin-peaks model ensures comprehensive coverage of both prudential and conduct risks.",
      consumerHarm:
        "Under the old system, an institution could be prudentially sound but engage in harmful market conduct (mis-selling, unfair treatment) without effective regulatory intervention. Twin peaks ensures both dimensions are supervised.",
    },
    legislation: [
      {
        source: "FSR Act — Prudential Authority Objective (Section 33)",
        text: "The objective of the Prudential Authority is to promote and enhance the safety and soundness of financial institutions that provide financial products and financial services.",
        interpretation:
          "The Prudential Authority focuses on capital adequacy, liquidity, risk management, and governance of financial institutions. It issues prudential standards and conducts supervision to ensure institutions can meet their financial obligations.",
      },
      {
        source: "FSR Act — FSCA Objective (Section 57)",
        text: "The objective of the Financial Sector Conduct Authority is to enhance the efficiency and integrity of financial markets, promote fair customer treatment, and provide financial customers with financial education.",
        interpretation:
          "The FSCA (which replaced the FSB) focuses on how financial institutions treat their customers — product design, marketing, advice, sales, complaints handling, and claims. It administers the FAIS Act and supervises FSPs.",
      },
      {
        source: "FSR Act Section 76 — Cooperation",
        text: "The financial sector regulators and the Reserve Bank must cooperate and collaborate when performing their functions, share information, strive to adopt consistent regulatory strategies, and minimise duplication.",
        interpretation:
          "Regulators must work together through memoranda of understanding (MOUs) which must be established within 6 months and reviewed every 3 years. The Financial Stability Oversight Committee and Financial System Council of Regulators facilitate coordination.",
      },
    ],
    scenarios: [
      {
        type: "compliant",
        title: "Regulator cooperation on license application",
        narrative:
          "When an insurance company applies for a new FAIS license category, the FSCA consults the Prudential Authority to ensure the company meets both conduct and prudential requirements. The license is only granted with the concurrence of both regulators.",
        key_learning:
          "Under the FSR Act, licensing decisions require concurrence of both regulators where applicable. This prevents situations where an institution is authorised for market conduct purposes but lacks the financial capacity to deliver on its promises.",
      },
    ],
    simulator: null,
    exam_relevance: {
      frequencyInExams:
        "Medium — 2-3 questions on the FSR Act structure, twin-peaks model, and the roles of the PA and FSCA.",
      sampleQuestions: [
        "What is the purpose of the FSR Act?",
        "What is the objective of the Prudential Authority?",
        "What is the objective of the FSCA?",
        "How do the financial sector regulators cooperate?",
      ],
      keyPhrases: [
        "twin peaks",
        "Prudential Authority",
        "FSCA",
        "financial stability",
        "memoranda of understanding",
        "concurrence",
        "Financial Stability Oversight Committee",
        "conduct authority",
        "prudential standards",
        "conduct standards",
      ],
    },
  },
];

export const deeperKnowledgeTopics: DKTopic[] = _topics.map((t) => ({
  ...t,
  quiz: deeperKnowledgeQuizzes[t.id] ?? [],
}));
