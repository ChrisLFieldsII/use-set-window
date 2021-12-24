import { useEffect } from 'react';

export function useSetWindow(key: string, value: unknown) {
  useEffect(() => {
    window[key] = value;
  }, [key, value]);
}
