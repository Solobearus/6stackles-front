import { createSlice } from "@reduxjs/toolkit";

const userAuthSlice = createSlice({
  name: "userAuth",

  initialState: {
    token: "",
  },

  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      localStorage.setItem("token", action.payload);
    },
  },
});

const userDetailsSlice = createSlice({
  name: "userDetails",
  initialState: {
    email: "",
    name: "",
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
  },
});

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [
      {
        name: "xyz",
        desc: "xyz",
        imgUrl: "xyz",
        price: "xyz",
        location: "xyz",
      },
      {
        name: "xyz",
        desc: "xyz",
        imgUrl: "xyz",
        price: "xyz",
        location: "xyz",
      },
      {
        name: "xyz",
        desc: "xyz",
        imgUrl: "xyz",
        price: "xyz",
        location: "xyz",
      },
      {
        name: "xyz",
        desc: "xyz",
        imgUrl: "xyz",
        price: "xyz",
        location: "xyz",
      },

      {
        name: "xyz",
        desc: "xyz",
        imgUrl: "xyz",
        price: "xyz",
        location: "xyz",
      },
      {
        name: "xyz",
        desc: "xyz",
        imgUrl: "xyz",
        price: "xyz",
        location: "xyz",
      },
    ],
  },
  reducers: {
    setName: (state, action) => {
      state.products[action.index].name = action.payload;
    },
    setDesc: (state, action) => {
      state.products[action.index].desc = action.payload;
    },
    setImgUrl: (state, action) => {
      state.products[action.index].imgUrl = action.payload;
    },
    setPrice: (state, action) => {
      state.products[action.index].price = action.payload;
    },
    setLocation: (state, action) => {
      state.products[action.index].location = action.payload;
    },
  },
});

const languagesSlice = createSlice({
  name: "languages",
  initialState: {
    lang: "en",
    text: require("../locales/en.json"),
  },
  reducers: {
    setLang: (state, action) => {
      state.lang = action.payload;
      state.text = require(`../locales/${action.payload}.json`);
    },
  },
});

export { userDetailsSlice, languagesSlice, userAuthSlice, productsSlice };
