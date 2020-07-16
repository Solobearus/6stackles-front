import { createSlice } from "@reduxjs/toolkit";
// import products from '../data/products'
import {
  categories,
  conditions,
  locations,
} from '../data/searchParams'

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
    id: "5e32e3884041cf0d80a9b530",
    email: "placeholder@gmail.com",
    name: "Elon Musk",
    phone: "050-420-DERP",
    profilePicURL: "",
    productsPosted: [],
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPhone: (state, action) => {
      state.phone = action.payload;
    },
    setProfilePicURL: (state, action) => {
      state.profilePicURL = action.payload;
    },
    findProductsPostedByUser: (state, action) => {
      state.productsPosted = action.payload
        .filter(product => state.id === product.authorId)
    },
  },
});

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    productsFiltered: []
  },
  reducers: {
    setProducts: (state, action) => {
      console.log(action.payload)
      state.products = action.payload;
      state.productsFiltered = action.payload;
    },
    editProduct: (state, action) => {
      const newProducts = [...state.products];
      const indexOfProductToChange = newProducts.findIndex(product => product.id === action.payload.id);
      newProducts[indexOfProductToChange] = action.payload;
      state.products = newProducts;
    },
    addProduct: (state, action) => {
      const newProducts = [...state.products, action.payload];
      state.products = newProducts;
    },
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
    filterProducts: (state, action) => {
      state.productsFiltered = state.products
        .filter(item => {
          if (
            (action.payload.categorySearchInput && action.payload.categorySearchInput !== item.category) ||
            (action.payload.conditionSearchInput && action.payload.conditionSearchInput !== item.condition) ||
            (action.payload.locationSearchInput && action.payload.locationSearchInput !== item.location) ||
            (action.payload.priceSearchInput && action.payload.priceSearchInput.min > item.price) ||
            (action.payload.priceSearchInput && action.payload.priceSearchInput.max < item.price) ||
            (action.payload.textSearchInput.trim && action.payload.textSearchInput.trim() !== '' && !item.name.toLocaleLowerCase().includes(action.payload.textSearchInput.toLocaleLowerCase()))
          )
            return false;

          return true
        });
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
    textSearchInput: "",
    textSearchApplied: "",
    categorySearchInput: "",
    categorySearchApplied: "",
    locationSearchInput: "",
    locationSearchApplied: "",
    priceSearchInput: { min: 0, max: 999 },
    priceSearchApplied: { min: 0, max: 999 },
    conditionSearchInput: "",
    conditionSearchApplied: "",
    categories : [],
    conditions,
    locations,
  },
  reducers: {
    setCategories: (state, action) => { state.categories = action.payload },
    setTextSearchInput: (state, action) => { state.textSearchInput = action.payload },
    setTextSearchApplied: (state, action) => { state.textSearchApplied = action.payload },
    setCategorySearchInput: (state, action) => { state.categorySearchInput = action.payload },
    setCategorySearchApplied: (state, action) => { state.categorySearchApplied = action.payload },
    setLocationSearchInput: (state, action) => { state.locationSearchInput = action.payload },
    setLocationSearchApplied: (state, action) => { state.locationSearchApplied = action.payload },
    setPriceSearchInput: (state, action) => { state.priceSearchInput = action.payload },
    setPriceSearchApplied: (state, action) => { state.priceSearchApplied = action.payload },
    setConditionSearchInput: (state, action) => { state.conditionSearchInput = action.payload },
    setConditionSearchApplied: (state, action) => { state.conditionSearchApplied = action.payload },
    submitSearch: (state, action) => {
      state.textSearchApplied = state.textSearchInput;
      state.categorySearchApplied = state.categorySearchInput;
      state.locationSearchApplied = state.locationSearchInput;
      state.priceSearchApplied = state.priceSearchInput;
      state.conditionSearchApplied = state.conditionSearchInput;
    },
    resetSearchInput: (state, action) => {
      state.textSearchInput = state.textSearchApplied;
      state.categorySearchInput = state.categorySearchApplied;
      state.locationSearchInput = state.locationSearchApplied;
      state.priceSearchInput = state.priceSearchApplied;
      state.conditionSearchInput = state.conditionSearchApplied;
    }
  },
});
