// Metadata layer for RE5 question bank (325 questions).
// Maps each question id -> { taskId, complexityLevel, questionStyle, legislativeCitation }
//
// FSCA 8 Core Tasks:
//  1 = FAIS Act regulatory framework
//  2 = Maintaining the FSP licence
//  3 = Role of the Key Individual
//  4 = General Code of Conduct
//  5 = Record-keeping
//  6 = FICA / AML / CTF
//  7 = Complaints & FAIS Ombud
//  8 = Operating as a Representative (Fit & Proper, DOFA, supervision, debarment)
//
// Complexity (Bloom): 1 Knowledge, 2 Comprehension, 3 Application, 4 Analysis
// Style: Direct | Negative | RomanNumeral | Scenario | Sequencing | MostBestLeast | Incomplete

// Topic -> default Task ID mapping (covers the original 250 questions).
const TOPIC_TO_TASK = {
  "FAIS Act": 1,
  "FAIS Advanced": 1,
  "FSCA & Regulation": 1,
  "FSP Licensing": 2,
  "Key Individual": 3,
  "Code of Conduct": 4,
  "Ethics": 4,
  "Client Relations": 4,
  "Record Keeping": 5,
  "FICA & AML": 6,
  "Complaints": 7,
  "Fit & Proper": 8,
  "Supervision": 8,
  "Scenarios": 8,
  "Financial Products": 1,
  "Mixed": 1,
};

const TOPIC_TO_CITATION = {
  "FAIS Act": "FAIS Act 37 of 2002",
  "FAIS Advanced": "FAIS Act 37 of 2002",
  "FSCA & Regulation": "FSR Act 9 of 2017",
  "FSP Licensing": "FAIS Act ss 8, 9, 11",
  "Key Individual": "FAIS Act ss 1, 17",
  "Code of Conduct": "General Code of Conduct (BN 80/2003)",
  "Ethics": "TCF Framework",
  "Client Relations": "GCOC Sections 4 & 7",
  "Record Keeping": "FAIS Act s 18; FICA",
  "FICA & AML": "Financial Intelligence Centre Act 38 of 2001",
  "Complaints": "FAIS Act s 20; BN 81",
  "Fit & Proper": "Board Notice 194 of 2017",
  "Supervision": "BN 194/2017 — Supervision",
  "Scenarios": "FAIS Act & GCOC",
  "Financial Products": "FAIS Act s 1 — Financial Product",
  "Mixed": "FAIS Act / FSR Act",
};

// Explicit complexity + style overrides for specific IDs.
// IDs 1-250: heuristically tagged below; selected ones overridden here.
// IDs 251-300: tagged precisely per the exam-grade spec.
const EXPLICIT = {
  // ===== Exam-grade Level 1 (Knowledge) 251-265 =====
  251: { level: 1, style: "Direct" },
  252: { level: 1, style: "Direct" },
  253: { level: 1, style: "Direct" },
  254: { level: 1, style: "Direct" },
  255: { level: 1, style: "Direct" },
  256: { level: 1, style: "Direct" },
  257: { level: 1, style: "Direct" },
  258: { level: 1, style: "Direct" },
  259: { level: 1, style: "Direct" },
  260: { level: 1, style: "Direct" },
  261: { level: 1, style: "Direct" },
  262: { level: 1, style: "Direct" },
  263: { level: 1, style: "Direct" },
  264: { level: 1, style: "Direct" },
  265: { level: 1, style: "Direct" },
  // ===== Exam-grade Level 2 (Comprehension) 266-285 =====
  266: { level: 2, style: "Direct" },
  267: { level: 2, style: "Direct" },
  268: { level: 2, style: "Direct" },
  269: { level: 2, style: "Direct" },
  270: { level: 2, style: "Direct" },
  271: { level: 2, style: "Direct" },
  272: { level: 2, style: "Direct" },
  273: { level: 2, style: "Direct" },
  274: { level: 2, style: "Direct" },
  275: { level: 2, style: "Direct" },
  276: { level: 2, style: "Direct" },
  277: { level: 2, style: "Direct" },
  278: { level: 2, style: "Negative" },
  279: { level: 2, style: "Direct" },
  280: { level: 2, style: "Direct" },
  281: { level: 2, style: "Direct" },
  282: { level: 2, style: "Direct" },
  283: { level: 2, style: "Direct" },
  284: { level: 2, style: "Direct" },
  285: { level: 2, style: "Direct" },
  // ===== Exam-grade Level 3 (Application) 286-295 =====
  286: { level: 3, style: "Scenario" },
  287: { level: 3, style: "Scenario" },
  288: { level: 3, style: "Scenario" },
  289: { level: 3, style: "MostBestLeast" },
  290: { level: 3, style: "MostBestLeast" },
  291: { level: 3, style: "Scenario" },
  292: { level: 3, style: "Scenario" },
  293: { level: 3, style: "Scenario" },
  294: { level: 3, style: "Scenario" },
  295: { level: 3, style: "Scenario" },
  // ===== Exam-grade Level 4 (Analysis) 296-300 =====
  296: { level: 4, style: "RomanNumeral" },
  297: { level: 4, style: "Sequencing" },
  298: { level: 4, style: "RomanNumeral" },
  299: { level: 4, style: "RomanNumeral" },
  300: { level: 4, style: "RomanNumeral" },

  // ===== Framework-current batch 301-325 (tagged precisely) =====
  301: { level: 1, style: "Direct" },
  302: { level: 1, style: "Direct" },
  303: { level: 1, style: "Direct" },
  304: { level: 1, style: "Direct" },
  305: { level: 1, style: "Direct" },
  306: { level: 1, style: "Direct" },
  307: { level: 1, style: "Direct" },
  308: { level: 2, style: "MostBestLeast" },
  309: { level: 2, style: "MostBestLeast" },
  310: { level: 2, style: "Direct" },
  311: { level: 2, style: "Direct" },
  312: { level: 2, style: "Direct" },
  313: { level: 2, style: "Direct" },
  314: { level: 3, style: "Scenario" },
  315: { level: 3, style: "Scenario" },
  316: { level: 3, style: "Direct" },
  317: { level: 3, style: "Direct" },
  318: { level: 3, style: "Scenario" },
  319: { level: 3, style: "Scenario" },
  320: { level: 3, style: "Scenario" },
  321: { level: 3, style: "RomanNumeral" },
  322: { level: 4, style: "RomanNumeral" },
  323: { level: 4, style: "Scenario" },
  324: { level: 4, style: "Scenario" },
  325: { level: 4, style: "Scenario" },
};

