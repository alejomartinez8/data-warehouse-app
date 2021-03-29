import { ThemeProvider, createGlobalStyle } from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import type { AppProps } from 'next/app';
import baseTheme from 'themes/baseTheme';
import '@fortawesome/fontawesome-free/css/all.css';

const GlobalStyles = createGlobalStyle`
  body{
    margin: 0;
  }

  html{
    font-size: 13px;
    font-family: 'open sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
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
