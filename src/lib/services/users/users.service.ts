import { AxiosError, AxiosRequestConfig } from 'axios';
import { GetServerSidePropsContext } from 'next';
import { unauthorizedHandle } from 'utils/handleError/handleError.util';
import { ApiInstance } from '../axiosInstances';

export const getUsers = async (ctx?: GetServerSidePropsContext): Promise<any> => {
  const cookie = ctx.req?.headers.cookie;

  const config: AxiosRequestConfig = cookie ? { headers: { cookie } } : undefined;

  return ApiInstance.get('/users', config)
    .then((response) => response.data)
    .catch((err: AxiosError) => unauthorizedHandle(err, ctx));
};
