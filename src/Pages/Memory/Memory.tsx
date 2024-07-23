import { useState } from "react";
import { useWordsIds } from "../../hooks/dispatch";
import Card from "./components/Card";
import { useAppSelector } from "../../hooks/redux";
import { Word, WordHistory } from "../../redux/slices/types";
import CardHistory from "./components/CardHistory/CardHistory";

const Memory = () => {
  const [quiz, setQuiz] = useState(false);
  const ids = useWordsIds();
  const allWord = useAppSelector((state) => state.words.words);
  const [data, setData] = useState<Word | null>();
  const [display, setDisplay] = useState(true);
  const [history, setHistory] = useState<WordHistory[]>([]);

  const randomId = () => {
    const count = ids.length;
    const random = Math.floor(Math.random() * count);
    setData(allWord[random]);
    setDisplay(true);
  };

  const correctAnwser = () => {
    const answer: WordHistory = {
      word: data,
      correct: true,
    };
    // eslint-disable-next-line
    setHistory([...history, answer]);
    randomId();
  };
  const incorrectAnwers = () => {
    const answer: WordHistory = {
      word: data,
      correct: false,
    };
    // eslint-disable-next-line
    setHistory([...history, answer]);
    randomId();
  };

  return quiz ? (
    <div>
      <div className="flex flex-col content-center flex-wrap">
        <button
          className="bg-blue-500 w-[200px] h-8 p-1 mx-4 my-4 rounded"
          onClick={() => {
            randomId();
          }}
        >
          get Word
        </button>
        {data ? (
          <Card
            polish={data?.polish}
            english={data?.english}
            display={display}
            setDisplay={setDisplay}
            setCorrect={correctAnwser}
            setIncorrect={incorrectAnwers}
          />
        ) : null}
      </div>
      <div className="text-lg text-center">History:</div>

      {history.map((el) => (
        <CardHistory word={el} />
      ))}
    </div>
  ) : (
    <div>
      <button onClick={() => setQuiz(true)}>Start?</button>
    </div>
  );
};

export default Memory;
