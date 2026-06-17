import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useForumRoom, type ForumPost } from '@/hooks/useForumRoom';

/**
 * DiscussPanel — the contextual "Discuss" slide-over from the PRD
 * (docs/DAILY-STUDY-FORUM-PRD.md §6.1). Sits beside the lesson / practice
 * screen so a student can discuss the exact thing in front of them without
 * leaving the page. Shows a condensed view of the day's room with a link to
 * the full room at /community.
 *
 * Live-data aware via useForumRoom; falls back to a small demo seed so it
 * renders before forum_schema.sql is applied.
 */

interface Props {
  open: boolean;
  onClose: () => void;
  track: string;
  day: number;
  topic: string;
  /** Optional context, e.g. the mock question the student is stuck on. */
  questionRef?: string;
  legislativeRef?: string;
}

const DEMO: ForumPost[] = [
  {
    id: 'd1',
    author: 'Sipho',
    initials: 'SP',
    type: 'eli5',
    trust: 'verified',
    body: "Bouncer rule: know who they are (ID), where they live (address), where the money's from (source of funds). Higher risk → ask for more.",
    upvotes: 23,
  },
  {
    id: 'd2',
    author: 'Lerato',
    initials: 'LM',
    type: 'stuck',
    body: "Torn between B and C — both mention the verifier's duty. What makes B wrong?",
    escalatesInHrs: 18,
  },
];

const Avatar = ({ initials }: { initials: string }) => (
  <span className="w-6 h-6 shrink-0 rounded-full bg-[#1B3A6B]/10 text-[#1B3A6B] flex items-center justify-center text-[10px] font-semibold">
    {initials}
  </span>
);

export const DiscussPanel: React.FC<Props> = ({
  open,
  onClose,
  track,
  day,
  topic,
  questionRef,
  legislativeRef,
}) => {
  const { posts: livePosts, source } = useForumRoom(track, day);
  const posts = livePosts && livePosts.length > 0 ? livePosts.slice(0, 3) : DEMO;

  // Mount for the slide-in transition; close on Escape.
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    if (open) {
      const t = requestAnimationFrame(() => setMounted(true));
      return () => cancelAnimationFrame(t);
    }
    setMounted(false);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60]" role="dialog" aria-modal="true" aria-label="Discuss this topic">
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-black/30 transition-opacity duration-200 ${mounted ? 'opacity-100' : 'opacity-0'}`}
      />
      <div
        className={`absolute right-0 top-0 h-full w-full max-w-md bg-white dark:bg-slate-900 shadow-xl flex flex-col transition-transform duration-200 ${
          mounted ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-3 p-4 border-b border-slate-100 dark:border-slate-800">
          <div>
            <div className="text-xs text-slate-500 dark:text-slate-400">{track} · Day {day} · Discuss</div>
            <div className="text-base font-semibold text-slate-900 dark:text-white">{topic}</div>
            {questionRef && (
              <span className="inline-flex items-center gap-1.5 text-xs mt-1.5 px-2 py-1 rounded-md bg-[#1B3A6B]/10 text-[#1B3A6B] dark:text-blue-300">
                🔗 Discussing {questionRef}
                {legislativeRef && <span className="font-mono text-slate-500 dark:text-slate-400">· {legislativeRef}</span>}
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            aria-label="Close discussion"
            className="text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 text-xl leading-none px-1"
          >
            ✕
          </button>
        </div>

        {/* Posts (condensed) */}
        <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4">
          {posts.map((post, i) => (
            <div key={post.id} className={i > 0 ? 'border-t border-slate-100 dark:border-slate-800 pt-4' : ''}>
              <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                <Avatar initials={post.initials} />
                <span className="text-[13px] font-medium text-slate-900 dark:text-white">{post.author}</span>
                {post.trust === 'verified' && (
                  <span className="text-[11px] px-2 py-0.5 rounded bg-[#16A34A]/10 text-[#15803D] font-medium">✓ Tutor verified</span>
                )}
                {post.trust === 'unverified' && (
                  <span className="text-[11px] px-2 py-0.5 rounded bg-slate-100 text-slate-500">Not yet verified</span>
                )}
                {post.type === 'eli5' && <span className="text-[11px] px-2 py-0.5 rounded bg-slate-100 text-slate-600">ELI5</span>}
                {post.type === 'stuck' && <span className="text-[11px] px-2 py-0.5 rounded bg-slate-100 text-slate-600">Stuck on a question</span>}
              </div>
              <div className="text-[13px] leading-relaxed text-slate-700 dark:text-slate-300">{post.body}</div>
              {post.escalatesInHrs && (
                <div className="text-xs text-[#B45309] mt-1.5">⏱ Escalates to a tutor in ~{post.escalatesInHrs}h</div>
              )}
              {post.upvotes !== undefined && (
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-1.5">▲ {post.upvotes}</div>
              )}
            </div>
          ))}
        </div>

        {/* Composer + link to full room */}
        <div className="border-t border-slate-100 dark:border-slate-800 p-4 bg-slate-50 dark:bg-slate-900/50">
          <div className="flex gap-2 items-center">
            <input
              type="text"
              placeholder={questionRef ? `Ask about ${questionRef}…` : 'Ask or share…'}
              className="flex-1 px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#1B3A6B]/30"
            />
            <button className="text-[13px] font-medium px-4 py-2 rounded-lg bg-[#1B3A6B] text-white hover:bg-[#1B3A6B]/90 whitespace-nowrap">
              Post
            </button>
          </div>
          <div className="flex items-center justify-between mt-3 text-xs">
            <span className="text-slate-400 dark:text-slate-500">
              {source === 'live' ? 'Live room' : 'Demo data'}
            </span>
            <Link to="/community" className="font-medium text-[#1B3A6B] dark:text-blue-300 hover:underline">
              Open full room →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
