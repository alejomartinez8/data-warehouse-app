import { getUsers } from 'lib/services';
import { makeAutoObservable } from 'mobx';
import { IUser } from 'lib/types';
import { checkboxEnum } from 'constans';

const { UNCHECKED } = checkboxEnum;

export class UsersStore {
  users: IUser[] = [];

  loading = false;

  usersSelected: IUser[] = [];

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
      this.setUsers([]);
    }
  };

  setUsersSelected = (users: IUser[]) => {
    this.usersSelected = users;
  };

  setUsers = (users: IUser[]) => {
    this.users = users;
  };

  setLoading = (state: boolean) => {
    this.loading = state;
  };
}
