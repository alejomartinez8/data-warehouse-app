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
  IOrderBy,
} from 'components/atoms';
import { ICompany } from 'lib/types';

const EnumLabelContact = {
  name: 'name',
  address: 'address',
  email: 'email',
  phone: 'phone',
  cityName: 'city',
};

export const CompaniesTemplate = observer(() => {
  const { setModal, closeModal } = useModal();
  const { companies, loading, fetchCompanies, fetchDeleteCompanies } = useStore('companiesStores');

  const [searchQuery, setSearchQuery] = useState('');
  const [orderBy, setOrderBy] = useState<IOrderBy>({ orderBy: 'name', order: 'asc' });
  const [itemsSelected, setItemsSelected] = useState<ICompany[]>([]);
  const [itemsMapped, setItemsMapped] = useState([]);

  const fields: IField[] = [
    { key: 'name', label: 'Name', sort: true },
    { key: 'address', label: 'Address', sort: true },
    { key: 'email', label: 'Email', sort: true },
    { key: 'phone', label: 'Phone', sort: true },
    { key: 'cityName', label: 'City', sort: true },
  ];

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

  const mapOrderBy = () => ({
    orderBy: EnumLabelContact[orderBy.orderBy] || '',
    order: orderBy.order,
  });

  useEffect(() => {
    let params: { searchQuery?: string; orderBy?: string; order?: string } = {};
    if (searchQuery) params.searchQuery = searchQuery;
    if (orderBy) params = { ...params, ...mapOrderBy() };

    if (Object.keys(params).length > 0) {
      fetchCompanies(params);
    } else {
      fetchCompanies({ orderBy: 'name', order: 'asc' });
    }
  }, [searchQuery, orderBy]);

  useEffect(() => {
    const mapItems = companies?.map((company) => ({
      ...company,
      cityName: <TableData firstLine={company.city.name} secondLine={company.city.country.name} />,
    }));
    setItemsMapped(mapItems);
  }, [companies]);

  return (
    <PageLayout
      singularItem="Company"
      pluralItem="Companies"
      deleteButton={itemsSelected?.length > 0}
      handleOnCreate={handleOnCreate}
      handleOnDelete={handleOnDelete}
      querySearch={setSearchQuery}
    >
      <TableList
        fields={fields}
        items={itemsMapped}
        orderBy={orderBy}
        loading={loading}
        handleEditItem={handleOnEdit}
        setItemsSelected={setItemsSelected}
        handleOnSortBy={setOrderBy}
      />
    </PageLayout>
  );
});
