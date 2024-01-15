import { composeStories } from '@storybook/react';
import { expect, test } from 'vitest';
import * as stories from './nuqs-demo.stories';
import { render } from './render';
import { userEvent } from '@testing-library/user-event';
import { screen } from '@testing-library/react';

const { Default } = composeStories(stories);

test('default', async () => {
  render(<Default />);
  await userEvent.click(
    screen.getByRole('button', { name: 'Add query param' })
  );
  expect(screen.getByText('0')).toBeInTheDocument();
  await userEvent.click(
    screen.getByRole('button', { name: 'Add query param' })
  );
  expect(screen.getByText('0, 1')).toBeInTheDocument();
});
