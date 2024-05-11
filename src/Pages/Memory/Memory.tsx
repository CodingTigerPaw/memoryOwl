import { useState } from "react";
import { useWordsIds } from "../../hooks/dispatch";
import Card from "./components/Card";
import { useAppSelector } from "../../hooks/redux";
import { Word } from "../../redux/slices/types";

const Memory = () => {
  const ids = useWordsIds();
  const allWord = useAppSelector((state) => state.words.words);
  const [data, setData] = useState<Word | null>();
  const [display, setDisplay] = useState(true);

  const randomId = () => {
    const count = ids.length;
    const random = Math.floor(Math.random() * count);
    setData(allWord[random]);
    setDisplay(true);
  };

  return (
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
          />
        ) : null}
      </div>
      <div className="text-lg text-center">History:</div>
    </div>
  );
};

export default Memory;
