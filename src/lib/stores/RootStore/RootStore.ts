import { UserStore, UsersStore } from 'lib/stores';

export class RootStore {
  userStore: UserStore;

  usersStore: UsersStore;

  constructor() {
    this.userStore = new UserStore();
    this.usersStore = new UsersStore();
  }
}
