const FoodItems = () => {
  let FoodItems = ["Dal", "Green Vegitable", "Roti", "Milk", "Salad"];

  return (
    <ul className="list-group">
      {FoodItems.map((item) => (
        <li key={item} className="list-group-item ">
          {item}
        </li>
      ))}
    </ul>
  );
};

export default FoodItems;
