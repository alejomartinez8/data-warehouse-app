import { createContext, useState, useEffect, useContext } from 'react';
import { getProfile, postLogout } from '../services/auth/auth.service';

interface IProfile {
  email: string;
  firstName: string;
  lastName: string;
  role: 'ADMIN' | 'USER';
}

interface IState {
  isAuth: boolean;
  error?: any;
}

interface IAuthContext {
  user: IProfile;
  state: IState;
  setUser: (user: IProfile) => void;
  setState: (state: IState) => void;
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
  const [user, setUser] = useState<IProfile>(authContextDefault.user);
  const [state, setState] = useState<IState>(authContextDefault.state);

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

  const logout = (): void => {
    postLogout();
    setState({ isAuth: false, error: null });
  };

  return (
    <AuthContext.Provider value={{ user, state, setUser, setState, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
