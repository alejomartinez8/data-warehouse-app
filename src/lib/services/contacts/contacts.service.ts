import { IContact } from 'lib/types';
import { AxiosError } from 'axios';
import { unauthorizedHandle } from 'utils/handleError/handleError.util';
import { ApiInstance } from '../axiosInstances';

export const getContacts = async (): Promise<IContact[]> =>
  ApiInstance.get('/contacts')
    .then((response) => response.data)
    .catch((err: AxiosError) => unauthorizedHandle(err));

export const registerContact = async (data) =>
  ApiInstance.post('/contacts', data)
    .then((response) => response.data)
    .catch((err: AxiosError) => unauthorizedHandle(err));

export const updateContact = async (contact) =>
  ApiInstance.put(`/contacts/${contact.id}`, contact)
    .then((response) => response.data)
    .catch((err: AxiosError) => unauthorizedHandle(err));
