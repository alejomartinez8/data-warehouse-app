import axios from 'axios';
// import getConfig from 'next/config';

// const { publicRuntimeConfig } = getConfig();

const createApiInstance = () =>
  axios.create({
    baseURL: '/api', // publicRuntimeConfig.API_URL,
    withCredentials: true,
  });

export const ApiInstance = createApiInstance();
