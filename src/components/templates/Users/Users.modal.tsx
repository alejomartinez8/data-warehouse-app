import { Button } from 'components/atoms';
import { StyledFormGroup, StyledLabel, StyledInput, StyledButton } from './Users.styled';

export const HeaderUsersForm = () => <h1>Add User</h1>;

export const BodyUsersForm = () => (
  <form>
    <StyledFormGroup>
      <StyledLabel>First Name</StyledLabel>
      <StyledInput type="text" />
    </StyledFormGroup>
    <StyledFormGroup>
      <StyledLabel>Last Name</StyledLabel>
      <StyledInput type="text" />
    </StyledFormGroup>
    <StyledFormGroup>
      <StyledLabel>E-mail*</StyledLabel>
      <StyledInput type="email" required />
    </StyledFormGroup>
    <StyledFormGroup>
      <StyledLabel>Password*</StyledLabel>
      <StyledInput type="password" required />
    </StyledFormGroup>
    <StyledFormGroup>
      <StyledLabel>Repeat Password*</StyledLabel>
      <StyledInput type="password" required />
    </StyledFormGroup>
  </form>
);

export const FooterUsersForm = () => (
  <>
    <StyledButton>Cancel</StyledButton>
    <StyledButton color="primary">Save</StyledButton>
  </>
);
