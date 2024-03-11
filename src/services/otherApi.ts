import { api } from "./instance";

export type ContactMePayload = {
  username: string;
  email: string;
  message: string;
  subject: string;
};

export const sendContactMeEmail = async (payload: ContactMePayload) => {
  const { data } = await api.post('/api/v1/contactMe', payload)
  return data;
};
