import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useStore } from 'lib/hooks';

export default function Page() {
  const { user } = useStore('authStore');
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/login');
    } else {
      router.push('/contacts');
    }
  }, [user]);

  return null;
}
