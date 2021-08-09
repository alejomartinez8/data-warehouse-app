import { IContact } from 'lib/types';
import { AxiosError } from 'axios';
import getConfig from 'next/config';
import { unauthorizedHandle } from 'utils/handleError/handleError.util';
import { ApiInstance } from '../axiosInstances';

const { publicRuntimeConfig } = getConfig();

const basePath = publicRuntimeConfig.API_URL;

export const getContacts = async (params?): Promise<IContact[]> =>
  ApiInstance()
    .get(`${basePath}/contacts`, { params })
    .then((response) => response.data)
    .catch((err: AxiosError) => unauthorizedHandle(err));

export const getContactsCSV = async (params?) =>
  ApiInstance()
    .get(`${basePath}/contacts/csv`, { params })
    .then((response) => response.data)
    .catch((err: AxiosError) => unauthorizedHandle(err));

export const createContact = async (data: IContact) => {
  const formdata = new FormData();
  Object.keys(data).forEach((key) => {
    if (key === 'channels' && data.channels?.length > 0) {
      formdata.append(key, JSON.stringify(data.channels));
    } else {
      formdata.append(key, data[key]);
    }
  });

  return ApiInstance()
    .post(`${basePath}/contacts`, formdata, {
      headers: { 'Content-Type': 'multipart/form-data', Accept: 'application/json' },
    })
    .then((response) => response.data)
    .catch((err: AxiosError) => unauthorizedHandle(err));
};

export const updateContact = async (id: string, data: IContact) => {
  const formdata = new FormData();
  Object.keys(data).forEach((key) => {
    if (key === 'channels' && data.channels?.length > 0) {
      formdata.append(key, JSON.stringify(data.channels));
    } else {
      formdata.append(key, data[key]);
    }
  });

  return ApiInstance()
    .put(`${basePath}/contacts/${id}`, formdata, {
      headers: { 'Content-Type': 'multipart/form-data', Accept: 'application/json' },
    })
    .then((response) => response.data)
    .catch((err: AxiosError) => unauthorizedHandle(err));
};

export const deleteContact = async (id: string) =>
  ApiInstance()
    .delete(`${basePath}/contacts/${id}`)
    .then((response) => response.data)
    .catch((err: AxiosError) => unauthorizedHandle(err));

export const uploadAvatarContact = async (file: File) => {
  const formdata = new FormData();
  formdata.append('file', file, file.name);

  return ApiInstance()
    .post(`${basePath}/contacts/upload`, formdata, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
    .then((response) => response.data)
    .catch((err: AxiosError) => unauthorizedHandle(err));
};
