import axios from 'axios';

const axiosClient = axios.create({
  baseURL: process.env.NEXT_SERVER_URL,
});

axiosClient.interceptors.request.use(
  (config) => {
    const token =
      localStorage?.getItem('token') || localStorage?.getItem('otp-token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    console.log('token =>', config.url);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default axiosClient;
