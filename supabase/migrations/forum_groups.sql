-- ============================================================================
-- Daily Study Forum — member-created sub-forums (study groups)
-- ============================================================================
-- Adds member-created groups (e.g. regional crews like "Soweto", "Pretoria",
-- or topic groups like "FICA deep-dive") on top of the day-anchored rooms in
-- forum_schema.sql. Threads can belong to a group via forum_threads.group_id.
--
-- Run AFTER forum_schema.sql (depends on forum_threads + is_forum_moderator()).
-- Groups are track-scoped (RE1 | RE5 | both) so the same community serves both
-- exam tracks.
-- ============================================================================

CREATE TABLE IF NOT EXISTS public.forum_groups (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name        TEXT NOT NULL,
  slug        TEXT UNIQUE NOT NULL,
  description TEXT,
  kind        TEXT NOT NULL DEFAULT 'general' CHECK (kind IN ('region', 'topic', 'general')),
  track_scope TEXT NOT NULL DEFAULT 'both' CHECK (track_scope IN ('RE1', 'RE5', 'both')),
  created_by  UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_forum_groups_scope ON public.forum_groups(track_scope);
CREATE INDEX IF NOT EXISTS idx_forum_groups_kind ON public.forum_groups(kind);

CREATE TABLE IF NOT EXISTS public.forum_group_members (
  group_id  UUID NOT NULL REFERENCES public.forum_groups(id) ON DELETE CASCADE,
  user_id   UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  joined_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  PRIMARY KEY (group_id, user_id)
);
CREATE INDEX IF NOT EXISTS idx_forum_group_members_user ON public.forum_group_members(user_id);

-- Link threads to a group (NULL = a track-level daily room, not a group thread).
ALTER TABLE public.forum_threads
  ADD COLUMN IF NOT EXISTS group_id UUID REFERENCES public.forum_groups(id) ON DELETE CASCADE;
CREATE INDEX IF NOT EXISTS idx_forum_threads_group ON public.forum_threads(group_id);

-- ---------------------------------------------------------------------------
-- RLS
-- ---------------------------------------------------------------------------
ALTER TABLE public.forum_groups        ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.forum_group_members ENABLE ROW LEVEL SECURITY;

-- Groups are discoverable by any authenticated user (track filtering happens in
-- the app so a learner doing both exams sees both).
DROP POLICY IF EXISTS "Read groups" ON public.forum_groups;
CREATE POLICY "Read groups" ON public.forum_groups
  FOR SELECT USING (auth.uid() IS NOT NULL);

-- Any authenticated member may create a group; they must own the created row.
DROP POLICY IF EXISTS "Members create groups" ON public.forum_groups;
CREATE POLICY "Members create groups" ON public.forum_groups
  FOR INSERT WITH CHECK (auth.uid() = created_by);

-- Only the creator or a moderator may edit/remove a group.
DROP POLICY IF EXISTS "Creator or moderator manages group" ON public.forum_groups;
CREATE POLICY "Creator or moderator manages group" ON public.forum_groups
  FOR UPDATE USING (auth.uid() = created_by OR public.is_forum_moderator());
DROP POLICY IF EXISTS "Creator or moderator deletes group" ON public.forum_groups;
CREATE POLICY "Creator or moderator deletes group" ON public.forum_groups
  FOR DELETE USING (auth.uid() = created_by OR public.is_forum_moderator());

-- Membership: anyone may see who is in a group (for counts/lists); a user only
-- manages their own membership row (join/leave).
DROP POLICY IF EXISTS "Read group members" ON public.forum_group_members;
CREATE POLICY "Read group members" ON public.forum_group_members
  FOR SELECT USING (auth.uid() IS NOT NULL);
DROP POLICY IF EXISTS "Own membership" ON public.forum_group_members;
CREATE POLICY "Own membership" ON public.forum_group_members
  FOR ALL USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
