import { AuthStore, UsersStore, ContactsStore, RegionsStore, CompaniesStore } from 'lib/stores';

export class RootStore {
  authStore: AuthStore;

  usersStore: UsersStore;

  contactsStore: ContactsStore;

  regionsStores: RegionsStore;

  companiesStores: CompaniesStore;

  constructor() {
    this.authStore = new AuthStore();
    this.usersStore = new UsersStore();
    this.contactsStore = new ContactsStore();
    this.regionsStores = new RegionsStore();
    this.companiesStores = new CompaniesStore();
  }
}
