import React from "react";

function App() {
  // Declaring the foodItems Array
  // let foodItems = [];
  let foodItems = ["Dal", "Green Vegitable", "Roti", "Milk", "Salad"];

  // Conditional statement
  // if (foodItems.length === 0) {
  //   return <h1>I am Still Hungry</h1>;
  // }

  return (
    <>
      <h1>Helthy Food</h1>
      {/* Logical Operator */}
      {foodItems.length === 0 && <h1>I am Still Hungry</h1>}
      <FoodItems />
    </>
  );
}

export default App;
