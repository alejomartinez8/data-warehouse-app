import { IContact } from 'lib/types';
import { AxiosError } from 'axios';
import { unauthorizedHandle } from 'utils/handleError/handleError.util';
import { ApiInstance } from '../axiosInstances';

export const getContacts = async (params?): Promise<IContact[]> =>
  ApiInstance.get('/contacts', { params })
    .then((response) => response.data)
    .catch((err: AxiosError) => unauthorizedHandle(err));

export const getContactsCSV = async (params?) =>
  ApiInstance.get('/contacts/csv', { params })
    .then((response) => response.data)
    .catch((err: AxiosError) => unauthorizedHandle(err));

export const createContact = async (data: IContact) =>
  ApiInstance.post(`/contacts`, data)
    .then((response) => response.data)
    .catch((err: AxiosError) => unauthorizedHandle(err));

export const updateContact = async (id: string, data) =>
  ApiInstance.put(`/contacts/${id}`, data).then((response) => response.data);

export const deleteContact = async (id: string) =>
  ApiInstance.delete(`/contacts/${id}`)
    .then((response) => response.data)
    .catch((err: AxiosError) => unauthorizedHandle(err));

export const uploadAvatarContact = async (file: File) => {
  const formdata = new FormData();
  formdata.append('file', file, file.name);

  return ApiInstance.post('/contacts/upload', formdata).then((response) => response.data);
};
