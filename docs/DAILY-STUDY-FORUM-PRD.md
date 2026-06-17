# PRD: Daily Study Forum — RE1 / RE5 Prep Platform

**Status:** Draft for review
**Applies to:** RE5 Certify Pro (React + Vite + TypeScript + shadcn/ui + Supabase), both `RE5` and `RE1` tracks
**Related surfaces:** `/course` (RE5 Task 4), `/re1/course`, `/re1/practice`, daily study targets, `ClaudeAuth` (`exam_track`)

---

## 1. Overview

### 1.1 Problem
RE1/RE5 candidates fail less because the material is unknowable and more because it is **dense, legalistic, and deliberately tricky in its wording**. Self-paced learners study in isolation, hit a confusing clause (e.g., the 6-month vs. 5-day vs. 15-day debarment timelines), can't resolve it, lose momentum, and drop off. There is no structured place to ask "what does this actually mean?" against the *specific* thing they studied *today*.

### 1.2 Solution
A **Daily Study Forum** anchored to the existing per-day syllabus structure. Each study day spawns its own contextual "room." Discussion is gated to where the student actually is, micro-learning artefacts (mnemonics, ELI5 summaries) are captured and reused, and tutors can verify answers so peer learning never becomes peer *misinformation*.

### 1.3 Goals & Non-Goals
**Goals**
- Reduce drop-off by giving each study day a social "check-in" and accountability loop.
- Resolve confusion fast and *accurately* (tutor-verified peer answers).
- Turn fleeting "aha" moments into reusable, topic-tagged study assets.

**Non-Goals (v1)**
- General off-topic social networking / DMs.
- Real-time chat (threaded async discussion; live help is the escalation path, not the default).
- Replacing the tutor — the forum *scales* tutors, it doesn't remove them.

### 1.4 Success Metrics
| Metric | Target (90 days post-launch) |
|---|---|
| % of active students who post/check-in ≥3×/week | ≥ 40% |
| Median time-to-first-answer on a "Stuck" question | < 4 hours |
| % of technical questions tutor-verified within 24h | ≥ 95% (SLA) |
| Day-7 / Day-30 study-streak retention vs. control | +15% / +10% |
| Correlation: forum activity ↔ mock-exam score improvement | positive, tracked |
| Misinformation incidents (unverified wrong answer accepted) | ~0 |

---

## 2. Personas & Core User Stories

- **Thabo — Overwhelmed First-Timer (RE5).** Works full-time, panics at jargon.
  - *As a student, I want to see only the discussion for the day I'm on, so I'm not overwhelmed or spoiled by topics weeks ahead.*
- **Lerato — Key Individual candidate (RE1).** Time-poor FSP owner.
  - *As a student, I want to paste a tricky mock question and tag the exact section of legislation, so I get a targeted answer.*
- **Sipho — The Helper.** Consolidates learning by teaching.
  - *As a student, I want recognition for the clearest explanation, so I stay motivated to help.*
- **Naledi — Tutor / Compliance Officer.** Expert, limited hours.
  - *As a tutor, I want to endorse a correct answer in one click and correct a wrong one fast, so good info spreads and bad info dies.*

---

## 3. Feature 1 — Daily Target Integration *(core)*

### 3.1 How daily topics are generated
- Each track's syllabus is a sequence of **Daily Targets** (e.g., `RE1 · Day 4 · FICA Identity Verification`, `RE5 · Day 12 · Key Individual Duties`). These key the forum content: `thread(track, day, topic_tag)`.
- A nightly job (or lazy first-visit) **auto-creates the day's anchor thread** per track, seeded with:
  1. A **tutor-authored / templated discussion prompt** ("Today's trap: people confuse *suspension* (s9) with *lapsing* (s11). In your own words, what's the difference?").
  2. A **pinned "Today's Target" card** (reading/video + relevant `legislative_ref`s).
  3. An **ELI5 slot** and a **Stuck-on-a-Question slot** (invitational).
- Anchor threads are **never user-deleted**; they accrete value and become the day's living study note.

> *As a student, I want the day's room to already have a prompt and structure when I arrive, so I'm not staring at a blank board.*

### 3.2 Preventing spoilers / Day-5-vs-Day-25 confusion
Principle: **context is explicit, and you can look back but not blindly leap ahead.**
- **Every post is anchored** to `(track, day, topic)` — header reads *"RE1 · Day 4 · FICA"*.
- **Progress-gated visibility** (not calendar-gated — respects self-pacing):
  - **Past + current days:** fully open (review freely).
  - **Future days:** **locked/blurred** — *"Unlocks when you reach Day N."* Prevents spoilers *and* the overwhelm of 30 unfinished rooms.
  - **Opt-in "peek ahead":** explicit *"I'm ahead — show me anyway (spoiler warning)"* interstitial. Choice over a hard wall.
