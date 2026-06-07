import { useState } from "react";
import { Link } from "react-router-dom";

const sections = [
  {
    id: 1,
    title: "The FAIS Act",
    subsections: [
      {
        title: "1.1 Overview and Purpose",
        content: `The Financial Advisory and Intermediary Services Act 37 of 2002 (FAIS Act) came into full effect in 2004. It is the primary legislation governing financial advisers and intermediaries in South Africa.

**Key Objective:** To regulate the rendering of financial advice and intermediary services to clients, to protect consumers of financial services, and to promote the integrity of the financial services industry.`
      },
      {
        title: "1.2 Key Definitions",
        content: `• **Financial Service:** Rendering of advice or an intermediary service
• **Advice:** Any recommendation, guidance, or proposal of a financial nature to a client in respect of a financial product
• **Intermediary Service:** Any act that results in a client entering into, maintaining, modifying, varying, or cancelling a financial product
• **Financial Product:** Includes shares, debentures, money market instruments, long-term and short-term insurance policies, unit trusts, retirement funds, and more as listed in Section 1
• **Provider (FSP):** Any person who renders a financial service and who is required to be authorised under the Act
• **Representative:** A person who renders a financial service on behalf of a licensed FSP
• **Key Individual:** A natural person who manages or oversees the rendering of financial services by the FSP`
      },
      {
        title: "1.3 What is NOT Advice Under FAIS",
        content: `• Factual information about a financial product without a recommendation
• Generic educational content not tailored to a specific client
• Advice given by an attorney or accountant that is incidental to their main practice (exemption applies)`
      },
      {
        title: "1.4 The FSCA and Regulatory Framework",
        content: `The Financial Sector Conduct Authority (FSCA) was established by the Financial Sector Regulation Act 9 of 2017 (FSRA). It replaced the Financial Services Board (FSB) as the market conduct regulator.

| Body | Function |
|------|----------|
| FSCA | Market conduct — how institutions treat customers |
| Prudential Authority (PA) | Financial soundness of banks and insurers |
| FAIS Ombud | Resolves complaints against FSPs |
| Financial Services Tribunal | Hears appeals against FSCA decisions |

**Twin Peaks Model:** South Africa adopted a Twin Peaks regulatory model in 2018.
• **Peak 1:** Prudential Authority (PA) under SARB — focuses on financial stability
• **Peak 2:** FSCA — focuses on market conduct and consumer protection`
      }
    ]
  },
  {
    id: 2,
    title: "FSP Licensing & Authorisation",
    subsections: [
      {
        title: "2.1 Licensing Requirements",
        content: `Any person who renders financial services on a regular basis as part of their business must be licensed as an FSP. Operating without a licence is a criminal offence.`
      },
      {
        title: "2.2 FSP Categories",
        content: `| Category | Description |
|----------|-------------|
| Category I | Advisers who provide advice and/or intermediary services but do NOT have discretion over client assets |
| Category II | Discretionary FSPs — have authority to manage client assets without consulting the client for each transaction |
| Category IIA | Hedge fund FSPs |
| Category III | Administrative FSPs — provide administrative services to collective investment schemes |
| Category IV | Assistance business (funeral policies) |`
      },
      {
        title: "2.3 Key Individual Requirements",
        content: `• Must be a natural person
• Responsible for managing or overseeing the rendering of financial services
• Must be approved by the FSCA before the FSP can operate
• Must meet fit and proper requirements
• Must pass RE1 (the regulatory examination for key individuals)

**Exam Tip:** Representatives do NOT hold their own licence. They are authorised to render services ON BEHALF of a licensed FSP. The FSP is responsible for the conduct of its representatives.`
      },
      {
        title: "2.4 Licence Conditions",
        content: `An FSP licence may be granted subject to conditions. The FSCA may suspend or withdraw a licence if the FSP fails to comply with the FAIS Act or no longer meets the fit and proper requirements.`
      }
    ]
  },
  {
    id: 3,
    title: "Fit and Proper Requirements",
    subsections: [
      {
        title: "3.1 The Five Pillars",
        content: `The Determination of Fit and Proper Requirements (Board Notice 194 of 2017) sets out the requirements that FSPs, key individuals, and representatives must meet.

| Pillar | Requirements |
|--------|-------------|
| 1. Honesty and Integrity | No criminal convictions for dishonesty, fraud, or theft; good character |
| 2. Competence | Qualifications, regulatory examinations (RE), experience, and CPD |
| 3. Operational Ability | Adequate systems, processes, and human resources |
| 4. Financial Soundness | Not insolvent, no sequestration or provisional sequestration |
| 5. Good Standing | Not debarred or prohibited from acting as an FSP or representative |`
      },
      {
        title: "3.2 Regulatory Examinations",
        content: `| Examination | Who Must Write |
|-------------|---------------|
| RE5 | Mandatory for all representatives rendering financial services |
| RE1 | Mandatory for all key individuals |
| Both exams | Must be passed within prescribed timeframes after appointment |`
      },
      {
        title: "3.3 Continuous Professional Development (CPD)",
        content: `• Minimum of 6 CPD hours per year (as per current requirements)
• Must be relevant to the financial services rendered
• Records of CPD activities must be maintained
• CPD is part of the competence pillar of fit and proper requirements`
      },
      {
        title: "3.4 Qualifications",
        content: `Representatives must hold the minimum qualification prescribed for their product subcategory. Qualifications are aligned to the National Qualifications Framework (NQF) levels. The minimum is generally NQF Level 4 (Matric equivalent), though higher levels are required for complex products.`
      },
      {
        title: "3.5 Supervision",
        content: `A representative who does not yet meet all fit and proper requirements (e.g., has not yet passed RE5) may render financial services only under supervision of a duly qualified person.

• The supervisor is responsible for overseeing all services rendered
• All advice must be reviewed by the supervisor before being given to the client
• Records of supervision must be maintained for 5 years
• Supervision ends when the representative meets all fit and proper requirements`
      }
    ]
  },
  {
    id: 4,
    title: "General Code of Conduct",
    subsections: [
      {
        title: "4.1 General Conduct Principles",
        content: `The General Code of Conduct for Authorised FSPs and Representatives (Board Notice 80 of 2003, as amended) sets out the minimum standards of conduct.

**Core Obligation:** A provider must at all times render financial services honestly, fairly, with due skill, care, and diligence, and in the interests of clients and the integrity of the financial services industry.`
      },
      {
        title: "4.2 Disclosure Obligations",
        content: `**Initial Disclosure (Before or at Commencement of Service):**
• Full business name and registration number
• Physical address and contact details
• FSP licence number and the categories of services licensed for
• Professional indemnity/fidelity insurance details
• Whether the provider is owned by or has a material interest in a product supplier
• Conflict of interest information

**Ongoing Disclosure:**
• Changes in fees or commission structures
• Material changes in circumstances affecting the service
• Any change in the status of the provider`
      },
      {
        title: "4.3 Suitability and Needs Analysis",
        content: `Before providing advice, a provider MUST conduct a needs analysis. This involves:

• Identifying the client's financial needs and objectives
• Assessing the client's financial situation (income, expenses, assets, liabilities)
• Determining the client's risk profile and investment experience
• Reviewing existing financial products the client holds
• Only then recommending a suitable product or course of action`
      },
      {
        title: "4.4 Record of Advice",
        content: `After providing advice, the provider must give the client a written record of advice containing:

• The client's needs and objectives identified
• The advice given
• The reasons why the product/service was recommended
• Any financial products the client declined

**The record of advice must be kept for a MINIMUM OF 5 YEARS.**`
      },
      {
        title: "4.5 Conflict of Interest Management",
        content: `An FSP must maintain a Conflict of Interest Management Policy that:

• Identifies all actual and potential conflicts of interest
• Sets out measures to avoid or mitigate conflicts
• Is disclosed to clients in a manner accessible to them
• Sets limits on gifts and hospitality (typically R1,000 per year per provider)

**Churning:** Unnecessarily switching clients between products to generate commission.
**Twisting:** Persuading a client to cancel an existing insurance policy and replace it with a new one, primarily to earn additional commission rather than to benefit the client.

Both practices are prohibited under the Code of Conduct and constitute misconduct.`
      }
    ]
  },
  {
    id: 5,
    title: "Complaints and the FAIS Ombud",
    subsections: [
      {
        title: "5.1 Internal Complaint Handling",
        content: `Every FSP must have a documented internal complaints resolution process that is:

• Accessible to clients
• Communicated to clients at or before the commencement of the relationship
• Able to resolve complaints within 15 business days
• Recorded and maintained for 5 years`
      },
      {
        title: "5.2 The FAIS Ombud",
        content: `| Aspect | Detail |
|--------|--------|
| Jurisdiction | Complaints against FSPs for contraventions of FAIS Act or Code of Conduct |
| Who can complain | Any client who has suffered financial loss or prejudice |
| Prerequisites | Must first lodge with FSP and allow 15 business days for resolution |
| Time limit | Within 3 years of becoming aware of the complaint |
| Maximum award | R800,000 compensation to the complainant |
| Cost | Free to complainants |
| Appeals | To the Financial Services Tribunal or High Court |`
      },
      {
        title: "5.3 What the Ombud Cannot Do",
        content: `• Prosecute criminal offences
• Handle disputes purely about contract terms (not related to FAIS conduct)
• Award damages above R800,000 (though they can refer to court)`
      }
    ]
  },
  {
    id: 6,
    title: "FICA and Anti-Money Laundering",
    subsections: [
      {
        title: "6.1 Overview",
        content: `The Financial Intelligence Centre Act 38 of 2001 (FICA) aims to combat money laundering, terrorist financing, and other financial crimes. The Financial Intelligence Centre (FIC) is the compliance body.`
      },
      {
        title: "6.2 Three Stages of Money Laundering",
        content: `| Stage | Description |
|-------|-------------|
| 1. Placement | Introducing illegal cash into the financial system |
| 2. Layering | Moving funds through multiple transactions to obscure the trail |
| 3. Integration | Reintroducing laundered funds as legitimate money |`
      },
      {
        title: "6.3 Customer Due Diligence (CDD)",
        content: `Accountable institutions must apply CDD which includes:

• Verifying the identity of clients using prescribed identification documents
• Understanding the nature and purpose of the business relationship
• Ongoing monitoring of the relationship
• Applying a Risk Based Approach (RBA) — higher risk clients receive enhanced scrutiny`
      },
      {
        title: "6.4 Reporting Obligations",
        content: `| Report Type | Trigger |
|-------------|---------|
| Cash Threshold Report (CTR) | Cash transactions exceeding R24,999.99 must be reported to FIC |
| Suspicious Transaction Report (STR) | Any transaction suspected to be related to money laundering or crime |
| Terrorist Property Report (TPR) | Property owned by or associated with a terrorist organisation |`
      },
      {
        title: "6.5 Key Prohibitions",
        content: `• **Tipping off:** It is a criminal offence to inform a person that they are the subject of a suspicious transaction report or investigation
• Assisting in money laundering is a criminal offence regardless of whether the person knew the exact origin of funds`
      },
      {
        title: "6.6 Politically Exposed Persons (PEPs)",
        content: `PEPs are individuals who hold or have held prominent public positions (heads of state, senior government officials, senior judiciary, military leaders). They require Enhanced Due Diligence (EDD) due to higher risk of corruption and bribery.`
      }
    ]
  },
  {
    id: 7,
    title: "Financial Products",
    subsections: [
      {
        title: "7.1 Long-term Insurance Products",
        content: `| Category | Description |
|----------|-------------|
| Category A — Risk Benefits | Death, disability, severe illness — pays lump sum or income on event |
| Category B — Investment Benefits | Retirement annuities, endowments, investment-linked policies |
| Category C — Assistance Business | Funeral policies and similar small benefit contracts |
| Category D — Health Policies | Gap cover and similar health-related long-term products |

**Key Long-term Products:**
• **Term Life Insurance:** Pays death benefit if insured dies within the policy term only
• **Whole Life Insurance:** Pays death benefit whenever the insured dies; no expiry date
• **Endowment Policy:** Pays lump sum at maturity OR on death, whichever comes first
• **Retirement Annuity (RA):** Tax-efficient savings vehicle for retirement; cannot access before age 55
• **Disability Income Protection:** Monthly income if insured cannot work due to disability
• **Critical Illness Cover:** Lump sum on diagnosis of specified serious illnesses`
      },
      {
        title: "7.2 Short-term Insurance Products",
        content: `| Category | Examples |
|----------|----------|
| Personal Lines | Private individuals: home, motor, household contents, personal liability |
| Commercial Lines | Business risks: commercial property, business interruption, liability |
| Agriculture | Crop, livestock, and farm asset cover |
| Engineering | Machinery breakdown, contractor's all risk, erection all risk |
| Liability | Public liability, professional indemnity, directors and officers liability |

**Important Short-term Concepts:**
• **Underinsurance:** Insuring an asset for less than its true value; the average clause applies
• **Average Clause:** Claim paid proportionally: (Sum Insured / True Value) × Loss
• **Excess/Deductible:** The first portion of any claim the insured must pay themselves
• **No Claims Bonus:** Premium discount for policyholders who have not claimed
• **Agreed Value:** Fixed amount agreed at inception for total loss`
      },
      {
        title: "7.3 Insurance Principles",
        content: `| Principle | Meaning |
|-----------|---------|
| Insurable Interest | Insured must suffer a financial loss if the insured event occurs |
| Utmost Good Faith | Both parties must disclose all material facts; non-disclosure voids the policy |
| Indemnity | Insured restored to same position as before the loss — not better, not worse |
| Subrogation | Insurer takes over insured's rights to recover from a third party after paying a claim |
| Contribution | Where multiple policies cover the same risk, each pays proportionally |
| Proximate Cause | The dominant, effective cause of the loss determines coverage |`
      },
      {
        title: "7.4 Collective Investment Schemes (CIS)",
        content: `Regulated under the Collective Investment Schemes Control Act (CISCA) 45 of 2002.

• A pool of investor money managed collectively by a fund manager
• Investors own units in the fund, not the underlying assets directly
• Priced at Net Asset Value (NAV) of the portfolio
• Includes unit trusts, exchange-traded funds (ETFs), and hedge funds
• ETFs are listed on the JSE and can be traded like ordinary shares`
      }
    ]
  },
  {
    id: 8,
    title: "Retirement and Pension Funds",
    subsections: [
      {
        title: "8.1 Types of Retirement Funds",
        content: `| Fund Type | Key Features |
|-----------|-------------|
| Pension Fund | Employer and employee contribute; defined benefit or defined contribution |
| Provident Fund | Historically allowed full cash withdrawal; now largely aligned with pension fund rules |
| Retirement Annuity (RA) | Individual retirement savings; no employer involved; regulated by Life Insurance Act |
| Preservation Fund | Preserves retirement savings when changing jobs; limited withdrawals |`
      },
      {
        title: "8.2 Retirement Fund Taxation",
        content: `• Contributions to retirement funds: deductible up to 27.5% of greater of taxable income or remuneration, subject to an annual monetary cap
• Growth inside approved retirement funds: tax-free
• Withdrawals on retirement: first R550,000 tax-free (retirement lump sum table), then taxed at sliding scale rates
• Pre-retirement withdrawals: taxed according to the withdrawal tax table (first R27,500 tax-free)`
      },
      {
        title: "8.3 Annuity Options at Retirement",
        content: `| Annuity Type | Key Features |
|-------------|-------------|
| Life Annuity (Guaranteed) | Fixed income paid for life; capital consumed by insurer; no residual value for beneficiaries |
| Living Annuity | Annuitant retains capital; draws income between 2.5% and 17.5% per year; capital passes to beneficiaries on death |
| With-Profit Annuity | Income linked to investment performance of underlying portfolio |
| Inflation-Linked Annuity | Income escalates annually in line with inflation |`
      },
      {
        title: "8.4 The Two-Pot Retirement System",
        content: `Implemented in South Africa in September 2024, the two-pot system divides retirement fund contributions into:

• **Savings Component (1/3 of contributions):** Can be accessed once per tax year (minimum R2,000 withdrawal, taxed as income)
• **Retirement Component (2/3 of contributions):** Locked in until retirement; must be used to purchase an annuity
• **Vested Component:** Existing savings before implementation date preserved under old rules`
      }
    ]
  },
  {
    id: 9,
    title: "Ethics and TCF",
    subsections: [
      {
        title: "9.1 Ethical Principles",
        content: `| Principle | Application |
|-----------|------------|
| Client First | Always place client interests above own interests when rendering services |
| Integrity | Act honestly and transparently in all dealings |
| Competence | Only render services within your area of knowledge and authorisation |
| Confidentiality | Protect client information; only disclose with consent or as required by law |
| Objectivity | Provide unbiased advice based on the client's needs, not commission potential |`
      },
      {
        title: "9.2 The Six TCF Outcomes",
        content: `The Treating Customers Fairly (TCF) framework requires FSPs to demonstrate six outcomes:

• **Outcome 1:** Clients can be confident they are dealing with firms where fair treatment is central to the culture
• **Outcome 2:** Products and services marketed are designed to meet the needs of identified customer groups
• **Outcome 3:** Clients are given clear information and kept informed before, during, and after purchase
• **Outcome 4:** Advice is suitable and takes account of client circumstances
• **Outcome 5:** Products perform as firms have led clients to expect
• **Outcome 6:** Clients do not face unreasonable post-sale barriers to change products, switch providers, or make claims`
      },
      {
        title: "9.3 Prohibited Practices",
        content: `• **Misrepresentation:** Providing false or misleading information about a product
• **Churning:** Unnecessary product switching to earn additional commission
• **Twisting:** Replacing a suitable existing policy with a new one to earn commission
• **Insider Trading:** Using non-public information to trade securities
• **Market Manipulation:** Artificially inflating or deflating security prices
• **Tipping Off:** Alerting a money laundering suspect about a report`
      }
    ]
  },
  {
    id: 10,
    title: "POPIA — Protection of Personal Information",
    subsections: [
      {
        title: "10.1 Overview",
        content: `The Protection of Personal Information Act 4 of 2013 (POPIA) regulates the processing of personal information. Compliance became mandatory on 1 July 2021. The Information Regulator enforces POPIA.`
      },
      {
        title: "10.2 Eight Conditions for Lawful Processing",
        content: `| Condition | Meaning |
|-----------|---------|
| 1. Accountability | The responsible party is accountable for compliance |
| 2. Processing Limitation | Only collect info that is necessary; with consent or legal basis |
| 3. Purpose Specification | Collect for specific, defined, and lawful purposes |
| 4. Further Processing Limitation | Cannot use data in a way incompatible with the original purpose |
| 5. Information Quality | Keep data accurate, complete, and up to date |
| 6. Openness | Inform data subjects of processing activities |
| 7. Security Safeguards | Protect data against loss, damage, and unauthorised access |
| 8. Data Subject Participation | Data subjects may access and correct their information |`
      },
      {
        title: "10.3 Rights of Data Subjects",
        content: `• Right to access their personal information held by an organisation
• Right to correct inaccurate data
• Right to object to processing of their data
• Right to be notified of data breaches that could affect them`
      }
    ]
  },
  {
    id: 11,
    title: "Taxation Basics in Financial Planning",
    subsections: [
      {
        title: "11.1 Key Tax Types",
        content: `| Tax Type | Key Facts |
|----------|-----------|
| Income Tax | Earned income, rental income, interest (above exemptions), annuity income |
| Capital Gains Tax (CGT) | Profits on disposal of assets; inclusion rate 40% for individuals |
| Dividends Withholding Tax | 20% on dividends from SA resident companies |
| Estate Duty | 20% on dutiable estate up to R30m; 25% on excess; R3.5m primary abatement |
| Donations Tax | 20% on donations; R100,000 annual exemption for natural persons |
| VAT | 15% standard rate; most financial services are VAT-exempt |`
      },
      {
        title: "11.2 Tax-Free Savings Accounts (TFSAs)",
        content: `• Annual contribution limit: R36,000 per tax year
• Lifetime contribution limit: R500,000
• No tax on interest, dividends, or capital gains within the account
• No tax on withdrawals
• Contributions ABOVE limits are taxed at 40% on the excess`
      },
      {
        title: "11.3 Interest Exemptions",
        content: `• Natural persons under 65: R23,800 interest income exempt per year
• Natural persons 65 and over: R34,500 interest income exempt per year`
      },
      {
        title: "11.4 Annual CGT Exclusion",
        content: `• R40,000 annual exclusion for individuals
• R300,000 exclusion in the year of death
• Primary residence exclusion: first R2 million of capital gain on primary home is excluded`
      }
    ]
  },
  {
    id: 12,
    title: "Exam Tips and Key Numbers",
    subsections: [
      {
        title: "12.1 About the RE5 Exam",
        content: `| Aspect | Detail |
|--------|--------|
| Format | Multiple choice questions (typically 80–120 questions) |
| Duration | 3 hours |
| Pass mark | 65% |
| Setting | Computer-based at registered examination centres |
| Results | Immediately after completion |`
      },
      {
        title: "12.2 Question Approach Strategy",
        content: `• Read each question carefully — look for qualifying words like NOT, ALWAYS, NEVER, MUST, MAY
• Eliminate obviously wrong answers first to narrow choices
• For scenario questions, always ask: "What would a professional with the client's best interest at heart do?"
• If unsure, think about what the Code of Conduct principles would require
• Do not leave answers blank — there is no negative marking`
      },
      {
        title: "12.3 High-Frequency Exam Topics",
        content: `1. Disclosure requirements (initial and ongoing)
2. Needs analysis and suitability of advice
3. Record of advice — what it must contain and how long to keep it
4. Complaints process — internal (15 days) and the FAIS Ombud (R800,000 cap)
5. Fit and proper requirements — all five pillars
6. FICA — CDD, reporting obligations, tipping off
7. Conflict of interest — disclosure and management policy
8. Churning and twisting — definitions and consequences
9. The six TCF outcomes
10. Debarment — who can debar and the appeals process`
      },
      {
        title: "12.4 Key Numbers to Remember",
        content: `| Figure | What It Refers To |
|--------|-------------------|
| 5 years | Minimum period to keep records (FAIS) |
| 5 years | Minimum period to keep records (FICA after relationship ends) |
| 15 business days | Internal complaint resolution period |
| 3 years | Time limit to lodge complaint with FAIS Ombud |
| R800,000 | Maximum FAIS Ombud compensation award |
| 65% | RE5 pass mark |
| 27.5% | Maximum retirement fund contribution deduction |
| R36,000 | Annual TFSA contribution limit |
| R40,000 | Annual CGT exclusion for individuals |
| 20% | Dividends withholding tax rate |
| 20% | Estate duty rate (up to R30m dutiable estate) |
| 15% | Standard VAT rate |
| R24,999.99 | FICA cash threshold reporting amount |
| 6 CPD hours | Minimum annual CPD requirement |`
      },
      {
        title: "12.5 Common Pitfalls",
        content: `• Confusing RE1 (key individuals) with RE5 (representatives)
• Confusing the FAIS Ombud (complaints) with the FSCA (licensing and regulation)
• Thinking advice can be given before a needs analysis — it cannot
• Forgetting that the record of advice must be kept for 5 years (not 3)
• Confusing FICA's cash threshold (R24,999.99) with other amounts
• Thinking an FSP can operate while their licence is suspended — they cannot`
      }
    ]
  }
];

