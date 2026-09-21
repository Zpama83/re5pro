import { shuffle } from "@/lib/examOptions";

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

// Topics that are NOT part of the RE5 syllabus. RE5 tests the FAIS/FSCA
// regulatory framework, not product or technical knowledge, so items about
// bonds, compound interest, tax on dividends or the financial-planning
// process do not belong in a mock exam. They used to fall through the
// TOPIC_TO_TASK lookup into Task 1, which is how one task came to hold 58%
// of the bank. They stay browsable under their own topic filter, but the
// mock-exam builder and the FSCA task heatmap ignore them.
export const OFF_SYLLABUS_TOPICS = new Set([
  "CIS",
  "Consumer Protection",
  "Financial Planning",
  "Insurance Principles",
  "Investment Principles",
  "Long-term Insurance",
  "POPIA",
  "Regulation",
  "Retirement",
  "Securities",
  "Short-term Insurance",
  "Taxation",
]);

export const isInSyllabus = (question) => !OFF_SYLLABUS_TOPICS.has(question.topic);

// Withdrawn from every pool pending verification by a compliance officer.
// They stay in the data file so a reviewer sees them in context; they are
// never served to a candidate. See docs/QUALITY-ASSURANCE.md section 6.
export const QUARANTINED_IDS = new Set([
  251, // Keys the RE5 pass mark at 66% while offering 65% as a distractor.
  256, // Keys debarment notification at 15 days; the currency audit says 5.
]);

// The pool any candidate-facing feature should draw from.
export const servableQuestions = (all) =>
  all.filter((q) => !QUARANTINED_IDS.has(q.id) && isInSyllabus(q));

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


// Per-question task overrides, for items whose topic label does not determine
// the FSCA task. Every Key Individual question in the bank was filed under
// "FSP Licensing" or "FAIS Advanced", so no question ever resolved to Task 3:
// the smart-exam builder could not cover all 8 tasks, and the results heatmap
// showed "Task 3 — Key Individual: not tested" after every session.
const TASK_OVERRIDES = {
  13: 3,  // What is a 'key individual' in terms of the FAIS Act?
  14: 3,  // A key individual must be approved by:
  17: 3,  // What must an FSP do if it appoints a new key individual?
  205: 3, // Notification window when a key individual leaves or is appointed
  283: 3, // Consequence when a KI no longer meets honesty and integrity
  298: 3, // Which duties belong exclusively to the Key Individual
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

// "Thandi has just...", "Sipho wants to..." — a named actor doing something.
const SCENARIO_PATTERN =
  /\b[A-Z][a-z]+ (has|have|wants|wishes|nominated|received|lost|is|was|were|applies|applied|advises|advised|sells|sold|recommends|recommended|discovers|discovered|fails|failed|submits|submitted)\b/;

// Combination items — "i. ... ii. ... iii. ..." in the stem, or options like
// "i and iii only". These ask the candidate to weigh several statements.
const ROMAN_STEM = /\bi\.\s/;
const ROMAN_STEM_SECOND = /\bii\.\s/;
const ROMAN_OPTION = /\bi{1,3}\b\s*(and|,)\s*i{1,3}\b/i;

// Complexity estimation for the questions nobody has hand-tagged (IDs 1-250).
//
// This used to be `id % 10`, which produced a tidy-looking 30/40/20/10 spread
// bearing no relationship to the questions — the Bloom heatmap and the "FSCA
// distribution" claim were decorative for 77% of the bank. This reads the
// actual shape of the item instead. It is still an estimate, and getMetadata
// reports it as one (`levelSource: "estimated"`) so the UI can say so.
function estimateComplexity(question) {
  const text = question.q || "";
  const options = (question.options || []).join(" ");

  // L4 Analysis — combination and ordering items: several statements have to
  // be evaluated against each other, not one fact recalled.
  if (ROMAN_STEM.test(text) && ROMAN_STEM_SECOND.test(text)) return 4;
  if (ROMAN_OPTION.test(options)) return 4;
  if (/\b(sequence|correct order|chronological order)\b/i.test(text)) return 4;

  // L3 Application — a described situation the candidate has to act on.
  if (/\b(most appropriate|best course|least appropriate|most likely|first step)\b/i.test(text)) return 3;
  if (SCENARIO_PATTERN.test(text)) return 3;

  // L2 Comprehension — negatives and "which of the following" framing require
  // understanding a rule well enough to test cases against it.
  if (/\b(not|except|excluding)\b/i.test(text)) return 2;
  if (/which of the following/i.test(text)) return 2;
  if (/\b(why|purpose of|difference between|implication|means that)\b/i.test(text)) return 2;

  // L1 Knowledge — short definitional recall.
  return text.length <= 90 ? 1 : 2;
}

function defaultStyle(question) {
  const text = question.q || "";
  const lower = text.toLowerCase();
  if (lower.includes(" not ") || lower.includes("except") || lower.includes("least appropriate")) return "Negative";
  // The original test here was `a || (b && c)` by precedence, where `b` was the
  // substring "i. " — which matches inside ordinary words.
  if (ROMAN_STEM.test(text) && ROMAN_STEM_SECOND.test(text)) return "RomanNumeral";
  if (lower.includes("most ") || lower.includes("best ") || lower.includes("least ")) return "MostBestLeast";
  if (SCENARIO_PATTERN.test(text)) return "Scenario";
  return "Direct";
}

export function getMetadata(question) {
  const explicit = EXPLICIT[question.id] || {};
  const inSyllabus = isInSyllabus(question);
  // Off-syllabus items resolve to no FSCA task, rather than silently becoming
  // Task 1 — which is how Task 1 came to hold 58% of the bank.
  const taskId = inSyllabus
    ? (TASK_OVERRIDES[question.id] ?? TOPIC_TO_TASK[question.topic] ?? 1)
    : null;
  const legislativeCitation = TOPIC_TO_CITATION[question.topic] ?? "FAIS Act 37 of 2002";
  const complexityLevel = explicit.level ?? estimateComplexity(question);
  const levelSource = explicit.level ? "tagged" : "estimated";
  const questionStyle = explicit.style ?? defaultStyle(question);
  return { taskId, complexityLevel, levelSource, questionStyle, legislativeCitation, inSyllabus };
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
// Draws only from the RE5 syllabus, minus anything under compliance review.
export function buildSmartExam(allQuestions) {
  const tagged = servableQuestions(allQuestions).map(q => ({ q, meta: getMetadata(q) }));
  const byLevel = { 1: [], 2: [], 3: [], 4: [] };
  tagged.forEach(t => byLevel[t.meta.complexityLevel]?.push(t));
  Object.keys(byLevel).forEach(k => { byLevel[k] = shuffle(byLevel[k]); });

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
  return shuffle(picked).map(t => t.q);
}
