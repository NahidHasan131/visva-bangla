import { useState } from 'react';

/**
 * Persists list/grid view preference in localStorage.
 * @param {string} key  - unique key per manager (e.g. 'blog', 'video', 'audio', 'users')
 * @param {'list'|'grid'} defaultView
 */
const useViewMode = (key, defaultView = 'list') => {
  const storageKey = `admin_view_${key}`;

  const [view, setViewState] = useState(() => {
    try {
      return localStorage.getItem(storageKey) || defaultView;
    } catch {
      return defaultView;
    }
  });

  const setView = (v) => {
    setViewState(v);
    try { localStorage.setItem(storageKey, v); } catch {}
  };

  return [view, setView];
};

export default useViewMode;
