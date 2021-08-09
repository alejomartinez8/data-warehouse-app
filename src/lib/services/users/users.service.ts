import { IUser } from 'lib/types';
import { AxiosError } from 'axios';
import { unauthorizedHandle } from 'utils/handleError/handleError.util';
import { ApiInstance } from '../axiosInstances';

export interface UserWithPassword extends IUser {
  password?: string;
}

export const getUsers = async (params?): Promise<IUser[]> =>
  ApiInstance()
    .get('/api/users', { params })
    .then((response) => response.data)
    .catch((err: AxiosError) => unauthorizedHandle(err));

export const registerUser = async (user: UserWithPassword) =>
  ApiInstance()
    .post('/api/users', user)
    .then((response) => response.data)
    .catch((err: AxiosError) => unauthorizedHandle(err));

export const updateUser = async (user: UserWithPassword) =>
  ApiInstance()
    .put(`/api/users/${user.id}`, user)
    .then((response) => response.data)
    .catch((err: AxiosError) => unauthorizedHandle(err));

export const deleteUser = async (id: string) =>
  ApiInstance()
    .delete(`/api/users/${id}`)
    .then((response) => response.data)
    .catch((err: AxiosError) => unauthorizedHandle(err));
