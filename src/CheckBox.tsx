import { useState, useEffect } from "react";

interface Props {
  item: { id: string; text: string };
}

function CheckBox({ item }: Props) {
  const [isChecked, setIsChecked] = useState(() => {
    const checkBoxSet = JSON.parse(localStorage.getItem("checkBox" + item.id)!);
    if (checkBoxSet) return checkBoxSet;
    else return false;
  });

  useEffect(() => {
    localStorage.setItem("checkBox" + item.id, JSON.stringify(isChecked));
  }, [isChecked, item.id]);

  function handleChange() {
    setIsChecked(!isChecked);
  }

  return (
    <>
      <input type="checkbox" onChange={handleChange} checked={isChecked} />
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
