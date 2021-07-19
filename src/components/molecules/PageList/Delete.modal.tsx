import { useModal } from 'lib/hooks';
import { Button } from 'components/atoms';
import { StyledParragraphDelete } from './PageList.styled';

export const HeaderDelete = ({ title }) => <h1>{title}</h1>;

export const BodyDelete = () => (
  <StyledParragraphDelete>
    Are you sure you want to delete the selected items?
  </StyledParragraphDelete>
);

interface IFooterDeleteProps {
  items: any[];
  fetchDeleteItems: (items: any[]) => void;
}

export const FooterDelete = ({ items, fetchDeleteItems }: IFooterDeleteProps) => {
  const { closeModal } = useModal();

  const handleOnConfirmation = async () => {
    await fetchDeleteItems(items);
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
