import React from 'react';
import type { Decorator, Preview } from '@storybook/react';
import { MockAppRouter } from '../app/mock-app-router';

export const decorators = [
  (StoryFn, context) => {
    return (
      <MockAppRouter {...(context.parameters.app as object)}>
        <StoryFn />
      </MockAppRouter>
    );
  },
] satisfies Decorator[];

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    nextjs: {
      appDirectory: true,
    },
  },
};

export default preview;
