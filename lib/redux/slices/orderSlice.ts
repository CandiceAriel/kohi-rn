/* eslint-disable dot-notation */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */

import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
//import { initialState } from "../reducers/ordersReducer";
import { State } from "react-native-gesture-handler";

export interface Order {
  id: string,
  itemId: string
  name: string,
  price: string,
  quantity: number
}

export interface CartState {
  cart: Order[];
}

const initialState =  {
  cart: []
} as CartState


const orderSlice = createSlice({
  name: 'orders',
  initialState: initialState,
  reducers: {
    addToCart(state, action) {
      const itemInCart = state.cart.find((item) => item.itemId === action.payload.itemId);

      if (itemInCart) {
        if (itemInCart. quantity!== undefined) {
          itemInCart.quantity++;
        }
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
  }
});

export const orderSelector = (state: RootState) => state.orderReducer;
export const  { addToCart}  = orderSlice.actions;
export default orderSlice.reducer;