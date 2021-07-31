import { RootStore } from 'lib/stores';
import { deleteUser, getUsers, registerUser, updateUser, UserWithPassword } from 'lib/services';
import { makeAutoObservable } from 'mobx';
import { IUser } from 'lib/types';

export class UsersStore {
  private rootStore: RootStore;

  users: IUser[] = [];

  loading = false;

  constructor(rootStore: RootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  fetchUsers = async (params?) => {
    try {
      this.setLoading(true);
      this.setUsers(await getUsers(params));
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
      await registerUser(user);
      this.rootStore.notificationsStore.pushNotification({
        type: 'Success',
        message: 'User created successfully',
      });
      await this.fetchUsers();
    } catch (error) {
      this.rootStore.notificationsStore.pushNotification({
        type: 'Error',
        message: 'Error user create',
      });
    }
  };

  fetchUpddateUser = async (user: UserWithPassword) => {
    try {
      await updateUser(user);
      this.rootStore.notificationsStore.pushNotification({
        type: 'Success',
        message: 'User updated successfully',
      });
      await this.fetchUsers();
    } catch (error) {
      this.rootStore.notificationsStore.pushNotification({
        type: 'Error',
        message: 'Error update update',
      });
    }
  };

  fetchDeleteUsers = async (users: IUser[]) => {
    try {
      const promises = users.map((user) => deleteUser(user.id));
      await Promise.all(promises);
      this.rootStore.notificationsStore.pushNotification({
        type: 'Success',
        message: 'User(s) deleted successfully',
      });
      await this.fetchUsers();
    } catch (error) {
      this.rootStore.notificationsStore.pushNotification({
        type: 'Error',
        message: 'Error user(s) delete',
      });
    }
  };
}
