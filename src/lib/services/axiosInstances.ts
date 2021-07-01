import axios from 'axios';

const isProd = process.env.NODE_ENV === 'production';

const createApiInstance = () =>
  axios.create({
    baseURL: isProd ? 'https://data-warehouse-am-api.herokuapp.com' : 'http://localhost:4000',
    withCredentials: true,
  });

export const ApiInstance = createApiInstance();
