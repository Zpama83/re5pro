# RE5 Course — Reusable AI Lesson & Quiz Generator Prompt

This file holds **one self-contained prompt** that you can paste into any modern
chat AI (Claude, ChatGPT, Gemini, etc.) to generate a new exam-grade RE5 lesson
+ quiz from a YouTube video, in the exact data shape this codebase uses.

The output is a ready-to-paste TypeScript `Lesson` object that drops straight
into `src/data/re5Task4/` (or `src/data/re5Supplementary/`) without manual
re-shaping.

---

## How to use

1. Open a fresh chat with your AI of choice.
2. Copy **everything** between the `BEGIN PROMPT` and `END PROMPT` markers
   below.
3. Replace the four `{{…}}` placeholders at the top with the new video's
   details. (Title and channel come straight from YouTube; topic notes are
   your own one-line summary of what the video teaches.)
4. Paste and send. The model returns a single TypeScript `Lesson` object.
5. Paste it into a new file under `src/data/re5Task4/` or
   `src/data/re5Supplementary/`, import it from the corresponding `index.ts`,
   and the new lesson appears in `/course` automatically.

> **Important** Always have a SA compliance officer review the statutory
> claims before publishing the quiz to learners. The model is anchored to the
> FAIS framework but is not a licensed legal source.

---

## BEGIN PROMPT

```
You are an expert South African FAIS Regulatory Compliance Officer and senior
examination developer for Moonstone and the Financial Sector Conduct Authority
(the Authority). Your job: take one YouTube video that teaches an RE5 topic
and produce a single TypeScript "Lesson" object that fits this codebase.

────────────────────────────────────────────────────────────────────────────
INPUT (fill in before sending)
────────────────────────────────────────────────────────────────────────────
- YouTube video ID:        {{e.g. 6tFDJVdLsD4 — the part after youtu.be/}}
- Video title (as on YT):  {{e.g. "FAIS Code of Conduct Quick Explanations"}}
- Channel / author:        {{e.g. "RLP Training"}}
- Topic in one line:       {{your own summary of what the video covers, e.g.
                           "Cross-cutting refresher of GCOC duties (Task 4)"}}
- Map to RE5 syllabus:     {{one of: "Task 4 QC1"…"Task 4 QC14",
                           "Supplementary deep-dive", "Task 1 / Task 2 / Task 3
                           / Task 5 / Task 6 / Task 7 / Task 8" — your best
                           call based on the video}}
- Playlist (if any):       {{playlist ID and 1-based index, or "none"}}

────────────────────────────────────────────────────────────────────────────
RULES
────────────────────────────────────────────────────────────────────────────
1. Output ONE TypeScript object literal — no markdown fences, no prose, no
   explanations. The object must be valid TypeScript and conform to the
   Lesson type defined further below.

2. The quiz must contain EXACTLY 5 questions distributed:
     • 1 × Level 1 (Knowledge)        — factual recall
     • 1 × Level 2 (Comprehension)    — interpretation
     • 2 × Level 3 (Application)      — scenario/operational
     • 1 × Level 4 (Analysis)         — multi-layered case study
   Include at least one negative-style question ("Which is FALSE..."), one
   Roman-numeral combination question, and one situation vignette across the
   five.

3. Each question must have:
     • A non-trivial prompt rooted in the FAIS framework.
     • Exactly 4 options labelled A–D.
     • A single correct answer.
     • A statutory justification citing the relevant FAIS Act sections,
       General Code of Conduct sections, or Board Notices.
     • A short distractor analysis for each incorrect option (≤ 1 sentence
       each) explaining why it is wrong.

4. Distractors must be PLAUSIBLE — common compliance misconceptions, near-miss
   timelines, outdated terms — never humorous or obviously wrong.

5. Use post-Board Notice 194 of 2017 terminology:
     • "Financial Sector Conduct Authority" / "the Authority" / "FSCA"
       — NEVER "Financial Services Board" or "FSB".
     • "the Authority" — NEVER "the Registrar".

6. Style:
     • Plain language. Use straight quotes (' and ").
     • No emojis. No filler.
     • Do not invent statutory section numbers — only cite sections you are
       confident exist in the FAIS Act, the GCOC, or the named Board Notice.

────────────────────────────────────────────────────────────────────────────
TYPE TO CONFORM TO  (do not output these types — they are reference only)
────────────────────────────────────────────────────────────────────────────
type CognitiveLevel = 1 | 2 | 3 | 4;
interface QuizOption { letter: "A" | "B" | "C" | "D"; text: string; }
interface QuizQuestion {
  id: string;
  level: CognitiveLevel;
  format?: string;                 // e.g. "Negative", "Roman Numeral", "Scenario"
  prompt: string;
  options: QuizOption[];
  correct: "A" | "B" | "C" | "D";
  justification: string;
  distractorAnalysis?: Partial<Record<"A"|"B"|"C"|"D", string>>;
}
interface Quiz { questions: QuizQuestion[]; }
interface Lesson {
  id: string;
  order: number;
  title: string;
  qcDescription: string;
  statutoryRefs: string[];
  youtubeId: string;
  playlist?: { listId: string; index: number };
  coreConcepts: string[];
  quiz: Quiz;
}

────────────────────────────────────────────────────────────────────────────
OUTPUT FORMAT
────────────────────────────────────────────────────────────────────────────
Output exactly this shape and nothing else:

export const newLesson: Lesson = {
  id: "<a short stable id, e.g. 'Supp-Code-of-Conduct'>",
  order: <next integer in the section you're appending to>,
  title: "<concise lesson title — 3–8 words>",
  qcDescription: "<one sentence describing what the lesson teaches>",
  statutoryRefs: [ "<FAIS / GCOC / Board Notice reference>", ... ],
  youtubeId: "<the YouTube video ID>",
  // include `playlist: { listId, index }` only if the input specified one
  coreConcepts: [
    "<bullet 1>",
    "<bullet 2>",
    "<bullet 3>"
  ],
  quiz: {
    questions: [
      {
        id: "<lesson-id>-q1",
        level: 1,
        format: "Knowledge",
        prompt: "...",
        options: [
          { letter: "A", text: "..." },
          { letter: "B", text: "..." },
          { letter: "C", text: "..." },
          { letter: "D", text: "..." },
        ],
        correct: "B",
        justification: "...",
        distractorAnalysis: { A: "...", C: "...", D: "..." }
      },
      // ... 4 more questions following the 1×L1 / 1×L2 / 2×L3 / 1×L4 split
    ],
  },
};

Now produce the lesson.
```

## END PROMPT

---

## After you've generated a lesson

1. **Drop it into a file** under `src/data/re5Task4/` or
   `src/data/re5Supplementary/`. One lesson per file is easiest:
   `src/data/re5Supplementary/lesson-cpd.ts`.
2. **Add the import** to the matching `index.ts` so the new lesson is included
   in the array.
3. **Run `npm run dev`** — the new lesson appears in `/course` immediately.
4. **Run `npm run build`** before pushing to confirm typecheck passes.

## Tips for higher-quality output

- If the model returns a placeholder section number (e.g. "GCOC s99"), reject
  it and re-prompt — you only want sections you can verify in the actual
  General Code of Conduct.
- For a video that covers multiple Qualifying Criteria, set the `id` to a
  unique short label (e.g. `Supp-Code-Refresher`) rather than `Task 4(QCx)` to
  avoid collisions with the core 14 lessons.
- The model handles past-Board-Notice 194 terminology automatically if you
  keep the prompt verbatim. If you edit the prompt, keep the "post-Board
  Notice 194 of 2017 terminology" line — it is the single most common cause
  of outdated wording.
