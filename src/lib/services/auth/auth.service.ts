import axios from 'axios';
import { IUser } from 'lib/types';
import { ApiInstance } from '..';

export const login = async (user: { email: string; password: string }): Promise<any> =>
  axios
    .post('/api/auth/login', user)
    .then((response) => response.data)
    .catch((err) => {
      throw err;
    });

export const getProfile = async (): Promise<IUser> =>
  ApiInstance()
    .get('/api/auth/profile')
    .then((response) => response.data)
    .catch((err) => {
      throw err;
    });
