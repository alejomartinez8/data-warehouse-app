import { IContact } from 'lib/types';
import { AxiosError } from 'axios';
import { unauthorizedHandle } from 'utils/handleError/handleError.util';
import { ApiInstance } from '../axiosInstances';

export const getContacts = async (): Promise<IContact[]> =>
  ApiInstance.get('/contacts')
    .then((response) => response.data)
    .catch((err: AxiosError) => unauthorizedHandle(err));

export const createContact = async (data: IContact) =>
  ApiInstance.post(`/contacts`, data)
    .then((response) => response.data)
    .catch((err: AxiosError) => unauthorizedHandle(err));

export const updateContact = async (id: string, data: IContact) =>
  ApiInstance.put(`/contacts/${id}`, data)
    .then((response) => response.data)
    .catch((err: AxiosError) => unauthorizedHandle(err));

export const deleteContact = async (id: string) =>
  ApiInstance.delete(`/contacts/${id}`)
    .then((response) => response.data)
    .catch((err: AxiosError) => unauthorizedHandle(err));
