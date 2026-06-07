import React from 'react';
import { Link } from 'react-router-dom';

const RE1LandingPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Hero Section */}
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#1B3A6B] dark:text-white tracking-tight">
            RE1 Key Individual <span className="text-[#D4A017]">Exam Prep</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Comprehensive practice tests and mock exams designed to help FSP owners, directors, and Compliance Officers master the RE1 Regulatory Examination.
          </p>
        </div>

        {/* At a Glance */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-8">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Exam At a Glance</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-black text-[#1B3A6B] dark:text-[#D4A017]">80</div>
              <div className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">Questions</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-black text-[#1B3A6B] dark:text-[#D4A017]">150m</div>
              <div className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">Duration</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-black text-[#1B3A6B] dark:text-[#D4A017]">65%</div>
              <div className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">Pass Mark</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-black text-[#1B3A6B] dark:text-[#D4A017]">R1,300</div>
              <div className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">Exam Fee</div>
            </div>
          </div>
        </div>

        {/* Cognitive Levels Breakdown */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-8">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Cognitive Complexity</h3>
            <ul className="space-y-4">
              <li className="flex justify-between items-center border-b border-slate-100 dark:border-slate-800 pb-3">
                <span className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#16A34A]"></span> Level 1 (Knowledge)
                </span>
                <span className="font-bold">27% (21 Qs)</span>
              </li>
              <li className="flex justify-between items-center border-b border-slate-100 dark:border-slate-800 pb-3">
                <span className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#2563EB]"></span> Level 2 (Comprehension)
                </span>
                <span className="font-bold">39% (32 Qs)</span>
              </li>
              <li className="flex justify-between items-center border-b border-slate-100 dark:border-slate-800 pb-3">
                <span className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#D97706]"></span> Level 3 (Application)
                </span>
                <span className="font-bold">22% (18 Qs)</span>
              </li>
              <li className="flex justify-between items-center pb-3">
                <span className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#DC2626]"></span> Level 4 (Analysis)
                </span>
                <span className="font-bold">12% (9 Qs)</span>
              </li>
            </ul>
          </div>

          <div className="bg-slate-900 rounded-2xl shadow-sm border border-slate-800 p-8 text-white flex flex-col justify-center">
            <h3 className="text-xl font-bold text-[#D4A017] mb-4">Middle-Out Strategy</h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              In the actual RE1 paper, the hardest Level 3 & 4 questions are grouped in the middle of the booklet (approx Q19–62). Our mock exam replicates this exact structure to prepare you for the mental fatigue.
            </p>
            <Link to="/re1/study-guide" className="text-sm font-medium hover:text-[#D4A017] underline decoration-slate-600 underline-offset-4 transition-colors">
              Read the full strategy guide →
            </Link>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8 border-t border-slate-200 dark:border-slate-800">
          <Link
            to="/re1/practice"
            className="px-8 py-4 bg-white dark:bg-slate-900 border-2 border-[#1B3A6B] dark:border-slate-700 text-[#1B3A6B] dark:text-white rounded-xl font-bold text-center hover:bg-slate-50 dark:hover:bg-slate-800 transition-all shadow-sm"
          >
            Start Topic Practice
          </Link>
          <Link
            to="/re1/mock-exam"
            className="px-8 py-4 bg-[#1B3A6B] text-white rounded-xl font-bold text-center hover:bg-[#1B3A6B]/90 transition-all shadow-sm shadow-[#1B3A6B]/20"
          >
            Take 150m Mock Exam
          </Link>
        </div>

        {/* Footer Info */}
        <div className="text-center text-sm text-slate-500 dark:text-slate-400 pt-8">
          Need to review the syllabus first? Check out the <Link to="/re1/study-guide" className="underline hover:text-slate-700 dark:hover:text-slate-300">Study Guide & Syllabus Breakdown</Link>.
        </div>
      </div>
    </div>
  );
};

export default RE1LandingPage;
