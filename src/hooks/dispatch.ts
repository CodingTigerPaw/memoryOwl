import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./redux";

import { getAllWordsFetch } from "../redux/slices/wordsSlices";
export const useWords = () => {
  const allWord = useAppSelector((state) => state.words.words);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllWordsFetch());
  }, [dispatch]);

  return allWord;
};

export const useWordsIds = () => {
  const allWord = useAppSelector((state) => state.words.words);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllWordsFetch());
  }, [dispatch]);

  return allWord.map((el) => el.id);
};
