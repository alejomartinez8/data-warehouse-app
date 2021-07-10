import { AxiosError } from 'axios';
import Router from 'next/router';

export function unauthorizedHandle(error: AxiosError) {
  const { response } = error;

  if (response?.status === 401) {
    Router.replace('/login');
    throw error;
  }

  return null;
}
