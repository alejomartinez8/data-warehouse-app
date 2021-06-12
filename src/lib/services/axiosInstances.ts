import axios from 'axios';

const createAuthInstance = () =>
  axios.create({
    baseURL: `http://localhost:4000/auth`,
    method: 'POST',
  });

const AuthInstance = createAuthInstance();

export { AuthInstance };
