import { useState } from "react";

type Props = {
  english: string | null;
  polish: string | null;
};

export const Card = ({ polish, english }: Props) => {
  const showHideWord = () => {
    setAnwser(!anwser);
  };
  const [anwser, setAnwser] = useState<boolean>(true);
  return (
    <div className={` flex flex-col w-60 bg-neutral-500 rounded`}>
      <h1 className=" mx-auto text-xl pb-3">{english}</h1>
      <p
        className={`${
          anwser ? "invisible" : null
        } mx-auto p-1  bg-slate-600 w-full text-center`}
      >
        {polish}
      </p>
      <button
        className=" bg-purple-800 rounded-md mt-28 w-32 p-1 mx-auto"
        onClick={showHideWord}
      >{`${anwser ? "Show Word" : "Hide Word"}`}</button>
      <div className={`${anwser ? "invisible" : null}`}>
        <p>correct?: </p>
        <button data-testid="confirmButton">Yes</button>
        <button data-testid="declineButton">No</button>
      </div>
    </div>
  );
};
