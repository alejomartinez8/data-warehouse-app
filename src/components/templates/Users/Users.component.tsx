import Head from 'next/head';
import { CardBox } from 'components/atoms';
import { UserList } from 'components/molecules';
import { Layout } from 'components/organisms';

export const Users = ({ users }) => (
  <>
    <Head>
      <title>Data Warehouse - Users</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Layout>
      <CardBox>
        <CardBox.Title>
          <CardBox.Heading>Users</CardBox.Heading>
        </CardBox.Title>
        <CardBox.Content>
          <UserList users={users} />
        </CardBox.Content>
      </CardBox>
    </Layout>
  </>
);
