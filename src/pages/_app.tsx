import { NextPage } from 'next';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { ModalProvider, AuthProvider } from 'lib/hooks';
import baseTheme from 'themes/baseTheme';
import { AuthGuard } from 'components/atoms/AuthGuard/AuthGuard.component';
import '@fortawesome/fontawesome-svg-core/styles.css';

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

export type NextApplicationPage<P = any, IP = P> = NextPage<P, IP> & {
  requireAuth?: boolean;
};

function MyApp(props: AppProps) {
  const { Component, pageProps }: { Component: NextApplicationPage; pageProps: any } = props;

  return (
    <ThemeProvider theme={baseTheme}>
      <ModalProvider>
        <Head>
          <link
            rel="stylesheet"
            href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
            integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
            crossOrigin="anonymous"
          />
        </Head>
        <GlobalStyles />
        {Component.requireAuth ? (
          <AuthProvider>
            <AuthGuard>
              <Component {...pageProps} />
            </AuthGuard>
          </AuthProvider>
        ) : (
          <Component {...pageProps} />
        )}
      </ModalProvider>
    </ThemeProvider>
  );
}

export default MyApp;
