import { createSlice } from "@reduxjs/toolkit";

const userAuthSlice = createSlice({
  name: "userAuth",
  
  initialState: {
    token: '',
  },

  reducers: {
    setToken: (state, action) => { state.token = action.payload },
  },
});

const userDetailsSlice = createSlice({
  name: "userDetails",
  initialState: {
    email: '',
    name: '',
  },
  reducers: {
    setName: (state, action) => { state.name = action.payload },
    setEmail: (state, action) => { state.email = action.payload },
  }
});

const languagesSlice = createSlice({
  name: "languages",
  initialState: {
    lang: 'en',
    text: require('../locales/en.json')
  },
  reducers: {
    setLang: (state, action) => {
      state.lang = action.payload
      state.text = require(`../locales/${action.payload}.json`)
    },
  }
});


export { userDetailsSlice, languagesSlice, userAuthSlice };
