import { useModal, useStore } from 'lib/hooks';
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
  const { fetchRegions, fetchUpddateRegion, fetchCreateRegion } = useStore('regionsStores');

  const { name } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (item) {
      switch (item.type) {
        case 'region':
          await fetchUpddateRegion('regions', item.id, { name });
          break;
        case 'country':
          await fetchUpddateRegion('countries', item.id, { name, regionId: item.parentId });
          break;
        case 'city':
          await fetchUpddateRegion('cities', item.id, { name, countryId: item.parentId });
          break;
        default:
          break;
      }
    } else {
      switch (type) {
        case 'region':
          await fetchCreateRegion('regions', { name });
          break;
        case 'country':
          await fetchCreateRegion('countries', { name, regionId: parentId });
          break;
        case 'city':
          await fetchCreateRegion('cities', { name, countryId: parentId });
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
