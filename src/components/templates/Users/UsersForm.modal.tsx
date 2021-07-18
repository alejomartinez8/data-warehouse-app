import { useModal, useStore } from 'lib/hooks';
import { registerUser, updateUser, UserWithPassword } from 'lib/services';
import { IUser } from 'lib/types';
import React, { FormEvent, useState } from 'react';
import {
  Button,
  StyledFormGroup,
  StyledFormInput,
  StyledFormLabel,
  StyledFormSelect,
} from 'components/atoms';
import { HeaderUsersDelete, BodyUsersDelete, FooterUsersDelete } from './UsersDelete.modal';

interface IBodyUsersFormProps {
  user?: UserWithPassword;
}

export const HeaderUsersForm = ({ title }) => <h1>{title}</h1>;

export const BodyUsersForm = ({ user }: IBodyUsersFormProps) => {
  const { closeModal } = useModal();
  const initialState = {
    id: user ? user.id : '',
    firstName: user ? user.firstName : '',
    lastName: user ? user.lastName : '',
    email: user ? user.email : '',
    role: user ? user.role : 'BASIC',
    password: '',
    repeatPassword: '',
  };

  const [formData, setFormData] = useState(initialState);
  const { fetchUsers } = useStore('usersStore');

  const { firstName, lastName, email, role, password, repeatPassword } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    delete formData.repeatPassword;

    if (user) {
      if (!password) delete formData.password;
      await updateUser({ ...formData });
    } else {
      delete formData.id;
      await registerUser({ ...formData });
    }
    closeModal();
    await fetchUsers();
  };

  return (
    <form onSubmit={handleSubmit} id="user-form">
      <StyledFormGroup>
        <StyledFormLabel>First Name*</StyledFormLabel>
        <StyledFormInput
          type="text"
          name="firstName"
          value={firstName}
          onChange={handleChange}
          required
        />
      </StyledFormGroup>
      <StyledFormGroup>
        <StyledFormLabel>Last Name*</StyledFormLabel>
        <StyledFormInput
          type="text"
          name="lastName"
          value={lastName}
          onChange={handleChange}
          required
        />
      </StyledFormGroup>
      <StyledFormGroup>
        <StyledFormLabel>E-mail*</StyledFormLabel>
        <StyledFormInput type="email" name="email" value={email} onChange={handleChange} required />
      </StyledFormGroup>
      <StyledFormGroup>
        <StyledFormLabel htmlFor="role">Role*</StyledFormLabel>
        <StyledFormSelect id="role" name="role" value={role} onChange={handleChange}>
          <option value="BASIC">BASIC</option>
          <option value="ADMIN">ADMIN</option>
        </StyledFormSelect>
      </StyledFormGroup>
      <StyledFormGroup>
        <StyledFormLabel>Password{!user ? '*' : ''}</StyledFormLabel>
        <StyledFormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          required={!user}
        />
      </StyledFormGroup>
      <StyledFormGroup>
        <StyledFormLabel>Repeat Password{password ? '*' : ''}</StyledFormLabel>
        <StyledFormInput
          type="password"
          name="repeatPassword"
          value={repeatPassword}
          onChange={handleChange}
          required={!!password}
        />
      </StyledFormGroup>
    </form>
  );
};

export const FooterUsersForm = ({ user }: { user?: IUser }) => {
  const { setModal, closeModal } = useModal();

  const handleOnDelete = () => {
    setModal({
      header: <HeaderUsersDelete title="Delete User" />,
      body: <BodyUsersDelete />,
      footer: <FooterUsersDelete users={[user]} />,
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
