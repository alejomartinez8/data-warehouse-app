import { useModal, useStore } from 'lib/hooks';
import { StyledButton } from './Users.styled';

export const HeaderUsersDelete = ({ title }) => <h1>{title}</h1>;

export const BodyUsersDelete = () => <p>Are you sure you want to delete the selected users?</p>;

export const FooterUsersDelete = () => {
  const { closeModal } = useModal();
  const { usersSelected, fetchDeleteUsers } = useStore('usersStore');

  const handleOnConfirmation = async () => {
    await fetchDeleteUsers(usersSelected);
    closeModal();
  };

  return (
    <>
      <StyledButton color="primary" onClick={handleOnConfirmation}>
        Yes
      </StyledButton>
      <StyledButton onClick={closeModal}>No</StyledButton>
    </>
  );
};
