import { useModal, useStore } from 'lib/hooks';
import { ICity, ICompany, ICountry } from 'lib/types';
import React, { FormEvent, useEffect, useState } from 'react';
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
  };

  const { fetchCompanies, fetchCreateCompany, fetchUpddateCompany } = useStore('companiesStores');
  const { regions, fetchRegions, getCountriesByRegionId, getCitiesByCountryId } = useStore(
    'regionsStores',
  );

  const [formData, setFormData] = useState(initialState);
  const [regionId, setRegionId] = useState('');
  const [countryId, setCountryId] = useState('');
  const [cityId, setCityId] = useState(company?.cityId || '');
  const [countries, setCountries] = useState<ICountry[]>();
  const [cities, setCities] = useState<ICity[]>();

  const { name, address, email, phone } = formData;

  const handleOnChange = (e) => {
    switch (e.target.name) {
      case 'region':
        setRegionId(e.target.value);
        setCountryId('');
        setCityId('');
        break;

      case 'country':
        setCountryId(e.target.value);
        setCityId('');
        break;

      case 'city':
        setCityId(e.target.value);
        break;

      default:
        setFormData({ ...formData, [e.target.name]: e.target.value });
        break;
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (company) {
      await fetchUpddateCompany({ ...formData, cityId });
    } else {
      await fetchCreateCompany({ ...formData, cityId });
    }
    closeModal();
    await fetchCompanies();
  };

  useEffect(() => {
    fetchRegions();
  }, []);

  useEffect(() => {
    if (company?.city) {
      setRegionId(company.city.country.regionId);
      setCountryId(company.city.countryId);
      setCityId(company.city.id);
    }
  }, [company]);

  useEffect(() => {
    const fetchCountries = async () => {
      if (regionId) {
        const data = await getCountriesByRegionId(regionId);
        setCountries(data);
      }
    };
    fetchCountries();
  }, [regionId]);

  useEffect(() => {
    const fetchCities = async () => {
      if (countryId) {
        const data = await getCitiesByCountryId(countryId);
        setCities(data);
      }
    };
    fetchCities();
  }, [countryId]);

  return (
    <form onSubmit={handleSubmit} id="company-form">
      <FormRow>
        <FormGroup widthCol={1 / 2}>
          <FormLabel>Name*</FormLabel>
          <FormInput type="text" name="name" value={name} onChange={handleOnChange} required />
        </FormGroup>
        <FormGroup widthCol={1 / 2}>
          <FormLabel>E-mail*</FormLabel>
          <FormInput type="email" name="email" value={email} onChange={handleOnChange} required />
        </FormGroup>
      </FormRow>
      <FormRow>
        <FormGroup widthCol={1 / 2}>
          <FormLabel>Address</FormLabel>
          <FormInput type="type" name="address" value={address} onChange={handleOnChange} />
        </FormGroup>
        <FormGroup widthCol={1 / 2}>
          <FormLabel>Phone</FormLabel>
          <FormInput type="type" name="phone" value={phone} onChange={handleOnChange} />
        </FormGroup>
      </FormRow>
      <RegionSelect
        regionId={regionId}
        countryId={countryId}
        cityId={cityId}
        regions={regions}
        countries={countries}
        cities={cities}
        handleOnChange={handleOnChange}
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
