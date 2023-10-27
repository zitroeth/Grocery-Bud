import { useState } from "react";
import { toast } from "react-toastify";
interface Props {
  title: string;
  onSubmission: (text: string) => void;
}

function InputField({ title, onSubmission }: Props) {
  const [currentInput, setCurrentInput] = useState("");

  return (
    <form
      onSubmit={
        currentInput
          ? (e) => {
              e.preventDefault();
              onSubmission(currentInput);
              toast.success(
                'Item "' + currentInput + '" was added to the list',
                {
                  position: toast.POSITION.TOP_CENTER,
                }
              );
              setCurrentInput("");
            }
          : (e) => {
              e.preventDefault();
              toast.error("Please provide value", {
                position: toast.POSITION.TOP_CENTER,
              });
              setCurrentInput("");
            }
      }
    >
      <h4>{title}</h4>
      <div className="form-control">
        <input
          type="text "
          className="form-input"
          value={currentInput}
          onChange={(e) => setCurrentInput(e.target.value)}
        />
        <button type="submit" className="btn">
          add item
        </button>
      </div>
    </form>
  );
}

export default InputField;
