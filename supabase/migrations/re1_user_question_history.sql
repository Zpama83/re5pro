-- ============================================================================
-- re1_user_question_history — per-(user, question) outcome tracking
-- ============================================================================
-- Used by /re1/course to power lightweight spaced repetition: when a learner
-- opens a lesson, the quiz selection prefers questions they previously got
-- wrong (or haven't seen yet) over questions they have already mastered.
--
-- One row per (user_id, question_id). Updated on every quiz submission via
-- an upsert from the frontend (RE1LessonBlock).
--
-- Idempotent: re-running is safe. RLS so users only see/update their own rows.
-- ============================================================================

CREATE TABLE IF NOT EXISTS public.re1_user_question_history (
  user_id          UUID    NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  question_id      UUID    NOT NULL REFERENCES public.re1_questions(id) ON DELETE CASCADE,
  attempts         INT     NOT NULL DEFAULT 0,
  correct_count    INT     NOT NULL DEFAULT 0,
  last_seen_at     TIMESTAMPTZ,
  last_correct_at  TIMESTAMPTZ,
  PRIMARY KEY (user_id, question_id)
);

CREATE INDEX IF NOT EXISTS idx_re1_history_user_last_seen
  ON public.re1_user_question_history(user_id, last_seen_at DESC);

-- ---------------------------------------------------------------------------
-- RLS
-- ---------------------------------------------------------------------------
ALTER TABLE public.re1_user_question_history ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users read their own history"   ON public.re1_user_question_history;
DROP POLICY IF EXISTS "Users insert their own history" ON public.re1_user_question_history;
DROP POLICY IF EXISTS "Users update their own history" ON public.re1_user_question_history;

CREATE POLICY "Users read their own history"
  ON public.re1_user_question_history FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users insert their own history"
  ON public.re1_user_question_history FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users update their own history"
  ON public.re1_user_question_history FOR UPDATE
  USING (auth.uid() = user_id);
