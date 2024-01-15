import { render as rtlRender } from '@testing-library/react';
import React from 'react';
import { MockAppRouter } from './mock-app-router';

export const render = (ui: React.ReactElement) => {
  return rtlRender(ui, {
    wrapper: ({ children }) => <MockAppRouter>{children}</MockAppRouter>,
  });
};
