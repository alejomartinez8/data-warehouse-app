import { GetServerSideProps } from 'next';

export default function Page() {
  return null;
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  ctx.res?.writeHead(302, { Location: `${process.env.NEXT_PUBLIC_DOMAIN_URL}/login` });
  ctx.res?.end();

  return {
    props: {},
  };
};
