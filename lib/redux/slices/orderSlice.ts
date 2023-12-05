/* eslint-disable dot-notation */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */

import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface Order {
  id: string,
  name: string,
  price: string
}

const initialState: Array<Order> = [{
  id: '01',
  name: 'Americano',
  price: '10',
}];

const orderSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
  }
});

export const orderSelector = (state: RootState) => state.order;
export default orderSlice.reducer;