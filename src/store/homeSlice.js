import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  url: {},
  genres: {},
};

export const counterSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    getApiConfiguration: (state, action) => {
      state.url = action.payload;
    },
    getGenres: (state, action) => {
      state.url = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getApiConfiguration, getGenres } = counterSlice.actions;

export default counterSlice.reducer;
