import { ReactNode, useEffect, useState } from 'react';
import { IntlProvider } from 'react-intl';
import flattenMessages from 'utils/intl-utils';
import LanguageContext, {
  DefaultLanguageContext,
  createLanguageContext,
  LanguageContextProps,
} from '../../contexts/LanguageContext';
import i18n from '../../language/i18n';

type LanguageProviderProps = {
  children: ReactNode;
};

function LanguageProviderLogic({
  children,
}: LanguageProviderProps): JSX.Element {
  const [languageContext, setLanguageContext] = useState<LanguageContextProps>(
    DefaultLanguageContext
  );

  useEffect(() => {
    const newLanguageContext = createLanguageContext(setLanguageContext);
    setLanguageContext(newLanguageContext);
  }, []);

  const locale = languageContext.language;
  const messages = i18n.get(languageContext.language);

  return (
    <LanguageContext.Provider value={languageContext}>
      <IntlProvider locale={locale} messages={flattenMessages(messages)}>
        {children}
      </IntlProvider>
    </LanguageContext.Provider>
  );
}

export default LanguageProviderLogic;
