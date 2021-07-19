import { ICompany, IUpdateCompanyDto } from 'lib/types';
import { AxiosError } from 'axios';
import { unauthorizedHandle } from 'utils/handleError/handleError.util';
import { ApiInstance } from '../axiosInstances';

export const getCompanies = async (): Promise<ICompany[]> =>
  ApiInstance.get('/companies')
    .then((response) => response.data)
    .catch((err: AxiosError) => unauthorizedHandle(err));

export const createCompany = async (data: ICompany) =>
  ApiInstance.post(`/companies`, data)
    .then((response) => response.data)
    .catch((err: AxiosError) => unauthorizedHandle(err));

export const updateCompany = async (id: string, data: IUpdateCompanyDto) =>
  ApiInstance.put(`/companies/${id}`, data)
    .then((response) => response.data)
    .catch((err: AxiosError) => unauthorizedHandle(err));

export const deleteCompany = async (id: string) =>
  ApiInstance.delete(`/companies/${id}`)
    .then((response) => response.data)
    .catch((err: AxiosError) => unauthorizedHandle(err));
