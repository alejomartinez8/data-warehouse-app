import { registerUser } from 'lib/services';
import { FormEvent, useState } from 'react';
import { StyledFormGroup, StyledLabel, StyledInput, StyledButton } from './Users.styled';

export const HeaderUsersForm = () => <h1>Add User</h1>;

export const BodyUsersForm = () => {
  const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    repeatPassword: '',
  };

  const [formData, setFormData] = useState(initialState);

  const { firstName, lastName, email, password, repeatPassword } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    registerUser({ ...formData, repeatPassword: undefined });
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
        <StyledLabel>Password*</StyledLabel>
        <StyledInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          required
        />
      </StyledFormGroup>
      <StyledFormGroup>
        <StyledLabel>Repeat Password*</StyledLabel>
        <StyledInput
          type="password"
          name="repeatPassword"
          value={repeatPassword}
          onChange={handleChange}
          required
        />
      </StyledFormGroup>
    </form>
  );
};

export const FooterUsersForm = () => (
  <>
    <StyledButton>Cancel</StyledButton>
    <StyledButton color="primary" form="user-form" type="submit">
      Save
    </StyledButton>
  </>
);
