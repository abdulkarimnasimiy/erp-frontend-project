import { createSlice, nanoid } from "@reduxjs/toolkit";

const ordersSlice = createSlice({
  name: "orders",
  initialState: {
    list: [],
  },
  reducers: {
    createOrder(state, action) {
      const { productId, quantity } = action.payload;

      // Agar ochiq zakaz bo‘lsa — yangisini ochmaymiz
      const exists = state.list.find(
        o => o.productId === productId && o.status === "open"
      );
      if (exists) return;

      state.list.push({
        id: nanoid(),
        productId,
        quantity,
        status: "open",
      });
    },

    closeOrder(state, action) {
      const order = state.list.find(o => o.id === action.payload);
      if (order) {
        order.status = "completed";
      }
    },
  },
});

export const { createOrder, closeOrder } = ordersSlice.actions;
export default ordersSlice.reducer;
