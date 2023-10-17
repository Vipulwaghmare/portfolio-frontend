import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const ecommereceApiSlice = createApi({
  reducerPath: 'ecommereceApiSlice',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
  endpoints: () => ({}),
})

export const apiQuery = {
  get: (url: string) => (query = '') => url + query
}

export default ecommereceApiSlice;
