import ecommereceApiSlice, { apiQuery } from "../apiSlice";

export const productApiSlice = ecommereceApiSlice.injectEndpoints({
  endpoints: (build) => ({
    getProductById: build.query({
      query: apiQuery.get('/api/v1/product/'),
      transformErrorResponse: ({ data }) => data || 'Something went wrong'
    }),
    getProducts: build.query({
      query: apiQuery.get('/api/v1/products'),
      transformErrorResponse: ({ data }) => data || 'Something went wrong'
    }),
  }),
})

export const {
  useGetProductByIdQuery,
  useLazyGetProductByIdQuery,
  useGetProductsQuery,
  useLazyGetProductsQuery,
} = productApiSlice;
