-- ============================================================================
-- user_profiles — per-user metadata layer for RE5CertPro
-- ============================================================================
-- One row per Supabase auth user. Captures the exam track they're preparing
-- for (RE1 vs RE5) and a soft-revoke flag the admin dashboard can toggle.
--
-- Row creation is automatic via a trigger on auth.users so that signup flows
-- only need to populate raw_user_meta_data.exam_track (which they do via
-- supabase.auth.signUp({ options: { data: { exam_track: 'RE1' } } })).
--
-- Admin recognition is HARDCODED in the frontend (src/lib/admin.ts), not in
-- this table — that keeps the admin list off the client bundle's wire and
-- avoids needing service-role calls to manage roles. Flip is_revoked from
-- the admin dashboard to lock a user out.
-- ============================================================================

-- ---------------------------------------------------------------------------
-- Table
-- ---------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.user_profiles (
  user_id     UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email       TEXT NOT NULL,
  exam_track  TEXT CHECK (exam_track IN ('RE1', 'RE5')),
  is_revoked  BOOLEAN NOT NULL DEFAULT FALSE,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_user_profiles_exam_track ON public.user_profiles(exam_track);
CREATE INDEX IF NOT EXISTS idx_user_profiles_is_revoked ON public.user_profiles(is_revoked);

-- ---------------------------------------------------------------------------
-- RLS
-- ---------------------------------------------------------------------------
ALTER TABLE public.user_profiles ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users can read their own profile"          ON public.user_profiles;
DROP POLICY IF EXISTS "Users can update their own profile"        ON public.user_profiles;
DROP POLICY IF EXISTS "Admin (lungi09@gmail.com) can read all"    ON public.user_profiles;
DROP POLICY IF EXISTS "Admin (lungi09@gmail.com) can update all"  ON public.user_profiles;

CREATE POLICY "Users can read their own profile"
  ON public.user_profiles FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can update their own profile"
  ON public.user_profiles FOR UPDATE
  USING (auth.uid() = user_id);

-- Admin policies recognise admin by email on the auth.users row. Hardcoded
-- list. Adjust this email here AND in src/lib/admin.ts if the admin changes.
CREATE POLICY "Admin (lungi09@gmail.com) can read all"
  ON public.user_profiles FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM auth.users
      WHERE auth.users.id = auth.uid()
        AND lower(auth.users.email) = 'lungi09@gmail.com'
    )
  );

CREATE POLICY "Admin (lungi09@gmail.com) can update all"
  ON public.user_profiles FOR UPDATE
  USING (
    EXISTS (
      SELECT 1 FROM auth.users
      WHERE auth.users.id = auth.uid()
        AND lower(auth.users.email) = 'lungi09@gmail.com'
    )
  );

-- ---------------------------------------------------------------------------
-- Auto-create profile on auth.users INSERT
-- ---------------------------------------------------------------------------
-- Reads exam_track from raw_user_meta_data, which is populated by the
-- supabase.auth.signUp() call from the frontend signup form.
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.user_profiles (user_id, email, exam_track)
  VALUES (
    NEW.id,
    NEW.email,
    NULLIF(NEW.raw_user_meta_data->>'exam_track', '')
  )
  ON CONFLICT (user_id) DO NOTHING;
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- ---------------------------------------------------------------------------
-- Backfill any existing auth users that don't have a profile yet
-- ---------------------------------------------------------------------------
INSERT INTO public.user_profiles (user_id, email, exam_track)
SELECT
  u.id,
  u.email,
  NULLIF(u.raw_user_meta_data->>'exam_track', '')
FROM auth.users u
LEFT JOIN public.user_profiles p ON p.user_id = u.id
WHERE p.user_id IS NULL;
