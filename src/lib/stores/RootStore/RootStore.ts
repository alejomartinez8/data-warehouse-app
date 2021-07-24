import {
  AuthStore,
  UsersStore,
  ContactsStore,
  RegionsStore,
  CompaniesStore,
  ChannelsStore,
} from 'lib/stores';

export class RootStore {
  authStore: AuthStore;

  usersStore: UsersStore;

  contactsStore: ContactsStore;

  regionsStores: RegionsStore;

  companiesStores: CompaniesStore;

  channelsStore: ChannelsStore;

  constructor() {
    this.authStore = new AuthStore();
    this.usersStore = new UsersStore();
    this.contactsStore = new ContactsStore();
    this.regionsStores = new RegionsStore();
    this.companiesStores = new CompaniesStore();
    this.channelsStore = new ChannelsStore();
  }
}
