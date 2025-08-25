import { useState, useEffect } from 'preact/hooks';

type Theme = 'light' | 'dark' | 'system';

export function useTheme() {
  const [theme, setTheme] = useState<Theme>('light'); // Start with light to test
  const [systemTheme, setSystemTheme] = useState<'light' | 'dark'>('light');
  const [isInitialized, setIsInitialized] = useState(false);

  const effectiveTheme = theme === 'system' ? systemTheme : theme;

  // Initialize theme on first mount
  useEffect(() => {
    if (typeof window !== 'undefined' && !isInitialized) {
      const savedTheme = (localStorage.getItem('theme') as Theme) || 'system';
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      
      setSystemTheme(systemPrefersDark ? 'dark' : 'light');
      setTheme(savedTheme);
      setIsInitialized(true);
      
      console.log('Theme initialized:', { savedTheme, systemPrefersDark });
    }
  }, [isInitialized]);

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
    if (typeof window === 'undefined') return;
    
    const root = document.documentElement;
    
    // Force immediate application
    setTimeout(() => {
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
        darkClassAdded: root.classList.contains('dark'),
        htmlClasses: root.className
      });
    }, 0);

    if (!isInitialized) {
      setIsInitialized(true);
    }
  }, [effectiveTheme, isInitialized]);

  const setThemeMode = (newTheme: Theme) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const applyThemeToDOM = (themeToApply: 'light' | 'dark') => {
    const root = document.documentElement;
    if (themeToApply === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    console.log('Theme applied to DOM:', themeToApply, 'Dark class present:', root.classList.contains('dark'));
  };

  const toggleTheme = () => {
    let newTheme: Theme;
    let newEffectiveTheme: 'light' | 'dark';
    
    if (theme === 'system') {
      newTheme = systemTheme === 'dark' ? 'light' : 'dark';
      newEffectiveTheme = newTheme;
    } else if (theme === 'light') {
      newTheme = 'dark';
      newEffectiveTheme = 'dark';
    } else {
      newTheme = 'light';
      newEffectiveTheme = 'light';
    }
    
    // Apply to DOM immediately
    applyThemeToDOM(newEffectiveTheme);
    
    // Update state
    setThemeMode(newTheme);
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
