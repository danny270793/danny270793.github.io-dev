import { useState, useEffect } from 'preact/hooks';

type Theme = 'light' | 'dark' | 'system';

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme') as Theme;
      return savedTheme || 'system';
    }
    return 'system';
  });

  const [systemTheme, setSystemTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  });

  // Initialize theme immediately on first render
  const [isInitialized, setIsInitialized] = useState(false);

  const effectiveTheme = theme === 'system' ? systemTheme : theme;

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      setSystemTheme(e.matches ? 'dark' : 'light');
    };

    mediaQuery.addEventListener('change', handleSystemThemeChange);
    
    return () => {
      mediaQuery.removeEventListener('change', handleSystemThemeChange);
    };
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    
    if (effectiveTheme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    // Debug logging
    console.log('Theme updated:', {
      theme,
      systemTheme,
      effectiveTheme,
      darkClassAdded: root.classList.contains('dark')
    });

    if (!isInitialized) {
      setIsInitialized(true);
    }
  }, [effectiveTheme, isInitialized]);

  const setThemeMode = (newTheme: Theme) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const toggleTheme = () => {
    if (theme === 'system') {
      setThemeMode(systemTheme === 'dark' ? 'light' : 'dark');
    } else if (theme === 'light') {
      setThemeMode('dark');
    } else {
      setThemeMode('light');
    }
  };

  const getThemeIcon = () => {
    if (theme === 'system') {
      return systemTheme === 'dark' ? '🌙' : '☀️';
    }
    return theme === 'dark' ? '🌙' : '☀️';
  };

  const getThemeLabel = () => {
    if (theme === 'system') {
      return `System (${systemTheme})`;
    }
    return theme === 'dark' ? 'Dark' : 'Light';
  };

  return {
    theme,
    systemTheme,
    effectiveTheme,
    setTheme: setThemeMode,
    toggleTheme,
    getThemeIcon,
    getThemeLabel,
  };
}
