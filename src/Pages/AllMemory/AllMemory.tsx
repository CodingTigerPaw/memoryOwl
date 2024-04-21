import React, { useMemo } from "react";
import { getAllWordsFetch } from "../../redux/slices/wordsSlices";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
const AllMemory = () => {
  const dispatch = useAppDispatch();

  const allWords = useAppSelector((state) => state.words.words);

  useMemo(() => {
    dispatch(getAllWordsFetch());
    //console.log(allWords);
  }, [dispatch]);

  return (
    <div>
      {allWords.map((el) => (
        <div key={el.id}>{el.english}</div>
      ))}
    </div>
  );
};

export default AllMemory;
