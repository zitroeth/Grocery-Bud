import { useState } from "react";

interface Props {
  item: { id: string; text: string };
}

function CheckBox({ item }: Props) {
  const [isChecked, setIsChecked] = useState(false);

  function handleChange() {
    setIsChecked(!isChecked);
  }

  return (
    <>
      <input type="checkbox" onChange={handleChange} />
      <p
        style={
          isChecked
            ? { textTransform: "capitalize", textDecoration: "line-through" }
            : { textTransform: "capitalize" }
        }
      >
        {item.text}
      </p>
    </>
  );
}

export default CheckBox;