- **Answers are reusable:** a great Day-4 FICA explanation surfaces in the topic's permanent **Cheat Sheet** regardless of which day a later student is on.

> *As a student on Day 5, I want future days hidden by default, so I don't accidentally read Day 25 content I'm not ready for.*

### 3.3 "Check-in" mechanic (accountability)
- A prominent **"✅ I completed today's target"** button on the study material *and* in the day's room.
- Pressing it: posts a lightweight check-in; **advances/maintains a study streak** (🔥); unlocks a **reflection prompt** ("One thing that confused me today was…"); optionally captures a **1-question confidence pulse** feeding the tutor "where is the cohort struggling" heatmap.
- **Cohort presence:** "12 others completed Day 4 today" — social proof, no pressure.

> *As a student, I want a one-tap way to log that I did today's work and keep my streak alive.*

---

## 4. Feature 2 — Engagement & Micro-Learning

### 4.1 "Explain It Like I'm 5" (ELI5) Threads
- A **post type** with a light template: **Concept → Plain-English → Mnemonic/Memory hook → Common exam trap**.
- Upvotable; the top-voted **tutor-endorsed** ELI5 per topic pins to that topic's **Cheat Sheet** (`/community/cheatsheet/fit_and_proper`) — the compounding asset of the feature.
- Model mnemonic: *Fit & Proper = "HOC-FC" — **H**onesty/integrity, **O**perational ability, **C**ompetence, **F**inancial soundness, **C**PD.*

> *As a student, I want to share and find simple mnemonics for brutal concepts like debarment timelines, so the legalese sticks.*

### 4.2 "Stuck on a Question" Feature
- A first-class post type **linked to a specific mock/practice question** (id from `re1_questions` / RE5 quiz banks) and **tagged with legislation** (auto-pulls `topic_tag` + `legislative_ref`, e.g. `FAIS Act s14(5)`).
- Student adds *why I'm stuck* (which two options they're torn between).
- Answers can be **"Accepted"** by the asker and separately **"Tutor Verified."**
- **Deep links both ways:** practice question → "Discuss this question"; thread → "Try this question."
- **Trap-aware:** template nudges *"Which word in the question changed the answer?"*

> *As a student, I want to attach the exact mock question and the clause it tests, so helpers answer the real problem.*

