import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { RE1Question } from '@/types/re1';

export const useRE1Session = () => {
  const [saving, setSaving] = useState(false);

  const saveSession = async ({
    userId,
    type,
    questions,
    answers,
    timeTakenSecs,
  }: {
    userId?: string;
    type: 'practice' | 'mock_exam';
    questions: RE1Question[];
    answers: Record<string, 'A' | 'B' | 'C' | 'D'>;
    timeTakenSecs: number;
  }) => {
    setSaving(true);
    try {
      const correct = questions.filter(q => answers[q.id] === q.correct_answer).length;
      const total = questions.length;
      const scorePercent = total > 0 ? Number(((correct / total) * 100).toFixed(2)) : 0;

      const topicBreakdown: Record<string, { correct: number; total: number }> = {};
      questions.forEach(q => {
        if (!topicBreakdown[q.topic_tag]) {
          topicBreakdown[q.topic_tag] = { correct: 0, total: 0 };
        }
        topicBreakdown[q.topic_tag].total += 1;
        if (answers[q.id] === q.correct_answer) {
          topicBreakdown[q.topic_tag].correct += 1;
        }
      });

      const { data, error } = await supabase.from('re1_user_sessions').insert({
        user_id: userId,
        session_type: type,
        completed_at: new Date().toISOString(),
        total_questions: total,
        correct_answers: correct,
        score_percent: scorePercent,
        time_taken_secs: timeTakenSecs,
        answers,
        topic_breakdown: topicBreakdown,
      }).select();

      if (error) throw error;
      return { data: data?.[0], error: null };
    } catch (err: any) {
      console.error('Failed to save session:', err);
      return { data: null, error: err.message };
    } finally {
      setSaving(false);
    }
  };

  return { saveSession, saving };
};
