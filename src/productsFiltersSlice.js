import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
  stockFilter: "ALL", // ALL | ZERO | LOW | OK
  priceMin: "",
  priceMax: "",
  sortBy: "NAME_ASC", // NAME_ASC | STOCK_ASC | STOCK_DESC | PRICE_ASC | PRICE_DESC
};

const productsFiltersSlice = createSlice({
  name: "productsFilters",
  initialState,
  reducers: {
    setSearch(state, action) {
      state.search = action.payload;
    },
    setStockFilter(state, action) {
      state.stockFilter = action.payload;
    },
    setPriceMin(state, action) {
      state.priceMin = action.payload;
    },
    setPriceMax(state, action) {
      state.priceMax = action.payload;
    },
    setSortBy(state, action) {
      state.sortBy = action.payload;
    },
  },
});

export const {
  setSearch,
  setStockFilter,
  setPriceMin,
  setPriceMax,
  setSortBy,
} = productsFiltersSlice.actions;

export default productsFiltersSlice.reducer;
