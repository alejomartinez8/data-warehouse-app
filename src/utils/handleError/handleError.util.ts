import { AxiosError } from 'axios';
import Router from 'next/router';
import Cookies from 'js-cookie';

export function unauthorizedHandle(error: AxiosError) {
  Cookies.remove('user');

  if (error.code === '401') {
    Router.replace('/login');
  }

  throw error;
}