const glossary = [
  { term: "Accountable Institution", def: "An entity listed in Schedule 1 of FICA that must comply with CDD and reporting requirements" },
  { term: "Advice", def: "A recommendation or guidance about a financial product tailored to a specific client" },
  { term: "Churning", def: "Unnecessary switching of products to generate commission for the adviser" },
  { term: "Conflict of Interest", def: "Situation where a provider's personal interests could impair objective service to clients" },
  { term: "CPD", def: "Continuous Professional Development — ongoing learning to maintain competence" },
  { term: "Debarment", def: "Prohibition from rendering financial services as a representative" },
  { term: "EDD", def: "Enhanced Due Diligence — additional scrutiny applied to high-risk clients such as PEPs" },
  { term: "FAIS Act", def: "Financial Advisory and Intermediary Services Act 37 of 2002" },
  { term: "FICA", def: "Financial Intelligence Centre Act 38 of 2001" },
  { term: "FSP", def: "Financial Services Provider — a licensed person who renders financial services" },
  { term: "FSCA", def: "Financial Sector Conduct Authority — the market conduct regulator" },
  { term: "Indemnity", def: "Insurance principle that restores the insured to the same position as before the loss" },
  { term: "Key Individual", def: "Natural person responsible for managing the rendering of financial services by an FSP" },
  { term: "Needs Analysis", def: "Assessment of client's financial needs, circumstances, and goals before advice is given" },
  { term: "PEP", def: "Politically Exposed Person — an individual in or linked to a prominent public position" },
  { term: "POPIA", def: "Protection of Personal Information Act 4 of 2013" },
  { term: "Record of Advice", def: "Written document recording the advice given and the reasons for it; kept for 5 years" },
  { term: "Representative", def: "A person who renders financial services on behalf of a licensed FSP" },
  { term: "STR", def: "Suspicious Transaction Report — report to FIC when a transaction is suspected to involve crime" },
  { term: "Subrogation", def: "Insurer's right to stand in the shoes of the insured to recover from a third party" },
  { term: "TCF", def: "Treating Customers Fairly — regulatory framework ensuring fair outcomes for financial consumers" },
  { term: "Tipping Off", def: "Criminal offence of informing a suspect that they are being investigated for money laundering" },
  { term: "TFSA", def: "Tax-Free Savings Account — R36,000 annual limit; no tax on growth or withdrawals" },
  { term: "Twisting", def: "Persuading a client to replace an existing insurance policy primarily to earn commission" },
];

