/* eslint-disable dot-notation */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */

const addToCart = (state: any, action: any) => {
  state.push(action.payload)
}

export { addToCart }