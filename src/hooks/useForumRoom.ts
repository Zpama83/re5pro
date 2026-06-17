import { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';

/**
 * useForumRoom — loads the day-anchored "Today's Room" from the forum_* tables.
 *
 * Returns `posts: null` whenever the room can't be loaded (tables not yet
 * applied, empty thread, or error) so the caller falls back to its own demo
 * data. Once supabase/migrations/forum_schema.sql is applied and a daily thread
 * + posts exist, the same page renders live with no further changes.
 *
 * Provisional bits (documented so they aren't mistaken for final):
 *  - Author display name needs a join to user_profiles; until then we show a
 *    generic label. Add it when a public display-name column exists.
 *  - Per-post type (eli5 / stuck) is inferred here; the schema models those as
 *    thread types, so a future `post_type` column would make this exact.
 */

export type TrustState = 'unverified' | 'verified' | 'corrected';
export type PostType = 'eli5' | 'stuck' | 'check_in' | 'reply';

export interface ForumPost {
  id: string;
  author: string;
  initials: string;
  type: PostType;
  trust?: TrustState;
  body: string;
  upvotes?: number;
  replies?: number;
  linkedQuestion?: string;
  legislativeRef?: string;
  escalatesInHrs?: number;
  children?: ForumPost[];
}

type Source = 'loading' | 'live' | 'demo';

interface UseForumRoom {
  posts: ForumPost[] | null;
  source: Source;
  loading: boolean;
  error: string | null;
  checkIn: (confidence?: 'low' | 'med' | 'high') => Promise<boolean>;
  upvote: (postId: string) => Promise<boolean>;
}

const initialsFrom = (name: string) =>
  name
    .split(/\s+/)
    .slice(0, 2)
    .map(w => w[0]?.toUpperCase() ?? '')
    .join('') || '··';

export function useForumRoom(track: string, day: number): UseForumRoom {
  const [posts, setPosts] = useState<ForumPost[] | null>(null);
  const [source, setSource] = useState<Source>('loading');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      setSource('loading');
      setError(null);
      try {
        const { data: thread, error: tErr } = await supabase
          .from('forum_threads')
          .select('id')
          .eq('track', track)
          .eq('day', day)
          .eq('type', 'daily')
          .limit(1)
          .maybeSingle();

        if (tErr) throw tErr;
        if (!thread) {
          if (!cancelled) { setPosts(null); setSource('demo'); }
          return;
        }

        const { data: rows, error: pErr } = await supabase
          .from('forum_posts')
          .select('*')
          .eq('thread_id', thread.id)
          .eq('is_hidden', false)
          .order('created_at', { ascending: true });

        if (pErr) throw pErr;
        if (!rows || rows.length === 0) {
          if (!cancelled) { setPosts(null); setSource('demo'); }
          return;
        }

        const byParent = new Map<string, typeof rows>();
        rows.forEach(r => {
          if (r.parent_post_id) {
            const arr = byParent.get(r.parent_post_id) ?? [];
            arr.push(r);
            byParent.set(r.parent_post_id, arr);
          }
        });

        const mapRow = (r: (typeof rows)[number], isChild: boolean): ForumPost => ({
          id: r.id,
          author: 'Member',
          initials: initialsFrom('Member'),
          type: r.is_check_in ? 'check_in' : isChild ? 'reply' : 'eli5',
          trust: (r.trust_state as TrustState) ?? 'unverified',
          body: r.body,
          upvotes: r.upvotes ?? 0,
          children: isChild
            ? undefined
            : (byParent.get(r.id) ?? []).map(c => mapRow(c, true)),
        });

        const mapped = rows
          .filter(r => !r.parent_post_id)
          .map(r => mapRow(r, false));

        if (!cancelled) { setPosts(mapped); setSource('live'); }
      } catch (err: unknown) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : 'Failed to load room');
          setPosts(null);
          setSource('demo');
        }
      }
    };

    load();
    return () => { cancelled = true; };
  }, [track, day]);

  // Best-effort writes — no-op gracefully if tables/auth aren't available.
  const checkIn = useCallback(
    async (confidence?: 'low' | 'med' | 'high') => {
      try {
        const { data } = await supabase.auth.getUser();
        const userId = data.user?.id;
        if (!userId) return false;
        const { error: e } = await supabase
          .from('forum_check_ins')
          .upsert(
            { user_id: userId, track, day, confidence: confidence ?? null },
            { onConflict: 'user_id,track,day' }
          );
        return !e;
      } catch {
        return false;
      }
    },
    [track, day]
  );

  const upvote = useCallback(async (postId: string) => {
    try {
      const { data } = await supabase.auth.getUser();
      const userId = data.user?.id;
      if (!userId) return false;
      const { error: e } = await supabase
        .from('forum_post_votes')
        .upsert({ post_id: postId, user_id: userId, value: 1 }, { onConflict: 'post_id,user_id' });
      return !e;
    } catch {
      return false;
    }
  }, []);

  return { posts, source, loading: source === 'loading', error, checkIn, upvote };
}
