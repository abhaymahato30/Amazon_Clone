import { createSlice } from '@reduxjs/toolkit'


const cartSlice = createSlice({
  name:'cart',
  initialState:{
    cart:[]
  },
  reducers:{
    addtoCart: (state,action) => {
      state.cart.push(action.payload)

  },
  removefromcart : (state,action) =>{
    state.cart = state.cart.filter(x => x.id !== action.payload.id)

  }


}})

export default cartSlice.reducer;
export const {addtoCart,removefromcart} = cartSlice.actions;


