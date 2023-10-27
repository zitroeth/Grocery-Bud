import "./App.css";
import { v4 as uuidv4 } from 'uuid';
import Notification from "./Notification.tsx";
import InputField from "./InputField.tsx";
import ItemList from "./ItemList.tsx";
import { useState, useEffect } from "react";

function App() {
  const [items, setItems] = useState<{ id: string; text: string }[]>([]);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("items")!);
    if (items) {
      setItems(items);
    }
  }, []);

  function handleSubmission(text: string) {
    const newArr = items.concat({ id: uuidv4(), text: text });
    setItems(newArr);
    console.log(newArr);
  }

  function handleDeletion(deleteId: string) {
    const newArr = items.filter((item) => {
      return item.id !== deleteId;
    });
    setItems(newArr);
    console.log(newArr);
  }

  return (
    <section className="section-center">
      <Notification />
      <InputField title="dsadasdsasd" onSubmission={handleSubmission} />
      <ItemList items={items} onDeletion={handleDeletion} />
    </section>
  );
}

export default App;
