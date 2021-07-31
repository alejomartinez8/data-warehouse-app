import {
  AuthStore,
  UsersStore,
  ContactsStore,
  RegionsStore,
  CompaniesStore,
  ChannelsStore,
  NotificationsStore,
} from 'lib/stores';

export class RootStore {
  authStore: AuthStore;

  usersStore: UsersStore;

  contactsStore: ContactsStore;

  regionsStores: RegionsStore;

  companiesStores: CompaniesStore;

  channelsStore: ChannelsStore;

  notificationsStore: NotificationsStore;

  constructor() {
    this.authStore = new AuthStore();
    this.usersStore = new UsersStore(this);
    this.contactsStore = new ContactsStore(this);
    this.regionsStores = new RegionsStore(this);
    this.companiesStores = new CompaniesStore(this);
    this.channelsStore = new ChannelsStore(this);
    this.notificationsStore = new NotificationsStore();
  }
}
