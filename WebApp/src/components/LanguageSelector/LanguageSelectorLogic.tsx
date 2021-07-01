import { useCallback } from 'react';
import { FormattedMessage } from 'react-intl';
import { LanguageContextProps } from '../../contexts/LanguageContext';

type LanguageSelectorLogicProps = {
  languageContext: LanguageContextProps;
};

function LanguageToggleLogic({
  languageContext,
}: LanguageSelectorLogicProps): JSX.Element {
  const { setLanguage, language } = languageContext;

  const handleLanguageChange = useCallback(() => {
    if (setLanguage && language) {
      const newLanguage = language === 'en' ? 'fr' : 'en';
      setLanguage(newLanguage);
    }
  }, [language, setLanguage]);

  return (
    <div onClick={handleLanguageChange}>
      <FormattedMessage id={language} />
    </div>
  );
}

export default LanguageToggleLogic;
