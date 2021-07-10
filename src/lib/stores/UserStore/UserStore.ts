import { getProfile, postLogout } from 'lib/services';
import { makeAutoObservable, toJS } from 'mobx';
import { IUser } from 'lib/types';

interface IAuthState {
  isAuth: boolean;
  error?: any;
}

export class UserStore {
  user: IUser = null;

  authState: IAuthState = { isAuth: false, error: null };

  constructor() {
    makeAutoObservable(this);
    this.fetchUser();
  }

  fetchUser = async () => {
    try {
      const user = await getProfile();
      this.setUser(user);
      this.authState = { isAuth: true, error: null };
    } catch (error) {
      this.authState = { isAuth: false, error };
    }

    return this.authState;
  };

  setUser = (user: IUser) => {
    this.user = user;
  };

  setAuthState = (state: IAuthState) => {
    this.authState = state;
  };

  logout = async () => {
    await postLogout();
    this.authState = { isAuth: false, error: null };
    this.user = null;
  };
}
