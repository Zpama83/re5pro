import "@testing-library/jest-dom";

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => {},
  }),
});

// Node 25 installs its own (unusable) `localStorage` global that shadows the
// one jsdom provides, so the real Storage API is missing under test. The app
// persists exam history and the spaced-repetition queue through localStorage,
// and it wraps every access in try/catch — meaning a broken Storage fails
// silently and hides real regressions. Install a working in-memory Storage.
if (typeof localStorage?.clear !== "function") {
  const store = new Map<string, string>();
  const storage: Storage = {
    get length() {
      return store.size;
    },
    key: (i: number) => Array.from(store.keys())[i] ?? null,
    getItem: (k: string) => (store.has(k) ? store.get(k)! : null),
    setItem: (k: string, v: string) => {
      store.set(k, String(v));
    },
    removeItem: (k: string) => {
      store.delete(k);
    },
    clear: () => store.clear(),
  };
  Object.defineProperty(globalThis, "localStorage", { writable: true, value: storage });
  Object.defineProperty(window, "localStorage", { writable: true, value: storage });
}
