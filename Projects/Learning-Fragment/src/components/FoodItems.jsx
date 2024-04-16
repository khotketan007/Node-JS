import Item from "./Item";

const FoodItems = () => {
  let FoodItems = [
    "Dal",
    "Rice",
    "Green Vegitables",
    "Salad",
    "Beet",
    "Carrot",
  ];
  return (
    <ul className="list-group">
      {FoodItems.map((item) => (
        <Item key={item} foodItem={item} />
      ))}
    </ul>
  );
};

export default FoodItems;
