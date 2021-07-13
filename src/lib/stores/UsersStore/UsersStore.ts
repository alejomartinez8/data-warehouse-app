import { deleteUser, getUsers, registerUser, updateUser } from 'lib/services';
import { makeAutoObservable } from 'mobx';
import { IUser } from 'lib/types';

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

  fetchRegisterUser = async (user) => {
    try {
      this.setLoading(true);
      await registerUser(user);
      this.fetchUsers();
      this.setLoading(false);
    } catch (error) {
      this.setLoading(false);
    }
  };

  fetchUpddateUser = async (user) => {
    try {
      this.setLoading(true);
      await updateUser(user);
      this.fetchUsers();
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
      this.fetchUsers();
      this.setLoading(false);
    } catch (error) {
      this.setLoading(false);
    }
  };
}
