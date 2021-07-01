import { useContext } from 'react';
import LanguageContext from '../../contexts/LanguageContext';
import LanguageSelectorLogic from './LanguageSelectorLogic';

function LangSelectorHooks(): JSX.Element {
  const languageContext = useContext(LanguageContext);

  return <LanguageSelectorLogic languageContext={languageContext} />;
}

export default LangSelectorHooks;
