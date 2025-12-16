/**
 * LanguageContext
 * Manages language state and provides translation function
 */
import { createContext, useContext, useState, useCallback, useEffect } from 'react';
import translations from './translations';

const STORAGE_KEY = 'bazza_language';
const DEFAULT_LANGUAGE = 'en';
const SUPPORTED_LANGUAGES = ['en', 'ms', 'zh'];

const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
  // Load language from localStorage or use default
  const [language, setLanguageState] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored && SUPPORTED_LANGUAGES.includes(stored)) {
        return stored;
      }
    } catch (e) {
      console.error('Failed to load language preference:', e);
    }
    return DEFAULT_LANGUAGE;
  });

  // Persist language to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, language);
    } catch (e) {
      console.error('Failed to save language preference:', e);
    }
  }, [language]);

  // Set language with validation
  const setLanguage = useCallback((lang) => {
    if (SUPPORTED_LANGUAGES.includes(lang)) {
      setLanguageState(lang);
    }
  }, []);

  // Translation function - gets nested keys like 'home.signIn'
  const t = useCallback((key, fallback = '') => {
    const keys = key.split('.');
    let value = translations[language];

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        // Fallback to English if key not found
        value = translations[DEFAULT_LANGUAGE];
        for (const k2 of keys) {
          if (value && typeof value === 'object' && k2 in value) {
            value = value[k2];
          } else {
            return fallback || key;
          }
        }
        break;
      }
    }

    return typeof value === 'string' ? value : fallback || key;
  }, [language]);

  // Get all translations for current language
  const getTranslations = useCallback(() => {
    return translations[language] || translations[DEFAULT_LANGUAGE];
  }, [language]);

  const value = {
    language,
    setLanguage,
    t,
    getTranslations,
    supportedLanguages: SUPPORTED_LANGUAGES,
    languageNames: translations[language]?.languages || translations[DEFAULT_LANGUAGE].languages,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use language context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export default LanguageContext;
