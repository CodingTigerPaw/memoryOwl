export interface WordsSlice {
  id: string;
  english: string;
  polish: string;
}

export interface state {
  words: WordsSlice[];
  randomWord: WordsSlice | null;
  newData: null | Word;
  isLoading: boolean;
  id: null | string;
}

export interface Word {
  english: null | string;
  polish: null | string;
}

export interface WordHistory {
  word: Word | undefined | null;
  correct: boolean;
}
