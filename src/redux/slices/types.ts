export interface WordsSlice {
  id: number;
  english: string;
  polish: string;
}

export interface state {
  words: WordsSlice[];
  randomWord: WordsSlice | null;
  isLoading: boolean;
  id: null | string;
}
