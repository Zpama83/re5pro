import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  totalQuestions: number;
  correctAnswers: number;
  scorePercent: number;
  timeTakenSecs: number;
  topicBreakdown: Record<string, { correct: number; total: number }>;
}

export const RE1ResultsSummary: React.FC<Props> = ({ 
  totalQuestions, 
  correctAnswers, 
  scorePercent, 
  timeTakenSecs, 
  topicBreakdown 
}) => {
  const isPass = scorePercent >= 65;

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    if (h > 0) return `${h}h ${m}m`;
    return `${m}m`;
  };

  return (
    <div className="space-y-8">
      {/* Score Card */}
      <div className={`p-8 rounded-2xl border text-center ${
        isPass 
          ? 'bg-[#16A34A]/10 border-[#16A34A]/30' 
          : 'bg-[#DC2626]/10 border-[#DC2626]/30'
      }`}>
        <h2 className={`text-3xl font-bold mb-2 ${isPass ? 'text-[#16A34A]' : 'text-[#DC2626]'}`}>
          {isPass ? 'Congratulations! You Passed.' : 'Keep Studying! You Failed.'}
        </h2>
        <div className="text-6xl font-black text-slate-900 dark:text-white my-6">
          {scorePercent.toFixed(1)}%
        </div>
        <div className="text-slate-600 dark:text-slate-300 text-lg">
          You scored <span className="font-bold">{correctAnswers}</span> out of {totalQuestions} questions.
          <br />
          Time taken: <span className="font-bold">{formatTime(timeTakenSecs)}</span>
        </div>
      </div>

      {/* Topic Breakdown */}
      <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Topic Breakdown</h3>
        <div className="space-y-4">
          {Object.entries(topicBreakdown).map(([topic, stats]) => {
            const percentage = (stats.correct / stats.total) * 100;
            const isWeak = percentage < 65;
            return (
              <div key={topic} className="flex flex-col gap-1">
                <div className="flex justify-between text-sm font-medium">
                  <span className="text-slate-700 dark:text-slate-300 capitalize">
                    {topic.replace(/_/g, ' ')}
                  </span>
                  <span className={isWeak ? 'text-[#DC2626]' : 'text-[#16A34A]'}>
                    {stats.correct}/{stats.total} ({percentage.toFixed(0)}%)
                  </span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-800 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${isWeak ? 'bg-[#DC2626]' : 'bg-[#16A34A]'}`}
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Recommendations */}
      <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-700">
        <h3 className="text-xl font-bold text-[#1B3A6B] dark:text-[#D4A017] mb-4">Recommendations</h3>
        <p className="text-slate-700 dark:text-slate-300 mb-6">
          {isPass 
            ? "Great job! You're showing strong competence across the board. Review any weak topics to solidify your knowledge before booking your real exam." 
            : "Focus your practice on the topics highlighted in red above. The real exam requires a minimum of 52 correct answers."}
        </p>
        <div className="flex flex-wrap gap-4">
          <Link 
            to="/re1/practice" 
            className="px-6 py-3 bg-[#1B3A6B] text-white rounded-lg font-medium hover:bg-[#1B3A6B]/90 transition-colors"
          >
            Practice Weak Topics
          </Link>
          <Link 
            to="/re1/mock-exam" 
            className="px-6 py-3 bg-white dark:bg-slate-900 text-[#1B3A6B] dark:text-white border border-[#1B3A6B] dark:border-slate-700 rounded-lg font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
          >
            Retry Mock Exam
          </Link>
        </div>
      </div>
    </div>
  );
};
