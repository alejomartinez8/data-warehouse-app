export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

// import { addDecorator } from '@storybook/react';
// import { ThemeProvider } from 'styled-components';
// import baseTheme from '../src/themes/baseTheme';

// export const parameters = {
//   actions: { argTypesRegex: '^on[A-Z].*' },
// };

// addDecorator((StoryFn) => (
//   <ThemeProvider theme={baseTheme}>
//     <StoryFn />
//   </ThemeProvider>
// ));
