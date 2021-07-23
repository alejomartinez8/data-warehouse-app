import { deleteUser, getUsers, registerUser, updateUser, UserWithPassword } from 'lib/services';
import { makeAutoObservable } from 'mobx';
import { IUser } from 'lib/types';

export class UsersStore {
  users: IUser[] = [];

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
      this.setUsers([]);
    }
  };

  setUsers = (users: IUser[]) => {
    this.users = users;
  };

  setLoading = (state: boolean) => {
    this.loading = state;
  };

  fetchCreateUser = async (user: UserWithPassword) => {
    try {
      this.setLoading(true);
      await registerUser(user);
      await this.fetchUsers();
      this.setLoading(false);
    } catch (error) {
      this.setLoading(false);
    }
  };

  fetchUpddateUser = async (user: UserWithPassword) => {
    try {
      this.setLoading(true);
      await updateUser(user);
      await this.fetchUsers();
      this.setLoading(false);
    } catch (error) {
      this.setLoading(false);
    }
  };

  fetchDeleteUsers = async (users: IUser[]) => {
    try {
      this.setLoading(true);
      const promises = users.map((user) => deleteUser(user.id));
      await Promise.all(promises);
      await this.fetchUsers();
      this.setLoading(false);
    } catch (error) {
      this.setLoading(false);
    }
  };
}
