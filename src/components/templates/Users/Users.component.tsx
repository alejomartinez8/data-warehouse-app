import Head from 'next/head';
import { useState, useEffect } from 'react';
import { CardBox } from 'components/atoms';
import { UserList, InputSearch, User } from 'components/molecules';
import { Layout } from 'components/organisms';
import { StyledTitleContainer } from './Users.styled';

export const Users = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch('/api/users')
      .then((response) => response.json())
      .then((json) => setUsers(json.users));
  }, []);

  return (
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
};
