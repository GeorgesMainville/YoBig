import { createContext } from 'react';
import { AVAILABLE_LANGS, DEFAULT_LANG } from '../lang/i18n';

export type LangContextProps = {
  lang: string;
  setLang: (lang: string) => void;
  availableLangs: string[];
};

export const DefaultLangContext: LangContextProps = {
  lang: DEFAULT_LANG,
  setLang: (lang: string) => null,
  availableLangs: AVAILABLE_LANGS,
};

export const createLangContext = (
  setLangContext: React.Dispatch<React.SetStateAction<LangContextProps>>
): LangContextProps => {
  const lang = localStorage.getItem('lang') || DEFAULT_LANG;
  const setLang = (lang: string) => {
    localStorage.setItem('lang', lang);
    setLangContext((prev: LangContextProps) => ({
      ...prev,
      lang,
    }));
  };
  return {
    ...DefaultLangContext,
    setLang,
    lang,
  };
};

const LangContext = createContext<LangContextProps>(DefaultLangContext);

export default LangContext;
