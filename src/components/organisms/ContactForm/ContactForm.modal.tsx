import { useModal, useStore } from 'lib/hooks';
import { IContact } from 'lib/types';
import React, { FormEvent, useEffect, useState } from 'react';
import {
  Button,
  FormRow,
  FormGroup,
  FormInput,
  FormLabel,
  FormSelect,
  HeaderConfirmation,
  BodyConfirmation,
  FooterConfirmation,
} from 'components/atoms';
import { observer } from 'mobx-react-lite';
import { RegionSelect } from 'components/molecules';

interface IBodyContactsFormProps {
  contact?: IContact;
}

export const HeaderContactForm = ({ title }) => <h1>{title}</h1>;

export const BodyContactForm = observer(({ contact }: IBodyContactsFormProps) => {
  const { closeModal } = useModal();
  const initialState: IContact = {
    id: contact?.id || undefined,
    firstName: contact?.firstName || '',
    lastName: contact?.lastName || '',
    position: contact?.position || '',
    email: contact?.email || '',
    companyId: contact?.companyId || '',
    cityId: contact?.cityId || '',
    channels: contact?.channels || [],
    interest: contact?.interest || '',
  };

  const [formData, setFormData] = useState(initialState);

  const { fetchContacts, fetchCreateContact, fetchUpddateContact } = useStore('contactsStore');
  const { companies, fetchCompanies } = useStore('companiesStores');

  const { firstName, lastName, position, email, companyId, cityId } = formData;

  const handleChange = (e) => {
    switch (e.target.name) {
      case 'company':
        setFormData({ ...formData, companyId: e.target.value });
        break;

      default:
        setFormData({ ...formData, [e.target.name]: e.target.value });
        break;
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (contact) {
      await fetchUpddateContact(formData);
    } else {
      await fetchCreateContact(formData);
    }
    closeModal();
    await fetchContacts();
  };

  useEffect(() => {
    fetchCompanies();
  }, []);

  return (
    <form onSubmit={handleSubmit} id="contact-form">
      <FormRow>
        <FormGroup widthCol={1 / 3}>
          <FormLabel>First Name*</FormLabel>
          <FormInput
            type="text"
            name="firstName"
            value={firstName}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup widthCol={1 / 3}>
          <FormLabel>Last Name*</FormLabel>
          <FormInput
            type="text"
            name="lastName"
            value={lastName}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup widthCol={1 / 3}>
          <FormLabel>E-mail*</FormLabel>
          <FormInput type="email" name="email" value={email} onChange={handleChange} required />
        </FormGroup>
      </FormRow>
      <FormRow>
        <FormGroup widthCol={1 / 2}>
          <FormLabel>Position*</FormLabel>
          <FormInput
            type="text"
            name="position"
            value={position}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup widthCol={1 / 2}>
          <FormLabel>Company</FormLabel>
          <FormSelect id="company" name="company" value={companyId} onChange={handleChange}>
            <option value="">---</option>
            {companies?.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </FormSelect>
        </FormGroup>
      </FormRow>
      <RegionSelect
        entity={contact}
        cityId={cityId}
        formData={formData}
        setFormData={setFormData}
      />
      <FormRow>
        <FormGroup widthCol={1}>
          <FormLabel htmlFor="channels">Channels</FormLabel>
        </FormGroup>
      </FormRow>
    </form>
  );
});

export const FooterContactForm = ({ contact }: { contact?: IContact }) => {
  const { setModal, closeModal } = useModal();
  const { fetchDeleteContacts } = useStore('contactsStore');

  const handleOnDelete = () => {
    const handleOnConfirmation = async () => {
      await fetchDeleteContacts([contact]);
      closeModal();
    };

    setModal({
      header: <HeaderConfirmation title="Delete Contact" />,
      body: (
        <BodyConfirmation>Are you sure you want to delete the selected contacts?</BodyConfirmation>
      ),
      footer: <FooterConfirmation onConfirm={handleOnConfirmation} onClose={closeModal} />,
    });
  };

  const handleOnClick = () => (contact ? handleOnDelete() : closeModal());

  return (
    <>
      <Button color={contact ? 'danger' : 'default'} onClick={handleOnClick}>
        {contact ? 'Delete' : 'Cancel'}
      </Button>
      <Button color="primary" form="contact-form" type="submit">
        Save
      </Button>
    </>
  );
};
