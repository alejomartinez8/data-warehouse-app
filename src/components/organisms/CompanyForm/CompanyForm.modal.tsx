import { useModal, useStore } from 'lib/hooks';
import { ICompany } from 'lib/types';
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
  const {
    regions,
    countries,
    cities,
    fetchRegions,
    getCountriesByRegionId,
    getCitiesByCountryId,
  } = useStore('regionsStores');

  const [formData, setFormData] = useState(initialState);
  const [regionId, setRegionId] = useState('');
  const [countryId, setCountryId] = useState('');

  const { name, address, email, phone, cityId } = formData;

  const handleChange = (e) => {
    switch (e.target.name) {
      case 'region':
        setRegionId(e.target.value);
        break;

      case 'country':
        setCountryId(e.target.value);
        break;

      case 'city':
        setFormData({ ...formData, cityId: e.target.value });
        break;

      default:
        setFormData({ ...formData, [e.target.name]: e.target.value });
        break;
    }
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

  useEffect(() => {
    fetchRegions();

    if (company?.city) {
      setRegionId(company.city.country.regionId);
      setCountryId(company.city.countryId);
      setFormData({ ...formData, cityId: company.cityId });
    }
  }, [company]);

  useEffect(() => {
    if (regionId) getCountriesByRegionId(regionId);
  }, [regions, regionId]);

  useEffect(() => {
    if (countryId) getCitiesByCountryId(countryId);
  }, [countries, countryId]);

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
      <FormRow>
        <FormGroup widthCol={1 / 3}>
          <FormLabel htmlFor="region">Region</FormLabel>
          <FormSelect id="region" name="region" value={regionId} onChange={handleChange}>
            <option value="">---</option>
            {regions?.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </FormSelect>
        </FormGroup>
        <FormGroup widthCol={1 / 3}>
          <FormLabel htmlFor="country">Country</FormLabel>
          <FormSelect
            id="country"
            name="country"
            value={countryId}
            onChange={handleChange}
            disabled={!regionId}
          >
            <option value="">---</option>
            {countries?.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </FormSelect>
        </FormGroup>
        <FormGroup widthCol={1 / 3}>
          <FormLabel htmlFor="city">City</FormLabel>
          <FormSelect
            id="city"
            name="city"
            value={cityId}
            onChange={handleChange}
            disabled={!countryId}
          >
            <option value="">---</option>
            {cities?.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </FormSelect>
        </FormGroup>
      </FormRow>
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
