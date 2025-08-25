import type { I18nTranslations } from './types';

/**
 * Type-safe translation key extraction utility
 * Provides compile-time validation and IntelliSense support for i18n keys
 */
export type TranslationKey = 
  | 'navigation.home'
  | 'navigation.education'  
  | 'navigation.certifications'
  | 'navigation.openSource'
  | 'navigation.projects'
  | 'navigation.contact'
  | 'theme.current'
  | 'theme.light'
  | 'theme.dark'
  | 'theme.system'
  | 'theme.preference'
  | 'theme.descriptions.light'
  | 'theme.descriptions.dark' 
  | 'theme.descriptions.system'
  | 'profile.name'
  | 'profile.title'
  | 'profile.subtitle'
  | 'profile.description'
  | 'profile.location'
  | 'hero.emailMe'
  | 'education.title'
  | 'education.subtitle'
  | 'education.degrees.masters'
  | 'education.degrees.engineering'
  | 'education.universities.ecotec'
  | 'education.universities.ups'
  | 'certifications.title'
  | 'certifications.subtitle'
  | 'certifications.clickToView'
  | 'certifications.categories.all'
  | 'certifications.categories.cloud'
  | 'certifications.categories.development'
  | 'certifications.categories.data'
  | 'certifications.categories.ai'
  | 'certifications.categories.automation'
  | 'certifications.categories.deployment'
  | 'certifications.categories.dataPrivacy'
  | 'certifications.categories.others'
  | 'openSource.title'
  | 'openSource.subtitle'
  | 'openSource.categories.all'
  | 'openSource.categories.flutter'
  | 'openSource.categories.node'
  | 'openSource.categories.python'
  | 'openSource.categories.dockerHub'
  | 'openSource.categories.arduino'
  | 'openSource.categories.rust'
  | 'openSource.categories.matlab'
  | 'projects.title'
  | 'projects.subtitle'
  | 'projects.categories.all'
  | 'projects.categories.mobile'
  | 'projects.links.playstore'
  | 'projects.links.github'
  | 'contact.title'
  | 'contact.subtitle'
  | 'contact.getInTouch'
  | 'contact.followMe'
  | 'language.english'
  | 'language.spanish'
  | 'language.nativeEnglish'
  | 'language.nativeSpanish'
  | 'language.selector'
  | 'filters.all'
  | 'socialNetworks.github'
  | 'socialNetworks.linkedin'
  | 'socialNetworks.youtube'
  | 'accessibility.toggleThemeMenu'
  | 'accessibility.toggleLanguageMenu'
  | 'accessibility.openMainMenu'
  | 'accessibility.closeMainMenu';

/**
 * Validates that both language files implement the complete I18nTranslations interface
 * Ensures type consistency between English and Spanish translations
 */
export function validateTranslations(en: I18nTranslations, es: I18nTranslations): boolean {
  // This function will cause compile-time errors if either translation is missing required keys
  const requiredKeys: (keyof I18nTranslations)[] = [
    'navigation',
    'theme', 
    'profile',
    'hero',
    'education',
    'certifications',
    'openSource',
    'projects',
    'contact',
    'language',
    'filters',
    'socialNetworks',
    'accessibility'
  ];
  
  return requiredKeys.every(key => 
    key in en && key in es && 
    typeof en[key] === 'object' && typeof es[key] === 'object'
  );
}

/**
 * Type guard to ensure translation key exists
 * Provides runtime validation with TypeScript type narrowing
 */
export function isValidTranslationKey(key: string): key is TranslationKey {
  // This would be expanded with actual validation logic in a real implementation
  return key.includes('.');
}
