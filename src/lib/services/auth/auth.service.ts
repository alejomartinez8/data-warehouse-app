import { AuthInstance } from '../axiosInstances';

export const login = async (user: { email: string; password: string }): Promise<any> =>
  AuthInstance.post('/login', user)
    .then((response) => response.data)
    .catch((err) => {
      throw err;
    });

export const logout = async (): Promise<any> =>
  AuthInstance.post('/logout')
    .then((response) => response.data)
    .catch((err) => {
      throw err;
    });

export const getProfile = async (): Promise<any> =>
  AuthInstance.get('/profile')
    .then((response) => response.data)
    .catch((err) => {
      throw err;
    });
