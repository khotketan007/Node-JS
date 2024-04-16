import FoodItems from "./components/FoodItems";
import ErrorMesg from "./components/ErrorMesg";
import React from "react";

function App() {
  return (
    <>
      <h1>Helthy Food</h1>
      {/* Logical Operator */}
      <ErrorMesg />
      <FoodItems />
    </>
  );
}

export default App;
