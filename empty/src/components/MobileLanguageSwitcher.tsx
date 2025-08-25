import { useTranslation } from 'react-i18next';

interface LanguageOption {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
}

interface MobileLanguageSwitcherProps {
  onLanguageChange?: () => void;
}

export function MobileLanguageSwitcher({ onLanguageChange }: MobileLanguageSwitcherProps) {
  const { i18n, t } = useTranslation();

  const languages: LanguageOption[] = [
    {
      code: 'en',
      name: t('language.english'),
      nativeName: t('language.nativeEnglish'),
      flag: '🇺🇸'
    },
    {
      code: 'es',
      name: t('language.spanish'),
      nativeName: t('language.nativeSpanish'),
      flag: '🇪🇸'
    }
  ];

  const handleLanguageChange = (languageCode: string) => {
    i18n.changeLanguage(languageCode);
    onLanguageChange?.();
  };

  return (
    <div className="border-t border-gray-200 dark:border-gray-600 mt-4 pt-4">
      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3 px-3">
        {t('language.selector')}
      </h3>
      <div className="space-y-1">
        {languages.map((language) => (
          <button
            key={language.code}
            onClick={() => handleLanguageChange(language.code)}
            className={`w-full px-3 py-3 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center gap-3 rounded-md mx-2 ${
              i18n.language === language.code 
                ? 'bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400' 
                : 'text-gray-700 dark:text-gray-300'
            }`}
          >
            <span className="text-lg">{language.flag}</span>
            <div className="flex-1">
              <div className="font-medium text-sm">{language.nativeName}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                {language.name}
              </div>
            </div>
            {i18n.language === language.code && (
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
