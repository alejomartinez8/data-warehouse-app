import { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import {
  Button,
  CardBox,
  HeaderConfirmationModal,
  BodyConfirmationModal,
  FooterConfirmationModal,
} from 'components/atoms';
import { UserList, HeaderUserForm, BodyUserForm, FooterUserForm } from 'components/molecules';
import { useStore, useModal } from 'lib/hooks';
import { IUser } from 'lib/types';
import { observer } from 'mobx-react-lite';
import { StyledTitleContainer, StyledButtonContainer } from './Users.styled';

export const Users = observer(() => {
  const { user } = useStore('userStore');
  const [usersSelected, setUsersSelected] = useState([]);
  const { setModal, closeModal } = useModal();
  const { users, loading, fetchUsers } = useStore('usersStore');
  const { fetchDeleteUsers } = useStore('usersStore');
  const router = useRouter();

  const handleAddUser = () => {
    setModal({
      header: <HeaderUserForm title="Add User" />,
      body: <BodyUserForm />,
      footer: <FooterUserForm />,
      size: 'large',
    });
  };

  const handleEditUser = (editUser: IUser) => {
    setModal({
      header: <HeaderUserForm title="Edit User" />,
      body: <BodyUserForm user={editUser as IUser} />,
      footer: <FooterUserForm user={editUser} />,
      size: 'large',
    });
  };

  const handleOnDelete = () => {
    const handleOnConfirmation = async () => {
      await fetchDeleteUsers([user]);
      closeModal();
    };

    setModal({
      header: (
        <HeaderConfirmationModal
          title={usersSelected.length === 1 ? 'Delete User' : 'Delete Users'}
        />
      ),
      body: (
        <BodyConfirmationModal>
          Are you sure you want to delete the selected users?
        </BodyConfirmationModal>
      ),
      footer: <FooterConfirmationModal onConfirm={handleOnConfirmation} onClose={closeModal} />,
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
      <h1>Users</h1>
      <CardBox>
        <CardBox.Title>
          <StyledTitleContainer>
            <StyledButtonContainer>
              <Button color="primary" onClick={handleAddUser}>
                Add User
              </Button>
              {usersSelected.length > 0 && (
                <Button color="danger" onClick={handleOnDelete}>
                  Delete
                </Button>
              )}
            </StyledButtonContainer>
          </StyledTitleContainer>
        </CardBox.Title>
        <CardBox.Content>
          {loading ? (
            'Loading...'
          ) : (
            <UserList
              users={users}
              handleEditUser={handleEditUser}
              setUsersSelected={setUsersSelected}
            />
          )}
        </CardBox.Content>
      </CardBox>
    </>
  );
});
