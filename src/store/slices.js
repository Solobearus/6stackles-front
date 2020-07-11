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
    categorySearchInput: "",
    categorySearchApplied: "",
    locationSearchInput: "",
    locationSearchApplied: "",
    priceSearchInput: { min: 0, max: 999 },
    priceSearchApplied: { min: 0, max: 999 },
    conditionSearchInput: "",
    conditionSearchApplied: "",
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
    conditions: [
      'Bad',
      'Good',
      'New'
    ],
    locations: [
      "Tahiti",
      "Israel",
      "Bahamas",
      "Tunisia",
      "Slovenia",
      "Georgia",
      "Kazakhstan",
      "Tajikistan",
      "Greenland",
      "Hong Kong",
      "Russian Federation",
      "Jersey",
      "Paraguay",
      "Greece",
      "Montenegro",
      "Ecuador",
      "Burkina Faso",
      "Jordan",
      "Cook Islands",
      "Norfolk Island",
      "Japan",
      "Ireland",
      "Iceland",
      "Mali",
      "Madagascar",
      "Tonga",
      "Zimbabwe",
      "Tunisia",
      "Hungary",
      "Timor-Leste",
      "United Kingdom",
      "Ecuador"
    ]
  },
  reducers: {
    setTextSearch: (state, action) => { state.textSearch = action.payload },
    setCategorySearchInput: (state, action) => { state.categorySearchInput = action.payload },
    setCategorySearchApplied: (state, action) => { state.categorySearchApplied = action.payload },
    setLocationSearchInput: (state, action) => { state.locationSearchInput = action.payload },
    setLocationSearchApplied: (state, action) => { state.locationSearchApplied = action.payload },
    setPriceSearchInput: (state, action) => { state.priceSearchInput = action.payload },
    setPriceSearchApplied: (state, action) => { state.priceSearchApplied = action.payload },
    setConditionSearchInput: (state, action) => { state.conditionSearchInput = action.payload },
    setConditionSearchApplied: (state, action) => { state.conditionSearchApplied = action.payload },
  },
});

// export const categoriesSlice = createSlice({
//   name: "categories",
//   initialState: {
//     categories: [
//       'Coach',
//       'Gun',
//       'Sandwich',
//       'Rubber',
//       'Hat',
//       'Shirt',
//       'Soap',
//       'Chips',
//       'Ball',
//       'Pants',
//       'Towels',
//       'Computer',
//       'Chair',
//       'Ball',
//     ],
//     categoriesSearch: '',
//   },
//   reducers: {
//     setCategoriesSearch: (state, action) => {
//       state.categoriesSearch = action.payload;
//     },
//   },
// });

