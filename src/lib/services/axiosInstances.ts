import axios from 'axios';

const isProd = process.env.NODE_ENV === 'production';

const createApiInstance = () =>
  axios.create({
    baseURL: '/api',
    withCredentials: true,
  });

export const ApiInstance = createApiInstance();
