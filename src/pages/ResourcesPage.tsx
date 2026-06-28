import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

/* ─────────────────────────── DATA ─────────────────────────── */

type Badge = 'free' | 'external' | 'paid' | 'official';

interface Resource {
  id: string;
  title: string;
  source: string;
  description: string;
  badge: Badge;
  url: string;
  year?: number;
  lastVerified: string;
  tags: string[];
}

interface LegRow {
  title: string;
  ref: string;
  description: string;
  note?: string;
}

const RE5_GUIDES: Resource[] = [
  {
    id: 'r1', title: 'RE1 & RE5 Preparation Guide (Jan 2026 – v1.1)',
    source: 'Moonstone / FSCA', badge: 'free', year: 2026, lastVerified: 'Jun 2025',
    description: 'The latest official preparation guideline covering exam format, qualifying criteria, multiple-choice tips, and reference material lists. Updated January 2026.',
    url: 'https://www.moonstone.co.za/wp-content/uploads/library/Regulatory%20Exam%20Library/RE%20Preparation%20Guidelines/RE1%20and%20RE5%20Preparation%20Guideline.pdf',
    tags: ['re5','re1','official','moonstone'],
  },
  {
    id: 'r2', title: 'RE1 & RE5 Preparation Document (v4 – July 2022)',
    source: 'Moonstone', badge: 'free', year: 2022, lastVerified: 'Jun 2025',
    description: 'Previous version — includes exam format overview, tips, and task/qualifying criteria. Useful for historical reference.',
    url: 'https://www.moonstone.co.za/upmedia/uploads/library/Regulatory%20Exam%20Library/RE%20Preparation%20Guidelines/RE1%20and%20RE5%20Preparation%20Document.pdf',
    tags: ['re5','re1','moonstone'],
  },
  {
    id: 'r3', title: 'RE5 Qualifying Criteria & Task Table (v4 – July 2022)',
    source: 'Moonstone', badge: 'free', year: 2022, lastVerified: 'Jun 2025',
    description: 'Every task, knowledge criterion, and skill that can be tested in the RE5 exam. Every task will appear at least once.',
    url: 'https://www.moonstone.co.za/upmedia/uploads/library/Regulatory%20Exam%20Library/RE%20Preparation%20Guidelines/RE5%20Task%20%20QC.pdf',
    tags: ['re5','moonstone'],
  },
  {
    id: 'r4', title: 'FSCA Preparation Material for RE5 (Official Page)',
    source: 'FSCA', badge: 'official', lastVerified: 'Jun 2025',
    description: 'Official FSCA page listing all legislation and documents required for RE5 preparation.',
    url: 'https://www.fsca.co.za/Preparation-Material-for-RE5/',
    tags: ['re5','official','fsca'],
  },
];

const RE5_STUDY: Resource[] = [
  {
    id: 's1', title: 'RE5 Self-Study Guide — Representatives (Sept 2018)',
    source: 'BANKSETA', badge: 'free', year: 2018, lastVerified: 'Jun 2025',
    description: 'Comprehensive self-study guide developed by BANKSETA. Covers the FAIS Act, General Code of Conduct, compliance officers, debarment, ombud, FICA, and more.',
    url: 'https://www.bankseta.org.za/wp-content/uploads/2018/10/RE5-Representative-Final-Version-02-Combined-Sept-2018.pdf',
    tags: ['re5','bankseta','free'],
  },
  {
    id: 's2', title: 'RE5 Training Manual (Updated Aug 2024)',
    source: 'LearnInsurance.co.za', badge: 'free', year: 2024, lastVerified: 'Jun 2025',
    description: 'Updated learner guide covering the FSCA, FAIS departments, licensing, fit and proper requirements, role players, and compliance.',
    url: 'https://learninsurance.co.za/wp-content/uploads/2025/02/RE-5-Learner-Guide-.pdf',
    tags: ['re5','free'],
  },
  {
    id: 's3', title: 'Free RE5 Chapter Download — Compliance Officer Role (2026)',
    source: 'RE5 Online', badge: 'external', year: 2026, lastVerified: 'Jun 2025',
    description: 'Free chapter on the role and functions of the Compliance Officer under FAIS. Includes a comparison between the Key Individual and Compliance Officer.',
    url: 'https://www.re5online.co.za/download-re5-study-material-2026/',
    tags: ['re5','free','compliance'],
  },
];

