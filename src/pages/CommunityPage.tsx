import React, { useState, useEffect } from 'react';
import { RE1TopNav } from '@/components/re1/RE1TopNav';
import { useForumRoom, type ForumPost, type TrustState, type PostType } from '@/hooks/useForumRoom';
import { useForumGroups, type ForumGroup, type GroupKind, type TrackScope } from '@/hooks/useForumGroups';
import { useClaudeAuth, type ExamTrack } from '@/ClaudeAuth';

/**
 * Community — day-anchored "Today's Room" plus member-created sub-forums
 * (study groups). Track-aware: serves both RE1 and RE5, with a toggle for
 * learners doing both exams. See docs/DAILY-STUDY-FORUM-PRD.md.
 *
 * Demo-data backed; goes live as the forum_* tables are applied.
 */

interface RoomConfig {
  day: number;
  topic: string;
  prompt: string;
  posts: ForumPost[];
}

const ROOM: Record<ExamTrack, RoomConfig> = {
  RE1: {
    day: 4,
    topic: 'FICA identity verification',
    prompt:
      'In your own words: when does CDD become enhanced due diligence, and what triggers it? Name one document a verifier must retain.',
    posts: [
      {
        id: 're1-p1', author: 'Sipho', initials: 'SP', type: 'eli5', trust: 'verified',
        body: "Think of FICA verification as a bouncer: know who they are (ID), know where they live (proof of address), know where the money's from (source of funds). Higher risk → ask for more.",
        upvotes: 23, replies: 4,
      },
      {
        id: 're1-p2', author: 'Lerato', initials: 'LM', type: 'stuck',
        body: "Torn between B and C on this one — both mention the verifier's duty. What actually makes B wrong?",
        linkedQuestion: 'Mock Q #114', legislativeRef: 'FICA s21 · CDD', escalatesInHrs: 18,
        children: [
          { id: 're1-p2r1', author: 'Thabo', initials: 'TB', type: 'reply', trust: 'unverified',
            body: 'I think B describes the obligation but uses the wrong threshold amount — that’s the distractor.' },
        ],
      },
    ],
  },
  RE5: {
    day: 8,
    topic: 'General Code of Conduct — disclosure',
    prompt:
      "Today's trap: which disclosures must be in writing, and which may be verbal? Name one that must always be confirmed in writing.",
    posts: [
      {
        id: 're5-p1', author: 'Naledi', initials: 'ND', type: 'eli5', trust: 'verified',
        body: 'Disclosure in plain English: before the client signs, tell them who you are, what it costs (fees/commission), and what could go wrong. Confirm the money parts in writing.',
        upvotes: 17, replies: 3,
      },
      {
        id: 're5-p2', author: 'Themba', initials: 'TM', type: 'stuck',
        body: 'Stuck between B and D — are ALL disclosures required in writing, or only some of them?',
        linkedQuestion: 'Mock Q #62', legislativeRef: 'GCC s7', escalatesInHrs: 12,
        children: [
          { id: 're5-p2r1', author: 'Ayanda', initials: 'AY', type: 'reply', trust: 'unverified',
            body: 'Only some must be in writing; others can be verbal but should still be recorded.' },
        ],
      },
    ],
  },
};

