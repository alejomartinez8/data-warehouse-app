import { createContext, useState, useEffect, useContext } from 'react';
import { parseCookies, destroyCookie } from 'nookies';
import { getProfile } from '../services/auth/auth.service';

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
  profile: IProfile;
  state: IState;
  setProfile: (profile: IProfile) => void;
  setState: (state: IState) => void;
  logout: () => void;
}

const authContextDefault: IAuthContext = {
  profile: null,
  state: { isAuth: false, error: null },
  setProfile: null,
  setState: null,
  logout: null,
};

const AuthContext = createContext<IAuthContext>(authContextDefault);

export const AuthProvider = ({ children }) => {
  const [profile, setProfile] = useState<IProfile>(authContextDefault.profile);
  const [state, setState] = useState<IState>(authContextDefault.state);

  const cookies = parseCookies();
  console.log(cookies);

  useEffect(() => {
    getProfile()
      .then((response) => {
        setProfile(response);
        setState({ isAuth: true, error: null });
      })
      .catch((err) => {
        setState({ isAuth: false, error: err });
      });
  }, []);

  const logout = (): void => {
    destroyCookie(null, 'user');
    setState({ isAuth: false, error: null });
  };

  return (
    <AuthContext.Provider value={{ profile, state, setProfile, setState, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): IAuthContext => useContext(AuthContext);
