import { api } from "./instance";

export const login = async (payload: object) => {
  const { data } = await api.post('/api/v1/login', payload)
  return data;
};

export const register = async (payload: object) => {
  const { data } = await api.post('/api/v1/register', payload)
  return data;
};

export const forgotPassword = async (payload: object) => {
  const { data } = await api.post('/api/v1/forgot-password', payload)
  return data;
};

export const resetPassword = async (payload: object) => {
  const { data } = await api.post('/api/v1/reset-password', payload)
  return data;
};

export const updatePassword = async (payload: object) => {
  const { data } = await api.patch('/api/v1/update-password', payload)
  return data;
}