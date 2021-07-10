import { useEffect } from 'react';
import { useStore } from 'lib/hooks';
import { observer } from 'mobx-react-lite';
import { useRouter } from 'next/router';

export const AuthGuard = observer(({ children }) => {
  const { fetchUser, authState } = useStore('userStore');
  const router = useRouter();

  useEffect(() => {
    (async () => {
      if (!authState.isAuth) {
        try {
          await fetchUser();
        } catch (error) {
          router.push('/login');
        }
      }
    })();
  }, [authState.isAuth, fetchUser, router]);

  return <>{children}</>;
});
