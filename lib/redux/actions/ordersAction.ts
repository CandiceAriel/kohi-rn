/* eslint-disable dot-notation */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */

import { OrderInterface } from "../types/cart.types"

export const ADD_TO_CART = "ADD_TO_CART"

interface AddToCartAction {
  type: typeof ADD_TO_CART,
  payload: OrderInterface[]
}

// const addToCart = (state, action) => {
//   state.push(action.payload)
// }

export { addToCart }
export type FeedActionTypes = AddToCartAction;