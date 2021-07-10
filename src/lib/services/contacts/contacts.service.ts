import { AxiosError } from 'axios';
import { unauthorizedHandle } from 'utils/handleError/handleError.util';
import { ApiInstance } from '../axiosInstances';

export const getContacts = async (): Promise<any> =>
  ApiInstance.get('/contacts')
    .then((response) => response.data)
    .catch((err: AxiosError) => unauthorizedHandle(err));
