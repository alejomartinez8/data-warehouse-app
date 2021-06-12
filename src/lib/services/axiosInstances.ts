import axios from 'axios';

const createApiInstance = () =>
  axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_URL_API}`,
    method: 'POST',
    withCredentials: true,
  });

export const ApiInstance = createApiInstance();
