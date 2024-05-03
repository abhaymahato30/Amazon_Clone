import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const CartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },

    remove(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },

    calculateTotals: (state) => {
      let total = 0;
      state.cartItems.forEach((item) => {
   
        total += item.price;
      });

      state.total = total;
    },
  },
});

// Action creators are generated for each case reducer function
export const { add, remove, calculateTotals } = CartSlice.actions;

export default CartSlice.reducer;
