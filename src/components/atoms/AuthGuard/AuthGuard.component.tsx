import { useAuth } from 'lib/hooks/useAuth';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export const AuthGuard = ({ children }) => {
  const { state } = useAuth();
  const router = useRouter();

  console.log('AuthGuard', new Date());

  useEffect(() => {
    if (state.isAuth) {
      router.push('/login');
    }
  }, [router, state]);

  if (!state.isAuth) {
    return <p>Loading...</p>;
  }

  return <>{children}</>;
};
