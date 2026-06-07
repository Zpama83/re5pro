import React from 'react';
import { Link } from 'react-router-dom';

const RE1StudyGuidePage = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="mb-8">
          <Link to="/re1" className="text-sm font-medium text-slate-500 hover:text-slate-800 dark:hover:text-slate-300 flex items-center gap-2">
            ← Back to RE1 Dashboard
          </Link>
        </div>

        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#1B3A6B] dark:text-white">
            RE1 Study Guide & <span className="text-[#D4A017]">Protocols</span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Master the syllabus, understand the strategies, and prepare for exam day.
          </p>
        </div>

        {/* Exam Format Warning */}
        <div className="bg-blue-50 dark:bg-[#1B3A6B]/20 border-l-4 border-[#1B3A6B] p-6 rounded-r-lg">
          <h3 className="flex items-center gap-2 text-lg font-bold text-[#1B3A6B] dark:text-blue-400 mb-2">
            ⚠️ Real Exam Format Reminder
          </h3>
          <p className="text-slate-700 dark:text-slate-300">
            The actual RE1 exam is <strong>paper-based and closed-book</strong>, conducted at a supervised venue. No phones, notes, or reference materials are permitted. Practice here to build knowledge — the real exam requires you to recall legislation from memory.
          </p>
        </div>

        {/* Protocols */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 rounded-2xl shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              ✏️ Bubble Sheet Protocol
            </h3>
            <ul className="space-y-3 text-slate-600 dark:text-slate-300 list-disc pl-5">
              <li>Use <strong>pencil only</strong> (no ink or pens).</li>
              <li>Place a <strong>ruler under each row</strong> to prevent alignment errors.</li>
              <li>Fully shade the circle corresponding to your answer.</li>
              <li><strong>Never double-mark a row</strong> — the scanner reads it as incorrect. If you change your mind, erase the previous mark completely.</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 rounded-2xl shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              🎯 Middle-Out Strategy
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              Questions 19–62 in the real exam contain the hardest Level 3 (Application) and Level 4 (Analysis) questions. 
            </p>
            <p className="text-slate-600 dark:text-slate-300">
              <strong>Strategy:</strong> Consider answering the first 18 and last 18 questions first to secure easier marks and build confidence before tackling the complex middle block.
            </p>
          </div>
        </div>

        {/* Task Areas */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-4">
            Core Task Areas
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Demonstrate understanding of the FAIS Act",
              "Contribute towards obtaining an FSP licence",
              "Maintain FSP licence requirements",
              "Manage and oversee Representatives",
              "Ensure FSP operational ability",
              "Manage FSP financial soundness",
              "Implement FICA and AML processes",
              "Manage conflicts of interest",
              "Understand the role of the Compliance Officer",
              "Manage complaints and FAIS Ombud processes",
              "Understand suspension, withdrawal and lapsing of licences",
              "Understand statutory debarment (Section 14)",
              "Understand General Code of Conduct requirements",
              "Manage regulatory levies and reporting",
              "Oversee client advice and needs analysis processes",
              "Understand FSP business rescue and liquidation"
            ].map((task, i) => (
              <div key={i} className="bg-white dark:bg-slate-900 p-4 rounded-lg border border-slate-200 dark:border-slate-800 flex items-start gap-3">
                <span className="bg-slate-100 dark:bg-slate-800 text-[#1B3A6B] dark:text-[#D4A017] font-bold px-2 py-1 rounded text-xs">
                  Task {i + 1}
                </span>
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  {task}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Exam Day Checklist */}
        <div className="bg-slate-900 rounded-2xl p-8 text-white">
          <h3 className="text-xl font-bold text-[#D4A017] mb-6">Exam Day Checklist</h3>
          <ul className="space-y-3 font-medium">
            <li className="flex items-center gap-3">
              <div className="w-5 h-5 rounded border border-white/30 flex items-center justify-center text-[#16A34A]">✓</div>
              Original ID Document (No copies)
            </li>
            <li className="flex items-center gap-3">
              <div className="w-5 h-5 rounded border border-white/30 flex items-center justify-center text-[#16A34A]">✓</div>
              Exam Booking Confirmation Printout
            </li>
            <li className="flex items-center gap-3">
              <div className="w-5 h-5 rounded border border-white/30 flex items-center justify-center text-[#16A34A]">✓</div>
              At least 2 HB Pencils and an Eraser
            </li>
            <li className="flex items-center gap-3">
              <div className="w-5 h-5 rounded border border-white/30 flex items-center justify-center text-[#16A34A]">✓</div>
              A clear plastic ruler (for bubble sheet alignment)
            </li>
            <li className="flex items-center gap-3">
              <div className="w-5 h-5 rounded border border-white/30 flex items-center justify-center text-[#16A34A]">✓</div>
              Bottle of water (transparent, labels removed)
            </li>
          </ul>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-sm text-slate-400">
              Administered by Moonstone<br/>
              <a href="mailto:faisexam@moonstoneinfo.co.za" className="hover:text-white">faisexam@moonstoneinfo.co.za</a> | (021) 883 8000
            </div>
            <a 
              href="https://www.faisexam.co.za" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-2 bg-[#D4A017] text-slate-900 font-bold rounded hover:bg-[#D4A017]/90 transition-colors"
            >
              Book Real Exam
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RE1StudyGuidePage;
