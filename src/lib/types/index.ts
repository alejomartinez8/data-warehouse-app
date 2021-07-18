export type IContact = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  position: string;
  interest: number;
  address: string;
  company: string;
  city: string;
  channels: string[];
};

export type IUser = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
};

export type ICity = {
  id?: string;
  name: string;
  countryId: string;
};

export type ICountry = {
  id?: string;
  name: string;
  regionId: string;
  cities?: ICity[];
};

export type IRegion = {
  id?: string;
  name: string;
  countries?: ICountry[];
};

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
