import 'dotenv/config';
import '@testing-library/jest-dom/vitest';
import { setProjectAnnotations } from '@storybook/react';
import * as globalStorybookConfig from './.storybook/preview';

setProjectAnnotations(globalStorybookConfig);
