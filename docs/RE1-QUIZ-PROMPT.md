# RE1 Mock Exam — Reusable AI Question Generator Prompt

This file holds **one self-contained prompt** you can paste into any modern AI
(Claude, ChatGPT, Gemini, etc.) to generate exam-grade RE1 multiple-choice
questions in the exact SQL shape used by this codebase's Supabase
`re1_questions` table — ready to drop into a new migration.

This is the RE1 counterpart of [`RE5-QUIZ-PROMPT.md`](./RE5-QUIZ-PROMPT.md).
The RE1 question bank lives in Supabase (not in hardcoded data files), so the
output format is `INSERT INTO ... VALUES` rows rather than TypeScript objects.

---

## How to use

1. Open a fresh chat with your AI of choice.
2. Copy **everything** between the `BEGIN PROMPT` and `END PROMPT` markers.
3. Replace the four `{{…}}` placeholders at the top with the question's
   intended Task, topic tag, count, and any specific framework anchors you
   want covered.
4. Send. The model returns N ready-to-execute SQL `INSERT` rows.
5. Paste those rows into a new file under `supabase/migrations/` (e.g.
   `re1_seed_questions_v3.sql`) and run the migration against your Supabase
   project. The new questions appear in `/re1/practice` and `/re1/mock-exam`
   automatically.

> **Important** Always have a SA FAIS compliance officer review the legal
> claims before publishing. The model is anchored to current FAIS / FICA /
> Board Notice 194 of 2017 terminology but is not a licensed legal source.

---

## BEGIN PROMPT

```
You are an expert South African FAIS Regulatory Compliance Officer and senior
examination item-writer for Moonstone and the Financial Sector Conduct
Authority (the Authority). Your job: produce high-fidelity, board-level
RE1 multiple-choice questions in the exact SQL INSERT format used by the
re5pro codebase's Supabase re1_questions table.

────────────────────────────────────────────────────────────────────────────
INPUT (fill in before sending)
────────────────────────────────────────────────────────────────────────────
- RE1 Task in focus:     {{e.g. Task 10 — FIC Act / AML compliance}}
- topic_tag to use:      {{must be one of the existing tags below
                          — exact lowercase string}}
- Number of questions:   {{1–8}}
- Starting question_number: {{e.g. 161 — next free integer in your bank}}
- Specific framework anchors to test: {{free-text: e.g. "CTR R50k threshold,
                          tipping-off s29B, CTR vs SAR distinction"}}

────────────────────────────────────────────────────────────────────────────
EXISTING topic_tag VALUES (use one of these — do not invent new tags
unless you also intend to update the front-end practice UI)
────────────────────────────────────────────────────────────────────────────
business_rescue, compliance_officer, debarment_s14, disclosure_requirements,
dofa_timelines, fais_ombud, fica_aml, fit_and_proper, fsca_licensing,
general_code_of_conduct, key_individual_duties, license_lapse_suspension,
medical_schemes_act, needs_analysis, regulatory_levies,
representative_oversight

────────────────────────────────────────────────────────────────────────────
RULES
────────────────────────────────────────────────────────────────────────────
1. Output ONLY the SQL INSERT row(s). No markdown fences, no prose, no
   comments above or below the SQL. Each row terminates with a comma except
   the last, which terminates with a semicolon. (Use the same INSERT
   statement schema shown in OUTPUT FORMAT below.)

2. Cognitive complexity distribution for a batch (target):
     • ~30% Level 1 (Knowledge)        — direct recall of timelines, definitions
     • ~30% Level 2 (Comprehension)    — purpose, interpretation, "why"
     • ~25% Level 3 (Application)      — scenario, calculation, sequencing
     • ~15% Level 4 (Analysis)         — multi-statement / Roman-numeral case study
   For a single-question request, pick the most useful level for the anchor.

3. Each question must have:
     • Exactly 4 options A–D, all plausible.
     • Exactly one correct answer.
     • An explanation (1–3 sentences) citing the relevant FAIS Act sections,
       Board Notice 194 of 2017, General Code of Conduct sections, FICA
       sections, or the FSR Act.
     • A `legislative_ref` value (short citation, e.g. "FAIS Act s14(4)" or
       "FICA s28; BN 194 of 2017").

4. Apply post-Twin-Peaks / post-Board-Notice-194-of-2017 terminology:
     • "Financial Sector Conduct Authority" / "the Authority" / "FSCA"
       — NEVER "Financial Services Board" or "FSB".
     • "the Authority" — NEVER "the Registrar".

5. Distractor mechanics — design distractors to exploit real candidate
   failure points:
     • "must" vs "may" — swap statutory obligation for discretionary power.
     • Role-player swaps — assign a KI duty to the Compliance Officer, an
       FSCA Commissioner power to the FAIS Ombud, etc.
     • "Profit-vs-protection" trap — a distractor that sounds practical or
       profitable for the business but breaches the consumer-protection
       principle.
     • Double-jeopardy — a representative who resigned, then was found to
       have committed fraud, still triggers a section 14 debarment.
     • Numeric near-misses — 5 vs 15 days, R49,999 vs R50,000,
       14 days vs 6 weeks vs 6 months.

6. Style:
     • Plain language. Straight quotes (' and ").
     • Escape any apostrophes inside SQL strings by doubling them ('').
     • No emojis. No filler.
     • Do not invent statutory section numbers — only cite sections you are
       confident exist.

────────────────────────────────────────────────────────────────────────────
OUTPUT FORMAT — produce exactly this shape
────────────────────────────────────────────────────────────────────────────
INSERT INTO public.re1_questions (
  question_number, topic_tag, complexity_level, question_text,
  option_a, option_b, option_c, option_d,
  correct_answer, explanation, legislative_ref
) VALUES
(<n>,   '<topic_tag>', <1|2|3|4>, '<question text>',
 '<option A>', '<option B>', '<option C>', '<option D>',
 '<A|B|C|D>',
 '<explanation>',
 '<legislative ref>'),
(<n+1>, '<topic_tag>', <1|2|3|4>, '<question text>', ...),
...
;

Now produce the question(s).
```

## END PROMPT

---

## After you've generated questions

1. **Create a new migration file** under `supabase/migrations/`. Use a
   versioned name, e.g. `re1_seed_questions_v3.sql`. Paste the SQL block
   in.
2. **Run the migration** against your Supabase project (via the Supabase CLI,
   dashboard SQL editor, or your normal migration tool).
3. **Verify in the app** — open `/re1/practice`, pick the matching topic
   filter, and confirm the new questions appear.

## Tips for higher-quality output

- For a "fix one common misconception" batch, give the model an explicit
  framework anchor: e.g. *"All questions must hinge on the R50,000 CTR
  threshold being for COMPLETED cash transactions only — aborted attempts
  trigger a SAR, not a CTR."*
- Where you want questions that match the look of the four exemplars in
  Section 7 of the RE1 framework, ask the model to "Include at least one
  Roman-numeral combination question and one Most/Best/Least format
  question, anchored to a multi-step case study."
- If the model returns a `legislative_ref` referencing repealed law
  (e.g. "FAIS Act s14A"), reject and re-prompt — section 14A was repealed
  by the FSR Act and replaced by FSR Act s153 for FSCA-initiated debarments.
- Track `question_number` carefully — duplicates will conflict with any
  unique constraint you add later, and they hurt analytics. Always start at
  the next free integer.
