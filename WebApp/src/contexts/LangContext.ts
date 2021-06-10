import { createContext } from 'react';
import { AVAILABLE_LANGS, DEFAULT_LANG } from '../lang/i18n';

export type LangContextProps = {
  lang: string;
  setLang: Function | null;
  availableLangs: string[];
};

export const DefaultLangContext = {
  setLang: null,
  lang: DEFAULT_LANG,
  availableLangs: AVAILABLE_LANGS,
};

export const createLangContext = (setLangContext: Function): LangContextProps => {
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
