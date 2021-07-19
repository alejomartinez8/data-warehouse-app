import { UserStore, UsersStore, ContactsStore, RegionsStore, CompaniesStore } from 'lib/stores';

export class RootStore {
  userStore: UserStore;

  usersStore: UsersStore;

  contactsStore: ContactsStore;

  regionsStores: RegionsStore;

  companiesStores: CompaniesStore;

  constructor() {
    this.userStore = new UserStore();
    this.usersStore = new UsersStore();
    this.contactsStore = new ContactsStore();
    this.regionsStores = new RegionsStore();
    this.companiesStores = new CompaniesStore();
  }
}
