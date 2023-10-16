import axios from 'axios';
import { getTokenFromAsyncStorage } from '../../service/auth';

const addTokenToAxiosInterceptor = async () => {
  const token = await getTokenFromAsyncStorage();
  if (token) {
    axios.interceptors.request.use(
      (config) => {
        config.headers.Authorization = `Bearer ${token}`;
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }
}

export default addTokenToAxiosInterceptor;