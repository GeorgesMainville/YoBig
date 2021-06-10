import React, { FC, ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import AppProviders from '../providers/AppProviders';
import LangProvider from '../providers/LangProvider';
import { FormattedMessage } from 'react-intl';

const AllTheProviders: FC = ({ children }) => {
  return <AppProviders>{children}</AppProviders>;
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'queries'>) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';

export { customRender as render };
