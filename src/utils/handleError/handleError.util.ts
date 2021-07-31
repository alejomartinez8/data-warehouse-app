import { AxiosError } from 'axios';
import Router from 'next/router';
import Cookies from 'js-cookie';

export function unauthorizedHandle(error: AxiosError) {
  Cookies.remove('user');
  Router.replace('/login');
  throw error;
}
