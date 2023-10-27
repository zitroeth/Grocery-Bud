import CheckBox from "./CheckBox";
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
          onDeletion(item.id);
        }}
      >
        delete
      </button>
    </div>
  ));

  return <div className="items">{listItems}</div>;
}

export default ItemList;
