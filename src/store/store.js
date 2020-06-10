import { configureStore } from "@reduxjs/toolkit";
import { userDetailsSlice, languagesSlice, userAuthSlice } from "./slices";

const store = configureStore({
  reducer: {
    counter: userDetailsSlice.reducer,
    language: languagesSlice.reducer,
    userAuth: userAuthSlice.reducer
  }
});

export default store;
