import axios from 'axios';

export const ApiInstance = () => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('token');

    return axios.create({
      baseURL: '/api',
      withCredentials: true,
      headers: { Authorization: `Bearer ${token}` },
    });
  }

  return null;
};
