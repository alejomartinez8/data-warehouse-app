import axios from 'axios';

export const ApiInstance = () => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('token');

    return axios.create({
      withCredentials: true,
      headers: { Authorization: `Bearer ${token}` },
    });
  }

  return null;
};
