# Quality Assurance — RE5CertPro

This document records the quality standard the course is held to, what is
verified automatically on every change, what the automated pass found and
fixed, and — critically — what still requires a qualified human reviewer
before the content can be called exam-grade.

Last full content QA pass: **December 2026** (targeting the 2026 RE5 / RE1
exam syllabi). Last code review: **September 2026** — see section 6, which
corrects several claims made below.

---

## 1. Automated data-quality suite

Location: `src/data/__tests__/quizData.test.ts`
Run with: `npm test` (or `npx vitest run`)

This suite is the enforcement layer. It runs in CI/local on every change and
**fails the build** if any of the following regress. It validates **all
content surfaces**:

- The RE5 mock-exam bank (325 authored questions in `RE5Exam.jsx`; 213 of
  them servable — see sections 6.4 and 6.6)
- The RE5 Task 4 deep-dive lessons (14 lessons × 5 questions)
- The RE5 other-task coverage lessons (7 lessons × 5 questions)
- The RE5 supplementary lessons (4 lessons × 5 questions)
- The RE1 course lessons (16 task lessons; quizzes drawn from Supabase)

### What it checks

| Check | Why it matters |
|---|---|
| 325 unique question IDs in the mock bank | No accidental loss or duplication |
| Every question has exactly 4 non-empty options | Structural integrity |
| No duplicate option text within a question | Catches copy-paste bugs |
| Answer index is 0–3 (mock) / A–D (lessons) | Valid key |
| Every question has an explanation | No unexplained answers |
| Explanation covers **every wrong option** | Complete learner feedback |
| **Explanation's wrong-map never covers the keyed correct answer** | Catches answer-key ↔ explanation contradictions |
| Distractor analysis never covers the correct letter (lessons) | Same, for lesson quizzes |
| Lesson quizzes follow 1×L1 / 1×L2 / 2×L3 / 1×L4 | FSCA cognitive distribution |
| Mock bank can fill the FSCA 50-question level distribution | Mock exam is always buildable |
| Every question resolves valid metadata (task 1–8, level 1–4) | Smart-exam builder integrity |
| No "Financial Services Board" as current law (outside a whitelist) | Post-2018 terminology |
| No superseded R24,999.99 CTR threshold as current | Post-amendment FICA figure |
| No "the Registrar" (replaced by "the Authority") | Post-2018 terminology |
| RE1 lessons map only to topic tags that exist in the bank | No empty quizzes |
| All 8 RE5 tasks + all 16 RE1 tasks are covered | Syllabus completeness |

Result of the latest run: **49 / 49 checks passing.** Note that a passing
suite proved less than section 1 implies — see section 6.

---

## 2. Issues the QA pass found and fixed (December 2026)

These were real defects in the pre-existing content that would have actively
misled candidates. All are now fixed and locked by the test suite.

| Item | Defect | Fix |
|---|---|---|
| **Q49 / Q50** | The explanations for these two Complaints questions were **swapped**. Q49 (appealing an Ombud ruling) carried a three-year-time-limit explanation; Q50 (the three-year time limit) carried the appeal explanation. Both wrong-maps also covered their own keyed answer. | Rewrote both explanations to match their questions. |
| **Q251** | Answer key marked **"65%"** as the RE5 pass mark, but the explanation said **"66% (33 of 50)"** — a direct contradiction. 33/50 = 66%, consistent with the exam-tactics lesson. | Corrected the answer key to 66%. |
| **Q89 / Q91** | Taught the **superseded R24,999.99** CTR threshold as the correct answer. | Updated to the current R49,999.99 (R50,000+) per the amended FIC Regulations; old figure kept only as a labelled distractor. *(fixed in the prior commit)* |
| **Home stats banner** | Hardcoded "Total Questions: 250" and "Pass Mark: 65%" — both stale. | Made the count dynamic (`questions.length`) and the pass mark 66%, consistent with Q251. |

---

## 3. 2026-currency audit

Confirmed across all content surfaces:

- **Twin Peaks** terminology — "Financial Sector Conduct Authority" / "the
  Authority" / "FSCA", never "FSB" or "Registrar" (except as labelled
  historical context or deliberately-wrong distractors).
- **FICA CTR threshold** — R49,999.99 (R50,000 or more), 3-business-day
  filing window, aggregation (CTRA) removed.
- **Beneficial ownership** — 25% voting-rights / effective-control test.
- **Section 29B tipping-off** prohibition present.
- **Debarment** — section 14 (FSP-initiated) vs FSR Act s153
  (FSCA-initiated); 5-day notification / 15-day grounds / 6-month
  former-rep window.
- **FAIS Ombud** — R800,000 cap, 6-week internal window, 6-month
  post-rejection referral, 3-year limitation.
