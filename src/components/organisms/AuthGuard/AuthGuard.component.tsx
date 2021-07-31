import { useEffect } from 'react';
import { useStore } from 'lib/hooks';
import { observer } from 'mobx-react-lite';
import { useRouter } from 'next/router';

export const AuthGuard = observer(({ children }) => {
  const { authState, fetchUser } = useStore('authStore');
  const router = useRouter();

  useEffect(() => {
    const verifyUser = async () => {
      if (!authState.isAuth) {
        try {
          await fetchUser();
        } catch (error) {
          router.push({
            pathname: '/login',
            query: { redirect: router.pathname },
          });
        }
      }
    };
    verifyUser();
  }, [authState.isAuth]);

  if (authState.isAuth) {
    return <>{children}</>;
  }

  return null;
});
