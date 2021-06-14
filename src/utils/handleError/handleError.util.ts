import { AxiosError } from 'axios';
import { GetServerSidePropsContext } from 'next';
import Router from 'next/router';

console.log(process.env.DOMAIN_URL);

export function unauthorizedHandle(error: AxiosError, ctx?: GetServerSidePropsContext) {
  const { response } = error;

  if (response.status === 401 && !ctx.req) {
    Router.replace('/login');
    return null;
  }

  if (response.status === 401 && ctx.req) {
    ctx.res.writeHead(302, {
      Location: `${process.env.DOMAIN_URL}/login`,
    });
    ctx.res?.end();
  }

  return null;
}
