import React from 'react';
import { Link, useLocation } from 'react-router-dom';

/**
 * Shared top navigation for the RE1 section.
 *
 * The RE5 home (RE5Exam) already links INTO the RE1 section, but the RE1 pages
 * previously had no way back — making RE1 feel like a separate site. This header
 * carries the "RE5 Certify Pro" branding into RE1 and provides the return path
 * to the RE5 home and course, so both tracks read as one combined platform.
 */
export const RE1TopNav: React.FC = () => {
  const { pathname } = useLocation();

  const links: { to: string; label: string }[] = [
    { to: '/', label: 'RE5 Home' },
    { to: '/course', label: 'RE5 Course' },
    { to: '/re1', label: 'RE1 Home' },
    { to: '/re1/course', label: 'RE1 Course' },
    { to: '/cpd-calculator', label: 'CPD' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Brand → RE5 home */}
        <Link to="/" className="flex items-center gap-2 shrink-0" title="Back to RE5 Certify Pro home">
          <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#D4A017] to-[#b8860b] text-white flex items-center justify-center font-extrabold">
            R
          </span>
          <span className="font-extrabold text-[#1B3A6B] dark:text-white tracking-tight">
            RE5 Certify Pro
          </span>
          <span className="hidden sm:inline text-xs font-bold text-[#D4A017] border border-[#D4A017]/40 rounded px-1.5 py-0.5">
            + RE1
          </span>
        </Link>

        {/* Section links */}
        <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto">
          {links.map(({ to, label }) => {
            const isActive =
              to === '/'
                ? pathname === '/'
                : pathname === to || pathname.startsWith(to + '/');
            return (
              <Link
                key={to}
                to={to}
                className={`whitespace-nowrap text-sm font-semibold rounded-lg px-3 py-2 transition-colors ${
                  isActive
                    ? 'bg-[#1B3A6B] text-white'
                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                {label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
