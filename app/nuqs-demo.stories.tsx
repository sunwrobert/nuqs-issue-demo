import type { Meta, StoryObj } from '@storybook/react';
import { NuqsDemo } from './nuqs-demo';

const meta = {
  title: 'components/NuqsDemo',
  component: NuqsDemo,
} satisfies Meta<typeof NuqsDemo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
