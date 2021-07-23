export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: 'BASIC' | 'ADMIN';
}

export interface ICity {
  id?: string;
  name: string;
  countryId: string;
}

export interface ICountry {
  id?: string;
  name: string;
  regionId: string;
  cities?: ICity[];
}

export interface IRegion {
  id?: string;
  name: string;
  countries?: ICountry[];
}

export enum regionRoutes {
  'region' = 'regions',
  'country' = 'countries',
  'city' = 'cities',
}

export enum regionsType {
  'region' = 'region',
  'country' = 'country',
  'city' = 'city',
}

export interface ICompany {
  id?: string;
  name: string;
  address: string;
  email: string;
  phone: string;
  cityId?: string;
  city?: {
    id: string;
    name: string;
    countryId: string;
    country: {
      id: string;
      name: string;
      regionId: string;
      region: { id: string; name: string };
    };
  };
}

export interface IUpdateCompanyDto {
  id?: string;
  name?: string;
  address?: string;
  email?: string;
  phone?: string;
  cityId?: string;
}

export interface IContact {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  position: string;
  companyId: string;
  company?: ICompany;
  cityId?: string;
  city?: {
    id: string;
    name: string;
    countryId: string;
    country: {
      id: string;
      name: string;
      regionId: string;
      region: { id: string; name: string };
    };
  };
  interest?: string;
  channels?: string[];
}
