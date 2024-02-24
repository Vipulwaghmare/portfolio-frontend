import axios from 'axios';

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: { 'Content-Type': 'application/json' }
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem('accessToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const api = {
  post: (url: string, body: object) => instance.post(url, body),
  get: (url: string) => instance.get(url),
  put: (url: string, body: object) => instance.put(url, body),
  delete: (url: string) => instance.delete(url),
  patch: (url: string, body: object) => instance.patch(url, body),
}

export default instance;