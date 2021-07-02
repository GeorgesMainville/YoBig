// From https://testing-library.com/docs/react-testing-library/setup/
/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { FC, ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import AppProviders from '../providers/AppProviders';
import i18n, { DEFAULT_LANGUAGE } from 'language/i18n';
import flattenMessages from './intl-utils';

const AllTheProviders: FC = ({ children }) => {
  return <AppProviders>{children}</AppProviders>;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'queries'>
) => render(ui, { wrapper: AllTheProviders, ...options });

function customFormattedMessage(id: string): string {
  const translations: any = i18n.get(DEFAULT_LANGUAGE);
  return flattenMessages(translations)[id];
}

export * from '@testing-library/react';

export { customRender as render };
export { customFormattedMessage as formattedMessage };
