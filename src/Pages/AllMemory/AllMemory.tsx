import { useEffect } from "react";
import { getAllWordsFetch } from "../../redux/slices/wordsSlices";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import AllMemoryList from "./components/AllMemoryList";
import { CSSstyles } from "./styles";
const AllMemory = () => {
  const dispatch = useAppDispatch();

  const allWords = useAppSelector((state) => state.words.words);

  useEffect(() => {
    dispatch(getAllWordsFetch());
  }, [dispatch]);

  return (
    <div className={CSSstyles.allMemoryList}>
      <AllMemoryList list={allWords} />
    </div>
  );
};

export default AllMemory;
