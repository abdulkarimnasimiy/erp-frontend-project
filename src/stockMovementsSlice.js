import { createSlice } from "@reduxjs/toolkit";

const stockMovementsSlice = createSlice({
  name: "movements",
  initialState: {
    list: [],
  },
  reducers: {
    addMovement(state, action) {
      state.list.push({
        id: Date.now(),
        date: new Date().toISOString(),
        ...action.payload,
      });
    },
  },
});

export const { addMovement } = stockMovementsSlice.actions;
export default stockMovementsSlice.reducer;
