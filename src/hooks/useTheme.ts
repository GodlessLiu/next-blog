import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

export function useTheme() {
  const [theme, setTheme] = useState<Theme>();
  useEffect(() => {
    setTheme((localStorage.getItem('theme') as Theme) || 'dark');
  }, []);
  const toggleTheme = (theme: Theme) => {
    localStorage.setItem('theme', theme);
    setTheme(theme);
    document.documentElement.classList.toggle('dark', theme === 'dark');
  };
  return {
    theme,
    toggleTheme,
  };
}