const RE5_LEG: LegRow[] = [
  { title: 'Financial Intelligence Centre Act (FICA)', ref: 'Act 38 of 2001', description: 'Covers AML obligations, FIC reporting, and KYC requirements.', note: 'Full Act required' },
  { title: 'Long-term Insurance Act', ref: 'Act 52 of 1998', description: 'Governs long-term insurance products and policies.', note: 'Definition of "Long Term Policy" only' },
  { title: 'Financial Advisory and Intermediary Services Act (FAIS Act)', ref: 'Act 37 of 2002', description: 'Primary legislation — regulates FSPs, KIs, representatives, licensing, conduct and penalties.', note: 'Full Act required' },
  { title: 'General Code of Conduct for Authorised FSPs and Representatives', ref: 'BN 80/2003', description: 'General duties, disclosure, conflict of interest, record-keeping. Heavily tested.' },
  { title: 'Rules on Proceedings of the Ombud for FSPs', ref: 'BN 81/2003', description: 'Role, authority, and procedures of the FAIS Ombud.' },
  { title: 'Determination of Requirements for Reappointment of Debarred Representatives', ref: 'BN 82/2003', description: 'Conditions for reinstatement after debarment.' },
  { title: 'Determination of Procedure for Approval of Key Individuals', ref: 'BN 122/2003', description: 'Procedures for KI approval by the FSCA.' },
  { title: 'Financial Advisory and Intermediary Services Regulations', ref: 'GN 879/2003', description: 'Regulatory framework and operational procedures.' },
  { title: 'Notice of Requirements for Professional Indemnity and Fidelity Insurance', ref: 'BN 123/2009', description: 'PI and fidelity cover requirements for FSPs.' },
  { title: 'Notice of Qualifications, Experience and Criteria for Compliance Officers', ref: 'BN 127/2010', description: 'Fit and proper requirements for compliance officers.' },
  { title: 'Board Notice 194 of 2017', ref: 'BN 194/2017', description: 'Recent FAIS updates — frequently referenced in exam preparation.' },
  { title: 'FAIS Notice 119 of 2017', ref: 'FAIS Notice 119/2017', description: 'Exemption of Compliance Officers from certain provisions.' },
];

const RE1_GUIDES: Resource[] = [
  {
    id: 'r5', title: 'RE1 & RE5 Preparation Guide (Jan 2026 – v1.1)',
    source: 'Moonstone / FSCA', badge: 'free', year: 2026, lastVerified: 'Jun 2025',
    description: 'Essential starting point for all RE1 candidates. Same guide covering both exams.',
    url: 'https://www.moonstone.co.za/wp-content/uploads/library/Regulatory%20Exam%20Library/RE%20Preparation%20Guidelines/RE1%20and%20RE5%20Preparation%20Guideline.pdf',
    tags: ['re1','re5','official','moonstone'],
  },
  {
    id: 'r6', title: 'FSCA Preparation Material for RE1 (Official Page)',
    source: 'FSCA', badge: 'official', lastVerified: 'Jun 2025',
    description: 'Official FSCA page listing all legislation and notices required for RE1 preparation.',
    url: 'https://www.fsca.co.za/Preparation-Material-for-RE1/',
    tags: ['re1','official','fsca'],
  },
];

