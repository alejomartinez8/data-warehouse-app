import { IUser } from 'lib/types';
import { createContext, useState, useEffect, useContext } from 'react';
import { getProfile, postLogout } from 'lib/services';

interface IAuthState {
  isAuth: boolean;
  error?: any;
}

interface IAuthContext {
  user: IUser;
  state: IAuthState;
  setUser: (user: IUser) => void;
  setState: (state: IAuthState) => void;
  logout: () => void;
}

const authContextDefault: IAuthContext = {
  user: null,
  state: { isAuth: false, error: null },
  setUser: null,
  setState: null,
  logout: null,
};

const AuthContext = createContext<IAuthContext>(authContextDefault);

export const useAuth = (): IAuthContext => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }

  return context;
};

export const useIsAuth = () => {
  const context = useAuth();
  return context.state.isAuth;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState<IUser>(authContextDefault.user);
  const [state, setState] = useState<IAuthState>(authContextDefault.state);

  useEffect(() => {
    getProfile()
      .then((response) => {
        setUser(response);
        setState({ isAuth: true, error: null });
      })
      .catch((err) => {
        setState({ isAuth: false, error: err });
      });
  }, []);

  const logout = async () => {
    await postLogout();
    setState(authContextDefault.state);
    setUser(authContextDefault.user);
  };

  return (
    <AuthContext.Provider value={{ user, state, setUser, setState, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
