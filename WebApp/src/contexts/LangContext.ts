import { createContext } from "react";
import { AVAILABLE_LANGS, DEFAULT_LANG } from "../lang/i18n";

export type LangContextProps = { 
    lang: string,
    setLang: Function | null,
    availableLangs: string[],
};

export const DefaultLangContext = { 
    setLang: null,
    lang: DEFAULT_LANG,
    availableLangs: AVAILABLE_LANGS,
 };

export const createLangContext = (setLangContext : Function) : LangContextProps => {
    const setLang = (lang : string) => {
        setLangContext((prev : LangContextProps) => ({
            ...prev,
            lang,
        }));
    };
    return {
        ...DefaultLangContext,
        setLang
    }
};

const LangContext = createContext<LangContextProps>(DefaultLangContext);

export default LangContext;