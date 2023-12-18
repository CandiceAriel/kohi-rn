/* eslint-disable dot-notation */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */

import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
//import { initialState } from "../reducers/ordersReducer";
import {addToCart} from "../actions/ordersAction";

export interface Order {
  id: string,
  name: string,
  price: string
}

export const initialState: Array<Order> = [{
  id: '01',
  name: 'Americano',
  price: '10',
}];


const orderSlice = createSlice({
  name: 'orders',
  initialState: initialState,
  reducers: {
    orderAdded(state, action) {
      state.push(action.payload);
    },
  }
});

export const orderSelector = (state: RootState) => state.order;
export const  { orderAdded}  = orderSlice.actions;
export default orderSlice.reducer;