import { IField, PageList } from 'components/molecules';
import { useStore } from 'lib/hooks';

export const CompaniesTemplate = () => {
  const {
    companies,
    loading,
    fetchCompanies,
    fetchCreateCompany,
    fetchUpddateCompany,
    fetchDeleteCompanies,
  } = useStore('companiesStores');

  const fields: IField[] = [
    { key: 'name', label: 'Name', type: 'text', required: true },
    { key: 'address', label: 'Address', type: 'text', required: true },
    { key: 'email', label: 'Email', type: 'email', required: true },
    { key: 'phone', label: 'Phone', type: 'text', required: true },
    { key: 'city', label: 'City', type: 'text', required: true },
  ];

  const mapItems = () =>
    companies.map((company) => ({
      id: company.id,
      name: company.name,
      address: company.address,
      email: company.email,
      phone: company.phone,
      city: company.city.name,
    }));

  return (
    <PageList
      singularItem="Company"
      pluralItem="Companies"
      fields={fields}
      items={mapItems()}
      loading={loading}
      fetchItems={fetchCompanies}
      fetchCreateItems={fetchCreateCompany}
      fetchUpdateItems={fetchUpddateCompany}
      fetchDeleteItems={fetchDeleteCompanies}
    />
  );
};
