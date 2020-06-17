import { configureStore } from "@reduxjs/toolkit";
import {
  userDetailsSlice,
  languagesSlice,
  userAuthSlice,
  productsSlice,
  searchSlice,
  categoriesSlice,
} from "./slices";

const store = configureStore({
  reducer: {
    counter: userDetailsSlice.reducer,
    language: languagesSlice.reducer,
    userAuth: userAuthSlice.reducer,
    products: productsSlice.reducer,
    search: searchSlice.reducer,
    categories: categoriesSlice.reducer,
  },
});

export default store;
