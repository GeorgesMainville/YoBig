import { ReactNode, useEffect, useState } from 'react';
import { IntlProvider } from 'react-intl';
import LangContext, {
  LangContextProps,
  DefaultLangContext,
  createLangContext,
} from '../../contexts/LangContext';
import i18n, { DEFAULT_LANG } from '../../lang/i18n';

type LangProviderProps = {
  children: ReactNode;
};

function LangProviderLogic({ children }: LangProviderProps): JSX.Element {
  const [langContext, setLangContext] = useState<LangContextProps>(DefaultLangContext);

  useEffect(() => {
    const newLangContext = createLangContext(setLangContext);
    setLangContext(newLangContext);
  }, []);

  return (
    <LangContext.Provider value={langContext}>
      <IntlProvider locale={langContext.lang} messages={i18n.get(langContext.lang)}>
        {children}
      </IntlProvider>
    </LangContext.Provider>
  );
}

export default LangProviderLogic;
