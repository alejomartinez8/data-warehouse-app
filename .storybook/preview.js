import { addDecorator } from '@storybook/react';
import styled, { ThemeProvider } from 'styled-components';
import baseTheme from '../src/themes/baseTheme';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

addDecorator((StoryFn) => (
  <ThemeProvider theme={baseTheme}>
    <StoryFn />
  </ThemeProvider>
));
