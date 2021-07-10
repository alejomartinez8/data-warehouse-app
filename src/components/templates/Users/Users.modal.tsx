import { useModal, useStore } from 'lib/hooks';
import { registerUser, updateUser } from 'lib/services';
import { IUser } from 'lib/types';
import { FormEvent, useState } from 'react';
import {
  StyledFormGroup,
  StyledLabel,
  StyledInput,
  StyledButton,
  StyledSelect,
} from './Users.styled';

interface IBodyUsersFormProps {
  user?: IUser;
}

export const HeaderUsersForm = ({ title }) => <h1>{title}</h1>;

export const BodyUsersForm = ({ user }: IBodyUsersFormProps) => {
  const { closeModal } = useModal();
  const initialState = {
    ...user,
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
    if (user) {
      updateUser({ ...formData, password: password || undefined, repeatPassword: undefined });
    } else {
      registerUser({ ...formData, repeatPassword: undefined });
    }
    closeModal();
    await fetchUsers();
  };

  return (
    <form onSubmit={handleSubmit} id="user-form">
      <StyledFormGroup>
        <StyledLabel>First Name*</StyledLabel>
        <StyledInput
          type="text"
          name="firstName"
          value={firstName}
          onChange={handleChange}
          required
        />
      </StyledFormGroup>
      <StyledFormGroup>
        <StyledLabel>Last Name*</StyledLabel>
        <StyledInput
          type="text"
          name="lastName"
          value={lastName}
          onChange={handleChange}
          required
        />
      </StyledFormGroup>
      <StyledFormGroup>
        <StyledLabel>E-mail*</StyledLabel>
        <StyledInput type="email" name="email" value={email} onChange={handleChange} required />
      </StyledFormGroup>
      <StyledFormGroup>
        <StyledLabel htmlFor="role">Role*</StyledLabel>
        <StyledSelect id="role" name="role" value={role} onChange={handleChange}>
          <option value="BASIC">BASIC</option>
          <option value="ADMIN">ADMIN</option>
        </StyledSelect>
      </StyledFormGroup>
      <StyledFormGroup>
        <StyledLabel>Password{!user ? '*' : ''}</StyledLabel>
        <StyledInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          required={!user}
        />
      </StyledFormGroup>
      <StyledFormGroup>
        <StyledLabel>Repeat Password{password ? '*' : ''}</StyledLabel>
        <StyledInput
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

export const FooterUsersForm = () => {
  const { closeModal } = useModal();

  return (
    <>
      <StyledButton onClick={closeModal}>Cancel</StyledButton>
      <StyledButton color="primary" form="user-form" type="submit">
        Save
      </StyledButton>
    </>
  );
};
