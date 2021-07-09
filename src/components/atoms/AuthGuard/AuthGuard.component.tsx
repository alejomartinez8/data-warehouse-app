import { useAuth } from 'lib/hooks';

export const AuthGuard = ({ children }) => {
  const { state } = useAuth();

  if (!state.isAuth) {
    return <p>Loading...</p>;
  }

  return <>{children}</>;
};
