import { IRegion, ICountry, ICity } from 'lib/types';
import { AxiosError } from 'axios';
import { unauthorizedHandle } from 'utils/handleError/handleError.util';
import { ApiInstance } from '../axiosInstances';

export const getRegions = async (): Promise<IRegion[]> =>
  ApiInstance.get('/regions')
    .then((response) => response.data)
    .catch((err: AxiosError) => unauthorizedHandle(err));

export const getRegion = async (route: string, id: string) =>
  ApiInstance.get(`/${route}/${id}`)
    .then((response) => response.data)
    .catch((err: AxiosError) => unauthorizedHandle(err));

export const createRegion = async (route: string, data: IRegion | ICountry | ICity) =>
  ApiInstance.post(`/${route}`, data)
    .then((response) => response.data)
    .catch((err: AxiosError) => unauthorizedHandle(err));

export const updateRegion = async (route: string, id: string, data: IRegion | ICountry | ICity) =>
  ApiInstance.put(`/${route}/${id}`, data)
    .then((response) => response.data)
    .catch((err: AxiosError) => unauthorizedHandle(err));

export const deleteRegion = async (route: string, id: string) =>
  ApiInstance.delete(`/${route}/${id}`)
    .then((response) => response.data)
    .catch((err: AxiosError) => unauthorizedHandle(err));
