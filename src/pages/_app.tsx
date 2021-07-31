import { NextPage } from 'next';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { ModalProvider, StoresProvider } from 'lib/hooks';
import baseTheme from 'themes/baseTheme';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { Layout, AuthGuard, Toast } from 'components/organisms';

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
    <StoresProvider>
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
          <Toast />
          {Component.requireAuth ? (
            <AuthGuard>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </AuthGuard>
          ) : (
            <Component {...pageProps} />
          )}
        </ModalProvider>
      </ThemeProvider>
    </StoresProvider>
  );
}

export default MyApp;
