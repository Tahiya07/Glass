import React from 'react';

export type ThemeName = 'light' | 'dusk' | 'dark' | 'oled';

const STORAGE_KEY = 'orion-student-theme';
const FALLBACK_THEME: ThemeName = 'dusk';
const THEMES: ThemeName[] = ['light', 'dusk', 'dark', 'oled'];

const normalizeTheme = (value: string | null): ThemeName => {
  if (!value) {
    return FALLBACK_THEME;
  }
  return THEMES.includes(value as ThemeName) ? (value as ThemeName) : FALLBACK_THEME;
};

export const useTheme = () => {
  const [theme, setTheme] = React.useState<ThemeName>(() => {
    if (typeof window === 'undefined') {
      return FALLBACK_THEME;
    }
    return normalizeTheme(window.localStorage.getItem(STORAGE_KEY));
  });

  React.useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('light', 'dusk', 'dark', 'oled');
    root.classList.add(theme);
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const cycleTheme = React.useCallback(() => {
    const index = THEMES.indexOf(theme);
    const next = THEMES[(index + 1) % THEMES.length];
    setTheme(next);
  }, [theme]);

  return { theme, setTheme, cycleTheme };
};
