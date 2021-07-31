import { AxiosError } from 'axios';
import Router from 'next/router';
import Cookies from 'js-cookie';

export function unauthorizedHandle(error: AxiosError) {
  const { response } = error;

  if (response?.status === 401) {
    Cookies.remove('user');
    Router.replace('/login');
    throw error;
  }

  return null;
}
