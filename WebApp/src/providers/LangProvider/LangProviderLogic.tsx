import { ReactNode, useEffect, useState } from 'react';
import { IntlProvider } from 'react-intl';
import LangContext, {
  DefaultLangContext,
  createLangContext,
  LangContextProps,
} from '../../contexts/LangContext';
import i18n from '../../lang/i18n';

type LangProviderProps = {
  children: ReactNode;
};

function LangProviderLogic({ children }: LangProviderProps): JSX.Element {
  const [langContext, setLangContext] =
    useState<LangContextProps>(DefaultLangContext);

  useEffect(() => {
    const newLangContext = createLangContext(setLangContext);
    setLangContext(newLangContext);
  }, []);

  const locale = langContext.lang;
  const messages = i18n.get(langContext.lang);

  return (
    <LangContext.Provider value={langContext}>
      <IntlProvider locale={locale} messages={messages}>
        {children}
      </IntlProvider>
    </LangContext.Provider>
  );
}

export default LangProviderLogic;
