import "./App.css";
import Notification from "./Notification.tsx";
import InputField from "./InputField.tsx";

import { useState } from "react";

function App() {
  const [items, setItems] = useState(Array<object>);

  function handleSubmission(text: string) {
    const newArr = items.concat({ id: items.length + 1, text: text });
    setItems(newArr);
    console.log(newArr); /*test, can delete */
  }

  return (
    <section className="section-center">
      <Notification />
      <InputField title="dsadasdsasd" onSubmission={handleSubmission} />
    </section>
  );
}

export default App;
