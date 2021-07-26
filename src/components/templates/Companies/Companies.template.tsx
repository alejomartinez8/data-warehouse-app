import { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useStore, useModal } from 'lib/hooks';
import { IField, PageLayout } from 'components/molecules';
import { HeaderCompanyForm, BodyCompanyForm, FooterCompanyForm } from 'components/organisms';
import {
  HeaderConfirmation,
  BodyConfirmation,
  FooterConfirmation,
  TableList,
  TableData,
} from 'components/atoms';
import { ICompany } from 'lib/types';

export const CompaniesTemplate = observer(() => {
  const { setModal, closeModal } = useModal();
  const { companies, loading, fetchCompanies, fetchDeleteCompanies } = useStore('companiesStores');

  const [itemsSelected, setItemsSelected] = useState<ICompany[]>([]);

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

  const handleOnDelete = () => {
    const handleOnConfirmation = async () => {
      await fetchDeleteCompanies(itemsSelected);
      closeModal();
    };

    setModal({
      header: (
        <HeaderConfirmation
          title={itemsSelected.length === 1 ? 'Delete Company' : 'Delete Companies'}
        />
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
    <PageLayout
      singularItem="Company"
      pluralItem="Companies"
      loading={loading}
      deleteButton={itemsSelected.length > 0}
      handleOnCreate={handleOnCreate}
      handleOnDelete={handleOnDelete}
    >
      <TableList
        fields={fields}
        items={mapItems()}
        handleEditItem={handleOnEdit}
        setItemsSelected={setItemsSelected}
      />
    </PageLayout>
  );
});
