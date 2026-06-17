import React, { useState, useEffect } from 'react';
import { RE1TopNav } from '@/components/re1/RE1TopNav';
import { useForumRoom, type ForumPost, type TrustState, type PostType } from '@/hooks/useForumRoom';

/**
 * Community — "Today's Room" (Daily Study Forum).
 *
 * Implements the day-anchored forum room from docs/DAILY-STUDY-FORUM-PRD.md.
 * Currently backed by in-file DEMO data so the page renders before the
 * forum_* tables (supabase/migrations/forum_schema.sql) are applied. Swap
 * DEMO_* for a useForumRoom() Supabase hook once the migration lands — the
 * shapes below mirror the forum_threads / forum_posts columns.
 *
 * NOTE: the per-day "no peeking ahead" gating shown by the day strip depends
 * on the student's real "current day" source (enrollment schedule vs.
 * self-marked completion — PRD open question #1), so CURRENT_DAY is a stub.
 */

const CURRENT_DAY = 4;
const TRACK = 'RE1';
const TOPIC = 'FICA identity verification';

const DAY_STRIP = [
  { day: 2, state: 'done' as const },
  { day: 3, state: 'done' as const },
  { day: 4, state: 'now' as const },
  { day: 5, state: 'locked' as const },
  { day: 6, state: 'locked' as const },
];

const TUTOR_PROMPT =
  'In your own words: when does CDD become enhanced due diligence, and what triggers it? Name one document a verifier must retain.';

const DEMO_POSTS: ForumPost[] = [
  {
    id: 'p1',
    author: 'Sipho',
    initials: 'SP',
    type: 'eli5',
    trust: 'verified',
    body: "Think of FICA verification as a bouncer: know who they are (ID), know where they live (proof of address), know where the money's from (source of funds). Higher risk → ask for more.",
    upvotes: 23,
    replies: 4,
  },
  {
    id: 'p2',
    author: 'Lerato',
    initials: 'LM',
    type: 'stuck',
    body: "Torn between B and C on this one — both mention the verifier's duty. What actually makes B wrong?",
    linkedQuestion: 'Mock Q #114',
    legislativeRef: 'FICA s21 · CDD',
    escalatesInHrs: 18,
    children: [
      {
        id: 'p2r1',
        author: 'Thabo',
        initials: 'TB',
        type: 'reply',
        trust: 'unverified',
        body: 'I think B describes the obligation but uses the wrong threshold amount — that’s the distractor.',
      },
    ],
  },
];

