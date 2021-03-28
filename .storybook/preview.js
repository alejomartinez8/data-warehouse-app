import { addDecorator } from '@storybook/react';
import styled, { ThemeProvider } from 'styled-components';
import baseTheme from '../src/themes/baseTheme';
import 'bootstrap/dist/css/bootstrap.min.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

addDecorator((StoryFn) => (
  <ThemeProvider theme={baseTheme}>
    <StoryFn />
  </ThemeProvider>
));
