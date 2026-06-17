-- ============================================================================
-- Daily Study Forum — schema scaffold (RE1 / RE5)
-- ============================================================================
-- SCAFFOLD / DRAFT for the feature described in docs/DAILY-STUDY-FORUM-PRD.md.
-- Run AFTER user_profiles.sql (depends on public.user_profiles for track-gating
-- and tutor/admin recognition) and after re1_schema.sql (optional FK target for
-- "Stuck on a Question" links).
--
-- Conventions mirrored from this project:
--   * Track gating reads public.user_profiles.exam_track (RE1 | RE5).
--   * Tutor/admin recognition is EMAIL-based (same pattern as user_profiles RLS).
--     The hardcoded admin email is lungi09@gmail.com; generalise to an is_tutor
--     flag / role table before scaling the moderator pool.
--   * "current day" gating is intentionally left as an app-enforced concern in
--     this scaffold (see is_visible_day note) — wire it to your real progress
--     source (enrollment schedule vs. self-marked completion) per PRD §10.
-- ============================================================================

-- ---------------------------------------------------------------------------
-- Helper: is the current user a tutor/admin?
-- ---------------------------------------------------------------------------
CREATE OR REPLACE FUNCTION public.is_forum_moderator()
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM auth.users
    WHERE auth.users.id = auth.uid()
      AND lower(auth.users.email) = 'lungi09@gmail.com'
  );
$$;

