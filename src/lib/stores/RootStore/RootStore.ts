import { UserStore, UsersStore, ContactsStore, RegionsStore } from 'lib/stores';

export class RootStore {
  userStore: UserStore;

  usersStore: UsersStore;

  contactsStore: ContactsStore;

  regionsStores: RegionsStore;

  constructor() {
    this.userStore = new UserStore();
    this.usersStore = new UsersStore();
    this.contactsStore = new ContactsStore();
    this.regionsStores = new RegionsStore();
  }
}
