import FoodItems from "./components/FoodItems";
import ErrorMesg from "./components/ErrorMesg";
import React, { useState } from "react";
import "./App.css";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";

function App() {
  const [FoodItem, setFoodItem] = useState([]);

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      let newFoodItemAdd = [...FoodItem, newFoodItem];
      setFoodItem(newFoodItemAdd);
      // console.log(`You Entered Food item is : ${newFoodItem}`);
    }
  };

  return (
    <Container>
      <h1 className="food-heading">HelthY Food</h1>
      <FoodInput handleKeyDown={onKeyDown}></FoodInput>
      <FoodItems items={FoodItem} />
      <ErrorMesg items={FoodItem} />
    </Container>
  );
}

export default App;
