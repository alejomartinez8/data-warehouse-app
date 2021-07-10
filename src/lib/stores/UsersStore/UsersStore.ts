import { getUsers } from 'lib/services';
import { makeAutoObservable } from 'mobx';
import { IUser } from 'lib/types';

export class UsersStore {
  users: IUser[] = null;

  loading = false;

  constructor() {
    makeAutoObservable(this);
  }

  fetchUsers = async () => {
    try {
      this.setLoading(true);
      this.setUsers(await getUsers());
      this.setLoading(false);
    } catch (error) {
      this.setLoading(false);
      this.setUsers(null);
    }
  };

  setUsers = (users: IUser[]) => {
    this.users = users;
  };

  setLoading = (state: boolean) => {
    this.loading = state;
  };
}
