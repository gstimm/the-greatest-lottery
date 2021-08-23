import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.0.2.2:3333',
});

api.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem('token');

    // eslint-disable-next-line no-param-reassign
    config.headers = {
      Authorization: `Bearer ${token}`,
    };
    return config;
  },
  error => {
    Promise.reject(error);
  },
);

export default api;
