import { configureStore } from "@reduxjs/toolkit";
import {
  userDetailsSlice,
  languagesSlice,
  userAuthSlice,
  productsSlice,
} from "./slices";

const store = configureStore({
  reducer: {
    counter: userDetailsSlice.reducer,
    language: languagesSlice.reducer,
    userAuth: userAuthSlice.reducer,
    products: productsSlice.reducer,
  },
});

export default store;
