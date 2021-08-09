import { getProfile } from 'lib/services';
import { makeAutoObservable } from 'mobx';
import { IUser } from 'lib/types';

interface IAuthState {
  isAuth: boolean;
  error?: any;
}

export class AuthStore {
  user: IUser = null;

  loading: boolean;

  authState: IAuthState = { isAuth: false, error: null };

  constructor() {
    makeAutoObservable(this);
  }

  fetchUser = async () => {
    try {
      this.setLoading(true);
      const user = await getProfile();
      this.setUser(user);
      this.setAuthState({ isAuth: true, error: null });
      this.setLoading(false);
    } catch (error) {
      this.setAuthState({ isAuth: false, error });
      this.setLoading(false);
      throw error;
    }

    return this.authState;
  };

  setLoading = (value: boolean) => {
    this.loading = value;
  };

  setUser = (user: IUser) => {
    this.user = user;
  };

  setAuthState = (state: IAuthState) => {
    this.authState = state;
  };

  logout = async () => {
    localStorage.clear();
    this.setAuthState({ isAuth: false, error: null });
    this.setUser(null);
  };
}