const RE1_STUDY: Resource[] = [
  {
    id: 's4', title: 'RE1 Self-Study Guide — Key Individuals (v5.1)',
    source: 'BANKSETA', badge: 'free', year: 2018, lastVerified: 'Jun 2025',
    description: 'Comprehensive KI self-study guide. Covers FAIS Act, KI roles, compliance oversight, conflict of interest, outsourcing, and record-keeping.',
    url: 'https://bankseta.org.za/wp-content/uploads/2018/10/RE-1-Study-Guide-Key-Individuals-V5-1.pdf',
    tags: ['re1','bankseta','free'],
  },
  {
    id: 's5', title: 'RE1 & RE5 Study Guide PDF 2026 — 12 Chapters',
    source: 'RE5 Online', badge: 'paid', year: 2026, lastVerified: 'Jun 2025',
    description: 'Combined study guide for both RE1 and RE5. 12 chapters, 25-day study plan, aligned with current FSCA qualifying criteria. Used in webinars and workshops.',
    url: 'https://www.re5online.co.za/re5-study-guide-pdf-2026/',
    tags: ['re1','re5','paid'],
  },
];

const RE1_LEG: LegRow[] = [
  { title: 'Code of Conduct for Administrative and Discretionary FSPs', ref: 'BN 79/2003', description: 'Governs administrative and discretionary FSPs.', note: 'Definitions of "Administrative" and "Discretionary" only' },
  { title: 'General Code of Conduct for Authorised FSPs and Representatives', ref: 'BN 80/2003', description: 'Same as RE5 — covered in greater depth for KIs.' },
  { title: 'Rules on Proceedings of the Ombud for FSPs', ref: 'BN 81/2003', description: 'Ombud authority, case fees, investigations.' },
  { title: 'Determination of Requirements for Reappointment of Debarred Representatives', ref: 'BN 82/2003', description: 'Debarment reinstatement conditions.' },
  { title: 'Determination of Procedure for Approval of Key Individuals', ref: 'BN 122/2003', description: 'KI approval process.' },
  { title: 'FAIS Regulations', ref: 'GN 879/2003', description: 'Operational regulatory procedures.' },
  { title: 'Notice of Requirements for PI and Fidelity Insurance', ref: 'BN 123/2009', description: 'PI/fidelity cover requirements.' },
  { title: 'Notice of Qualifications for Compliance Officers', ref: 'BN 127/2010', description: 'Compliance officer fit and proper requirements.' },
  { title: 'FAIS Notice 119 of 2017', ref: 'FAIS Notice 119/2017', description: 'Compliance Officer exemptions.' },
];

const EXTERNAL_LINKS = [
  { name: 'FSCA Official Website', desc: 'All FAIS legislation, board notices, preparation material lists', url: 'https://www.fsca.co.za', badge: 'official' as Badge },
  { name: 'Moonstone Exam Body', desc: 'Official RE exam registration, preparation guidelines, task tables', url: 'https://www.moonstone.co.za', badge: 'external' as Badge },
  { name: 'BANKSETA', desc: 'Free downloadable RE5 and RE1 study guides (self-study versions)', url: 'https://www.bankseta.org.za', badge: 'free' as Badge },
  { name: 'LearnInsurance.co.za', desc: 'Updated RE5 learner guide (free PDF – 2024)', url: 'https://learninsurance.co.za', badge: 'free' as Badge },
  { name: 'RE5 Online', desc: 'Free chapter downloads, paid study guides, mock exams', url: 'https://www.re5online.co.za', badge: 'external' as Badge },
  { name: 'Sirah Business School', desc: 'Free RE5 source documents in one place, mock exams', url: 'https://www.sirahbs.co.za/re5-exam-free-downloads/', badge: 'free' as Badge },
  { name: 'Scribd — RE1/RE5 Preparation Document', desc: 'Exam format overview, multiple-choice structure explained', url: 'https://www.scribd.com/document/311009512/RE1-and-RE5-Preparation-Document-Final-Document-Updated', badge: 'external' as Badge },
];

/* ─────────────────────────── SUB-COMPONENTS ─────────────────────────── */

const BADGE_CONFIG: Record<Badge, { label: string; cls: string }> = {
  free:     { label: 'Free Download', cls: 'bg-emerald-100 text-emerald-800 border-emerald-200' },
  external: { label: 'External Link', cls: 'bg-blue-100 text-blue-800 border-blue-200' },
  paid:     { label: 'Paid Resource', cls: 'bg-amber-100 text-amber-800 border-amber-200' },
  official: { label: 'Official / FSCA', cls: 'bg-red-100 text-red-800 border-red-200' },
};