const trustBadge = (trust?: TrustState) => {
  if (trust === 'verified')
    return (
      <span className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded bg-[#16A34A]/10 text-[#15803D] font-medium">
        ✓ Tutor verified
      </span>
    );
  if (trust === 'corrected')
    return (
      <span className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded bg-[#F59E0B]/15 text-[#B45309] font-medium">
        ⚠ Corrected by tutor
      </span>
    );
  if (trust === 'unverified')
    return (
      <span className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded bg-slate-100 text-slate-500">
        Peer answer · not yet verified
      </span>
    );
  return null;
};

const typePill = (type: PostType) => {
  const label = type === 'eli5' ? 'ELI5' : type === 'stuck' ? 'Stuck on a question' : null;
  if (!label) return null;
  return (
    <span className="text-[11px] px-2 py-0.5 rounded bg-slate-100 text-slate-600">{label}</span>
  );
};

const Avatar = ({ initials }: { initials: string }) => (
  <span className="w-7 h-7 shrink-0 rounded-full bg-[#1B3A6B]/10 text-[#1B3A6B] flex items-center justify-center text-[11px] font-semibold">
    {initials}
  </span>
);

const CommunityPage = () => {
  const { posts: livePosts, source, checkIn, upvote } = useForumRoom(TRACK, CURRENT_DAY);
  const [posts, setPosts] = useState<ForumPost[]>(DEMO_POSTS);
  const [checkedIn, setCheckedIn] = useState(false);
  const [streak, setStreak] = useState(4);

  // Use live room data when the forum_* tables return rows; otherwise keep demo.
  useEffect(() => {
    if (livePosts && livePosts.length > 0) setPosts(livePosts);
  }, [livePosts]);

  const handleUpvote = (id: string) => {
    setPosts(prev =>
      prev.map(p => (p.id === id ? { ...p, upvotes: (p.upvotes ?? 0) + 1 } : p))
    );
    upvote(id);
  };

  const handleCheckIn = () => {
    if (checkedIn) return;
    setCheckedIn(true);
    setStreak(s => s + 1);
    checkIn();
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans">
      <RE1TopNav />
      <div className="max-w-3xl mx-auto py-10 px-4 sm:px-6">
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm">
          {/* Room header */}
          <div className="flex items-center justify-between gap-3 p-4 border-b border-slate-100 dark:border-slate-800">
            <div>
              <div className="text-xs text-slate-500 dark:text-slate-400">{TRACK} · Day {CURRENT_DAY}</div>
              <div className="text-lg font-semibold text-slate-900 dark:text-white">{TOPIC}</div>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 text-[13px] bg-[#F59E0B]/15 text-[#B45309] px-2.5 py-1 rounded-md font-medium">
                🔥 {streak}-day streak
              </span>
              <button
                onClick={handleCheckIn}
                disabled={checkedIn}
                className={`text-[13px] font-medium px-3 py-2 rounded-md transition-colors ${
                  checkedIn
                    ? 'bg-[#16A34A]/10 text-[#15803D] cursor-default'
                    : 'bg-[#1B3A6B] text-white hover:bg-[#1B3A6B]/90'
                }`}
              >
                {checkedIn ? '✓ Checked in' : "Completed today's target"}
              </button>
            </div>
          </div>

          {/* Day strip */}
          <div className="flex gap-1.5 flex-wrap p-3 border-b border-slate-100 dark:border-slate-800">
            {DAY_STRIP.map(({ day, state }) => {
              if (state === 'done')
                return (
                  <span key={day} className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-md bg-[#16A34A]/10 text-[#15803D]">
                    ✓ Day {day}
                  </span>
                );
              if (state === 'now')
                return (
                  <span key={day} className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-md bg-[#1B3A6B] text-white font-medium">
                    Day {day} · now
                  </span>
                );
              return (
                <span key={day} className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-400" title={`Unlocks when you reach Day ${day}`}>
                  🔒 Day {day}
                </span>
              );
            })}
          </div>

          {/* Pinned tutor prompt */}
          <div className="p-4 border-b border-slate-100 dark:border-slate-800">
            <div className="border-l-[3px] border-[#D4A017] pl-3">
              <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 mb-1">
                📌 Today's prompt · tutor
              </div>
              <div className="text-sm leading-relaxed text-slate-800 dark:text-slate-200">{TUTOR_PROMPT}</div>
            </div>
          </div>

          {/* Posts */}
          <div className="p-4 flex flex-col gap-4">
            {posts.map((post, i) => (
              <div key={post.id} className={i > 0 ? 'border-t border-slate-100 dark:border-slate-800 pt-4' : ''}>
                <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                  <Avatar initials={post.initials} />
                  <span className="text-[13px] font-medium text-slate-900 dark:text-white">{post.author}</span>
                  {trustBadge(post.trust)}
                  {typePill(post.type)}
                </div>
                <div className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">{post.body}</div>

                {(post.linkedQuestion || post.legislativeRef) && (
                  <div className="flex gap-1.5 flex-wrap mt-2">
                    {post.linkedQuestion && (
                      <span className="inline-flex items-center gap-1.5 text-xs px-2 py-1 rounded-md bg-[#1B3A6B]/10 text-[#1B3A6B] dark:text-blue-300">
                        🔗 {post.linkedQuestion}
                      </span>
                    )}
                    {post.legislativeRef && (
                      <span className="text-xs px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-mono">
                        {post.legislativeRef}
                      </span>
                    )}
                  </div>
                )}

                {post.escalatesInHrs && (
                  <div className="flex items-center gap-2 mt-2 text-xs text-[#B45309]">
                    ⏱ Escalates to a tutor in ~{post.escalatesInHrs}h if unanswered
                  </div>
                )}

                {(post.type === 'eli5' || post.upvotes !== undefined) && (
                  <div className="flex items-center gap-4 mt-2 text-xs text-slate-500 dark:text-slate-400">
                    <button onClick={() => handleUpvote(post.id)} className="inline-flex items-center gap-1 hover:text-[#1B3A6B] dark:hover:text-white transition-colors">
                      ▲ {post.upvotes ?? 0}
                    </button>
                    {post.replies !== undefined && <span>💬 {post.replies} replies</span>}
                  </div>
                )}

                {post.children?.map(child => (
                  <div key={child.id} className="mt-2.5 ml-4 pl-3 border-l border-slate-200 dark:border-slate-700">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span className="text-[13px] font-medium text-slate-900 dark:text-white">{child.author}</span>
                      {trustBadge(child.trust)}
                    </div>
                    <div className="text-[13px] leading-relaxed text-slate-600 dark:text-slate-400">{child.body}</div>
                  </div>
                ))}
              </div>
            ))}

            {/* Check-in feed line */}
            {checkedIn && (
              <div className="border-t border-slate-100 dark:border-slate-800 pt-3 flex items-center gap-2 text-[13px] text-slate-500 dark:text-slate-400">
                🎯 <span className="text-slate-900 dark:text-white">You</span> completed Day {CURRENT_DAY} · 12 others checked in today
              </div>
            )}
          </div>

          {/* Composer */}
          <div className="flex gap-2 items-center p-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
            <input
              type="text"
              placeholder="Share an ELI5, ask a question, or check in…"
              className="flex-1 px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#1B3A6B]/30"
            />
            <button className="text-[13px] font-medium px-4 py-2 rounded-lg bg-[#1B3A6B] text-white hover:bg-[#1B3A6B]/90 whitespace-nowrap">
              Post
            </button>
          </div>
        </div>

        <p className="text-center text-xs text-slate-400 dark:text-slate-500 mt-4">
          {source === 'live'
            ? 'Live — loaded from the forum_* tables.'
            : 'Demo data — goes live automatically once forum_schema.sql is applied.'}
        </p>
      </div>
    </div>
  );
};

export default CommunityPage;
