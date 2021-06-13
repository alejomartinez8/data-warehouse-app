import { ApiInstance } from '../axiosInstances';

export const login = async (user: { email: string; password: string }): Promise<any> =>
  ApiInstance.post('/auth/login', user)
    .then((response) => response.data)
    .catch((err) => {
      throw err;
    });

export const logout = async (): Promise<any> =>
  ApiInstance.post('/auth/logout')
    .then((response) => response.data)
    .catch((err) => {
      throw err;
    });

export const getProfile = async (): Promise<any> =>
  ApiInstance.get('/auth/profile')
    .then((response) => response.data)
    .catch((err) => {
      throw err;
    });