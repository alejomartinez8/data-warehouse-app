import { useModal, useStore } from 'lib/hooks';
import { createRegion, updateRegion } from 'lib/services';
import React, { FormEvent, useState } from 'react';
import { Button, FormGroup, FormInput, FormLabel } from 'components/atoms';
import { IItem } from 'components/molecules';

interface IBodyRegionsFormProps {
  item?: IItem;
  type?: string;
  parentId?: string;
}

export const HeaderRegionsForm = ({ title }) => <h1>{title}</h1>;

export const BodyRegionsForm = ({ item, type, parentId }: IBodyRegionsFormProps) => {
  const { closeModal } = useModal();

  const initialState = {
    id: item ? item.id : undefined,
    name: item ? item.name : '',
  };

  const [formData, setFormData] = useState(initialState);
  const { fetchRegions } = useStore('regionsStores');

  const { name } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (item) {
      switch (item.type) {
        case 'region':
          await updateRegion('regions', item.id, { name });
          break;
        case 'country':
          await updateRegion('countries', item.id, { name, regionId: item.parentId });
          break;
        case 'city':
          await updateRegion('cities', item.id, { name, countryId: item.parentId });
          break;
        default:
          break;
      }
    } else {
      switch (type) {
        case 'region':
          await createRegion('regions', { name });
          break;
        case 'country':
          await createRegion('countries', { name, regionId: parentId });
          break;
        case 'city':
          await createRegion('cities', { name, countryId: parentId });
          break;
        default:
          break;
      }
    }

    closeModal();
    await fetchRegions();
  };

  return (
    <form onSubmit={handleSubmit} id="item-form">
      <FormGroup>
        <FormLabel>Name*</FormLabel>
        <FormInput type="text" name="name" value={name} onChange={handleChange} required />
      </FormGroup>
    </form>
  );
};

export const FooterRegionsForm = () => {
  const { closeModal } = useModal();

  return (
    <>
      <Button color="default" onClick={closeModal}>
        Cancel
      </Button>
      <Button color="primary" form="item-form" type="submit">
        Save
      </Button>
    </>
  );
};
