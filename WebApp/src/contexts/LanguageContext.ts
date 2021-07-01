import { createContext } from 'react';
import { AVAILABLE_LANGUAGES, DEFAULT_LANGUAGE } from '../language/i18n';

export type LanguageContextProps = {
  language: string;
  setLanguage: (language: string) => void;
  availableLanguages: string[];
};

export const DefaultLanguageContext: LanguageContextProps = {
  language: DEFAULT_LANGUAGE,
  setLanguage: () => null,
  availableLanguages: AVAILABLE_LANGUAGES,
};

export const createLanguageContext = (
  setLanguageContext: React.Dispatch<React.SetStateAction<LanguageContextProps>>
): LanguageContextProps => {
  const language = localStorage.getItem('language') || DEFAULT_LANGUAGE;
  const setLanguage = (language: string) => {
    localStorage.setItem('language', language);
    setLanguageContext((prev: LanguageContextProps) => ({
      ...prev,
      language,
    }));
  };
  return {
    ...DefaultLanguageContext,
    setLanguage,
    language,
  };
};

const languageContext = createContext<LanguageContextProps>(
  DefaultLanguageContext
);

export default languageContext;