### 4.3 Gamification & Incentives
Rewards **accuracy and helpfulness, not volume**:
| Badge / Reward | Earned by | Guard against gaming |
|---|---|---|
| 🔥 Streak (3/7/30-day) | Consecutive check-ins | Tied to completion, not posting |
| 🧠 Mnemonic Master | Tutor-endorsed ELI5 posts | Endorsement-gated |
| 🛡️ Compliance Guru | N tutor-verified answers in a topic | Requires expert verification |
| ⚡ First Responder | Fast, *accepted* answers | Must be accepted/verified |
| 📚 Topic Specialist | Reputation threshold per `topic_tag` | Per-topic, hard to fake |
- **Reputation points** weight tutor-endorsed contributions far above raw upvotes (can't be farmed).
- **Opt-in weekly leaderboard** per track (opt-in avoids demoralizing strugglers).
- **Accepted answer** + upvotes float the best response to the top.

> *As a helpful student, I want my verified explanations to earn a "Compliance Guru" badge.*

---

## 5. Feature 3 — Moderation & Expert Input

### 5.1 Efficient tutor controls (anti-misinformation)
- **Trust state on every answer:** `Peer answer (unverified)` → `Tutor Verified ✓` → `Corrected ⚠️`. Unverified answers carry a subtle *"not yet verified"* label.
- **One-click tutor actions** (queue + inline):
  - **Endorse ✓** — stamps "Tutor Verified," boosts to top, awards reputation.
  - **Correct ⚠️** — inline correction with required `legislative_ref`; original stays visible but demoted with the fix attached ("Common misconception — here's the accurate position…"). Correcting teaches the whole room; we never silently delete.
  - **Flag / Hide** — off-topic/abusive/dangerous; soft-hide with reason.
  - **Pin** — elevate to day room or Cheat Sheet.
- **Auto-assist:** new technical posts route to a **tutor queue** filtered by topic; a confidence heatmap shows where the cohort struggles.

> *As a tutor, I want to endorse or attach a cited correction in one click, so accurate info wins by default.*

### 5.2 24-hour escalation to a live tutor
- Posts typed **"technical question"** start an **SLA clock**.
- No tutor-verified answer within 24h → **auto-escalate**: status `Escalated`, added to **on-call tutor priority queue** with a nudge; asker notified; optional **live help slot** for complex cases.
- Escalation metrics feed back into **content gaps** — recurring escalations on the same clause signal the *course material* needs a fix.

> *As a student, I want a guarantee that if peers can't help within a day, a real tutor will.*

---

## 6. Feature 4 — UI/UX & Navigation

### 6.1 Layout — *both* contextual and centralized
1. **Contextual "Discuss" panel (primary)** — a slide-over/right rail **beside the study material and practice questions**. Reading Day 4 FICA → open "Discuss" → dropped into the Day 4 room. Discussion in context, zero navigation.
2. **Community Dashboard (`/community`)** — dedicated browsing home: **"Today's Room"** front-and-center, then *My Streak & badges*, *Unanswered questions I can help with*, *Topic Cheat Sheets*, *Past days*. Track-aware via `exam_track`.
- Reuses platform tokens (navy `#1B3A6B` / gold `#D4A017` for RE1; RE5 dark theme) and the shared cross-nav, so the forum reads as **one platform**.

> *As a student, I want to discuss the topic right beside the lesson, so asking costs no friction.*

### 6.2 Notifications — pull back without spamming
Principle: **real-time only for things *about me*; everything else is a batched digest.**
| Trigger | Channel | Timing |
|---|---|---|
| Reply to my post / @mention | In-app + optional push | Real-time |
| My answer was Tutor Verified / Accepted | In-app + push | Real-time (reward) |
| My "Stuck" question answered / escalated | In-app + push | Real-time |
| New activity in rooms I follow | In-app badge only | Batched |
| Daily digest (prompt, cohort activity, streak) | Email/push | Once/day, user-chosen time |
| Streak about to break | Push | 1 gentle reminder, quiet-hours aware |
- User controls: per-type toggles, **quiet hours**, "daily digest only." Default conservative. Streak nudge capped at one/day and suppressed after check-in.

> *As a student, I want to be notified when someone answers my question or a tutor verifies my work — but not pinged for every post.*

---

## 7. Proposed Data Model (Supabase)

Concrete to the current stack; all tables RLS-protected; realtime on `forum_posts`, `tutor_endorsements`, `escalations`. See `supabase/migrations/forum_schema.sql` for the scaffold.

```
forum_threads     (id, track, day, topic_tag, type, title, prompt, linked_question_id, legislative_ref, is_pinned, created_by, created_at)
forum_posts       (id, thread_id, parent_post_id, author_id, body, is_check_in, trust_state, is_accepted, upvotes, created_at)
post_votes        (post_id, user_id, value)                 -- 1 row/user/post
tutor_endorsements(id, post_id, tutor_id, action, correction_body, legislative_ref, created_at)
check_ins         (id, user_id, track, day, confidence, created_at)   -- streaks + heatmap
escalations       (id, post_id, status, sla_due_at, resolved_by, resolved_at)
badges (id, code, label, criteria)   user_badges (id, user_id, badge_id, awarded_at)
user_reputation   (user_id, topic_tag, points)             -- endorsement-weighted
```
**RLS sketch:** students read threads where `day <= their_current_day` for their `track` (+ explicit peek-ahead unlocks); write to non-locked rooms; tutors/admin (email-based, per `user_profiles` convention) get full read + endorse/correct/flag. Mirrors existing `re1_*` and `user_profiles` RLS patterns.

---

## 8. Phased Rollout

- **MVP (Phase 1):** auto daily anchor threads (both tracks) · progress-gated visibility · check-in + streak · basic threaded posting · tutor Endorse/Correct/Flag · daily digest.
- **Phase 2:** ELI5 template + Cheat Sheets · "Stuck on a Question" linked to banks · gamification (badges, reputation, accepted answers) · contextual Discuss panel.
- **Phase 3:** 24h escalation SLA + on-call queue · confidence heatmap dashboard · opt-in leaderboards · content-gap analytics.

---

## 9. Risks & Mitigations
| Risk | Mitigation |
|---|---|
| Misinformation (confident wrong answers) | Trust states + "unverified" labels + 24h verify SLA + endorsement-weighted reputation |
| Cold-start (empty rooms) | Pre-seed prompts, ELI5 stubs, tutor founding presence; surface "questions you can answer" |
| Tutor overload | Topic-routed queue, one-click actions, escalation only for the 24h-unanswered tail |
| Spoiler-gating frustrates fast movers | Progress-based gating + opt-in peek-ahead |
| Toxicity / exam-cheating | Policy, flagging, moderation; mock-bank questions only, never real exam dumps |

## 10. Open Questions
1. Is "current day" driven by enrollment-date schedule, self-marked completion, or hybrid?
2. Cohorts: one rolling global cohort per track, or time-boxed class cohorts?
3. Tutor staffing model for the 24h SLA — in-house vs. top-student moderators + tutor backstop?
4. Do RE1 and RE5 students share rooms for shared topics (FICA, GCC) or stay separate?
