import { useModal, useStore } from 'lib/hooks';
import { IUser } from 'lib/types';
import { Button } from 'components/atoms';
import { StyledParragraphDelete } from './Users.styled';

export const HeaderUsersDelete = ({ title }) => <h1>{title}</h1>;

export const BodyUsersDelete = () => (
  <StyledParragraphDelete>
    Are you sure you want to delete the selected users?
  </StyledParragraphDelete>
);

export const FooterUsersDelete = ({ users }: { users?: IUser[] }) => {
  const { closeModal } = useModal();
  const { fetchDeleteUsers } = useStore('usersStore');

  const handleOnConfirmation = async () => {
    await fetchDeleteUsers(users);
    closeModal();
  };

  return (
    <>
      <Button color="primary" onClick={handleOnConfirmation}>
        Yes
      </Button>
      <Button onClick={closeModal}>No</Button>
    </>
  );
};
