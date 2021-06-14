import { NextPage } from 'next';
import App from 'next/app';
import Head from 'next/head';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import type { AppProps } from 'next/app';
import baseTheme from 'themes/baseTheme';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { AuthProvider } from 'lib/hooks/useAuth';
import { AuthGuard } from 'components/atoms/AuthGuard/AuthGuard.component';

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
        {Component.requireAuth ? (
          <AuthGuard>
            <Component {...pageProps} />
          </AuthGuard>
        ) : (
          <Component {...pageProps} />
        )}
      </ThemeProvider>
    </AuthProvider>
  );
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps };
};

export default MyApp;
