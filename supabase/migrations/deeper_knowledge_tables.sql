-- Deeper Knowledge content tables (publicly readable, no auth required)
CREATE TABLE public.dk_topics (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  summary TEXT NOT NULL,
  regulatory_refs JSONB NOT NULL DEFAULT '{}'::jsonb,
  principle JSONB NOT NULL DEFAULT '{}'::jsonb,
  legislation JSONB NOT NULL DEFAULT '[]'::jsonb,
  scenarios JSONB NOT NULL DEFAULT '[]'::jsonb,
  related_concepts TEXT[] NOT NULL DEFAULT '{}',
  exam_relevance JSONB NOT NULL DEFAULT '{}'::jsonb,
  simulator JSONB,
  sort_order INT NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.dk_topics ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Deeper Knowledge topics are public"
ON public.dk_topics FOR SELECT
USING (true);

CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER
LANGUAGE plpgsql
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

CREATE TRIGGER update_dk_topics_updated_at
BEFORE UPDATE ON public.dk_topics
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE INDEX idx_dk_topics_sort ON public.dk_topics(sort_order);