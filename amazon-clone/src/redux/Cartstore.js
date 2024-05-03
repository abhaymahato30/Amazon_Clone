import { configureStore } from '@reduxjs/toolkit'


import addReducer, { add } from "./CartSlice"


export const CartStore = configureStore({
  reducer: {
    cart:addReducer,
  },
})