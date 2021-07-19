import { useModal } from 'lib/hooks';
import React, { FormEvent, useState } from 'react';
import {
  Button,
  StyledFormGroup,
  StyledFormInput,
  StyledFormLabel,
  // StyledFormSelect,
} from 'components/atoms';
import { HeaderDelete, BodyDelete, FooterDelete } from './Delete.modal';
import { IField } from './PageList.component';

interface IBodyFormProps {
  fields: IField[];
  item?: any;
  fetchItems: () => void;
  fetchUpdateItems: (id, data) => void;
  fetchCreateItems: (data) => void;
}

export const HeaderForm = ({ title }) => <h1>{title}</h1>;

export const BodyForm = ({
  fields,
  item,
  fetchItems,
  fetchCreateItems,
  fetchUpdateItems,
}: IBodyFormProps) => {
  const { closeModal } = useModal();

  // const initialState = item || ;

  const [formData, setFormData] = useState(
    item || fields.reduce((acc, cur) => ({ ...acc, [cur.key]: '' }), {}),
  );

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (item) {
      await fetchUpdateItems(item.id, formData);
    } else {
      await fetchCreateItems(formData);
    }
    closeModal();
    await fetchItems();
  };

  return (
    <form onSubmit={handleSubmit} id="item-form">
      {fields.map((field) => (
        <StyledFormGroup key={field.key}>
          <StyledFormLabel>
            {field.label}
            {field.required ? '*' : ''}
          </StyledFormLabel>
          <StyledFormInput
            type={field.type}
            name={field.key}
            value={formData[field.key]}
            onChange={handleChange}
            required
          />
        </StyledFormGroup>
      ))}
    </form>
  );
};

interface IFooterFormProps {
  item?: any;
  fetchDeleteItems: (items: any[]) => void;
}

export const FooterForm = ({ item, fetchDeleteItems }: IFooterFormProps) => {
  const { setModal, closeModal } = useModal();

  const handleOnDelete = () => {
    setModal({
      header: <HeaderDelete title="Delete User" />,
      body: <BodyDelete />,
      footer: <FooterDelete items={[item]} fetchDeleteItems={fetchDeleteItems} />,
    });
  };

  const handleOnClick = () => (item ? handleOnDelete() : closeModal());

  return (
    <>
      <Button color={item ? 'danger' : 'default'} onClick={handleOnClick}>
        {item ? 'Delete' : 'Cancel'}
      </Button>
      <Button color="primary" form="item-form" type="submit">
        Save
      </Button>
    </>
  );
};
