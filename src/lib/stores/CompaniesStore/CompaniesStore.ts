import { RootStore } from 'lib/stores';
import { deleteCompany, getCompanies, createCompany, updateCompany } from 'lib/services';
import { makeAutoObservable } from 'mobx';
import { ICompany, IUpdateCompanyDto } from 'lib/types';

export class CompaniesStore {
  private rootStore: RootStore;

  companies: ICompany[] = [];

  loading = false;

  constructor(rootStore: RootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  fetchCompanies = async (params?) => {
    try {
      this.setLoading(true);
      this.setCompanies(await getCompanies(params));
      this.setLoading(false);
    } catch (error) {
      this.setLoading(false);
      this.setCompanies([]);
    }
  };

  setCompanies = (companies: ICompany[]) => {
    this.companies = companies;
  };

  setLoading = (state: boolean) => {
    this.loading = state;
  };

  fetchCreateCompany = async (company: ICompany) => {
    try {
      await createCompany(company);
      this.rootStore.notificationsStore.pushNotification({
        type: 'Success',
        message: 'Company created successfully',
      });
      await this.fetchCompanies();
    } catch (error) {
      this.rootStore.notificationsStore.pushNotification({
        type: 'Error',
        message: 'Error company create',
      });
    }
  };

  fetchUpddateCompany = async (company: IUpdateCompanyDto) => {
    try {
      await updateCompany(company.id, company);
      this.rootStore.notificationsStore.pushNotification({
        type: 'Success',
        message: 'Company updated successfully',
      });
      await this.fetchCompanies();
    } catch (error) {
      this.setLoading(false);
    }
  };

  fetchDeleteCompanies = async (companies: ICompany[]) => {
    try {
      const promises = companies.map((company) => deleteCompany(company.id)); // TODO: endpoint with several id?
      await Promise.all(promises);
      this.rootStore.notificationsStore.pushNotification({
        type: 'Success',
        message: 'Company(s) deleted successfully',
      });
      await this.fetchCompanies();
    } catch (error) {
      this.rootStore.notificationsStore.pushNotification({
        type: 'Error',
        message: 'Error company(s) delete',
      });
    }
  };
}
