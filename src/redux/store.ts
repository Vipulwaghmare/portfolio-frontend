import { configureStore } from '@reduxjs/toolkit';
import ecommereceApiSlice from './apiSlice';

export default configureStore({
  reducer: {
    [ecommereceApiSlice.reducerPath]: ecommereceApiSlice.reducer
  },
  middleware: getDefaultMiddleware => ([
    ...getDefaultMiddleware(),
    ecommereceApiSlice.middleware
  ]),
  devTools: import.meta.env.MODE === 'development'
});
