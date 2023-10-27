import "./App.css";
import { v4 as uuidv4 } from "uuid";
import InputField from "./InputField.tsx";
import ItemList from "./ItemList.tsx";
import { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";

function App() {
  const [items, setItems] = useState(() => {
    const items = JSON.parse(localStorage.getItem("items")!);
    if (items) {
      return items;
    } else {
      localStorage.setItem("items", "[]");
    }
  });

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  function handleSubmission(text: string) {
    const newArr = items.concat({ id: uuidv4(), text: text });
    setItems(newArr);
    console.log(newArr);
  }

  function handleDeletion(deleteId: string) {
    const newArr = items.filter((item: { id: string; text: string }) => {
      return item.id !== deleteId;
    });
    setItems(newArr);
    console.log(newArr);
  }

  return (
    <section className="section-center">
      <ToastContainer autoClose={5000} />
      <InputField title="Grocery Bud" onSubmission={handleSubmission} />
      <ItemList items={items} onDeletion={handleDeletion} />
    </section>
  );
}

export default App;
