/* eslint-disable dot-notation */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */

import {
  createAction,
  createReducer,
  AsyncThunk,
  UnknownAction,
} from '@reduxjs/toolkit';

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
