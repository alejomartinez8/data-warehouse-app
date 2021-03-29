import Head from 'next/head';
import { Layout } from 'components/organisms';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Data Warehouse - Contacts</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>Contacts</Layout>
    </div>
  );
}
