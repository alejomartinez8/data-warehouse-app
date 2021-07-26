import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useStore, useModal } from 'lib/hooks';
import { IField, PageList } from 'components/molecules';
import { HeaderUserForm, BodyUserForm, FooterUserForm } from 'components/organisms';
import { HeaderConfirmation, BodyConfirmation, FooterConfirmation } from 'components/atoms';
import { IUser } from 'lib/types';

export const UsersTemplate = observer(() => {
  const { setModal, closeModal } = useModal();

  const { users, loading, fetchUsers, fetchDeleteUsers } = useStore('usersStore');

  const fields: IField[] = [
    { key: 'firstName', label: 'First Name' },
    { key: 'lastName', label: 'Last Name' },
    { key: 'email', label: 'Email' },
    { key: 'role', label: 'Role' },
  ];

  const mapItems = () =>
    users?.map((user) => ({
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      role: user.role,
    }));

  const handleOnCreate = () => {
    setModal({
      header: <HeaderUserForm title="Add User" />,
      body: <BodyUserForm />,
      footer: <FooterUserForm />,
      size: 'large',
    });
  };

  const handleOnEdit = (editUser: IUser) => {
    setModal({
      header: <HeaderUserForm title="Edit User" />,
      body: <BodyUserForm user={editUser as IUser} />,
      footer: <FooterUserForm user={editUser} />,
      size: 'large',
    });
  };

  const handleOnDelete = (items: IUser[]) => {
    const handleOnConfirmation = async () => {
      await fetchDeleteUsers(items);
      closeModal();
    };

    setModal({
      header: <HeaderConfirmation title={items.length === 1 ? 'Delete User' : 'Delete Users'} />,
      body: (
        <BodyConfirmation>Are you sure you want to delete the selected users?</BodyConfirmation>
      ),
      footer: <FooterConfirmation onConfirm={handleOnConfirmation} onClose={closeModal} />,
    });
  };

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <PageList
      singularItem="User"
      pluralItem="Users"
      fields={fields}
      items={mapItems()}
      loading={loading}
      handleOnCreate={handleOnCreate}
      handleOnEdit={handleOnEdit}
      handleOnDelete={handleOnDelete}
    />
  );
});
