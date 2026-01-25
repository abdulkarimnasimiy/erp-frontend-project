import { createSlice } from "@reduxjs/toolkit";

const ordersSlice = createSlice({
  name: "orders",
  initialState: {
    list: [],
  },
  reducers: {
    createOrder(state, action) {
      state.list.push({
        id: Date.now(),
        date: new Date().toISOString(),
        status: "OPEN",
        ...action.payload,
      });
    },
    closeOrder(state, action) {
      const order = state.list.find(o => o.id === action.payload);
      if (order) order.status = "CLOSED";
    },
  },
});

export const { createOrder, closeOrder } = ordersSlice.actions;
export default ordersSlice.reducer;
