import Item from "./Item";

const FoodItems = ({ items }) => {
  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item key={item} Fooditem={item} changeColor={true} />
      ))}
    </ul>
  );
};

export default FoodItems;
