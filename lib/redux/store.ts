/* eslint-disable dot-notation */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */

import { configureStore } from "@reduxjs/toolkit"; 
import { useDispatch } from 'react-redux';
import orderReducer from "./slices/orderSlice";

export const store = configureStore({
  reducer: {
    orderReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();