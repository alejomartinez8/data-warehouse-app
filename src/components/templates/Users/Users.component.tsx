import { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useStore, useModal } from 'lib/hooks';
import { IField, PageLayout } from 'components/molecules';
import { HeaderUserForm, BodyUserForm, FooterUserForm } from 'components/organisms';
import {
  HeaderConfirmation,
  BodyConfirmation,
  FooterConfirmation,
  TableList,
  IOrderBy,
} from 'components/atoms';
import { IUser } from 'lib/types';

export const UsersTemplate = observer(() => {
  const { setModal, closeModal } = useModal();

  const { users, loading, fetchUsers, fetchDeleteUsers } = useStore('usersStore');

  const [searchQuery, setSearchQuery] = useState('');
  const [orderBy, setOrderBy] = useState<IOrderBy>({ orderBy: 'firstName', order: 'asc' });
  const [itemsSelected, setItemsSelected] = useState<IUser[]>([]);

  const fields: IField[] = [
    { key: 'firstName', label: 'First Name' },
    { key: 'lastName', label: 'Last Name' },
    { key: 'email', label: 'Email' },
    { key: 'role', label: 'Role' },
  ];

  const tableItems = users?.map((user) => ({
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

  const handleOnEdit = (item: IUser) => {
    setModal({
      header: <HeaderUserForm title="Edit User" />,
      body: <BodyUserForm user={item as IUser} />,
      footer: <FooterUserForm user={item} />,
      size: 'large',
    });
  };

  const handleOnDelete = () => {
    const handleOnConfirmation = async () => {
      await fetchDeleteUsers(itemsSelected);
      closeModal();
    };

    setModal({
      header: (
        <HeaderConfirmation title={itemsSelected.length === 1 ? 'Delete User' : 'Delete Users'} />
      ),
      body: (
        <BodyConfirmation>Are you sure you want to delete the selected users?</BodyConfirmation>
      ),
      footer: <FooterConfirmation onConfirm={handleOnConfirmation} onClose={closeModal} />,
    });
  };

  useEffect(() => {
    let params: { searchQuery?: string; orderBy?: string; order?: string } = {};
    if (searchQuery) params.searchQuery = searchQuery;
    if (orderBy) params = { ...params, ...orderBy };

    if (Object.keys(params).length > 0) {
      fetchUsers(params);
    } else {
      fetchUsers();
    }
  }, [searchQuery, orderBy]);

  return (
    <PageLayout
      singularItem="User"
      pluralItem="Users"
      deleteButton={itemsSelected.length > 0}
      handleOnCreate={handleOnCreate}
      handleOnDelete={handleOnDelete}
      querySearch={setSearchQuery}
    >
      <TableList
        fields={fields}
        items={tableItems}
        orderBy={orderBy}
        loading={loading}
        handleEditItem={handleOnEdit}
        setItemsSelected={setItemsSelected}
        handleOnSortBy={setOrderBy}
      />
    </PageLayout>
  );
});
