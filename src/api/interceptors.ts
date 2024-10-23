import axios from 'axios';

/**
 * Axios instance with interceptors for handling common request/response behavior.
 * Base URL: https://dummyjson.com
 * @module interceptors
 */
const axiosInstance = axios.create({
  baseURL: 'https://dummyjson.com',
});

axiosInstance.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error);
    return Promise.reject(error);
  }
);

export default axiosInstance;
