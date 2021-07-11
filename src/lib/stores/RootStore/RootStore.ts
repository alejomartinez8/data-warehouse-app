import { UserStore, UsersStore, ContactsStore } from 'lib/stores';

export class RootStore {
  userStore: UserStore;

  usersStore: UsersStore;

  contactStore: ContactsStore;

  constructor() {
    this.userStore = new UserStore();
    this.usersStore = new UsersStore();
    this.contactStore = new ContactsStore();
  }
}
