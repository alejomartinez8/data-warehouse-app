import { ThemeProvider, createGlobalStyle } from 'styled-components';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import baseTheme from 'themes/baseTheme';

const GlobalStyles = createGlobalStyle`
  body{
    margin: 0;
  }

  html{
    font-size: 16px;
  }
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={baseTheme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
