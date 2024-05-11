import { WordsSlice } from "../../../redux/slices/types";
import Memory from "./Memory.tsx";

type Props = {
  list: WordsSlice[];
};

const AllMemoryList = ({ list }: Props) => {
  return list.map((el: WordsSlice) => <Memory memory={el} key={el.id} />);
};

export default AllMemoryList;
