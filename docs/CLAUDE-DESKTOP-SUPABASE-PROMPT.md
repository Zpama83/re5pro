# Claude Desktop Prompt — Supabase Setup for RE5CertPro

Paste **everything between the `BEGIN` and `END` markers** into a fresh Claude
Desktop chat. Claude Desktop will then either (a) run the SQL directly if you
have the Supabase MCP server connected, or (b) walk you through running it via
the Supabase Dashboard. Either way the end state is the same: your Supabase
project ends up with the schema, the base 160-question RE1 bank, and the new
20-question expansion all applied.

> Before you paste: attach the three SQL files from this repo to the chat
> (Claude Desktop accepts file attachments via the paper-clip / "attach"
> button). The files are:
> 1. `supabase/migrations/re1_schema.sql`
> 2. `supabase/migrations/re1_seed_questions.sql`
> 3. `supabase/migrations/re1_seed_questions_v3_framework_aligned.sql`
>
> If you can't attach them, Claude Desktop can still help — it will ask you
> to paste the file contents inline.

---

## BEGIN — Claude Desktop prompt

```
You are helping me finish the Supabase database setup for RE5CertPro — a
South African RE5/RE1 regulatory-exam prep app I'm building. The frontend
is Vite + React + TypeScript + shadcn/ui, with Supabase Auth and Postgres
as the backend.

──────────────────────────────────────────────────────────────────────────
PROJECT CONTEXT
──────────────────────────────────────────────────────────────────────────
- Repo:               https://github.com/Manginza/RE5CertPro
- Local repo path:    C:\Users\Administrator\Desktop\RE5 code folder
- Supabase project:   qdkkilaejttswlnzepzg
- Supabase URL:       https://qdkkilaejttswlnzepzg.supabase.co
- Anon key (public,
  safe to share):     eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFka2tpbGFlanR0c3dsbnplcHpnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODExMTcxODksImV4cCI6MjA5NjY5MzE4OX0.mKPiHhwRTjO9Gl04vK7t2NUbaJ7tDUgboG8BUunKTQg

I will NOT paste my service-role key in chat. If you need write access via
MCP and don't already have it configured, please tell me what to add to my
Supabase MCP server config (and how to keep my service-role key out of
this conversation).

──────────────────────────────────────────────────────────────────────────
WHAT I NEED YOU TO DO
──────────────────────────────────────────────────────────────────────────
Apply the following migrations in the listed order against my Supabase
project, then verify each step succeeded:

1. re1_schema.sql
   Creates the public.re1_questions and public.re1_user_sessions tables
   and the related RLS policies.

2. re1_seed_questions.sql
   Seeds the base RE1 question bank (Q1-Q160) across 16 topic tags.

3. re1_seed_questions_v3_framework_aligned.sql
   Adds Q161-Q180: 20 framework-aligned questions covering updated FICA
   thresholds (R50k CTR), section 29B tipping-off, the 5/15-day debarment
   notification windows, the pro-rated CPD formula, the section 14 vs
   FSR Act s153 debarment split, the FAIS Ombud's 5 rejection grounds,
   and post-Twin-Peaks FSCA terminology.

──────────────────────────────────────────────────────────────────────────
HOW TO PROCEED
──────────────────────────────────────────────────────────────────────────
Pick the path that matches your setup:

• PATH A — Supabase MCP available
  If you have a Supabase MCP server connected with write access to this
  project, run the SQL directly using its tools. For each migration:
    1. Run the SQL.
    2. After it completes, query the database to verify expected state
       (e.g. SELECT count(*) FROM public.re1_questions; should return
       0 after step 1, ~160 after step 2, and ~180 after step 3).
    3. Print the row count and any errors to me before moving to the
       next migration.

• PATH B — No Supabase MCP (manual)
  If you can't execute SQL on my Supabase project directly, walk me
  through running each migration via the Supabase Dashboard:
    1. Tell me exactly which URL to open
       (https://app.supabase.com → my project → SQL Editor → New query).
    2. Confirm I should paste the contents of the file you have
       attached / open.
    3. Wait for me to reply "done" or paste any error message.
    4. Verify by giving me a SELECT query I can run to check counts.
    5. Move to the next migration.

──────────────────────────────────────────────────────────────────────────
VERIFICATION CHECKLIST (apply after all 3 migrations succeed)
──────────────────────────────────────────────────────────────────────────
Run (or have me run) these queries and confirm the results:

  SELECT count(*) AS total_questions FROM public.re1_questions;
  -- Expect: ~180 (160 base + 20 expansion)

  SELECT complexity_level, count(*)
  FROM public.re1_questions
  GROUP BY complexity_level
  ORDER BY complexity_level;
  -- Expect roughly: L1 ~30 | L2 ~70 | L3 ~50 | L4 ~30

  SELECT topic_tag, count(*)
  FROM public.re1_questions
  GROUP BY topic_tag
  ORDER BY topic_tag;
  -- Expect 16 distinct topic_tag values, each with multiple questions.

  SELECT question_number, topic_tag, complexity_level, left(question_text, 80)
  FROM public.re1_questions
  WHERE question_number BETWEEN 161 AND 180
  ORDER BY question_number;
  -- Expect 20 rows — these are my new framework-aligned questions.

If any check fails, surface it to me — don't paper over it.

──────────────────────────────────────────────────────────────────────────
WHAT TO DO IF THE TABLES ALREADY EXIST
──────────────────────────────────────────────────────────────────────────
The schema migration uses CREATE TABLE IF NOT EXISTS, so re-running it is
safe. The base seed (re1_seed_questions.sql) may have already been applied
in an earlier session — if you see ~160 rows already, skip step 2 and go
straight to step 3.

If step 3 fails on a primary-key or unique-index conflict because Q161-Q180
already exist, tell me — do NOT silently delete or overwrite my existing
rows.

──────────────────────────────────────────────────────────────────────────
OUT OF SCOPE — do not touch
──────────────────────────────────────────────────────────────────────────
- The auth.users table or Supabase Auth settings.
- Any tables outside public.re1_questions and public.re1_user_sessions
  (in particular, do not touch any ku_* tables — those belong to my
  separate K53 platform project, not this one).
- Anything in the codebase outside the supabase/migrations/ directory.

Start by telling me which path (A or B) you can use, then walk me through
step 1.
```

## END — Claude Desktop prompt

---

## Notes

- The anon key is the public publishable JWT (same one already in your `.env`
  and shipped in any client build). It is **not** a secret and is safe to
  include in a Claude Desktop chat.
- The **service-role key** is the secret — never paste that in chat. If
  Claude Desktop's Supabase MCP needs write access, configure the key
  inside the MCP server's environment, not in the conversation.
- After Claude Desktop finishes, you can verify the result yourself by
  opening `/re1/practice` in the app and filtering by topic `fica_aml` or
  `debarment_s14` — Q161–Q180 should appear in rotation.
