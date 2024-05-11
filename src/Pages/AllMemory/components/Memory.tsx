import { useAppDispatch } from "../../../hooks/redux";
import { deleteWord } from "../../../redux/slices/wordsSlices";
import { WordsSlice } from "../../../redux/slices/types";
import { CSSstyles } from "./styles";

type MemoryProps = {
  memory: WordsSlice;
};

const Memory = ({ memory }: MemoryProps) => {
  const dispatch = useAppDispatch();

  return (
    <div className={CSSstyles.memoryList} key={memory.id}>
      <div className={CSSstyles.memoryBody}>
        <p>{memory?.english[0].toUpperCase() + memory?.english.slice(1)}</p>
        <p>{memory?.polish[0].toUpperCase() + memory?.polish.slice(1)}</p>
      </div>

      <button
        className={CSSstyles.memoryButton}
        onClick={() => {
          dispatch(deleteWord(memory?.id));
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default Memory;
