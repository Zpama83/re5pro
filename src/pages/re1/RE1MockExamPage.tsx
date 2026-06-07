import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRE1Questions } from '@/hooks/useRE1Questions';
import { useRE1Session } from '@/hooks/useRE1Session';
import { RE1QuestionCard } from '@/components/re1/RE1QuestionCard';
import { RE1Timer } from '@/components/re1/RE1Timer';
import { RE1Question } from '@/types/re1';

const STORAGE_KEY = 're1_mock_exam_end_time';
const ANSWERS_KEY = 're1_mock_exam_answers';

const RE1MockExamPage = () => {
  const navigate = useNavigate();
  const { fetchMockExamQuestions, loading, error } = useRE1Questions();
  const { saveSession, saving } = useRE1Session();
  
  const [questions, setQuestions] = useState<RE1Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, 'A' | 'B' | 'C' | 'D'>>({});
  const [startedAt, setStartedAt] = useState<number | null>(null);

  useEffect(() => {
    // Initial load
    const loadExam = async () => {
      const { data } = await fetchMockExamQuestions();
      if (data) {
        // Enforce sequential numbering 1-80 for the mock
        const numberedData = data.map((q, i) => ({ ...q, question_number: i + 1 }));
        setQuestions(numberedData);
        setStartedAt(Date.now());

        // Restore answers if any
        const savedAnswers = localStorage.getItem(ANSWERS_KEY);
        if (savedAnswers) {
          try {
            setAnswers(JSON.parse(savedAnswers));
          } catch (e) {
            console.error('Failed to parse saved answers');
          }
        }
      }
    };
    loadExam();
  }, []);

  const handleAnswerSelect = (answer: 'A' | 'B' | 'C' | 'D') => {
    const currentQ = questions[currentIndex];
    const newAnswers = { ...answers, [currentQ.id]: answer };
    setAnswers(newAnswers);
    localStorage.setItem(ANSWERS_KEY, JSON.stringify(newAnswers));
  };

  const handleTimeExpire = () => {
    handleSubmit(true);
  };

  const handleSubmit = async (forced = false) => {
    if (!forced) {
      const answeredCount = Object.keys(answers).length;
      if (answeredCount < questions.length) {
        const confirm = window.confirm(`You have only answered ${answeredCount} of ${questions.length} questions. Are you sure you want to submit?`);
        if (!confirm) return;
      }
    }

    const timeTakenSecs = startedAt ? Math.floor((Date.now() - startedAt) / 1000) : 0;
    
    // Clean up local storage
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(ANSWERS_KEY);

    // Save session to Supabase
    // Using a mocked user_id for now as auth is not fully hooked up in UI
    const res = await saveSession({
      type: 'mock_exam',
      questions,
      answers,
      timeTakenSecs
    });

    if (res.data) {
      navigate(`/re1/mock-exam/results?session=${res.data.id}`);
    } else {
      // Fallback if save fails (e.g., offline)
      alert("Failed to save session to database, but you can still view results.");
      localStorage.setItem('re1_temp_results', JSON.stringify({ questions, answers, timeTakenSecs }));
      navigate(`/re1/mock-exam/results?local=true`);
    }
  };

  if (loading) return <div className="flex min-h-screen items-center justify-center font-bold text-xl text-[#1B3A6B]">Loading 80 Mock Exam Questions...</div>;
  if (error) return <div className="p-12 text-center text-red-500">Error: {error}</div>;
  if (questions.length === 0) return null;

  const currentQ = questions[currentIndex];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col">
      {/* Sticky Header */}
      <div className="sticky top-0 z-50 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 p-4 shadow-sm flex justify-between items-center">
        <div className="font-bold text-[#1B3A6B] dark:text-white hidden sm:block">RE1 Mock Exam</div>
        
        <RE1Timer 
          totalSeconds={150 * 60} 
          onExpire={handleTimeExpire} 
          storageKey={STORAGE_KEY} 
        />
        
        <button 
          onClick={() => handleSubmit(false)}
          disabled={saving}
          className="px-4 py-2 bg-[#DC2626] text-white font-bold rounded hover:bg-[#DC2626]/90 disabled:opacity-50"
        >
          {saving ? 'Submitting...' : 'Submit Exam'}
        </button>
      </div>

      <div className="flex-grow flex flex-col md:flex-row max-w-7xl w-full mx-auto p-4 gap-6">
        {/* Main Question Area */}
        <div className="flex-grow md:w-3/4">
          <RE1QuestionCard
            question={currentQ}
            selectedAnswer={answers[currentQ.id] || null}
            onSelectAnswer={handleAnswerSelect}
            showFeedback={false} // Never show feedback during mock exam
          />

          <div className="flex justify-between mt-6">
            <button 
              onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
              disabled={currentIndex === 0}
              className="px-6 py-2 border border-slate-300 rounded font-medium disabled:opacity-30"
            >
              ← Previous
            </button>
            <button 
              onClick={() => setCurrentIndex(prev => Math.min(questions.length - 1, prev + 1))}
              disabled={currentIndex === questions.length - 1}
              className="px-6 py-2 bg-[#1B3A6B] text-white rounded font-medium disabled:opacity-30"
            >
              Next →
            </button>
          </div>
        </div>

        {/* Sidebar Question Grid */}
        <div className="md:w-1/4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-4 self-start sticky top-24">
          <h3 className="font-bold mb-4 text-center">Question Navigator</h3>
          <div className="grid grid-cols-5 gap-2">
            {questions.map((q, i) => {
              const isAnswered = !!answers[q.id];
              const isCurrent = i === currentIndex;
              
              let btnClass = "w-full aspect-square flex items-center justify-center rounded text-sm font-medium border transition-colors ";
              if (isCurrent) {
                btnClass += "border-2 border-[#1B3A6B] ring-2 ring-[#1B3A6B]/20 ";
              } else {
                btnClass += "border-slate-200 dark:border-slate-700 ";
              }

              if (isAnswered) {
                btnClass += "bg-[#1B3A6B] text-white";
              } else {
                btnClass += "bg-slate-50 dark:bg-slate-800 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-700";
              }

              return (
                <button
                  key={q.id}
                  onClick={() => setCurrentIndex(i)}
                  className={btnClass}
                >
                  {i + 1}
                </button>
              );
            })}
          </div>
          <div className="mt-6 pt-4 border-t border-slate-100 flex justify-between text-xs font-medium text-slate-500">
            <span className="flex items-center gap-1"><span className="w-3 h-3 bg-[#1B3A6B] rounded"></span> Answered</span>
            <span className="flex items-center gap-1"><span className="w-3 h-3 bg-slate-100 border rounded"></span> Unanswered</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RE1MockExamPage;
