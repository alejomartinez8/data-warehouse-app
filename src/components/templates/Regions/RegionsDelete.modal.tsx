import { useModal, useStore } from 'lib/hooks';
import { Button } from 'components/atoms';

export const HeaderRegionDelete = ({ title }) => <h1>{title}</h1>;

export const BodyRegionDelete = () => <p>Are you sure you want to delete this item?</p>;

export const FooterRegionDelete = ({ route, id }) => {
  const { closeModal } = useModal();
  const { fetchDeleteRegion } = useStore('regionsStores');

  const handleOnConfirmation = async () => {
    await fetchDeleteRegion(route, id);
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
