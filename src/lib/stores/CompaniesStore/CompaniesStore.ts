import { deleteCompany, getCompanies, createCompany, updateCompany } from 'lib/services';
import { makeAutoObservable } from 'mobx';
import { ICompany, IUpdateCompanyDto } from 'lib/types';

export class CompaniesStore {
  companies: ICompany[] = [];

  loading = false;

  constructor() {
    makeAutoObservable(this);
  }

  fetchCompanies = async () => {
    try {
      this.setLoading(true);
      this.setCompanies(await getCompanies());
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
      this.setLoading(true);
      await createCompany(company);
      await this.fetchCompanies();
      this.setLoading(false);
    } catch (error) {
      this.setLoading(false);
    }
  };

  fetchUpddateCompany = async (id: string, company: IUpdateCompanyDto) => {
    try {
      this.setLoading(true);
      await updateCompany(id, company);
      await this.fetchCompanies();
      this.setLoading(false);
    } catch (error) {
      this.setLoading(false);
    }
  };

  fetchDeleteCompanies = async (companies: ICompany[]) => {
    try {
      this.setLoading(true);
      const promises = companies.map((company) => deleteCompany(company.id)); // TODO: endpoint with several id?
      await Promise.all(promises);
      await this.fetchCompanies();
      this.setLoading(false);
    } catch (error) {
      this.setLoading(false);
    }
  };
}
