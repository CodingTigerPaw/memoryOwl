import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { state, WordsSlice, Word } from "./types";

export const initialState: state = {
  words: [],
  randomWord: null,
  newData: null,
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
    // getRandomWordFetch: (state) => {
    //   state.isLoading = true;
    // },
    // getRandomWordSuccess: (state, action: PayloadAction<WordsSlice[]>) => {
    //   const oneWord = action.payload[0];
    //   state.isLoading = false;
    //   state.randomWord = oneWord;
    // },
    postWord: (state, action: PayloadAction<Word>) => {
      state.isLoading = true;
      state.newData = action.payload;
    },
    PostWordSucces: (state, action) => {
      state.isLoading = false;
      state.words = [...state.words, action.payload];
    },
    deleteWord: (state, action) => {
      state.id = action.payload;
      state.isLoading = true;
    },
    deleteWordsSucces: (state, action) => {
      state.isLoading = false;
      state.words = state.words.filter((word) => word.id !== action.payload);
    },
  },
});

export const {
  getAllWordsFetch,
  WordsAllSuccess,
  //getRandomWordFetch,
  //getRandomWordSuccess,
  postWord,
  PostWordSucces,
  deleteWord,
  deleteWordsSucces,
} = wordsSlice.actions;

export default wordsSlice.reducer;
