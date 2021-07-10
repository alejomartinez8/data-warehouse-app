import { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Button, CardBox } from 'components/atoms';
import { UserList } from 'components/molecules';
import { useStore, useModal } from 'lib/hooks';
import { IUser } from 'lib/types';
import { observer } from 'mobx-react-lite';
import { HeaderUsersForm, BodyUsersForm, FooterUsersForm } from './Users.modal';
import { StyledTitleContainer } from './Users.styled';

export const Users = observer(() => {
  const { user } = useStore('userStore');
  const { users, loading, fetchUsers } = useStore('usersStore');
  const { setModal } = useModal();
  const router = useRouter();

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
    fetchUsers();
  }, [fetchUsers]);

  return (
    <>
      <Head>
        <title>Data Warehouse - Users</title>
      </Head>
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
          {loading ? 'Loading...' : <UserList users={users} handleEditUser={handleEditUser} />}
        </CardBox.Content>
      </CardBox>
    </>
  );
});