- **CPD** — 1 June–31 May cycle; 6/12/18-hour bases; pro-rata formula.
- **RE5 pass mark** — 66% (33 of 50). **RE1 pass mark** — 65% (52 of 80).

---

## 4. What automated testing CANNOT verify — human SME review required

The suite proves the content is **structurally sound and internally
consistent**. It cannot prove the answer keys are **legally correct**. An
LLM authored or revised most of the explanatory content, and subtle errors
(a wrong section number, an outdated practice point, a defensible-but-wrong
answer) can survive every structural check.

**Before this course is represented as exam-grade preparation, a qualified
South African FAIS compliance officer / accredited RE trainer must review:**

- [ ] RE5 mock-exam bank — 325 questions + answer keys + explanations
- [ ] RE5 Task 4 deep-dive — 14 lessons × 5 questions
- [ ] RE5 other-task coverage — 7 lessons × 5 questions
- [ ] RE5 supplementary — 4 lessons × 5 questions
- [ ] RE1 course lessons — 16 lessons (concepts + statutory refs)
- [ ] RE1 Supabase question bank — 180 questions
- [ ] CPD calculator — confirm the 6/12/18-hour bases and pro-rata method
      against the current Board Notice 194 of 2017 wording

Suggested reviewer brief:
> "Please review the quiz items and lesson content at
> https://re-5-cert-pro.vercel.app for alignment with the current FSCA /
> Moonstone RE5 and RE1 examination syllabi and the prevailing Board
> Notices. Flag any answer key, statutory citation, threshold, or timeline
> that is incorrect or out of date."

Until that sign-off, every data file carries a `DRAFT — pending
compliance-officer review` marker, and the in-app course pages display a
"Study material — not a substitute for the live exam" notice.

---

## 5. Keeping it current

Regulatory figures drift (the CTR threshold change is a recent example).
Schedule a **6-monthly syllabus-drift review** (next due ~June 2027):
re-check thresholds, timelines, and terminology against the latest Board
Notices, update the affected questions, and re-run `npm test`.

---

## 6. September 2026 code review — defects found and fixed

A review of the application code (not just the content) found that several
claims in the sections above, while written in good faith, were not true of
the shipped product. What follows is what was wrong and what was done.

### 6.1 Every completed exam blanked the page (fixed)

`RE5Exam.jsx` recorded `examType` on the history entry, but no such variable
was ever declared. The results-saving effect therefore threw
`ReferenceError: examType is not defined` the moment any exam finished. With
no error boundary in the tree, React unmounted the whole application and the
candidate was left on an empty page — no score, no heatmap, and no saved
history, spaced-repetition queue or readiness score, because all three are
written after that line. Present since 2026-07-12 (`5604d7a`).

Fixed by declaring the state and setting it per session type. An
`ErrorBoundary` now wraps the app so a future crash shows a recoverable
message instead of a blank screen.

**Why the 39-check suite did not catch it:** the suite never mounted a
component. `src/components/__tests__/RE5Exam.test.tsx` now drives a session
from the home screen to the results screen and asserts the history entry.

**Why lint and build did not catch it:** `eslint.config.js` matched only
`**/*.{ts,tsx}`, so the 1,581-line `.jsx` exam engine and `questionMetadata.js`
were never linted, and `vite build` does not typecheck. Both gaps are closed:
ESLint now covers `.js`/`.jsx` with `no-undef`, `tsconfig.app.json` sets
`allowJs`/`checkJs`, and `npm run verify` runs typecheck + lint + tests.
Either check flags this exact bug.

### 6.2 The bank was gameable to 80% (fixed)

260 of the 325 questions keyed option B. Answering "B" to every question
scored 80% — comfortably past the 66% pass mark — which made every score,
heatmap and readiness level meaningless and trained a pattern the real exam
does not have. Measured across ID ranges: 218/250 for Q1-250, 31/50 for
Q251-300, 11/25 for Q301-325.

Fixed in `src/lib/examOptions.ts`: each question has its options permuted when
a session is built, with the answer key and the explanation's wrong-option map
remapped together so they cannot drift apart. Ascending numeric ladders
("1 year / 3 years / 5 years / 10 years") keep their authored order, because
scrambling those reads as a defect. Measured after the fix: always-B scores
24%. The authored data is untouched, so a reviewer still reads the bank in a
stable order.

`sort(() => Math.random() - 0.5)` — not a uniform shuffle — was replaced with
Fisher-Yates in all five places it was used.

### 6.3 Task 3 could never be tested (fixed)

No question carried the topic `Key Individual`; all 33 Key Individual items
were filed under `FSP Licensing` or `FAIS Advanced`. `getMetadata` therefore
never returned task 3. Consequences: `buildSmartExam` covered all 8 tasks in
**0 of 200** runs, the results heatmap always read "Task 3 — Key Individual:
not tested", and the readiness score coverage component was capped at 21/25
for every user, forever.

