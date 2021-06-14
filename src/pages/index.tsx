import { GetServerSideProps } from 'next';

export default function Page() {
  return null;
}

const isProd = process.env.NODE_ENV === 'production';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  ctx.res?.writeHead(302, {
    Location: isProd
      ? 'https://data-warehouse-am.herokuapp.com/login'
      : 'http://localhost:3000/login',
  });
  ctx.res?.end();

  return {
    props: {},
  };
};
