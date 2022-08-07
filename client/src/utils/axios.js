import axios from 'axios';
import { getTokenFromLocalStorage } from './localStorage';
import baseURL from './constants';

const customFetch = axios.create({
  baseURL
});

customFetch.interceptors.request.use((config) => {
  const token = getTokenFromLocalStorage();
  if (token) {
    config.headers.common['Authorization'] = `Bearer ${token}`;
  }
  return config;
});

export default customFetch;