The suite's `taskId` check passed vacuously, because `getMetadata` fell back
to task 1 for any unmapped topic, and the "all 8 tasks covered" test inspected
only the lesson sets. Fixed with per-question task overrides (Q13, 14, 17,
205, 283, 298). Now 200/200 runs cover all 8 tasks, and two new tests assert
both facts directly.

### 6.4 110 questions were silently filed under Task 1 (fixed)

Twelve topics used in the bank had no entry in `TOPIC_TO_TASK` — POPIA,
Insurance Principles, Investment Principles, Long-term Insurance, Short-term
Insurance, CIS, Retirement, Securities, Financial Planning, Regulation,
Taxation, Consumer Protection — so all 110 of their questions fell through to
task 1, which came to hold 187 of 325 questions (58%).

Most of that content is also off-syllabus: RE5 tests the FAIS/FSCA regulatory
framework, not product knowledge. Items like "A bond is a:", "Compound
interest means:" and "Interest income earned by individuals is subject to
which tax" are not RE5 material.

These topics are now marked `OFF_SYLLABUS_TOPICS`. They resolve to no FSCA
task instead of task 1, they stay browsable under their own topic filter
(labelled "not in the RE5 syllabus"), and the mock-exam builder and task
heatmap ignore them. A result screen reports them separately. Task 1 now holds
76 of the 213 servable questions.

### 6.5 Bloom levels were fabricated for 250 questions (fixed)

`defaultComplexity(id)` returned a level from `id % 10`. The resulting
30/40/20/10 spread looked like the FSCA cognitive distribution but bore no
relationship to the questions, so the L1-L4 heatmap and the "FSCA
distribution" badge were decorative for 77% of the bank.

Replaced with `estimateComplexity(question)`, which reads the actual form of
the item: roman-numeral combination and ordering stems to L4; scenario framing
and most/best/least to L3; negatives and "which of the following" to L2; short
definitional recall to L1. This is still an estimate. `getMetadata` now returns
`levelSource: "tagged" | "estimated"`, and the results screen states how many
of a session's questions carried an estimated level. Questions 251-325 remain
hand-tagged.

The roman-numeral branch of `defaultStyle` also had an operator-precedence bug
(`a || (b && c)`) whose middle term matched the substring `"i. "` inside
ordinary words. Fixed.

### 6.6 Two answer keys withdrawn pending verification

Both are listed in `QUARANTINED_IDS` in `src/data/questionMetadata.js`. They
remain in the data file so a reviewer sees them in context, but they are never
served to a candidate. **A compliance officer must resolve both before they go
back into the pool.**

| ID | Question | Problem |
|---|---|---|
| **251** | Minimum pass mark for the RE5 | Options include both 65% and 66%; the key is 66% and the explanation says "65% is close but incorrect". The pass mark published by the exam bodies is 65% — 33/50 is the number of correct answers needed, which is where 66% comes from. Section 2 above records this key being changed *from* 65% *to* 66% on internal-consistency grounds alone. The item is indefensible whichever figure is right, because it pits the two against each other. Rewrite around "33 of 50" or drop it. |
| **256** | Debarment notification window | Keyed at 15 days, cited as "Section 14(1)". Section 3 of this document states "5-day notification / 15-day grounds", and "5 days" is offered as a distractor. The key and this document contradict each other. |

Related, not quarantined but flagged for the same reviewer: **Q260** carries
distractor text asserting that "CPD cycles run on calendar years". Section 3
of this document states the cycle runs 1 June - 31 May. One of the two is
wrong.

### 6.7 Claims corrected in the product

The final-exam certificate read "PASSED — Exam Ready!" and "You are ready to
book your FSCA RE5 examination" over content that is explicitly unreviewed
(section 4) and was, at the time, gameable to 80%. It now reports the result
against the pass mark and states that the material awaits compliance sign-off.

### 6.8 Still outstanding

- The SME review in section 4 remains the gate on calling any of this
  exam-grade. Section 6.6 suggests it will find real defects.
- 166 of the 213 servable questions are still `Direct` recall, with a median
  prompt of 61 characters. The live RE5 leans heavily on scenarios and
  combination items. This is a content-authoring job, not a code fix.
- Levels for questions 1-250 are estimated, not tagged.
- `src/integrations/supabase/client.ts` throws at module scope when
  `VITE_SUPABASE_URL` is unset, before React renders — so a missing or
  mistyped Vercel environment variable takes the whole site down with a blank
  page that no error boundary can catch.
- ~80 orphaned duplicates of `src/` files sit in the repository root
  (`RE5Exam.jsx`, `StudyGuide.tsx`, `questionMetadata.js`, the shadcn
  components). Nothing imports them; they are stale copies that invite editing
  the wrong file.
