import { AxiosError } from 'axios';
import { GetServerSidePropsContext } from 'next';
import Router from 'next/router';

const isProd = process.env.NODE_ENV === 'production';

export function unauthorizedHandle(error: AxiosError, ctx?: GetServerSidePropsContext) {
  const { response } = error;

  // Client side
  if (response?.status === 401 && !ctx?.req) {
    Router.replace('/login');
    throw error;
  }

  // Server side
  if (response?.status === 401 && ctx?.req) {
    ctx.res.writeHead(302, {
      Location: isProd ? 'https://data-warehouse-am.herokuapp.com/login' : 'http://localhost:3000',
    });
    ctx.res?.end();
  }

  return null;
}
