import { WordsSlice } from "../../../redux/slices/types";
import { useAppDispatch } from "../../../hooks/redux";
import { deleteWord } from "../../../redux/slices/wordsSlices";

type Props = {
  list: WordsSlice[];
};

const AllMemoryList = ({ list }: Props) => {
  const dispatch = useAppDispatch();
  return list.map((el: WordsSlice) => (
    <div key={el.id}>
      <div>{el.english}</div>
      <div>{el.polish}</div>
      <button
        onClick={() => {
          dispatch(deleteWord(el.id));
        }}
      >
        Delete
      </button>
    </div>
  ));
};

export default AllMemoryList;
