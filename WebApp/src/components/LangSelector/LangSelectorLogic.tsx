import { useCallback } from 'react';
import { FormattedMessage } from 'react-intl';
import { LangContextProps } from '../../contexts/LangContext';

type LangSelectorLogicProps = {
  langContext: LangContextProps;
};

function LangToggleLogic({ langContext }: LangSelectorLogicProps): JSX.Element {
  const { setLang, lang } = langContext;

  const handleLangChange = useCallback(() => {
    if (setLang && lang) {
      const newLang = lang === 'en' ? 'fr' : 'en';
      setLang(newLang);
    }
  }, [lang, setLang]);

  return (
    <div onClick={handleLangChange}>
      <FormattedMessage id={lang} />
    </div>
  );
}

export default LangToggleLogic;
