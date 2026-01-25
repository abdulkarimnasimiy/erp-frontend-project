import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productsSlice";
import ordersReducer from "./ordersSlice";
import movementsReducer from "./stockMovementsSlice";
import productsFiltersReducer from "./productsFiltersSlice";
export const store = configureStore({
  reducer: {
    products: productsReducer,
    orders: ordersReducer, 
    movements: movementsReducer,
     productsFilters: productsFiltersReducer, 
  },
});
