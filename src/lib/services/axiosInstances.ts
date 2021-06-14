import axios from 'axios';

console.log(process.env.API_URL);

const createApiInstance = () =>
  axios.create({
    baseURL: `${process.env.API_URL}`,
    method: 'POST',
    withCredentials: true,
  });

export const ApiInstance = createApiInstance();
