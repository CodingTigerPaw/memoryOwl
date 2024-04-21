import { useMemo } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import {
  getAllWordsFetch,
  getRandomWordFetch,
} from "../../redux/slices/wordsSlices";
import Card from "./components/Card";

const Home = () => {
  const dispatch = useAppDispatch();

  //  const words = useAppSelector((state) => state.words.words);
  const randomWord = useAppSelector((state) => state.words.randomWord);

  useMemo(() => {
    dispatch(getAllWordsFetch());
  }, [dispatch]);

  return (
    <div className="flex justify-around flex-wrap">
      {/* {words.map((el) => (
        <Card key={el.id} polish={el.polish} english={el.english} />
      ))} */}
      <button onClick={() => dispatch(getRandomWordFetch())}>get Word</button>
      {randomWord ? (
        <Card polish={randomWord?.polish} english={randomWord?.english} />
      ) : null}
    </div>
  );
};

export default Home;
