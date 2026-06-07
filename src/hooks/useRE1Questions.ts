import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { RE1Question, RE1TopicTag, RE1ComplexityLevel } from '@/types/re1';

export const useRE1Questions = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchPracticeQuestions = async (options: { topics: string[], levels: number[], limit?: number }) => {
    setLoading(true);
    setError(null);
    try {
      let query = supabase
        .from('re1_questions')
        .select('*')
        .eq('is_active', true)
        .limit(options.limit || 20);

      if (options.topics.length > 0) {
        query = query.in('topic_tag', options.topics);
      }
      if (options.levels.length > 0) {
        query = query.in('complexity_level', options.levels);
      }

      const { data, error: sbError } = await query;
      if (sbError) throw sbError;
      
      // Shuffle client side
      const shuffled = (data as RE1Question[]).sort(() => 0.5 - Math.random());
      return { data: shuffled, error: null };
    } catch (err: any) {
      console.error(err);
      setError(err.message);
      return { data: null, error: err.message };
    } finally {
      setLoading(false);
    }
  };

  const fetchMockExamQuestions = async () => {
    setLoading(true);
    setError(null);
    try {
      const easyPoolRes = await supabase
        .from('re1_questions')
        .select('*')
        .eq('is_active', true)
        .in('complexity_level', [1, 2])
        .limit(80); 

      const hardPoolRes = await supabase
        .from('re1_questions')
        .select('*')
        .eq('is_active', true)
        .in('complexity_level', [3, 4])
        .limit(80);

      if (easyPoolRes.error) throw easyPoolRes.error;
      if (hardPoolRes.error) throw hardPoolRes.error;

      const easy = (easyPoolRes.data as RE1Question[]).sort(() => 0.5 - Math.random());
      const hard = (hardPoolRes.data as RE1Question[]).sort(() => 0.5 - Math.random());

      // Try to assemble, if not enough questions just use what we have
      const part1 = easy.slice(0, 18);
      const part2 = hard.slice(0, 44);
      const part3 = easy.slice(18, 36);

      // If we don't have enough to fill 80 exactly, just merge whatever is available
      let assembled = [...part1, ...part2, ...part3];
      
      // Fallback if db lacks questions:
      if (assembled.length === 0) {
          assembled = [...easy, ...hard].sort(() => 0.5 - Math.random());
      }

      return { data: assembled, error: null };
    } catch (err: any) {
      console.error(err);
      setError(err.message);
      return { data: null, error: err.message };
    } finally {
      setLoading(false);
    }
  };

  return { fetchPracticeQuestions, fetchMockExamQuestions, loading, error };
};