const groupThreads = (g: ForumGroup) => {
  const place = g.name.split(/[ (]/)[0];
  return g.kind === 'region'
    ? [
        { id: 't1', author: 'Member', initials: '··', body: `Anyone keen to meet up in ${place} this weekend to run through past papers?`, replies: 5 },
        { id: 't2', author: 'Member', initials: '··', body: `Sharing exam-venue tips for our area — what worked for you on the day?`, replies: 9 },
      ]
    : [
        { id: 't1', author: 'Member', initials: '··', body: `Drop your trickiest ${g.name} question here and we'll crack it together.`, replies: 7 },
        { id: 't2', author: 'Member', initials: '··', body: `Pinned: a running list of mnemonics for this topic.`, replies: 12 },
      ];
};

const trustBadge = (trust?: TrustState) => {
  if (trust === 'verified') return <span className="text-[11px] px-2 py-0.5 rounded bg-[#16A34A]/10 text-[#15803D] font-medium">✓ Tutor verified</span>;
  if (trust === 'corrected') return <span className="text-[11px] px-2 py-0.5 rounded bg-[#F59E0B]/15 text-[#B45309] font-medium">⚠ Corrected by tutor</span>;
  if (trust === 'unverified') return <span className="text-[11px] px-2 py-0.5 rounded bg-slate-100 text-slate-500">Peer answer · not yet verified</span>;
  return null;
};

const typePill = (type: PostType) => {
  const label = type === 'eli5' ? 'ELI5' : type === 'stuck' ? 'Stuck on a question' : null;
  return label ? <span className="text-[11px] px-2 py-0.5 rounded bg-slate-100 text-slate-600">{label}</span> : null;
};

const scopeChip = (scope: TrackScope) => (
  <span className="text-[11px] px-2 py-0.5 rounded bg-[#1B3A6B]/10 text-[#1B3A6B] font-medium">
    {scope === 'both' ? 'RE1 + RE5' : scope}
  </span>
);

const Avatar = ({ initials }: { initials: string }) => (
  <span className="w-7 h-7 shrink-0 rounded-full bg-[#1B3A6B]/10 text-[#1B3A6B] flex items-center justify-center text-[11px] font-semibold">
    {initials}
  </span>
);

const PostBlock = ({ post, onUpvote, first }: { post: ForumPost; onUpvote: (id: string) => void; first: boolean }) => (
  <div className={first ? '' : 'border-t border-slate-100 dark:border-slate-800 pt-4'}>
    <div className="flex items-center gap-2 mb-1.5 flex-wrap">
      <Avatar initials={post.initials} />
      <span className="text-[13px] font-medium text-slate-900 dark:text-white">{post.author}</span>
      {trustBadge(post.trust)}
      {typePill(post.type)}
    </div>
    <div className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">{post.body}</div>
    {(post.linkedQuestion || post.legislativeRef) && (
      <div className="flex gap-1.5 flex-wrap mt-2">
        {post.linkedQuestion && <span className="text-xs px-2 py-1 rounded-md bg-[#1B3A6B]/10 text-[#1B3A6B] dark:text-blue-300">🔗 {post.linkedQuestion}</span>}
        {post.legislativeRef && <span className="text-xs px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-mono">{post.legislativeRef}</span>}
      </div>
    )}
    {post.escalatesInHrs && <div className="text-xs text-[#B45309] mt-2">⏱ Escalates to a tutor in ~{post.escalatesInHrs}h if unanswered</div>}
    {(post.type === 'eli5' || post.upvotes !== undefined) && (
      <div className="flex items-center gap-4 mt-2 text-xs text-slate-500 dark:text-slate-400">
        <button onClick={() => onUpvote(post.id)} className="inline-flex items-center gap-1 hover:text-[#1B3A6B] dark:hover:text-white transition-colors">▲ {post.upvotes ?? 0}</button>
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
);

const CommunityPage = () => {
  const { profile } = useClaudeAuth();
  const [track, setTrack] = useState<ExamTrack>(profile?.exam_track ?? 'RE5');
  useEffect(() => { if (profile?.exam_track) setTrack(profile.exam_track); }, [profile?.exam_track]);

  const room = ROOM[track];
  const { posts: livePosts, source: roomSource, checkIn, upvote } = useForumRoom(track, room.day);
  const { groups: initialGroups, createGroup, toggleJoin } = useForumGroups(track);

  const [posts, setPosts] = useState<ForumPost[]>(room.posts);
  useEffect(() => { setPosts(livePosts && livePosts.length > 0 ? livePosts : room.posts); }, [livePosts, track]);

  const [groups, setGroups] = useState<ForumGroup[]>([]);
  useEffect(() => { setGroups(initialGroups); }, [initialGroups]);

  const [view, setView] = useState<string>('room');
  const [checkedIn, setCheckedIn] = useState(false);
  const [streak, setStreak] = useState(4);

  const [showCreate, setShowCreate] = useState(false);
  const [newName, setNewName] = useState('');
  const [newKind, setNewKind] = useState<GroupKind>('region');
  const [newScope, setNewScope] = useState<TrackScope>('both');

  const handleUpvote = (id: string) => {
    setPosts(prev => prev.map(p => (p.id === id ? { ...p, upvotes: (p.upvotes ?? 0) + 1 } : p)));
    upvote(id);
  };
  const handleCheckIn = () => {
    if (checkedIn) return;
    setCheckedIn(true);
    setStreak(s => s + 1);
    checkIn();
  };
  const handleJoin = (g: ForumGroup) => {
    setGroups(prev => prev.map(x => (x.id === g.id ? { ...x, joined: !x.joined, members: x.members + (x.joined ? -1 : 1) } : x)));
    toggleJoin(g.id, !g.joined);
  };
  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    const name = newName.trim();
    if (!name) return;
    const g: ForumGroup = {
      id: `local-${Date.now()}`, name, slug: name.toLowerCase().replace(/\s+/g, '-'),
      kind: newKind, scope: newScope, members: 1, joined: true,
      description: 'New group — invite your study buddies.',
    };
    setGroups(prev => [g, ...prev]);
    createGroup({ name, kind: newKind, scope: newScope });
    setNewName(''); setShowCreate(false); setView(g.id);
  };

  const days = [room.day - 2, room.day - 1, room.day, room.day + 1, room.day + 2].filter(d => d > 0);
  const selectedGroup = groups.find(g => g.id === view);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans">
      <RE1TopNav />
      <div className="max-w-5xl mx-auto py-8 px-4 sm:px-6">
        {/* Page header + track toggle */}
        <div className="flex items-center justify-between gap-3 mb-6 flex-wrap">
          <h1 className="text-2xl font-bold text-[#1B3A6B] dark:text-white">Community</h1>
          <div className="inline-flex rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden">
            {(['RE1', 'RE5'] as ExamTrack[]).map(t => (
              <button
                key={t}
                onClick={() => { setTrack(t); setView('room'); }}
                className={`px-4 py-1.5 text-sm font-medium transition-colors ${
                  track === t ? 'bg-[#1B3A6B] text-white' : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-[260px_1fr] gap-6">
          {/* Sidebar */}
          <aside className="space-y-4">
            <button
              onClick={() => setView('room')}
              className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                view === 'room' ? 'bg-[#1B3A6B] text-white' : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              🎯 Today's Room
            </button>

            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-3">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Study groups</span>
                <button onClick={() => setShowCreate(s => !s)} className="text-xs font-medium text-[#1B3A6B] dark:text-blue-300 hover:underline">
                  {showCreate ? 'Cancel' : '+ New'}
                </button>
              </div>

              {showCreate && (
                <form onSubmit={handleCreate} className="mb-3 space-y-2 p-2 rounded-md bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
                  <input
                    value={newName}
                    onChange={e => setNewName(e.target.value)}
                    placeholder="Group name, e.g. Soweto, Durban…"
                    className="w-full px-2.5 py-1.5 rounded border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#1B3A6B]/30"
                  />
                  <div className="flex gap-2">
                    <select value={newKind} onChange={e => setNewKind(e.target.value as GroupKind)} className="flex-1 px-2 py-1.5 rounded border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs">
                      <option value="region">Region</option>
                      <option value="topic">Topic</option>
                      <option value="general">General</option>
                    </select>
                    <select value={newScope} onChange={e => setNewScope(e.target.value as TrackScope)} className="flex-1 px-2 py-1.5 rounded border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs">
                      <option value="both">RE1 + RE5</option>
                      <option value="RE1">RE1</option>
                      <option value="RE5">RE5</option>
                    </select>
                  </div>
                  <button type="submit" className="w-full py-1.5 rounded bg-[#1B3A6B] text-white text-sm font-medium hover:bg-[#1B3A6B]/90">
                    Create group
                  </button>
                </form>
              )}

              <ul className="space-y-1">
                {groups.map(g => (
                  <li key={g.id}>
                    <button
                      onClick={() => setView(g.id)}
                      className={`w-full text-left px-2.5 py-2 rounded-md transition-colors ${
                        view === g.id ? 'bg-[#1B3A6B]/10' : 'hover:bg-slate-100 dark:hover:bg-slate-800'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-sm font-medium text-slate-800 dark:text-slate-200 truncate">{g.name}</span>
                        <span className="text-[11px] text-slate-400 shrink-0">{g.members}</span>
                      </div>
                      <div className="flex items-center gap-1.5 mt-1">
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 capitalize">{g.kind}</span>
                        {scopeChip(g.scope)}
                      </div>
                    </button>
                  </li>
                ))}
                {groups.length === 0 && <li className="text-xs text-slate-400 px-2 py-2">No groups yet — create the first one.</li>}
              </ul>
            </div>
          </aside>

          {/* Main */}
          <main>
            {view === 'room' && (
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm">
                <div className="flex items-center justify-between gap-3 p-4 border-b border-slate-100 dark:border-slate-800">
                  <div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">{track} · Day {room.day}</div>
                    <div className="text-lg font-semibold text-slate-900 dark:text-white">{room.topic}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 text-[13px] bg-[#F59E0B]/15 text-[#B45309] px-2.5 py-1 rounded-md font-medium">🔥 {streak}-day streak</span>
                    <button onClick={handleCheckIn} disabled={checkedIn} className={`text-[13px] font-medium px-3 py-2 rounded-md transition-colors ${checkedIn ? 'bg-[#16A34A]/10 text-[#15803D] cursor-default' : 'bg-[#1B3A6B] text-white hover:bg-[#1B3A6B]/90'}`}>
                      {checkedIn ? '✓ Checked in' : "Completed today's target"}
                    </button>
                  </div>
                </div>

                <div className="flex gap-1.5 flex-wrap p-3 border-b border-slate-100 dark:border-slate-800">
                  {days.map(d => {
                    if (d < room.day) return <span key={d} className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-md bg-[#16A34A]/10 text-[#15803D]">✓ Day {d}</span>;
                    if (d === room.day) return <span key={d} className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-md bg-[#1B3A6B] text-white font-medium">Day {d} · now</span>;
                    return <span key={d} title={`Unlocks when you reach Day ${d}`} className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-400">🔒 Day {d}</span>;
                  })}
                </div>

                <div className="p-4 border-b border-slate-100 dark:border-slate-800">
                  <div className="border-l-[3px] border-[#D4A017] pl-3">
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 mb-1">📌 Today's prompt · tutor</div>
                    <div className="text-sm leading-relaxed text-slate-800 dark:text-slate-200">{room.prompt}</div>
                  </div>
                </div>

                <div className="p-4 flex flex-col gap-4">
                  {posts.map((post, i) => <PostBlock key={post.id} post={post} onUpvote={handleUpvote} first={i === 0} />)}
                  {checkedIn && (
                    <div className="border-t border-slate-100 dark:border-slate-800 pt-3 flex items-center gap-2 text-[13px] text-slate-500 dark:text-slate-400">
                      🎯 <span className="text-slate-900 dark:text-white">You</span> completed Day {room.day} · 12 others checked in today
                    </div>
                  )}
                </div>

                <div className="flex gap-2 items-center p-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
                  <input type="text" placeholder="Share an ELI5, ask a question, or check in…" className="flex-1 px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#1B3A6B]/30" />
                  <button className="text-[13px] font-medium px-4 py-2 rounded-lg bg-[#1B3A6B] text-white hover:bg-[#1B3A6B]/90 whitespace-nowrap">Post</button>
                </div>
              </div>
            )}

            {view !== 'room' && selectedGroup && (
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm">
                <div className="p-4 border-b border-slate-100 dark:border-slate-800">
                  <button onClick={() => setView('room')} className="text-xs text-slate-500 hover:text-slate-800 dark:hover:text-slate-300 mb-2">← Back to Today's Room</button>
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-lg font-semibold text-slate-900 dark:text-white">{selectedGroup.name}</span>
                        <span className="text-[11px] px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 capitalize">{selectedGroup.kind}</span>
                        {scopeChip(selectedGroup.scope)}
                      </div>
                      {selectedGroup.description && <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{selectedGroup.description}</p>}
                      <div className="text-xs text-slate-400 mt-1">{selectedGroup.members} member{selectedGroup.members === 1 ? '' : 's'}</div>
                    </div>
                    <button
                      onClick={() => handleJoin(selectedGroup)}
                      className={`text-[13px] font-medium px-3 py-2 rounded-md whitespace-nowrap transition-colors ${
                        selectedGroup.joined ? 'bg-[#16A34A]/10 text-[#15803D]' : 'bg-[#1B3A6B] text-white hover:bg-[#1B3A6B]/90'
                      }`}
                    >
                      {selectedGroup.joined ? '✓ Joined' : 'Join group'}
                    </button>
                  </div>
                </div>

                <div className="p-4 flex flex-col gap-4">
                  {groupThreads(selectedGroup).map((t, i) => (
                    <div key={t.id} className={i > 0 ? 'border-t border-slate-100 dark:border-slate-800 pt-4' : ''}>
                      <div className="flex items-center gap-2 mb-1.5">
                        <Avatar initials={t.initials} />
                        <span className="text-[13px] font-medium text-slate-900 dark:text-white">{t.author}</span>
                      </div>
                      <div className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">{t.body}</div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 mt-1.5">💬 {t.replies} replies</div>
                    </div>
                  ))}
                </div>

                <div className="flex gap-2 items-center p-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
                  <input type="text" placeholder={`Post in ${selectedGroup.name}…`} className="flex-1 px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#1B3A6B]/30" />
                  <button className="text-[13px] font-medium px-4 py-2 rounded-lg bg-[#1B3A6B] text-white hover:bg-[#1B3A6B]/90 whitespace-nowrap">Post</button>
                </div>
              </div>
            )}

            <p className="text-center text-xs text-slate-400 dark:text-slate-500 mt-4">
              {roomSource === 'live' ? 'Live — loaded from the forum_* tables.' : 'Demo data — goes live once forum_schema.sql + forum_groups.sql are applied.'}
            </p>
          </main>
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;
