import { useState, useRef, useEffect } from 'preact/hooks';
import { useTheme } from '../hooks/useTheme';

type Theme = 'light' | 'dark' | 'system';

interface ThemeOption {
  value: Theme;
  label: string;
  icon: string;
  description: string;
}

export function ThemeDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme, getThemeIcon, getThemeLabel } = useTheme();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const themeOptions: ThemeOption[] = [
    {
      value: 'light',
      label: 'Light',
      icon: '☀️',
      description: 'Always use light mode'
    },
    {
      value: 'dark',
      label: 'Dark',
      icon: '🌙',
      description: 'Always use dark mode'
    },
    {
      value: 'system',
      label: 'System',
      icon: '💻',
      description: 'Use system preference'
    }
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleThemeSelect = (selectedTheme: Theme) => {
    setTheme(selectedTheme);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Theme Toggle Button */}
      <button
        className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors group flex items-center gap-2"
        onClick={() => setIsOpen(!isOpen)}
        title={`Current theme: ${getThemeLabel()}`}
        aria-label="Toggle theme menu"
        aria-expanded={isOpen}
      >
        <span className="text-lg group-hover:scale-110 transition-transform duration-200">
          {getThemeIcon()}
        </span>
        <span className="hidden sm:block text-sm font-medium text-gray-700 dark:text-gray-300">
          {theme.charAt(0).toUpperCase() + theme.slice(1)}
        </span>
        <svg 
          className={`w-4 h-4 text-gray-500 dark:text-gray-400 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-64 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg shadow-lg z-50 py-1">
          {themeOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => handleThemeSelect(option.value)}
              className={`w-full px-4 py-3 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center gap-3 ${
                theme === option.value 
                  ? 'bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400' 
                  : 'text-gray-700 dark:text-gray-300'
              }`}
            >
              <span className="text-lg">{option.icon}</span>
              <div className="flex-1">
                <div className="font-medium">{option.label}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                  {option.description}
                </div>
              </div>
              {theme === option.value && (
                <svg className="w-4 h-4 text-indigo-600 dark:text-indigo-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
