import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { state, WordsSlice } from "./types";

const initialState: state = {
  words: [],
  randomWord: null,
  id: null,
  isLoading: false,
};

export const wordsSlice = createSlice({
  name: "wordsSlice",
  initialState,
  reducers: {
    getAllWordsFetch: (state) => {
      state.isLoading = true;
    },
    WordsAllSuccess: (state, action: PayloadAction<WordsSlice[]>) => {
      state.isLoading = false;
      state.words = action.payload;
    },
    getRandomWordFetch: (state) => {
      state.isLoading = true;
    },
    getRandomWordSuccess: (state, action: PayloadAction<WordsSlice[]>) => {
      const oneWord = action.payload[0];
      state.isLoading = false;
      state.randomWord = oneWord;
    },
  },
});

export const {
  getAllWordsFetch,
  WordsAllSuccess,
  getRandomWordFetch,
  getRandomWordSuccess,
} = wordsSlice.actions;

export default wordsSlice.reducer;
