import { useState } from "react";

interface Props {
  title: string;
  onSubmission: (text: string) => void;
}

function InputField({ title, onSubmission }: Props) {
  const [currentInput, setCurrentInput] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmission(currentInput);
      }}
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
