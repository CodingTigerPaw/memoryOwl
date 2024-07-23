import { WordHistory } from "../../../../redux/slices/types";

type Props = { word: WordHistory };
const CardHistory = ({ word }: Props) => {
  return (
    <div style={{ backgroundColor: word.correct ? "green" : "red" }}>
      {word.word?.english} - {word.word?.polish}
    </div>
  );
};

export default CardHistory;
