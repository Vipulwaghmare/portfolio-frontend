import { api } from "./instance";

export const getUser = async () => {
  const { data } = await api.get('/api/v1/user')
  return data;
};
