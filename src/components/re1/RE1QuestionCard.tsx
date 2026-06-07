import React from 'react';
import { RE1Question } from '@/types/re1';

interface Props {
  question: RE1Question;
  selectedAnswer: 'A' | 'B' | 'C' | 'D' | null;
  onSelectAnswer: (answer: 'A' | 'B' | 'C' | 'D') => void;
  showFeedback: boolean;
}

export const RE1QuestionCard: React.FC<Props> = ({ question, selectedAnswer, onSelectAnswer, showFeedback }) => {
  const getLevelColor = (level: number) => {
    switch (level) {
      case 1: return 'bg-[#16A34A]';
      case 2: return 'bg-[#2563EB]';
      case 3: return 'bg-[#D97706]';
      case 4: return 'bg-[#DC2626]';
      default: return 'bg-gray-500';
    }
  };

  const isCorrect = selectedAnswer === question.correct_answer;

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm mb-6">
      <div className="flex flex-wrap gap-2 mb-4">
        <span className={`text-white text-xs font-bold uppercase tracking-wider px-2 py-1 rounded-sm ${getLevelColor(question.complexity_level)}`}>
          Level {question.complexity_level}
        </span>
        <span className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs px-2 py-1 rounded-sm border border-slate-200 dark:border-slate-700">
          {question.topic_tag.replace(/_/g, ' ')}
        </span>
      </div>

      <h3 className="text-lg md:text-xl font-medium text-slate-900 dark:text-slate-100 mb-6 leading-relaxed">
        {question.question_number && <span className="font-bold text-[#D4A017] mr-2">{question.question_number}.</span>}
        {question.question_text}
      </h3>

      <div className="flex flex-col gap-3">
        {(['A', 'B', 'C', 'D'] as const).map((opt) => {
          const isSelected = selectedAnswer === opt;
          const isActuallyCorrect = question.correct_answer === opt;
          
          let btnClass = "text-left p-4 rounded-lg border transition-colors flex items-start gap-3 ";
          
          if (!showFeedback) {
            btnClass += isSelected 
              ? "border-[#1B3A6B] bg-[#1B3A6B]/5 dark:bg-[#1B3A6B]/20" 
              : "border-slate-200 dark:border-slate-700 hover:border-[#1B3A6B]/50 hover:bg-slate-50 dark:hover:bg-slate-800/50";
          } else {
            if (isActuallyCorrect) {
              btnClass += "border-[#16A34A] bg-[#16A34A]/10";
            } else if (isSelected && !isActuallyCorrect) {
              btnClass += "border-[#DC2626] bg-[#DC2626]/10";
            } else {
              btnClass += "border-slate-200 dark:border-slate-800 opacity-50";
            }
          }

          return (
            <button
              key={opt}
              onClick={() => !showFeedback && onSelectAnswer(opt)}
              disabled={showFeedback}
              className={btnClass}
            >
              <span className={`font-bold mt-0.5 ${showFeedback && isActuallyCorrect ? 'text-[#16A34A]' : showFeedback && isSelected ? 'text-[#DC2626]' : 'text-[#1B3A6B]'}`}>
                {opt})
              </span>
              <span className="text-slate-700 dark:text-slate-300">
                {question[`option_${opt.toLowerCase()}` as keyof RE1Question]}
              </span>
            </button>
          );
        })}
      </div>

      {showFeedback && (
        <div className={`mt-6 p-5 rounded-lg border ${isCorrect ? 'bg-[#16A34A]/5 border-[#16A34A]/20' : 'bg-[#DC2626]/5 border-[#DC2626]/20'}`}>
          <div className="flex items-center gap-2 mb-2">
            <span className={`font-bold ${isCorrect ? 'text-[#16A34A]' : 'text-[#DC2626]'}`}>
              {isCorrect ? '✓ Correct' : '✗ Incorrect'}
            </span>
          </div>
          <p className="text-slate-700 dark:text-slate-300 text-sm md:text-base leading-relaxed mb-3">
            {question.explanation}
          </p>
          {question.legislative_ref && (
            <div className="font-mono text-xs text-slate-500 dark:text-slate-400 bg-white/50 dark:bg-black/20 p-2 rounded inline-block">
              Ref: {question.legislative_ref}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
