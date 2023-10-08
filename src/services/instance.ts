import axios from 'axios';

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: { 'Content-Type': 'application/json' }
});

export const api = {
  post: (url: string, body: object) => instance.post(url, body),
}

export default instance;