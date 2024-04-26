import { useState } from "react";
import { useWordsIds } from "../../hooks/dispatch";
import Card from "./components/Card";
import { useAppSelector } from "../../hooks/redux";
import { Word } from "../../redux/slices/types";

const Home = () => {
  const ids = useWordsIds();
  const allWord = useAppSelector((state) => state.words.words);
  const [data, setData] = useState<Word | null>();

  const randomId = () => {
    const count = ids.length;
    const random = Math.floor(Math.random() * count);
    setData(allWord[random]);
  };

  return (
    <div className="flex justify-around flex-wrap">
      <button onClick={() => randomId()}>get Word</button>
      {data ? <Card polish={data?.polish} english={data?.english} /> : null}
    </div>
  );
};

export default Home;
