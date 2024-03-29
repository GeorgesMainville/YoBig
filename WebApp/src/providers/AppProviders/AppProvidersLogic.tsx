import { ReactNode } from 'react';
import LangProvider from '../LanguageProvider';

type AppProvidersProps = {
  children: ReactNode;
};

function AppProvidersLogic({ children }: AppProvidersProps): JSX.Element {
  return <LangProvider>{children}</LangProvider>;
}

export default AppProvidersLogic;
