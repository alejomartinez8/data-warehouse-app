import { IUser } from 'lib/types';
import { AxiosError } from 'axios';
import { unauthorizedHandle } from 'utils/handleError/handleError.util';
import { ApiInstance } from '../axiosInstances';

export const getProfiles = async (): Promise<IUser[]> =>
  ApiInstance.get('/users')
    .then((response) => response.data)
    .catch((err: AxiosError) => unauthorizedHandle(err));

export const registerUser = async (data) =>
  ApiInstance.post('/users', data)
    .then((response) => response.data)
    .catch((err: AxiosError) => unauthorizedHandle(err));

export const updateUser = async (user) =>
  ApiInstance.put(`/users/${user.id}`, user)
    .then((response) => response.data)
    .catch((err: AxiosError) => unauthorizedHandle(err));
