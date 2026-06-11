# Canonical Supabase Project

This codebase has **two** Supabase project IDs that appear in its history.
This note pins which one is canonical going forward, so future developers
(or future-you) don't waste time re-pointing the wrong one.

## Canonical

| Field | Value |
|---|---|
| **Project ID** | `qdkkilaejttswlnzepzg` |
| **URL** | `https://qdkkilaejttswlnzepzg.supabase.co` |
| **Dashboard title** | "RE5CertPro" |
| **Migrations applied** | `re1_schema.sql`, `re1_seed_questions.sql`, `re1_seed_questions_v3_framework_aligned.sql` |
| **Question count** | 180 RE1 questions (Q1–Q180), 16 topic tags |
| **First wired up in `.env`** | Mid-conversation, ~end of November/early December 2026 |

This is the project the local `.env` and any future deployment env should
point at. The `anon` (publishable) key is in `.env` locally and is safe to
ship in client bundles — it only allows operations that pass RLS.

## Deprecated / historical

| Field | Value |
|---|---|
| **Project ID** | `jxjqnjixvpnbybjpbxgu` |
| **URL** | `https://jxjqnjixvpnbybjpbxgu.supabase.co` |

This project ID was wired into the earlier `.env` and into some inline
references in older commits (and into the original
`docs/CLAUDE-DESKTOP-SUPABASE-PROMPT.md`). It does **not** hold the RE1
migrations and is **not** the live project. Treat any reference to it as
stale.

If you see `jxjqnjixvpnbybjpbxgu` anywhere in code, env, or docs while
working on this project: it is wrong — replace it with
`qdkkilaejttswlnzepzg`.

## Re-running the RE1 migrations against a fresh project

If you ever spin up a new Supabase project from scratch (e.g. for staging
or a new tenant), apply the migrations in this order:

1. `supabase/migrations/re1_schema.sql`
2. `supabase/migrations/re1_seed_questions.sql`
3. `supabase/migrations/re1_seed_questions_v3_framework_aligned.sql`

See `docs/CLAUDE-DESKTOP-SUPABASE-PROMPT.md` for a copy-paste Claude
Desktop prompt that does this end-to-end with verification queries.

## Service-role key

The service-role key is **not** in this repo. It lives only in the
Supabase dashboard. Never paste it in chat, never commit it, and never
embed it in a client-side bundle. The anon key is the only Supabase
credential that should appear in `.env` or client code.

## RLS posture

Both `re1_questions` and `re1_user_sessions` have Row-Level Security
enabled (see `re1_schema.sql`). If a future change exposes new tables,
turn on RLS for those tables too — otherwise the anon key shipped in the
bundle would give every visitor read/write access by default.
