import { getProfile, postLogout } from 'lib/services';
import { makeAutoObservable } from 'mobx';
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
  }

  fetchUser = async () => {
    try {
      const user = await getProfile();
      this.setUser(user);
      this.setAuthState({ isAuth: true, error: null });
    } catch (error) {
      this.setAuthState({ isAuth: false, error });
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
    this.setAuthState({ isAuth: false, error: null });
    this.setUser(null);
  };
}
