import axios from 'axios';

const createApiInstance = () =>
  axios.create({
    baseURL: 'https://data-warehouse-am-api.herokuapp.com',
    method: 'POST',
    withCredentials: true,
  });

export const ApiInstance = createApiInstance();
