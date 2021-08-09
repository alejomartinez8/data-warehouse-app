import { IContact } from 'lib/types';
import axios, { AxiosError } from 'axios';
import getConfig from 'next/config';
import { unauthorizedHandle } from 'utils/handleError/handleError.util';

const { publicRuntimeConfig } = getConfig();

const basePath = publicRuntimeConfig.API_URL;

const getHeaders = () => {
  const token = localStorage.getItem('token');
  return { Authorization: `Bearer ${token}` };
};

export const getContacts = async (params?): Promise<IContact[]> =>
  axios
    .get(`${basePath}/contacts`, { params, headers: getHeaders() })
    .then((response) => response.data)
    .catch((err: AxiosError) => unauthorizedHandle(err));

export const getContactsCSV = async (params?) =>
  axios
    .get(`${basePath}/contacts/csv`, { params, headers: getHeaders() })
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

  return axios
    .post(`${basePath}/contacts`, formdata, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Accept: 'application/json',
        ...getHeaders(),
      },
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

  return axios
    .put(`${basePath}/contacts/${id}`, formdata, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Accept: 'application/json',
        ...getHeaders(),
      },
    })
    .then((response) => response.data)
    .catch((err: AxiosError) => unauthorizedHandle(err));
};

export const deleteContact = async (id: string) =>
  axios
    .delete(`${basePath}/contacts/${id}`, { headers: getHeaders() })
    .then((response) => response.data)
    .catch((err: AxiosError) => unauthorizedHandle(err));

export const uploadAvatarContact = async (file: File) => {
  const formdata = new FormData();
  formdata.append('file', file, file.name);

  return axios
    .post(`${basePath}/contacts/upload`, formdata, {
      headers: { 'Content-Type': 'multipart/form-data', ...getHeaders() },
    })
    .then((response) => response.data)
    .catch((err: AxiosError) => unauthorizedHandle(err));
};