-- ---------------------------------------------------------------------------
-- Threads — one anchor thread per (track, day, topic); also ELI5 / stuck / general
-- ---------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.forum_threads (
  id                 UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  track              TEXT NOT NULL CHECK (track IN ('RE1', 'RE5')),
  day                INT,                                   -- syllabus day; NULL for cross-day topic threads
  topic_tag          TEXT,                                  -- e.g. 'fica_aml', 'fit_and_proper'
  type               TEXT NOT NULL DEFAULT 'general'
                       CHECK (type IN ('daily', 'eli5', 'stuck', 'general')),
  title              TEXT NOT NULL,
  prompt             TEXT,                                  -- seeded discussion prompt for daily rooms
  linked_question_id UUID,                                  -- optional FK to a practice question (re1_questions.id)
  legislative_ref    TEXT,                                  -- e.g. 'FAIS Act s14(5)'
  is_pinned          BOOLEAN NOT NULL DEFAULT FALSE,
  created_by         UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at         TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE UNIQUE INDEX IF NOT EXISTS uq_forum_daily_thread
  ON public.forum_threads(track, day, topic_tag) WHERE type = 'daily';
CREATE INDEX IF NOT EXISTS idx_forum_threads_track_day ON public.forum_threads(track, day);
CREATE INDEX IF NOT EXISTS idx_forum_threads_topic ON public.forum_threads(topic_tag);

-- ---------------------------------------------------------------------------
-- Posts — top-level posts and threaded replies
-- ---------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.forum_posts (
  id             UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  thread_id      UUID NOT NULL REFERENCES public.forum_threads(id) ON DELETE CASCADE,
  parent_post_id UUID REFERENCES public.forum_posts(id) ON DELETE CASCADE,
  author_id      UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  body           TEXT NOT NULL,
  is_check_in    BOOLEAN NOT NULL DEFAULT FALSE,            -- lightweight "I completed today's target"
  trust_state    TEXT NOT NULL DEFAULT 'unverified'
                   CHECK (trust_state IN ('unverified', 'verified', 'corrected')),
  is_accepted    BOOLEAN NOT NULL DEFAULT FALSE,            -- asker-accepted answer
  upvotes        INT NOT NULL DEFAULT 0,                    -- denormalised count (maintained from post_votes)
  is_hidden      BOOLEAN NOT NULL DEFAULT FALSE,            -- soft-hidden by a moderator
  created_at     TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_forum_posts_thread ON public.forum_posts(thread_id);
CREATE INDEX IF NOT EXISTS idx_forum_posts_author ON public.forum_posts(author_id);

-- ---------------------------------------------------------------------------
-- Votes — one row per (user, post)
-- ---------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.forum_post_votes (
  post_id    UUID NOT NULL REFERENCES public.forum_posts(id) ON DELETE CASCADE,
  user_id    UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  value      SMALLINT NOT NULL DEFAULT 1 CHECK (value IN (-1, 1)),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  PRIMARY KEY (post_id, user_id)
);

-- ---------------------------------------------------------------------------
-- Tutor endorsements / corrections / flags
-- ---------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.forum_tutor_actions (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  post_id         UUID NOT NULL REFERENCES public.forum_posts(id) ON DELETE CASCADE,
  tutor_id        UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  action          TEXT NOT NULL CHECK (action IN ('endorse', 'correct', 'flag', 'pin')),
  correction_body TEXT,                                     -- required when action = 'correct'
  legislative_ref TEXT,
  created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_forum_tutor_actions_post ON public.forum_tutor_actions(post_id);

-- ---------------------------------------------------------------------------
-- Daily check-ins — power streaks and the cohort "struggle" heatmap
-- ---------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.forum_check_ins (
  id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id    UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  track      TEXT NOT NULL CHECK (track IN ('RE1', 'RE5')),
  day        INT NOT NULL,
  confidence TEXT CHECK (confidence IN ('low', 'med', 'high')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE UNIQUE INDEX IF NOT EXISTS uq_forum_check_in_per_day
  ON public.forum_check_ins(user_id, track, day);

-- ---------------------------------------------------------------------------
-- Escalations — 24h SLA for unanswered technical questions
-- ---------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.forum_escalations (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  post_id     UUID NOT NULL REFERENCES public.forum_posts(id) ON DELETE CASCADE,
  status      TEXT NOT NULL DEFAULT 'open' CHECK (status IN ('open', 'escalated', 'resolved')),
  sla_due_at  TIMESTAMPTZ NOT NULL DEFAULT (NOW() + INTERVAL '24 hours'),
  resolved_by UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  resolved_at TIMESTAMPTZ,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_forum_escalations_status ON public.forum_escalations(status, sla_due_at);

-- ---------------------------------------------------------------------------
-- Gamification — badges, awards, per-topic reputation
-- ---------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.forum_badges (
  id       UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  code     TEXT UNIQUE NOT NULL,          -- 'streak_7', 'compliance_guru', ...
  label    TEXT NOT NULL,
  criteria TEXT
);
CREATE TABLE IF NOT EXISTS public.forum_user_badges (
  id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id    UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  badge_id   UUID NOT NULL REFERENCES public.forum_badges(id) ON DELETE CASCADE,
  awarded_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE (user_id, badge_id)
);
CREATE TABLE IF NOT EXISTS public.forum_user_reputation (
  user_id   UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  topic_tag TEXT NOT NULL,
  points    INT NOT NULL DEFAULT 0,
  PRIMARY KEY (user_id, topic_tag)
);

-- ============================================================================
-- Row-Level Security
-- ============================================================================
ALTER TABLE public.forum_threads        ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.forum_posts          ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.forum_post_votes     ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.forum_tutor_actions  ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.forum_check_ins      ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.forum_escalations    ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.forum_badges         ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.forum_user_badges    ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.forum_user_reputation ENABLE ROW LEVEL SECURITY;

-- Threads: any authenticated user on the matching track may read; moderators read all.
-- NOTE: per-day "no peeking ahead" gating (day <= current_day) is enforced in the
-- app layer / a view, since "current day" comes from your progress source (PRD §10).
DROP POLICY IF EXISTS "Read threads on my track" ON public.forum_threads;
CREATE POLICY "Read threads on my track" ON public.forum_threads
  FOR SELECT USING (
    public.is_forum_moderator()
    OR EXISTS (
      SELECT 1 FROM public.user_profiles p
      WHERE p.user_id = auth.uid() AND p.exam_track = forum_threads.track
    )
  );

DROP POLICY IF EXISTS "Moderators manage threads" ON public.forum_threads;
CREATE POLICY "Moderators manage threads" ON public.forum_threads
  FOR ALL USING (public.is_forum_moderator()) WITH CHECK (public.is_forum_moderator());

-- Posts: readable if you can read the parent thread and the post isn't hidden
-- (moderators see hidden too). Authors can write their own; moderators write any.
DROP POLICY IF EXISTS "Read visible posts" ON public.forum_posts;
CREATE POLICY "Read visible posts" ON public.forum_posts
  FOR SELECT USING (
    (NOT is_hidden OR public.is_forum_moderator())
    AND EXISTS (
      SELECT 1 FROM public.forum_threads t
      WHERE t.id = forum_posts.thread_id
        AND (
          public.is_forum_moderator()
          OR EXISTS (
            SELECT 1 FROM public.user_profiles p
            WHERE p.user_id = auth.uid() AND p.exam_track = t.track
          )
        )
    )
  );

DROP POLICY IF EXISTS "Author inserts own posts" ON public.forum_posts;
CREATE POLICY "Author inserts own posts" ON public.forum_posts
  FOR INSERT WITH CHECK (auth.uid() = author_id);

DROP POLICY IF EXISTS "Author updates own posts" ON public.forum_posts;
CREATE POLICY "Author updates own posts" ON public.forum_posts
  FOR UPDATE USING (auth.uid() = author_id OR public.is_forum_moderator());

-- Votes: own rows only.
DROP POLICY IF EXISTS "Own votes" ON public.forum_post_votes;
CREATE POLICY "Own votes" ON public.forum_post_votes
  FOR ALL USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

-- Tutor actions: readable by all authenticated users (the "Tutor Verified" stamp
-- must be visible); writable only by moderators.
DROP POLICY IF EXISTS "Read tutor actions" ON public.forum_tutor_actions;
CREATE POLICY "Read tutor actions" ON public.forum_tutor_actions
  FOR SELECT USING (auth.uid() IS NOT NULL);
DROP POLICY IF EXISTS "Moderators write tutor actions" ON public.forum_tutor_actions;
CREATE POLICY "Moderators write tutor actions" ON public.forum_tutor_actions
  FOR ALL USING (public.is_forum_moderator()) WITH CHECK (public.is_forum_moderator());

-- Check-ins: own rows only.
DROP POLICY IF EXISTS "Own check-ins" ON public.forum_check_ins;
CREATE POLICY "Own check-ins" ON public.forum_check_ins
  FOR ALL USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

-- Escalations: moderators manage; the asking author can read theirs.
DROP POLICY IF EXISTS "Read own / moderate escalations" ON public.forum_escalations;
CREATE POLICY "Read own / moderate escalations" ON public.forum_escalations
  FOR SELECT USING (
    public.is_forum_moderator()
    OR EXISTS (SELECT 1 FROM public.forum_posts p WHERE p.id = forum_escalations.post_id AND p.author_id = auth.uid())
  );
DROP POLICY IF EXISTS "Moderators write escalations" ON public.forum_escalations;
CREATE POLICY "Moderators write escalations" ON public.forum_escalations
  FOR ALL USING (public.is_forum_moderator()) WITH CHECK (public.is_forum_moderator());

-- Badges: catalogue readable by all; awards & reputation readable by all (public
-- recognition), writable only by moderators / service role.
DROP POLICY IF EXISTS "Read badges" ON public.forum_badges;
CREATE POLICY "Read badges" ON public.forum_badges FOR SELECT USING (auth.uid() IS NOT NULL);
DROP POLICY IF EXISTS "Read user badges" ON public.forum_user_badges;
CREATE POLICY "Read user badges" ON public.forum_user_badges FOR SELECT USING (auth.uid() IS NOT NULL);
DROP POLICY IF EXISTS "Read reputation" ON public.forum_user_reputation;
CREATE POLICY "Read reputation" ON public.forum_user_reputation FOR SELECT USING (auth.uid() IS NOT NULL);

-- ---------------------------------------------------------------------------
-- Seed: starter badge catalogue
-- ---------------------------------------------------------------------------
INSERT INTO public.forum_badges (code, label, criteria) VALUES
  ('streak_3',        '3-Day Streak',      'Check in 3 days in a row'),
  ('streak_7',        '7-Day Streak',      'Check in 7 days in a row'),
  ('streak_30',       '30-Day Streak',     'Check in 30 days in a row'),
  ('mnemonic_master', 'Mnemonic Master',   'Author a tutor-endorsed ELI5 post'),
  ('compliance_guru', 'Compliance Guru',   'Earn 10 tutor-verified answers in one topic'),
  ('first_responder', 'First Responder',   'Be the accepted answer within 1 hour'),
  ('topic_specialist','Topic Specialist',  'Reach the reputation threshold in any topic')
ON CONFLICT (code) DO NOTHING;
