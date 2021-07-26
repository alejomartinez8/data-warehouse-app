import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useStore, useModal } from 'lib/hooks';
import { IField, PageList } from 'components/molecules';
import { HeaderCompanyForm, BodyCompanyForm, FooterCompanyForm } from 'components/organisms';
import {
  HeaderConfirmation,
  BodyConfirmation,
  FooterConfirmation,
  TableData,
} from 'components/atoms';
import { ICompany } from 'lib/types';

export const CompaniesTemplate = observer(() => {
  const { setModal, closeModal } = useModal();
  const { companies, loading, fetchCompanies, fetchDeleteCompanies } = useStore('companiesStores');

  const fields: IField[] = [
    { key: 'name', label: 'Name' },
    { key: 'address', label: 'Address' },
    { key: 'email', label: 'Email' },
    { key: 'phone', label: 'Phone' },
    { key: 'cityName', label: 'City' },
  ];

  const mapItems = () =>
    companies?.map((company) => ({
      ...company,
      cityName: <TableData firstLine={company.city.name} secondLine={company.city.country.name} />,
    }));

  const handleOnCreate = () => {
    setModal({
      header: <HeaderCompanyForm title="Add Company" />,
      body: <BodyCompanyForm />,
      footer: <FooterCompanyForm />,
      size: 'large',
    });
  };

  const handleOnEdit = (item: ICompany) => {
    setModal({
      header: <HeaderCompanyForm title="Edit Company" />,
      body: <BodyCompanyForm company={item as ICompany} />,
      footer: <FooterCompanyForm company={item} />,
      size: 'large',
    });
  };

  const handleOnDelete = (items: ICompany[]) => {
    const handleOnConfirmation = async () => {
      await fetchDeleteCompanies(items);
      closeModal();
    };

    setModal({
      header: (
        <HeaderConfirmation title={items.length === 1 ? 'Delete Company' : 'Delete Companies'} />
      ),
      body: (
        <BodyConfirmation>Are you sure you want to delete the selected companies?</BodyConfirmation>
      ),
      footer: <FooterConfirmation onConfirm={handleOnConfirmation} onClose={closeModal} />,
    });
  };

  useEffect(() => {
    fetchCompanies();
  }, [fetchCompanies]);

  return (
    <PageList
      singularItem="Company"
      pluralItem="Companies"
      fields={fields}
      items={mapItems()}
      loading={loading}
      handleOnCreate={handleOnCreate}
      handleOnEdit={handleOnEdit}
      handleOnDelete={handleOnDelete}
    />
  );
});
