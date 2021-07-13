import { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Button, CardBox } from 'components/atoms';
import { UserList } from 'components/molecules';
import { useStore, useModal } from 'lib/hooks';
import { IUser } from 'lib/types';
import { observer } from 'mobx-react-lite';
import { HeaderUsersForm, BodyUsersForm, FooterUsersForm } from './UsersForm.modal';
import { HeaderUsersDelete, BodyUsersDelete, FooterUsersDelete } from './UsersDelete.modal';
import { StyledTitleContainer, StyledButtonContainer } from './Users.styled';

export const Users = observer(() => {
  const { user } = useStore('userStore');
  const { users, loading, usersSelected, fetchUsers } = useStore('usersStore');
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
      body: <BodyUsersForm user={editUser as IUser} />,
      footer: <FooterUsersForm />,
    });
  };

  const handleOnDelete = () => {
    setModal({
      header: (
        <HeaderUsersDelete title={usersSelected.length === 1 ? 'Delete User' : 'Delete Users'} />
      ),
      body: <BodyUsersDelete />,
      footer: <FooterUsersDelete />,
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
            <StyledButtonContainer>
              {usersSelected.length > 0 && (
                <Button color="danger" onClick={handleOnDelete}>
                  Delete
                </Button>
              )}
              <Button color="primary" onClick={handleAddUser}>
                Add User
              </Button>
            </StyledButtonContainer>
          </StyledTitleContainer>
        </CardBox.Title>
        <CardBox.Content>
          {loading ? 'Loading...' : <UserList users={users} handleEditUser={handleEditUser} />}
        </CardBox.Content>
      </CardBox>
    </>
  );
});
