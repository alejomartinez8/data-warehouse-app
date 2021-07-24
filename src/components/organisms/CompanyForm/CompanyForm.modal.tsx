import { useModal, useStore } from 'lib/hooks';
import { ICompany } from 'lib/types';
import React, { FormEvent, useState } from 'react';
import {
  Button,
  FormRow,
  FormGroup,
  FormInput,
  FormLabel,
  HeaderConfirmation,
  BodyConfirmation,
  FooterConfirmation,
} from 'components/atoms';
import { observer } from 'mobx-react-lite';
import { RegionSelect } from 'components/molecules';

interface IBodyCompaniesFormProps {
  company?: ICompany;
}

export const HeaderCompanyForm = ({ title }) => <h1>{title}</h1>;

export const BodyCompanyForm = observer(({ company }: IBodyCompaniesFormProps) => {
  const { closeModal } = useModal();
  const initialState: ICompany = {
    id: company?.id || '',
    name: company?.name || '',
    address: company?.address || '',
    email: company?.email || '',
    phone: company?.phone || '',
    cityId: company?.cityId || '',
  };

  const { fetchCompanies, fetchCreateCompany, fetchUpddateCompany } = useStore('companiesStores');

  const [formData, setFormData] = useState(initialState);

  const { name, address, email, phone, cityId } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (company) {
      await fetchUpddateCompany(formData);
    } else {
      await fetchCreateCompany(formData);
    }
    closeModal();
    await fetchCompanies();
  };

  return (
    <form onSubmit={handleSubmit} id="company-form">
      <FormRow>
        <FormGroup widthCol={1 / 2}>
          <FormLabel>Name*</FormLabel>
          <FormInput type="text" name="name" value={name} onChange={handleChange} required />
        </FormGroup>
        <FormGroup widthCol={1 / 2}>
          <FormLabel>E-mail*</FormLabel>
          <FormInput type="email" name="email" value={email} onChange={handleChange} required />
        </FormGroup>
      </FormRow>
      <FormRow>
        <FormGroup widthCol={1 / 2}>
          <FormLabel>Address</FormLabel>
          <FormInput type="type" name="address" value={address} onChange={handleChange} />
        </FormGroup>
        <FormGroup widthCol={1 / 2}>
          <FormLabel>Phone</FormLabel>
          <FormInput type="type" name="phone" value={phone} onChange={handleChange} />
        </FormGroup>
      </FormRow>
      <RegionSelect
        entity={company}
        cityId={cityId}
        formData={formData}
        setFormData={setFormData}
      />
    </form>
  );
});

export const FooterCompanyForm = ({ company }: { company?: ICompany }) => {
  const { setModal, closeModal } = useModal();
  const { fetchDeleteCompanies } = useStore('companiesStores');

  const handleOnDelete = () => {
    const handleOnConfirmation = async () => {
      await fetchDeleteCompanies([company]);
      closeModal();
    };

    setModal({
      header: <HeaderConfirmation title="Delete Company" />,
      body: (
        <BodyConfirmation>Are you sure you want to delete the selected companies?</BodyConfirmation>
      ),
      footer: <FooterConfirmation onConfirm={handleOnConfirmation} onClose={closeModal} />,
    });
  };

  const handleOnClick = () => (company ? handleOnDelete() : closeModal());

  return (
    <>
      <Button color={company ? 'danger' : 'default'} onClick={handleOnClick}>
        {company ? 'Delete' : 'Cancel'}
      </Button>
      <Button color="primary" form="company-form" type="submit">
        Save
      </Button>
    </>
  );
};
