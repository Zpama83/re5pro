import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { RE1ResultsSummary } from '@/components/re1/RE1ResultsSummary';
import { RE1QuestionCard } from '@/components/re1/RE1QuestionCard';
import { RE1UserSession, RE1Question } from '@/types/re1';

const RE1ResultsPage = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get('session');
  const isLocal = searchParams.get('local') === 'true';

  const [session, setSession] = useState<RE1UserSession | null>(null);
  const [questions, setQuestions] = useState<RE1Question[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [showIncorrectOnly, setShowIncorrectOnly] = useState(false);

  useEffect(() => {
    const loadResults = async () => {
      setLoading(true);
      if (isLocal) {
        const localData = localStorage.getItem('re1_temp_results');
        if (localData) {
          const parsed = JSON.parse(localData);
          setQuestions(parsed.questions);
          
          const correct = parsed.questions.filter((q: RE1Question) => parsed.answers[q.id] === q.correct_answer).length;
          const total = parsed.questions.length;
          const scorePercent = total > 0 ? Number(((correct / total) * 100).toFixed(2)) : 0;
          
          const topicBreakdown: Record<string, { correct: number; total: number }> = {};
          parsed.questions.forEach((q: RE1Question) => {
            if (!topicBreakdown[q.topic_tag]) topicBreakdown[q.topic_tag] = { correct: 0, total: 0 };
            topicBreakdown[q.topic_tag].total += 1;
            if (parsed.answers[q.id] === q.correct_answer) topicBreakdown[q.topic_tag].correct += 1;
          });

          setSession({
            id: 'local',
            session_type: 'mock_exam',
            started_at: '',
            total_questions: total,
            correct_answers: correct,
            score_percent: scorePercent,
            time_taken_secs: parsed.timeTakenSecs,
            answers: parsed.answers,
            topic_breakdown: topicBreakdown
          });
        } else {
          setError("No local results found.");
        }
        setLoading(false);
      } else if (sessionId) {
        try {
          const { data, error: sbError } = await supabase
            .from('re1_user_sessions')
            .select('*')
            .eq('id', sessionId)
            .single();
            
          if (sbError) throw sbError;
          setSession(data as RE1UserSession);
          
          // Fetch questions answered in this session
          const qIds = Object.keys(data.answers);
          if (qIds.length > 0) {
            const { data: qData, error: qError } = await supabase
              .from('re1_questions')
              .select('*')
              .in('id', qIds);
            if (qError) throw qError;
            setQuestions(qData as RE1Question[]);
          }
        } catch (err: any) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      } else {
        setError("Invalid session ID.");
        setLoading(false);
      }
    };

    loadResults();
  }, [sessionId, isLocal]);

  if (loading) return <div className="p-12 text-center text-xl text-[#1B3A6B] font-bold">Loading results...</div>;
  if (error || !session) return <div className="p-12 text-center text-red-500 font-bold">Error loading results: {error}</div>;

  const displayQuestions = showIncorrectOnly 
    ? questions.filter(q => session.answers[q.id] !== q.correct_answer)
    : questions;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="mb-4">
          <Link to="/re1" className="text-sm font-medium text-slate-500 hover:text-slate-800 flex items-center gap-2">
            ← Back to RE1 Dashboard
          </Link>
        </div>

        <RE1ResultsSummary 
          totalQuestions={session.total_questions}
          correctAnswers={session.correct_answers}
          scorePercent={session.score_percent}
          timeTakenSecs={session.time_taken_secs}
          topicBreakdown={session.topic_breakdown}
        />

        <div className="pt-8 border-t border-slate-200 dark:border-slate-800">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Question Review</h3>
            <label className="flex items-center gap-2 cursor-pointer bg-white dark:bg-slate-900 px-4 py-2 rounded-lg border shadow-sm">
              <input 
                type="checkbox" 
                checked={showIncorrectOnly}
                onChange={() => setShowIncorrectOnly(!showIncorrectOnly)}
                className="rounded border-slate-300 text-[#DC2626] focus:ring-[#DC2626]"
              />
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Show Incorrect Only</span>
            </label>
          </div>

          <div className="space-y-6">
            {displayQuestions.map(q => (
              <RE1QuestionCard 
                key={q.id}
                question={q}
                selectedAnswer={session.answers[q.id] || null}
                onSelectAnswer={() => {}}
                showFeedback={true} // Always show feedback in results
              />
            ))}
            {displayQuestions.length === 0 && (
              <div className="text-center text-slate-500 p-8 bg-white rounded-xl border">
                No questions match the current filter.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RE1ResultsPage;
