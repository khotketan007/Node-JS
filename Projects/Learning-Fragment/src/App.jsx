import FoodItems from "./components/FoodItems";
import ErrorMesg from "./components/ErrorMesg";
import React from "react";

function App() {
  let FoodItem = [
    "Apple",
    "Rice",
    "Green Vegitables",
    "Salad",
    "Beet",
    "Carrot",
  ];
  return (
    <>
      <h1>Helthy Food</h1>
      {/* Logical Operator */}
      <ErrorMesg items={FoodItem} />
      <FoodItems items={FoodItem} />
    </>
  );
}

export default App;
