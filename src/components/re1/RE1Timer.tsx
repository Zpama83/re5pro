import React, { useState, useEffect } from 'react';

interface Props {
  totalSeconds: number;
  onExpire: () => void;
  storageKey: string;
}

export const RE1Timer: React.FC<Props> = ({ totalSeconds, onExpire, storageKey }) => {
  const [timeLeft, setTimeLeft] = useState(totalSeconds);

  useEffect(() => {
    // Check if we have a saved end time for this specific mock exam session
    const savedEndTime = localStorage.getItem(storageKey);
    let targetTime: number;

    if (savedEndTime) {
      targetTime = parseInt(savedEndTime, 10);
    } else {
      targetTime = Date.now() + totalSeconds * 1000;
      localStorage.setItem(storageKey, targetTime.toString());
    }

    const interval = setInterval(() => {
      const now = Date.now();
      const remaining = Math.max(0, Math.floor((targetTime - now) / 1000));
      
      setTimeLeft(remaining);

      if (remaining <= 0) {
        clearInterval(interval);
        localStorage.removeItem(storageKey);
        onExpire();
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [totalSeconds, onExpire, storageKey]);

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  let colorClass = "text-slate-700 dark:text-slate-200";
  if (timeLeft < 600) { // < 10 mins
    colorClass = "text-[#DC2626] font-bold animate-pulse";
  } else if (timeLeft < 1800) { // < 30 mins
    colorClass = "text-[#F59E0B] font-bold";
  }

  return (
    <div className={`font-mono text-xl ${colorClass} bg-white dark:bg-slate-900 px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm`}>
      {formatTime(timeLeft)}
    </div>
  );
};
