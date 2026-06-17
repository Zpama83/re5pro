import { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';

/**
 * useForumGroups — member-created sub-forums (study groups), track-scoped.
 *
 * Groups let members spin up their own forums, e.g. regional crews ("Soweto",
 * "Pretoria") or topic groups ("FICA deep-dive"). Backed by forum_groups /
 * forum_group_members (supabase/migrations/forum_groups.sql); falls back to a
 * demo set until those tables are applied.
 *
 * createGroup / toggleJoin do best-effort DB writes (no-op gracefully when the
 * tables or auth aren't available); the caller does optimistic local updates.
 */

export type GroupKind = 'region' | 'topic' | 'general';
export type TrackScope = 'RE1' | 'RE5' | 'both';

export interface ForumGroup {
  id: string;
  name: string;
  slug: string;
  description?: string;
  kind: GroupKind;
  scope: TrackScope;
  members: number;
  joined: boolean;
}

type Source = 'loading' | 'live' | 'demo';

const DEMO_GROUPS: ForumGroup[] = [
  { id: 'g-soweto', name: 'Soweto study crew', slug: 'soweto', kind: 'region', scope: 'both', members: 38, joined: false, description: 'Joburg south-west — weekend meetups & accountability.' },
  { id: 'g-pta', name: 'Pretoria (PTA) KIs', slug: 'pretoria', kind: 'region', scope: 'RE1', members: 21, joined: true, description: 'Key Individuals around Tshwane.' },
  { id: 'g-cpt', name: 'Cape Town reps', slug: 'cape-town', kind: 'region', scope: 'RE5', members: 54, joined: false, description: 'RE5 representatives in the Mother City.' },
  { id: 'g-fica', name: 'FICA deep-dive', slug: 'fica-deep-dive', kind: 'topic', scope: 'both', members: 12, joined: false, description: 'For anyone wrestling with AML / verification.' },
];

export const slugify = (name: string) =>
  name.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '').slice(0, 48);

const inScope = (scope: TrackScope, track: string) => scope === 'both' || scope === track;

export function useForumGroups(track: string) {
  const [groups, setGroups] = useState<ForumGroup[]>([]);
  const [source, setSource] = useState<Source>('loading');

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      setSource('loading');
      try {
        const { data, error } = await supabase
          .from('forum_groups')
          .select('*')
          .or(`track_scope.eq.${track},track_scope.eq.both`)
          .order('created_at', { ascending: true });

        if (error) throw error;
        if (!data || data.length === 0) {
          if (!cancelled) {
            setGroups(DEMO_GROUPS.filter(g => inScope(g.scope, track)));
            setSource('demo');
          }
          return;
        }

        const mapped: ForumGroup[] = data.map(g => ({
          id: g.id,
          name: g.name,
          slug: g.slug,
          description: g.description ?? undefined,
          kind: (g.kind as GroupKind) ?? 'general',
          scope: (g.track_scope as TrackScope) ?? 'both',
          members: 0, // live counts need a join to forum_group_members; provisional
          joined: false,
        }));
        if (!cancelled) { setGroups(mapped); setSource('live'); }
      } catch {
        if (!cancelled) {
          setGroups(DEMO_GROUPS.filter(g => inScope(g.scope, track)));
          setSource('demo');
        }
      }
    };

    load();
    return () => { cancelled = true; };
  }, [track]);

  const createGroup = useCallback(
    async (input: { name: string; kind: GroupKind; scope: TrackScope; description?: string }) => {
      const slug = slugify(input.name) || `group-${Date.now()}`;
      try {
        const { data: auth } = await supabase.auth.getUser();
        const userId = auth.user?.id;
        if (userId) {
          await supabase.from('forum_groups').insert({
            name: input.name,
            slug,
            description: input.description ?? null,
            kind: input.kind,
            track_scope: input.scope,
            created_by: userId,
          });
        }
      } catch {
        // best-effort; UI still adds it optimistically
      }
      return slug;
    },
    []
  );

  const toggleJoin = useCallback(async (groupId: string, join: boolean) => {
    try {
      const { data: auth } = await supabase.auth.getUser();
      const userId = auth.user?.id;
      if (!userId) return false;
      if (join) {
        await supabase.from('forum_group_members').upsert(
          { group_id: groupId, user_id: userId },
          { onConflict: 'group_id,user_id' }
        );
      } else {
        await supabase.from('forum_group_members').delete().eq('group_id', groupId).eq('user_id', userId);
      }
      return true;
    } catch {
      return false;
    }
  }, []);

  return { groups, source, createGroup, toggleJoin };
}
