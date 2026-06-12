# Quality Assurance — RE5CertPro

This document records the quality standard the course is held to, what is
verified automatically on every change, what the automated pass found and
fixed, and — critically — what still requires a qualified human reviewer
before the content can be called exam-grade.

Last full QA pass: **December 2026** (targeting the 2026 RE5 / RE1 exam
syllabi).

---

## 1. Automated data-quality suite

Location: `src/data/__tests__/quizData.test.ts`
Run with: `npm test` (or `npx vitest run`)

This suite is the enforcement layer. It runs in CI/local on every change and
**fails the build** if any of the following regress. It validates **all
content surfaces**:

- The RE5 mock-exam bank (325 questions in `RE5Exam.jsx`)
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

Result of the latest run: **39 / 39 checks passing.**

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
