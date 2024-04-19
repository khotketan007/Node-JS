import FoodItems from "./components/FoodItems";
import ErrorMesg from "./components/ErrorMesg";
import React from "react";
import "./App.css";
import Container from "./components/Container";

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
    <Container>
      <h1 className="food-heading">HelthY Food</h1>
      {/* Logical Operator */}
      <ErrorMesg items={FoodItem} />
      <FoodItems items={FoodItem} />
    </Container>
  );
}

export default App;