const BadgePill = ({ badge }: { badge: Badge }) => {
  const { label, cls } = BADGE_CONFIG[badge];
  return <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full border ${cls}`}>{label}</span>;
};

const ResourceCard = ({ r, hideButton = false }: { r: Resource; hideButton?: boolean }) => (
  <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 flex flex-col gap-3 hover:shadow-md transition-shadow">
    <div className="flex items-start justify-between gap-2 flex-wrap">
      <div className="flex items-center gap-2 flex-wrap">
        <BadgePill badge={r.badge} />
        <span className="text-xs text-slate-400 font-medium">{r.source}</span>
        {r.year && <span className="text-xs text-slate-400">{r.year}</span>}
      </div>
      <span className="text-[10px] text-slate-400">Verified {r.lastVerified}</span>
    </div>
    <h3 className="text-[15px] font-semibold text-slate-900 dark:text-white leading-snug">{r.title}</h3>
    <p className="text-[13px] text-slate-600 dark:text-slate-400 leading-relaxed flex-1">{r.description}</p>
    {!hideButton && r.badge !== 'paid' && (
      <a
        href={r.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`self-start inline-flex items-center gap-1.5 text-[13px] font-semibold px-4 py-2 rounded-lg transition-colors ${
          r.badge === 'free'
            ? 'bg-emerald-600 text-white hover:bg-emerald-700'
            : r.badge === 'official'
            ? 'bg-red-600 text-white hover:bg-red-700'
            : 'bg-[#1B3A6B] text-white hover:bg-[#1B3A6B]/90'
        }`}
      >
        {r.badge === 'free' ? '⬇ Download PDF' : '→ Visit Site'}
      </a>
    )}
    {r.badge === 'paid' && (
      <span className="self-start text-[13px] text-amber-700 dark:text-amber-400 font-medium">⚠ Paid — visit provider site</span>
    )}
  </div>
);

const LegislationTable = ({ rows }: { rows: LegRow[] }) => (
  <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800">
    <table className="w-full text-sm">
      <thead>
        <tr className="bg-slate-50 dark:bg-slate-800 text-left">
          <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500">Legislation / Notice</th>
          <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500 whitespace-nowrap">Reference</th>
          <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500">Description</th>
          <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500">Notes</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
        {rows.map((r, i) => (
          <tr key={i} className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
            <td className="px-4 py-3 font-medium text-slate-900 dark:text-white">{r.title}</td>
            <td className="px-4 py-3 font-mono text-xs text-[#1B3A6B] dark:text-blue-300 whitespace-nowrap">{r.ref}</td>
            <td className="px-4 py-3 text-slate-600 dark:text-slate-400">{r.description}</td>
            <td className="px-4 py-3 text-xs text-slate-500 dark:text-slate-500 italic">{r.note ?? '—'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const SectionHeading = ({ id, emoji, title, subtitle }: { id: string; emoji: string; title: string; subtitle: string }) => (
  <div id={id} className="scroll-mt-24 mb-8">
    <h2 className="text-2xl sm:text-3xl font-bold text-[#1B3A6B] dark:text-white flex items-center gap-3">
      <span>{emoji}</span>{title}
    </h2>
    <p className="mt-2 text-[15px] text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">{subtitle}</p>
    <div className="mt-4 h-1 w-16 rounded-full bg-[#D4A017]" />
  </div>
);

const SubHeading = ({ title }: { title: string }) => (
  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
    <span className="w-1 h-5 rounded-full bg-[#1B3A6B] inline-block" />
    {title}
  </h3>
);

/* ─────────────────────────── PAGE ─────────────────────────── */

const TABS = [
  { id: 're5', label: 'RE5 Resources' },
  { id: 're1', label: 'RE1 Resources' },
  { id: 'tips', label: 'Exam Tips' },
  { id: 'links', label: 'External Links' },
];

type FilterTrack = 'all' | 'RE5' | 'RE1';
type FilterType  = 'all' | 'free' | 'paid' | 'official' | 'external';

const ResourcesPage = () => {
  const [search, setSearch]       = useState('');
  const [track, setTrack]         = useState<FilterTrack>('all');
  const [typeFilter, setTypeFilter] = useState<FilterType>('all');
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const filterRes = (list: Resource[], section: 'RE5' | 'RE1') => {
    if (track !== 'all' && track !== section) return [];
    return list.filter(r => {
      const matchSearch = !search || [r.title, r.source, r.description].join(' ').toLowerCase().includes(search.toLowerCase());
      const matchType   = typeFilter === 'all' || r.badge === typeFilter;
      return matchSearch && matchType;
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans">
      {/* ── Top nav ── */}
      <nav className="sticky top-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#D4A017] to-[#b8860b] text-white flex items-center justify-center font-extrabold">R</span>
            <span className="font-extrabold text-[#1B3A6B] dark:text-white tracking-tight">RE5 Certify Pro</span>
            <span className="hidden sm:inline text-xs font-bold text-[#D4A017] border border-[#D4A017]/40 rounded px-1.5 py-0.5">+ RE1</span>
          </Link>
          <div className="flex items-center gap-1 overflow-x-auto">
            {TABS.map(t => (
              <button key={t.id} onClick={() => scrollTo(t.id)}
                className="whitespace-nowrap text-sm font-semibold rounded-lg px-3 py-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                {t.label}
              </button>
            ))}
            <Link to="/" className="ml-2 whitespace-nowrap text-sm font-semibold rounded-lg px-3 py-2 bg-[#1B3A6B] text-white hover:bg-[#1B3A6B]/90 transition-colors">
              ← Platform
            </Link>
          </div>
        </div>
      </nav>

      {/* ── Hero ── */}
      <div className="bg-gradient-to-br from-[#1B3A6B] to-[#0d2247] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-semibold bg-white/10 px-3 py-1.5 rounded-full text-[#D4A017] border border-[#D4A017]/30">
            📚 FREE Resource Library — Updated June 2025
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            Your Complete RE5 & RE1<br />
            <span className="text-[#D4A017]">Resource Library</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Everything you need to prepare for your FAIS Regulatory Exam — all in one place.
            Free downloads, official legislation, and study guides curated from FSCA, Moonstone, BANKSETA, and more.
          </p>
          <div className="flex flex-wrap gap-3 justify-center pt-2">
            <button onClick={() => scrollTo('re5')}
              className="px-6 py-3 bg-[#D4A017] text-slate-900 font-bold rounded-xl hover:bg-[#D4A017]/90 transition-colors">
              Jump to RE5 Resources
            </button>
            <button onClick={() => scrollTo('re1')}
              className="px-6 py-3 bg-white/10 text-white font-bold rounded-xl border border-white/20 hover:bg-white/20 transition-colors">
              Jump to RE1 Resources
            </button>
          </div>
          {/* Badge legend */}
          <div className="flex flex-wrap gap-2 justify-center pt-4">
            {(Object.entries(BADGE_CONFIG) as [Badge, typeof BADGE_CONFIG[Badge]][]).map(([k, v]) => (
              <span key={k} className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${v.cls}`}>{v.label}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Alert Banner ── */}
      <div className="bg-amber-50 border-b border-amber-200 dark:bg-amber-900/20 dark:border-amber-800">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-start gap-3">
          <span className="text-xl shrink-0 mt-0.5">⚠️</span>
          <div className="text-sm text-amber-900 dark:text-amber-200 leading-relaxed">
            <strong className="font-bold">Please note: </strong>
            The FSCA does not endorse any specific training materials. Examination bodies (such as Moonstone) may not provide actual study material — only preparation guides. Candidates are responsible for sourcing their own study material aligned with the current qualifying criteria.{' '}
            <strong>Always refer back to the actual legislation for accuracy.</strong>
            <span className="block mt-1 text-xs text-amber-700 dark:text-amber-400">Source: FSCA & Moonstone Preparation Guide (Jan 2026)</span>
          </div>
        </div>
      </div>

      {/* ── Search & Filter bar ── */}
      <div className="sticky top-16 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur border-b border-slate-200 dark:border-slate-800 py-3">
        <div className="max-w-5xl mx-auto px-4 flex flex-wrap gap-3 items-center">
          <input
            type="search"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search resources…"
            className="flex-1 min-w-[180px] px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#1B3A6B]/30"
          />
          <div className="flex gap-1.5">
            {(['all','RE5','RE1'] as FilterTrack[]).map(t => (
              <button key={t} onClick={() => setTrack(t)}
                className={`px-3 py-1.5 rounded-lg text-sm font-semibold transition-colors ${track===t?'bg-[#1B3A6B] text-white':'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800'}`}>
                {t === 'all' ? 'All Tracks' : t}
              </button>
            ))}
          </div>
          <div className="flex gap-1.5">
            {(['all','free','official','external','paid'] as FilterType[]).map(t => (
              <button key={t} onClick={() => setTypeFilter(t)}
                className={`px-3 py-1.5 rounded-lg text-sm font-semibold transition-colors capitalize ${typeFilter===t?'bg-[#1B3A6B] text-white':'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800'}`}>
                {t === 'all' ? 'All Types' : t}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-12 space-y-20">

        {/* ══════════════ RE5 SECTION ══════════════ */}
        <section id="re5">
          <SectionHeading
            id="re5" emoji="📘" title="RE5 Resources — For Representatives"
            subtitle="The RE5 is required for all FAIS Representatives — financial advisors and intermediaries who render financial services to clients. The exam consists of 50 multiple-choice questions grouped by complexity. You must read the actual legislation, not only study summaries."
          />

          {/* 3A: Official Prep */}
          <div className="mb-10">
            <SubHeading title="Official Preparation & Exam Guidelines" />
            <div className="grid sm:grid-cols-2 gap-4">
              {filterRes(RE5_GUIDES, 'RE5').map(r => <ResourceCard key={r.id} r={r} />)}
              {filterRes(RE5_GUIDES, 'RE5').length === 0 && <p className="text-slate-400 col-span-2 text-sm">No results for current filters.</p>}
            </div>
          </div>

          {/* 3B: Study Guides */}
          <div className="mb-10">
            <SubHeading title="Study Guides (Free & Authoritative)" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filterRes(RE5_STUDY, 'RE5').map(r => <ResourceCard key={r.id} r={r} />)}
              {filterRes(RE5_STUDY, 'RE5').length === 0 && <p className="text-slate-400 col-span-3 text-sm">No results for current filters.</p>}
            </div>
          </div>

          {/* 3C: Legislation */}
          {(track === 'all' || track === 'RE5') && (
            <div>
              <SubHeading title="Legislation Required for RE5" />
              <div className="mb-4 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl text-sm text-blue-900 dark:text-blue-200 leading-relaxed">
                📌 The following Acts and Board Notices are the <strong>official preparation material</strong> for the RE5 exam as listed by the FSCA.
                Candidates must read the actual legislation — not only summaries.{' '}
                <a href="https://www.fsca.co.za/Regulated-Entities/?collapse=collapseLicensing" target="_blank" rel="noopener noreferrer"
                  className="underline font-semibold hover:text-blue-700">Access all FSCA legislation →</a>
              </div>
              <LegislationTable rows={RE5_LEG} />
            </div>
          )}
        </section>

        {/* ══════════════ RE1 SECTION ══════════════ */}
        <section id="re1">
          <SectionHeading
            id="re1" emoji="🏛️" title="RE1 Resources — For Key Individuals"
            subtitle="The RE1 is required for Key Individuals (KIs) — those responsible for managing and overseeing the rendering of financial services within an FSP. The RE1 exam consists of 80 multiple-choice questions across four levels of difficulty. It has a broader scope than RE5 and includes all RE5 content plus KI-specific responsibilities."
          />

          {/* 4A: Official Prep */}
          <div className="mb-10">
            <SubHeading title="Official Preparation & Exam Guidelines" />
            <div className="grid sm:grid-cols-2 gap-4">
              {filterRes(RE1_GUIDES, 'RE1').map(r => <ResourceCard key={r.id} r={r} />)}
              {filterRes(RE1_GUIDES, 'RE1').length === 0 && <p className="text-slate-400 col-span-2 text-sm">No results for current filters.</p>}
            </div>
          </div>

          {/* 4B: Study Guides */}
          <div className="mb-10">
            <SubHeading title="Study Guides" />
            <div className="grid sm:grid-cols-2 gap-4">
              {filterRes(RE1_STUDY, 'RE1').map(r => <ResourceCard key={r.id} r={r} />)}
              {filterRes(RE1_STUDY, 'RE1').length === 0 && <p className="text-slate-400 col-span-2 text-sm">No results for current filters.</p>}
            </div>
          </div>

          {/* 4C: Additional Legislation */}
          {(track === 'all' || track === 'RE1') && (
            <div>
              <SubHeading title="Additional Legislation Required for RE1 (beyond RE5)" />
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                RE1 candidates must study all RE5 legislation <strong>plus</strong> the following additional legislation:
              </p>
              <LegislationTable rows={RE1_LEG} />
            </div>
          )}
        </section>

        {/* ══════════════ EXAM TIPS ══════════════ */}
        <section id="tips" className="scroll-mt-24">
          <SectionHeading
            id="tips" emoji="🎯" title="Exam Tips & Quick Reference"
            subtitle="Key facts and official study advice from the Moonstone Preparation Guide."
          />
          <div className="grid sm:grid-cols-2 gap-5">

            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">📘</span>
                <h3 className="font-bold text-slate-900 dark:text-white">RE5 Exam Format</h3>
              </div>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                <li className="flex items-start gap-2"><span className="text-emerald-500 mt-0.5">✓</span>50 multiple-choice questions</li>
                <li className="flex items-start gap-2"><span className="text-emerald-500 mt-0.5">✓</span>Questions grouped by 4 complexity levels (Knowledge → Analysis)</li>
                <li className="flex items-start gap-2"><span className="text-emerald-500 mt-0.5">✓</span>Administered by Moonstone — the only authorised FAIS exam body</li>
                <li className="flex items-start gap-2"><span className="text-emerald-500 mt-0.5">✓</span>Every qualifying criterion/task will be tested at least once</li>
                <li className="flex items-start gap-2"><span className="text-[#D4A017] mt-0.5">→</span>
                  <a href="https://www.moonstone.co.za" target="_blank" rel="noopener noreferrer" className="underline text-[#1B3A6B] dark:text-blue-300">Register at moonstone.co.za</a>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">🏛️</span>
                <h3 className="font-bold text-slate-900 dark:text-white">RE1 Exam Format</h3>
              </div>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                <li className="flex items-start gap-2"><span className="text-emerald-500 mt-0.5">✓</span>80 multiple-choice questions</li>
                <li className="flex items-start gap-2"><span className="text-emerald-500 mt-0.5">✓</span>4 levels of difficulty</li>
                <li className="flex items-start gap-2"><span className="text-emerald-500 mt-0.5">✓</span>Broader scope — covers all RE5 content plus KI management responsibilities</li>
                <li className="flex items-start gap-2"><span className="text-emerald-500 mt-0.5">✓</span>65% pass mark (52 out of 80)</li>
                <li className="flex items-start gap-2"><span className="text-[#D4A017] mt-0.5">→</span>
                  <a href="https://www.moonstone.co.za" target="_blank" rel="noopener noreferrer" className="underline text-[#1B3A6B] dark:text-blue-300">Register at moonstone.co.za</a>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">📖</span>
                <h3 className="font-bold text-slate-900 dark:text-white">Study Tips (from the Official Guide)</h3>
              </div>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                <li className="flex items-start gap-2"><span className="text-[#1B3A6B] dark:text-blue-300 mt-0.5 font-bold">1.</span>Read the actual legislation — not only study summaries</li>
                <li className="flex items-start gap-2"><span className="text-[#1B3A6B] dark:text-blue-300 mt-0.5 font-bold">2.</span>Get familiar with legal terminology used in the Acts</li>
                <li className="flex items-start gap-2"><span className="text-[#1B3A6B] dark:text-blue-300 mt-0.5 font-bold">3.</span>Use the 25-day study plan: ~1 hour per day</li>
                <li className="flex items-start gap-2"><span className="text-[#1B3A6B] dark:text-blue-300 mt-0.5 font-bold">4.</span>Do not skip any tasks or qualifying criteria</li>
                <li className="flex items-start gap-2"><span className="text-[#1B3A6B] dark:text-blue-300 mt-0.5 font-bold">5.</span>Attending a workshop alone is NOT sufficient — self-study is required</li>
                <li className="flex items-start gap-2"><span className="text-[#1B3A6B] dark:text-blue-300 mt-0.5 font-bold">6.</span>Monitor FAIS Information Circulars for legislative updates</li>
              </ul>
            </div>

            <div className="bg-[#1B3A6B] text-white rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">📋</span>
                <h3 className="font-bold">Exam Registration</h3>
              </div>
              <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                <strong className="text-white">Moonstone is the ONLY authorised FAIS examination body</strong> in South Africa, appointed by the FSCA. All RE1 and RE5 examinations must be booked through Moonstone.
              </p>
              <ul className="space-y-2 text-sm text-slate-300 mb-5">
                <li>📞 (021) 883 8000</li>
                <li>✉ faisexam@moonstoneinfo.co.za</li>
                <li>🌐 <a href="https://www.faisexam.co.za" target="_blank" rel="noopener noreferrer" className="underline text-[#D4A017]">www.faisexam.co.za</a></li>
              </ul>
              <a href="https://www.moonstone.co.za" target="_blank" rel="noopener noreferrer"
                className="inline-block px-5 py-2.5 bg-[#D4A017] text-slate-900 font-bold rounded-lg hover:bg-[#D4A017]/90 transition-colors text-sm">
                Book Your Exam →
              </a>
            </div>

          </div>
        </section>

        {/* ══════════════ EXTERNAL LINKS ══════════════ */}
        <section id="links" className="scroll-mt-24">
          <SectionHeading
            id="links" emoji="🔗" title="External Resource Links"
            subtitle="Authoritative platforms for FAIS exam preparation — curated and verified."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {EXTERNAL_LINKS.map((l, i) => (
              <a key={i} href={l.url} target="_blank" rel="noopener noreferrer"
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 flex flex-col gap-3 hover:shadow-md hover:border-[#1B3A6B]/40 transition-all group">
                <div className="flex items-start justify-between">
                  <h3 className="font-semibold text-slate-900 dark:text-white group-hover:text-[#1B3A6B] dark:group-hover:text-blue-300 transition-colors text-[15px]">
                    {l.name}
                  </h3>
                  <BadgePill badge={l.badge} />
                </div>
                <p className="text-[13px] text-slate-600 dark:text-slate-400 leading-relaxed flex-1">{l.desc}</p>
                <span className="text-[13px] font-semibold text-[#1B3A6B] dark:text-blue-300 group-hover:underline">
                  Visit site →
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* ── Footer CTA ── */}
        <div className="bg-gradient-to-r from-[#1B3A6B] to-[#0d2247] rounded-2xl p-8 text-white text-center space-y-4">
          <h2 className="text-2xl font-bold">Ready to practise?</h2>
          <p className="text-slate-300 max-w-md mx-auto text-sm leading-relaxed">
            Apply what you've read. Our question bank draws from the same legislation covered in these resources.
          </p>
          <div className="flex flex-wrap gap-3 justify-center pt-2">
            <Link to="/" className="px-6 py-3 bg-[#D4A017] text-slate-900 font-bold rounded-xl hover:bg-[#D4A017]/90 transition-colors text-sm">
              RE5 Practice Exams
            </Link>
            <Link to="/re1" className="px-6 py-3 bg-white/10 text-white font-bold rounded-xl border border-white/20 hover:bg-white/20 transition-colors text-sm">
              RE1 Dashboard
            </Link>
          </div>
        </div>

      </div>

      {/* SEO meta note — in prod, use react-helmet-async */}
    </div>
  );
};

export default ResourcesPage;
