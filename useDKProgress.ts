import { useCallback, useEffect, useState } from "react";

const KEY = "dk:v1";

interface State {
  bookmarks: string[];
  mastered: string[];
}

const empty: State = { bookmarks: [], mastered: [] };

const read = (): State => {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return empty;
    const parsed = JSON.parse(raw);
    return { bookmarks: parsed.bookmarks ?? [], mastered: parsed.mastered ?? [] };
  } catch {
    return empty;
  }
};

export function useDKProgress() {
  const [state, setState] = useState<State>(empty);

  useEffect(() => {
    setState(read());
  }, []);

  const persist = useCallback((next: State) => {
    setState(next);
    try {
      localStorage.setItem(KEY, JSON.stringify(next));
    } catch {
      /* ignore */
    }
  }, []);

  const toggleBookmark = useCallback(
    (id: string) => {
      const has = state.bookmarks.includes(id);
      persist({
        ...state,
        bookmarks: has ? state.bookmarks.filter((b) => b !== id) : [...state.bookmarks, id],
      });
    },
    [state, persist],
  );

  const toggleMastered = useCallback(
    (id: string) => {
      const has = state.mastered.includes(id);
      persist({
        ...state,
        mastered: has ? state.mastered.filter((m) => m !== id) : [...state.mastered, id],
      });
    },
    [state, persist],
  );

  return {
    bookmarks: state.bookmarks,
    mastered: state.mastered,
    toggleBookmark,
    toggleMastered,
    isBookmarked: (id: string) => state.bookmarks.includes(id),
    isMastered: (id: string) => state.mastered.includes(id),
  };
}
