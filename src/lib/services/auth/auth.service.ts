import { AuthInstance } from '../axiosInstances';

export const login = async (data: { email: string; password: string }): Promise<any> =>
  AuthInstance({ url: '/login', data, withCredentials: true })
    .then((response) => console.log(response))
    .catch((err) => {
      throw err;
    });
