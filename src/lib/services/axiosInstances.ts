import axios from 'axios';

const createAuthInstance = () =>
  axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_URL_API}/auth`,
    method: 'POST',
    withCredentials: true,
  });

const AuthInstance = createAuthInstance();

export { AuthInstance };
