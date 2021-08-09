import { ICompany, IUpdateCompanyDto } from 'lib/types';
import { AxiosError } from 'axios';
import { unauthorizedHandle } from 'utils/handleError/handleError.util';
import { ApiInstance } from '../axiosInstances';

export const getCompanies = async (params?): Promise<ICompany[]> =>
  ApiInstance()
    .get('/api/companies', { params })
    .then((response) => response.data)
    .catch((err: AxiosError) => unauthorizedHandle(err));

export const createCompany = async (data: ICompany) =>
  ApiInstance()
    .post(`/api/companies`, data)
    .then((response) => response.data)
    .catch((err: AxiosError) => unauthorizedHandle(err));

export const updateCompany = async (id: string, data: IUpdateCompanyDto) =>
  ApiInstance()
    .put(`/api/companies/${id}`, data)
    .then((response) => response.data)
    .catch((err: AxiosError) => unauthorizedHandle(err));

export const deleteCompany = async (id: string) =>
  ApiInstance()
    .delete(`/api/companies/${id}`)
    .then((response) => response.data)
    .catch((err: AxiosError) => unauthorizedHandle(err));
