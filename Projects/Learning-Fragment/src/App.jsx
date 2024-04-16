import FoodItems from "./components/FoodItems";
import ErrorMesg from "./components/ErrorMesg";
import React from "react";
import "./App.css";

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
      <h1 className="food-heading">HelthY Food</h1>
      {/* Logical Operator */}
      <ErrorMesg items={FoodItem} />
      <FoodItems items={FoodItem} />
    </>
  );
}

export default App;
