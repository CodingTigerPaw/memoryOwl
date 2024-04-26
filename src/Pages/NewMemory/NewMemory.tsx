import { useState } from "react";
import { useAppDispatch } from "../../hooks/redux";
import { postWord } from "../../redux/slices/wordsSlices";
interface Word {
  id?: number;
  polish: string | null;
  english: string | null;
}

export const NewMemory = () => {
  const dispatch = useAppDispatch();

  const [formData, setFormData] = useState<Word>({
    english: null,
    polish: null,
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

  const [submit, setSubmit] = useState<boolean>(false);

  return (
    <div>
      <form>
        <input
          onChange={(e) => {
            setFormData((prev) => ({
              ...prev,
              english: e.target.value,
            }));
          }}
          type="text"
          placeholder="English"
          value={formData.english as string}
        />
        <input
          onChange={(e) => {
            setFormData((prev) => ({
              ...prev,
              polish: e.target.value,
            }));
          }}
          type="text"
          placeholder="Polish"
          value={formData.polish as string}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            dispatch(postWord(formData));
            clearForm();
            displayMessage();
          }}
        >
          submit
        </button>
      </form>
      {submit ? <div> submited</div> : null}
    </div>
  );
};
