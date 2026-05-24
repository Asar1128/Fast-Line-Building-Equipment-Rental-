import { useCallback } from 'react';

export function usePrefetch() {
  const prefetch = useCallback((to: string) => {
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = to;
    document.head.appendChild(link);
  }, []);

  return prefetch;
}
