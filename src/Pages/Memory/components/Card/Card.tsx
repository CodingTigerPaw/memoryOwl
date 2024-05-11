type Props = {
  english: string | null;
  polish: string | null;
  display: boolean;
  setDisplay: (display: boolean) => void;
};

export const Card = ({ polish, english, display, setDisplay }: Props) => {
  const showHideWord = () => {
    setDisplay(!display);
  };
  // const [anwser, setAnwser] = useState<boolean>(display);

  return (
    <div className={` flex flex-col w-60 bg-neutral-500 rounded`}>
      <p className=" mx-auto text-xl pb-3">{english}</p>
      <p
        className={`${
          display ? "invisible" : null
        } mx-auto p-1  bg-slate-600 w-full text-center`}
      >
        {polish}
      </p>
      <button
        className=" bg-purple-800 rounded-md mt-28 w-32 p-1 mx-auto"
        onClick={showHideWord}
      >{`${display ? "Show Word" : "Hide Word"}`}</button>
      <div className={`${display ? "invisible" : null}`}>
        <p>correct?: </p>
        <button data-testid="confirmButton" onClick={() => console.log("true")}>
          Yes
        </button>
        <button data-testid="declineButton">No</button>
      </div>
    </div>
  );
};
