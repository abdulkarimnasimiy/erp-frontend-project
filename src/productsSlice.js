import { createSlice } from "@reduxjs/toolkit";
import productsData from "./data/products";
const initialState = {
  list: productsData
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    stockIn(state, action) {
      const { productId, quantity } = action.payload;
      const product = state.list.find(p => p.id === productId);
      if (product) {
        product.stock += quantity;
      }
    },

    stockOut(state, action) {
  const { productId, quantity } = action.payload;
  const product = state.list.find(p => p.id === productId);
  if (!product) return;
  if (product.stock < quantity) return;

  product.stock -= quantity;
},

  },
});

export const { stockIn, stockOut } = productsSlice.actions;
export default productsSlice.reducer;