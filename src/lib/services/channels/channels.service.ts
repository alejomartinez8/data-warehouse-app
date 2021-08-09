import { IChannel } from 'lib/types';
import { AxiosError } from 'axios';
import { unauthorizedHandle } from 'utils/handleError/handleError.util';
import { ApiInstance } from '../axiosInstances';

export const getChannels = async (): Promise<IChannel[]> =>
  ApiInstance()
    .get('/api/channels')
    .then((response) => response.data)
    .catch((err: AxiosError) => unauthorizedHandle(err));

export const createChannel = async (data: IChannel) =>
  ApiInstance()
    .post(`/api/channels`, data)
    .then((response) => response.data)
    .catch((err: AxiosError) => unauthorizedHandle(err));

export const updateChannel = async (id: string, data: IChannel) =>
  ApiInstance()
    .put(`/api/channels/${id}`, data)
    .then((response) => response.data)
    .catch((err: AxiosError) => unauthorizedHandle(err));

export const deleteChannel = async (id: string) =>
  ApiInstance()
    .delete(`/api/channels/${id}`)
    .then((response) => response.data)
    .catch((err: AxiosError) => unauthorizedHandle(err));
