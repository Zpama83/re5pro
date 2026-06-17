import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useRE1Questions } from '@/hooks/useRE1Questions';
import { RE1QuestionCard } from '@/components/re1/RE1QuestionCard';
import { RE1TopNav } from '@/components/re1/RE1TopNav';
import { DiscussPanel } from '@/components/community/DiscussPanel';
import { RE1Question, RE1TopicTag, RE1ComplexityLevel } from '@/types/re1';

const ALL_TOPICS: RE1TopicTag[] = [
  'debarment_s14', 'fit_and_proper', 'key_individual_duties', 'compliance_officer',
  'fais_ombud', 'general_code_of_conduct', 'needs_analysis', 'disclosure_requirements',
  'fsca_licensing', 'license_lapse_suspension', 'business_rescue', 'fica_aml',
  'regulatory_levies', 'dofa_timelines', 'representative_oversight', 'medical_schemes_act'
];

// Placeholder until a topic -> syllabus-day map exists; the Discuss panel keys
// the forum room by (track, day). Until then it falls back to demo data.
const DISCUSS_DAY = 4;

const RE1PracticePage = () => {
  const { fetchPracticeQuestions, loading, error } = useRE1Questions();
  
  const [questions, setQuestions] = useState<RE1Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [selectedLevels, setSelectedLevels] = useState<number[]>([]);
  
  // Session State
  const [answers, setAnswers] = useState<Record<string, 'A' | 'B' | 'C' | 'D'>>({});
  const [showFeedback, setShowFeedback] = useState(false);
  const [sessionStarted, setSessionStarted] = useState(false);
  const [discussOpen, setDiscussOpen] = useState(false);

  const startSession = async () => {
    const { data } = await fetchPracticeQuestions({ 
      topics: selectedTopics, 
      levels: selectedLevels,
      limit: 20 
    });
    
    if (data) {
      setQuestions(data);
      setCurrentIndex(0);
      setAnswers({});
      setShowFeedback(false);
      setSessionStarted(true);
    }
  };

  const handleAnswerSelect = (answer: 'A' | 'B' | 'C' | 'D') => {
    if (showFeedback) return;
    
    const currentQ = questions[currentIndex];
    setAnswers(prev => ({ ...prev, [currentQ.id]: answer }));
    setShowFeedback(true);
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setShowFeedback(false);
    }
  };

  const toggleTopic = (t: string) => {
    setSelectedTopics(prev => prev.includes(t) ? prev.filter(x => x !== t) : [...prev, t]);
  };

  const toggleLevel = (l: number) => {
    setSelectedLevels(prev => prev.includes(l) ? prev.filter(x => x !== l) : [...prev, l]);
  };

  if (!sessionStarted) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
        <RE1TopNav />
        <div className="max-w-4xl mx-auto py-12 px-4">
        <Link to="/re1" className="text-sm font-medium text-slate-500 hover:text-slate-800 mb-8 inline-block">← Back to RE1 Dashboard</Link>
        <h1 className="text-3xl font-bold mb-8 text-[#1B3A6B]">Practice Configuration</h1>
        
        <div className="bg-white p-6 rounded-xl border shadow-sm mb-8">
          <h2 className="text-xl font-bold mb-4">Select Topics</h2>
          <div className="flex flex-wrap gap-2">
            {ALL_TOPICS.map(t => (
              <button
                key={t}
                onClick={() => toggleTopic(t)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors border ${
                  selectedTopics.includes(t) 
                    ? 'bg-[#1B3A6B] text-white border-[#1B3A6B]' 
                    : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border-slate-200'
                }`}
              >
                {t.replace(/_/g, ' ')}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border shadow-sm mb-8">
          <h2 className="text-xl font-bold mb-4">Select Complexity Levels</h2>
          <div className="flex flex-wrap gap-4">
            {[1, 2, 3, 4].map(l => (
              <label key={l} className="flex items-center gap-2 cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={selectedLevels.includes(l)}
                  onChange={() => toggleLevel(l)}
                  className="w-5 h-5 rounded border-slate-300 text-[#1B3A6B] focus:ring-[#1B3A6B]"
                />
                <span className="font-medium text-slate-700">Level {l}</span>
              </label>
            ))}
          </div>
        </div>

        <button 
          onClick={startSession}
          disabled={loading}
          className="w-full py-4 bg-[#1B3A6B] text-white rounded-xl font-bold text-lg hover:bg-[#1B3A6B]/90 disabled:opacity-50"
        >
          {loading ? 'Loading questions...' : 'Start Practice Session'}
        </button>

        {error && <div className="mt-4 text-red-600 bg-red-50 p-4 rounded-lg">{error}</div>}
        </div>
      </div>
    );
  }

  if (questions.length === 0) return <div className="p-12 text-center text-slate-500">No questions found for the selected filters.</div>;

  const currentQ = questions[currentIndex];
  const correctCount = Object.keys(answers).filter(id => answers[id] === questions.find(q => q.id === id)?.correct_answer).length;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <RE1TopNav />
      <div className="max-w-3xl mx-auto py-12 px-4">
      <div className="flex justify-between items-center mb-8">
        <button onClick={() => setSessionStarted(false)} className="text-sm font-medium text-slate-500 hover:text-slate-800">
          End Practice
        </button>
        <button onClick={() => setDiscussOpen(true)} className="text-sm font-medium text-[#1B3A6B] hover:text-[#1B3A6B]/80 inline-flex items-center gap-1">
          💬 Discuss this question
        </button>
        <div className="text-sm font-bold text-slate-700 bg-slate-100 px-3 py-1 rounded-full border">
          Score: {correctCount} / {Object.keys(answers).length}
        </div>
        <div className="text-sm font-bold text-slate-700 bg-slate-100 px-3 py-1 rounded-full border">
          Q {currentIndex + 1} of {questions.length}
        </div>
      </div>

      <RE1QuestionCard
        question={currentQ}
        selectedAnswer={answers[currentQ.id] || null}
        onSelectAnswer={handleAnswerSelect}
        showFeedback={showFeedback}
      />

      <div className="flex justify-end mt-6">
        {showFeedback && currentIndex < questions.length - 1 && (
          <button 
            onClick={handleNext}
            className="px-8 py-3 bg-[#1B3A6B] text-white font-bold rounded-lg hover:bg-[#1B3A6B]/90"
          >
            Next Question
          </button>
        )}
        {showFeedback && currentIndex === questions.length - 1 && (
          <button
            onClick={() => setSessionStarted(false)}
            className="px-8 py-3 bg-[#16A34A] text-white font-bold rounded-lg hover:bg-[#16A34A]/90"
          >
            Finish Practice
          </button>
        )}
      </div>
      </div>
      <DiscussPanel
        open={discussOpen}
        onClose={() => setDiscussOpen(false)}
        track="RE1"
        day={DISCUSS_DAY}
        topic={currentQ.topic_tag.replace(/_/g, ' ')}
        questionRef={`RE1 Q${currentIndex + 1}`}
        legislativeRef={currentQ.legislative_ref}
      />
    </div>
  );
};

export default RE1PracticePage;
