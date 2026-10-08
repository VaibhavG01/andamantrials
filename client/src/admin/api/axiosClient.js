import axios from 'axios';

const baseURL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api/v1';

export const axiosClient = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 15000,
});

// Attach Authorization Token to every request
axiosClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('andaman_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor for Centralized Error Handling
axiosClient.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const status = error.response?.status;
    const message = error.response?.data?.message || 'An unexpected server error occurred.';

    if (status === 401) {
      console.warn('Unauthorized API response - using cached session state.');
    }

    return Promise.reject({ status, message, raw: error });
  }
);

export default axiosClient;