// Heuristic complexity assignment for IDs 1-250 to roughly mirror FSCA 30/40/20/10.
// Uses id % 10 buckets so the spread stays even across topics.
function defaultComplexity(id) {
  const m = id % 10;
  if (m <= 2) return 1; // 30%
  if (m <= 6) return 2; // 40%
  if (m <= 8) return 3; // 20%
  return 4;             // 10%
}

function defaultStyle(question) {
  const text = (question.q || "").toLowerCase();
  if (text.includes(" not ") || text.includes("except") || text.includes("least appropriate")) return "Negative";
  if (text.includes("\ni.") || text.includes("i. ") && text.includes("ii.")) return "RomanNumeral";
  if (text.includes("most ") || text.includes("best ") || text.includes("least ")) return "MostBestLeast";
  if (text.match(/\b[A-Z][a-z]+ (has|wants|nominated|received|lost|is)/)) return "Scenario";
  return "Direct";
}

export function getMetadata(question) {
  const explicit = EXPLICIT[question.id] || {};
  const taskId = TOPIC_TO_TASK[question.topic] ?? 1;
  const legislativeCitation = TOPIC_TO_CITATION[question.topic] ?? "FAIS Act 37 of 2002";
  const complexityLevel = explicit.level ?? defaultComplexity(question.id);
  const questionStyle = explicit.style ?? defaultStyle(question);
  return { taskId, complexityLevel, questionStyle, legislativeCitation };
}

export const TASK_LABELS = {
  1: "Task 1 — FAIS Framework",
  2: "Task 2 — FSP Licence",
  3: "Task 3 — Key Individual",
  4: "Task 4 — Code of Conduct",
  5: "Task 5 — Record Keeping",
  6: "Task 6 — FICA / AML",
  7: "Task 7 — Complaints & Ombud",
  8: "Task 8 — Representative",
};

export const LEVEL_LABELS = {
  1: "L1 Knowledge",
  2: "L2 Comprehension",
  3: "L3 Application",
  4: "L4 Analysis",
};

// FSCA target distribution for a 50-question mock exam.
export const FSCA_DISTRIBUTION = { 1: 15, 2: 20, 3: 10, 4: 5 };

// Build a 50-question mock matching FSCA distribution AND covering all 8 tasks.
export function buildSmartExam(allQuestions) {
  const tagged = allQuestions.map(q => ({ q, meta: getMetadata(q) }));
  const byLevel = { 1: [], 2: [], 3: [], 4: [] };
  tagged.forEach(t => byLevel[t.meta.complexityLevel]?.push(t));
  Object.keys(byLevel).forEach(k => byLevel[k].sort(() => Math.random() - 0.5));

  const picked = [];
  const usedIds = new Set();
  const tasksCovered = new Set();

  // First pass: pick required count per level, while greedily filling missing tasks.
  for (const level of [1, 2, 3, 4]) {
    const need = FSCA_DISTRIBUTION[level];
    const pool = byLevel[level];
    const chosen = [];
    // Prefer items whose task isn't yet covered.
    for (const item of pool) {
      if (chosen.length >= need) break;
      if (usedIds.has(item.q.id)) continue;
      if (!tasksCovered.has(item.meta.taskId)) {
        chosen.push(item);
        usedIds.add(item.q.id);
        tasksCovered.add(item.meta.taskId);
      }
    }
    // Fill remainder.
    for (const item of pool) {
      if (chosen.length >= need) break;
      if (usedIds.has(item.q.id)) continue;
      chosen.push(item);
      usedIds.add(item.q.id);
      tasksCovered.add(item.meta.taskId);
    }
    picked.push(...chosen);
  }

  // Final shuffle so levels aren't in blocks.
  return picked.sort(() => Math.random() - 0.5).map(t => t.q);
}
