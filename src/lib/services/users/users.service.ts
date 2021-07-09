import { IUser } from 'lib/types';
import { AxiosError, AxiosRequestConfig } from 'axios';
import { GetServerSidePropsContext } from 'next';
import { unauthorizedHandle } from 'utils/handleError/handleError.util';
import { ApiInstance } from '../axiosInstances';

export const getUsers = async (ctx?: GetServerSidePropsContext): Promise<any> => {
  const { cookie } = ctx?.req.headers;

  const config: AxiosRequestConfig = cookie ? { headers: { cookie } } : undefined;

  return ApiInstance.get('/users', config)
    .then((response) => response.data)
    .catch((err: AxiosError) => unauthorizedHandle(err, ctx));
};

export const registerUser = async (data) =>
  ApiInstance.post('/users', data)
    .then((response) => response.data)
    .catch((err: AxiosError) => unauthorizedHandle(err));

export const updateUser = async (user) =>
  ApiInstance.put(`/users/${user.id}`, user)
    .then((response) => response.data)
    .catch((err: AxiosError) => unauthorizedHandle(err));
