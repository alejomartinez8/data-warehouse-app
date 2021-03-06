import { useModal, useStore } from 'lib/hooks';
import { UserWithPassword } from 'lib/services';
import { IUser } from 'lib/types';
import React, { FormEvent, useState } from 'react';
import {
  Button,
  FormGroup,
  FormInput,
  FormLabel,
  FormSelect,
  HeaderConfirmation,
  BodyConfirmation,
  FooterConfirmation,
  FormRow,
} from 'components/atoms';

interface IBodyUsersFormProps {
  user?: UserWithPassword;
}

export const HeaderUserForm = ({ title }) => <h1>{title}</h1>;

export const BodyUserForm = ({ user }: IBodyUsersFormProps) => {
  const { closeModal } = useModal();
  const initialState = {
    id: user ? user.id : '',
    firstName: user ? user.firstName : '',
    lastName: user ? user.lastName : '',
    email: user ? user.email : '',
    role: user ? user.role : 'BASIC',
    password: '',
  };

  const [formData, setFormData] = useState(initialState);
  const { fetchUsers, fetchUpddateUser, fetchCreateUser } = useStore('usersStore');

  const { firstName, lastName, email, role, password } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (user) {
      if (!password) delete formData.password;
      await fetchUpddateUser({ ...formData });
    } else {
      delete formData.id;
      await fetchCreateUser({ ...formData });
    }
    closeModal();
    await fetchUsers();
  };

  return (
    <form onSubmit={handleSubmit} id="user-form">
      <FormRow>
        <FormGroup widthCol={1 / 3}>
          <FormLabel>First Name*</FormLabel>
          <FormInput
            type="text"
            name="firstName"
            value={firstName}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup widthCol={1 / 3}>
          <FormLabel>Last Name*</FormLabel>
          <FormInput
            type="text"
            name="lastName"
            value={lastName}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup widthCol={1 / 3}>
          <FormLabel htmlFor="role">Role*</FormLabel>
          <FormSelect id="role" name="role" value={role} onChange={handleChange}>
            <option value="BASIC">BASIC</option>
            <option value="ADMIN">ADMIN</option>
          </FormSelect>
        </FormGroup>
      </FormRow>
      <FormRow>
        <FormGroup widthCol={1 / 2}>
          <FormLabel>E-mail*</FormLabel>
          <FormInput type="email" name="email" value={email} onChange={handleChange} required />
        </FormGroup>
        <FormGroup widthCol={1 / 2}>
          <FormLabel>Password{!user ? '*' : ''}</FormLabel>
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            required={!user}
          />
        </FormGroup>
      </FormRow>
    </form>
  );
};

export const FooterUserForm = ({ user }: { user?: IUser }) => {
  const { setModal, closeModal } = useModal();
  const { fetchDeleteUsers } = useStore('usersStore');

  const handleOnDelete = () => {
    const handleOnConfirmation = async () => {
      await fetchDeleteUsers([user]);
      closeModal();
    };

    setModal({
      header: <HeaderConfirmation title="Delete User" />,
      body: (
        <BodyConfirmation>Are you sure you want to delete the selected users?</BodyConfirmation>
      ),
      footer: <FooterConfirmation onConfirm={handleOnConfirmation} onClose={closeModal} />,
    });
  };

  const handleOnClick = () => (user ? handleOnDelete() : closeModal());

  return (
    <>
      <Button color={user ? 'danger' : 'default'} onClick={handleOnClick}>
        {user ? 'Delete' : 'Cancel'}
      </Button>
      <Button color="primary" form="user-form" type="submit">
        Save
      </Button>
    </>
  );
};
