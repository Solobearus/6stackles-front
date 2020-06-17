import { createSlice } from "@reduxjs/toolkit";
import products from '../data/products'

export const userAuthSlice = createSlice({
  name: "userAuth",

  initialState: {
    token: localStorage.getItem('token'),
  },

  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      localStorage.setItem("token", action.payload);
    },
  },
});

export const userDetailsSlice = createSlice({
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

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    products
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

export const languagesSlice = createSlice({
  name: "languages",
  initialState: {
    lang: "en",
    text: require("../locales/en"),
  },
  reducers: {
    setLang: (state, action) => {
      state.lang = action.payload;
      state.text = require(`../locales/${action.payload}.js`);
    },
  },
});

export const searchSlice = createSlice({
  name: "search",
  initialState: {
    textSearch: "",
    categorySearch: "",
    locationSearch: "",
    priceSearch: { low: 0, high: 999 },
    conditionSearch: "",
  },
  reducers: {
    setTextSearch: (state, action) => { state.textSearch = action.payload },
    setCategorySearch: (state, action) => { 
      console.log(action.payload)
      state.categorySearch = action.payload },
    setLocationSearch: (state, action) => { state.locationSearch = action.payload },
    setPriceSearch: (state, action) => { state.priceSearch = action.payload },
    setConditionSearch: (state, action) => { state.conditionSearch = action.payload },
  },
});

export const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    categories: [
      'Coach',
      'Gun',
      'Sandwich',
      'Rubber',
      'Hat',
      'Shirt',
      'Soap',
      'Chips',
      'Ball',
      'Pants',
      'Towels',
      'Computer',
      'Chair',
      'Ball',
    ],
    categoriesSearch: '',
  },
  reducers: {
    setCategoriesSearch: (state, action) => {
      state.categoriesSearch = action.payload;
    },
  },
});