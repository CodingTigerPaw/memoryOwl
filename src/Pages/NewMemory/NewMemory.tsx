import { useState, useEffect, useRef } from "react";
import { useAppDispatch } from "../../hooks/redux";
import { postWord } from "../../redux/slices/wordsSlices";
import { CSSstyles } from "./styles";
interface Word {
  id?: number;
  polish: string | null;
  english: string | null;
}

export const NewMemory = () => {
  useEffect(() => {
    inputRef.current?.focus();
  }, []);
  const dispatch = useAppDispatch();

  const inputRef = useRef<HTMLInputElement>(null);

  const setFormDataHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    key: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      [key]: e.target.value,
    }));
  };

  const [formData, setFormData] = useState<Word>({
    english: "",
    polish: "",
  });

  const clearForm = () => {
    setFormData(() => ({
      polish: "",
      english: "",
    }));
  };

  const displayMessage = () => {
    setSubmit(true);
    setTimeout(() => {
      setSubmit(false);
    }, 3000);
  };
  const errorMessage = () => {
    setError(true);
    setTimeout(() => {
      setError(false);
    }, 3000);
  };

  const [submit, setSubmit] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  return (
    <div>
      <h2 className="text-lg">Add new pair of words to database</h2>
      <div className="bg-slate-400 w-[700px] flex justify-center ml-auto mr-auto">
        <form className="m-2 p-2">
          <input
            ref={inputRef}
            className={CSSstyles.input}
            onChange={(e) => {
              setFormDataHandler(e, "english");
            }}
            type="text"
            placeholder="English"
            value={formData.english as string}
          />
          <input
            className={CSSstyles.input}
            onChange={(e) => {
              setFormDataHandler(e, "polish");
            }}
            type="text"
            placeholder="Polish"
            value={formData.polish as string}
          />
          <button
            className={CSSstyles.button}
            onClick={(e) => {
              e.preventDefault();

              if (formData.english !== "" && formData.polish !== "") {
                dispatch(postWord(formData));
                clearForm();
                inputRef.current?.focus();
                displayMessage();
              } else {
                errorMessage();
              }
            }}
          >
            submit
          </button>
        </form>
      </div>

      {submit ? <div> submited</div> : null}
      {error ? <div> Error</div> : null}
    </div>
  );
};
