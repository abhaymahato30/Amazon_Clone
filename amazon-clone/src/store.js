import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './features/counter/counterSlice'


export const store = configureStore({
  reducer: {
    cart:cartSlice
  },
})

