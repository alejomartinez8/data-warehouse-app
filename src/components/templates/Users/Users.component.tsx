import { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Button, CardBox } from 'components/atoms';
import { UserList } from 'components/molecules';
import { Layout } from 'components/organisms';
import { useStore, useModal } from 'lib/hooks';
import { IUser } from 'lib/types';
import { getUsers } from 'lib/services';
import { HeaderUsersForm, BodyUsersForm, FooterUsersForm } from './Users.modal';
import { StyledTitleContainer } from './Users.styled';

export const Users = () => {
  const { user } = useStore('userStore');
  const { setModal } = useModal();
  const router = useRouter();
  const [users, setUsers] = useState<IUser[]>([]);

  const handleAddUser = () => {
    setModal({
      header: <HeaderUsersForm title="Add User" />,
      body: <BodyUsersForm />,
      footer: <FooterUsersForm />,
    });
  };

  const handleEditUser = (editUser: IUser) => {
    setModal({
      header: <HeaderUsersForm title="Edit User" />,
      body: <BodyUsersForm user={editUser} />,
      footer: <FooterUsersForm />,
    });
  };

  if (user?.role === 'BASIC') router.push('/contacts');

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await getUsers();
      setUsers(response);
    };
    fetchUsers();
  }, []);

  return (
    <>
      <Head>
        <title>Data Warehouse - Users</title>
      </Head>
      <Layout>
        <CardBox>
          <CardBox.Title>
            <StyledTitleContainer>
              <CardBox.Heading>Users</CardBox.Heading>
              <Button color="primary" onClick={handleAddUser}>
                Add User
              </Button>
            </StyledTitleContainer>
          </CardBox.Title>
          <CardBox.Content>
            <UserList users={users} handleEditUser={handleEditUser} />
          </CardBox.Content>
        </CardBox>
      </Layout>
    </>
  );
};