function renderContent(text: string) {
  // Simple markdown-like renderer
  const lines = text.split("\n");
  const elements: JSX.Element[] = [];
  let tableRows: string[][] = [];
  let inTable = false;

  const flushTable = () => {
    if (tableRows.length > 0) {
      elements.push(
        <div key={`table-${elements.length}`} style={{ overflowX: "auto", margin: "16px 0" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
            <thead>
              <tr>
                {tableRows[0].map((cell, i) => (
                  <th key={i} style={{ textAlign: "left", padding: "10px 14px", borderBottom: "2px solid rgba(212,175,55,0.3)", color: "#d4af37", fontWeight: 600, fontSize: 13 }}>{cell.trim()}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableRows.slice(1).map((row, ri) => (
                <tr key={ri}>
                  {row.map((cell, ci) => (
                    <td key={ci} style={{ padding: "10px 14px", borderBottom: "1px solid rgba(255,255,255,0.06)", color: "#c0c0d0", fontSize: 14, lineHeight: 1.5 }}>{cell.trim()}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      tableRows = [];
    }
    inTable = false;
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Table row
    if (line.trim().startsWith("|") && line.trim().endsWith("|")) {
      // Skip separator rows
      if (line.replace(/[|\-\s]/g, "").length === 0) continue;
      const cells = line.split("|").filter((_, idx, arr) => idx > 0 && idx < arr.length - 1);
      tableRows.push(cells);
      inTable = true;
      continue;
    }

    if (inTable) flushTable();

    if (line.trim() === "") {
      elements.push(<div key={`sp-${i}`} style={{ height: 8 }} />);
      continue;
    }

    // Bold text rendering
    const renderBold = (text: string) => {
      const parts = text.split(/\*\*(.*?)\*\*/g);
      return parts.map((part, idx) =>
        idx % 2 === 1 ? <strong key={idx} style={{ color: "#d4af37" }}>{part}</strong> : <span key={idx}>{part}</span>
      );
    };

    // Bullet points
    if (line.trim().startsWith("•") || line.trim().startsWith("-")) {
      const text = line.trim().replace(/^[•\-]\s*/, "");
      elements.push(
        <div key={`li-${i}`} style={{ display: "flex", gap: 10, padding: "3px 0", fontSize: 15, lineHeight: 1.6, color: "#c0c0d0" }}>
          <span style={{ color: "#d4af37", flexShrink: 0 }}>•</span>
          <span>{renderBold(text)}</span>
        </div>
      );
      continue;
    }

    // Numbered items
    if (/^\d+\./.test(line.trim())) {
      elements.push(
        <div key={`num-${i}`} style={{ padding: "3px 0", fontSize: 15, lineHeight: 1.6, color: "#c0c0d0" }}>
          {renderBold(line.trim())}
        </div>
      );
      continue;
    }

    // Regular paragraph
    elements.push(
      <p key={`p-${i}`} style={{ margin: "4px 0", fontSize: 15, lineHeight: 1.7, color: "#c0c0d0" }}>
        {renderBold(line)}
      </p>
    );
  }

  if (inTable) flushTable();
  return elements;
}

export default function StudyGuide() {
  const [activeSection, setActiveSection] = useState(0);
  const [showGlossary, setShowGlossary] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredGlossary = glossary.filter(
    g => g.term.toLowerCase().includes(searchTerm.toLowerCase()) || g.def.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(180deg, #0a0a1a 0%, #0d0d2b 50%, #0a0a1a 100%)", color: "#e8e0d0", fontFamily: "'Segoe UI', system-ui, sans-serif" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "20px 16px 60px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <Link to="/" style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "#9090b0", textDecoration: "none", fontSize: 14, marginBottom: 16 }}>
            ← Back to Practice Exam
          </Link>
          <h1 style={{ fontSize: 28, fontWeight: 700, margin: "8px 0 4px", background: "linear-gradient(135deg, #d4af37, #f5d76e)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            📖 RE5 Study Guide
          </h1>
          <p style={{ color: "#9090b0", fontSize: 14, margin: 0 }}>Comprehensive reference for the Representatives Regulatory Examination</p>
        </div>

        {/* Tab bar: Sections vs Glossary */}
        <div style={{ display: "flex", gap: 8, marginBottom: 24 }}>
          <button
            onClick={() => setShowGlossary(false)}
            style={{
              flex: 1, padding: "12px 16px", borderRadius: 10, border: "none", cursor: "pointer", fontSize: 14, fontWeight: 600,
              background: !showGlossary ? "linear-gradient(135deg, #d4af37, #b8860b)" : "rgba(255,255,255,0.05)",
              color: !showGlossary ? "#0a0a1a" : "#9090b0"
            }}
          >
            Study Sections
          </button>
          <button
            onClick={() => setShowGlossary(true)}
            style={{
              flex: 1, padding: "12px 16px", borderRadius: 10, border: "none", cursor: "pointer", fontSize: 14, fontWeight: 600,
              background: showGlossary ? "linear-gradient(135deg, #d4af37, #b8860b)" : "rgba(255,255,255,0.05)",
              color: showGlossary ? "#0a0a1a" : "#9090b0"
            }}
          >
            Glossary
          </button>
        </div>

        {!showGlossary ? (
          <>
            {/* Section nav */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: 8, marginBottom: 24 }}>
              {sections.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => setActiveSection(i)}
                  style={{
                    padding: "10px 12px", borderRadius: 8, border: activeSection === i ? "1px solid #d4af37" : "1px solid rgba(255,255,255,0.08)",
                    background: activeSection === i ? "rgba(212,175,55,0.15)" : "rgba(255,255,255,0.03)",
                    color: activeSection === i ? "#d4af37" : "#9090b0",
                    cursor: "pointer", fontSize: 13, textAlign: "left", lineHeight: 1.3, transition: "all 0.2s"
                  }}
                >
                  <span style={{ fontSize: 11, opacity: 0.6 }}>Section {s.id}</span><br />
                  {s.title}
                </button>
              ))}
            </div>

            {/* Active section content */}
            <div>
              <h2 style={{ fontSize: 22, fontWeight: 700, color: "#d4af37", margin: "0 0 24px", borderBottom: "2px solid rgba(212,175,55,0.2)", paddingBottom: 12 }}>
                Section {sections[activeSection].id}: {sections[activeSection].title}
              </h2>
              {sections[activeSection].subsections.map((sub, i) => (
                <div key={i} style={{ marginBottom: 32, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 12, padding: "20px 24px" }}>
                  <h3 style={{ fontSize: 17, fontWeight: 600, color: "#e8e0d0", margin: "0 0 14px", display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#d4af37", flexShrink: 0 }} />
                    {sub.title}
                  </h3>
                  <div>{renderContent(sub.content)}</div>
                </div>
              ))}
            </div>

            {/* Section nav buttons */}
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 24 }}>
              <button
                onClick={() => setActiveSection(Math.max(0, activeSection - 1))}
                disabled={activeSection === 0}
                style={{
                  padding: "10px 20px", borderRadius: 8, border: "1px solid rgba(212,175,55,0.3)",
                  background: "rgba(212,175,55,0.1)", color: activeSection === 0 ? "#404060" : "#d4af37",
                  cursor: activeSection === 0 ? "default" : "pointer", fontSize: 14
                }}
              >
                ← Previous
              </button>
              <button
                onClick={() => setActiveSection(Math.min(sections.length - 1, activeSection + 1))}
                disabled={activeSection === sections.length - 1}
                style={{
                  padding: "10px 20px", borderRadius: 8, border: "none",
                  background: activeSection === sections.length - 1 ? "rgba(255,255,255,0.05)" : "linear-gradient(135deg, #d4af37, #b8860b)",
                  color: activeSection === sections.length - 1 ? "#404060" : "#0a0a1a",
                  cursor: activeSection === sections.length - 1 ? "default" : "pointer", fontSize: 14, fontWeight: 600
                }}
              >
                Next →
              </button>
            </div>
          </>
        ) : (
          /* Glossary */
          <div>
            <input
              type="text"
              placeholder="Search glossary..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              style={{
                width: "100%", padding: "12px 16px", borderRadius: 10, border: "1px solid rgba(255,255,255,0.1)",
                background: "rgba(255,255,255,0.05)", color: "#e8e0d0", fontSize: 15, marginBottom: 20, outline: "none",
                boxSizing: "border-box"
              }}
            />
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {filteredGlossary.map((g, i) => (
                <div key={i} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 10, padding: "14px 18px" }}>
                  <span style={{ color: "#d4af37", fontWeight: 600, fontSize: 15 }}>{g.term}</span>
                  <span style={{ color: "#606080", margin: "0 10px" }}>—</span>
                  <span style={{ color: "#c0c0d0", fontSize: 14 }}>{g.def}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
