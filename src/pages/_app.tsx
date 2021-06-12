import Head from 'next/head';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import type { AppProps } from 'next/app';
import baseTheme from 'themes/baseTheme';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { AuthProvider } from 'lib/hooks/useAuth';
// import { makeServer } from 'utils/mirage';

// if (process.env.NODE_ENV !== 'production') {
//   makeServer({ environment: process.env.NODE_ENV });
// }

const GlobalStyles = createGlobalStyle`
   body{
    font-family: 'open sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.5;
    color: ${baseTheme.colors.secondary};
    margin: 0;
    text-align: left;
  }

  * {
      box-sizing: border-box;
    }
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <ThemeProvider theme={baseTheme}>
        <Head>
          <link
            rel="stylesheet"
            href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
            integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
            crossOrigin="anonymous"
          />
        </Head>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </AuthProvider>
  );
}

export default MyApp;
