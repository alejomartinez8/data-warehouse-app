import { AxiosError } from 'axios';
import { GetServerSidePropsContext } from 'next';
import Router from 'next/router';

const isProd = process.env.NODE_ENV === 'production';

export function unauthorizedHandle(error: AxiosError, ctx?: GetServerSidePropsContext) {
  const { response } = error;

  if (response.status === 401 && !ctx.req) {
    Router.replace('/login');
    return null;
  }

  if (response.status === 401 && ctx.req) {
    console.log('DOMAIN_URL', process.env.DOMAIN_URL);
    ctx.res.writeHead(302, {
      Location: isProd ? 'https://data-warehouse-am.herokuapp.com/login' : 'http://localhost:3000',
    });
    ctx.res?.end();
  }

  return null;
}
