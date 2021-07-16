import { useEffect } from 'react';
import { useStore } from 'lib/hooks';
import { observer } from 'mobx-react-lite';
import { useRouter } from 'next/router';

export const AuthGuard = observer(({ children }) => {
  const { authState } = useStore('userStore');
  const router = useRouter();

  useEffect(() => {
    if (!authState.isAuth) {
      router.push('/login');
    }
  }, [authState.isAuth, router]);

  if (!authState.isAuth) return <p>Loading</p>;

  if (authState.isAuth) return <>{children}</>;

  return null;
});
