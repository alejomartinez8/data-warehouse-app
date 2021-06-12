import { AxiosRequestConfig } from 'axios';
import { GetServerSidePropsContext } from 'next';
import { ApiInstance } from '../axiosInstances';

export const getUsers = async (ctx: GetServerSidePropsContext): Promise<any> => {
  const config: AxiosRequestConfig = {
    headers: { cookie: ctx ? ctx.req.headers.cookie : '' },
  };

  return ApiInstance.get('/users', config)
    .then((response) => response.data)
    .catch((err) => {
      throw err;
    });
};
