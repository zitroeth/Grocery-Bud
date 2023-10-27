import CheckBox from "./CheckBox";
import { toast } from "react-toastify";
interface Props {
  items: { id: string; text: string }[];
  onDeletion: (deleteId: string) => void;
}

function ItemList({ items, onDeletion }: Props) {
  const listItems = items.map((item) => (
    <div className="single-item" key={item.id}>
      <CheckBox item={item} />
      <button
        className="btn remove-btn"
        type="button"
        onClick={(e) => {
          e.preventDefault();
          localStorage.removeItem("checkBox" + item.id);
          onDeletion(item.id);
          toast.success('Item "' + item.text + '" was deleted', {
            position: toast.POSITION.TOP_CENTER,
          });
        }}
      >
        delete
      </button>
    </div>
  ));

  return <div className="items">{listItems}</div>;
}

export default ItemList;
