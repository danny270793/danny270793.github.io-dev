import { useTranslation } from 'react-i18next';
import { useTheme } from '../hooks/useTheme';

type Theme = 'light' | 'dark' | 'system';

interface ThemeOption {
  value: Theme;
  label: string;
  icon: string;
  description: string;
}

interface MobileThemeMenuProps {
  onThemeSelect?: () => void;
}

export function MobileThemeMenu({ onThemeSelect }: MobileThemeMenuProps) {
  const { theme, setTheme } = useTheme();
  const { t } = useTranslation();

  const themeOptions: ThemeOption[] = [
    {
      value: 'light',
      label: t('theme.light'),
      icon: '☀️',
      description: t('theme.descriptions.light')
    },
    {
      value: 'dark',
      label: t('theme.dark'),
      icon: '🌙',
      description: t('theme.descriptions.dark')
    },
    {
      value: 'system',
      label: t('theme.system'),
      icon: '💻',
      description: t('theme.descriptions.system')
    }
  ];

  const handleThemeSelect = (selectedTheme: Theme) => {
    setTheme(selectedTheme);
    onThemeSelect?.();
  };

  return (
    <div className="border-t border-gray-200 dark:border-gray-600 mt-4 pt-4">
      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3 px-3">
        {t('theme.preference')}
      </h3>
      <div className="space-y-1">
        {themeOptions.map((option) => (
          <button
            key={option.value}
            onClick={() => handleThemeSelect(option.value)}
            className={`w-full px-3 py-3 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center gap-3 rounded-md mx-2 ${
              theme === option.value 
                ? 'bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400' 
                : 'text-gray-700 dark:text-gray-300'
            }`}
          >
            <span className="text-lg">{option.icon}</span>
            <div className="flex-1">
              <div className="font-medium text-sm">{option.label}</div>
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
    </div>
  );
}
