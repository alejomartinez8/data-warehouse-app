import axios from 'axios';

const createApiInstance = () =>
  axios.create({
    baseURL: '/api',
    withCredentials: true,
  });

export const ApiInstance = createApiInstance();
