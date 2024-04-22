import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import "./App.css";
import TodoItems from "./components/TodoItems";
import { useState } from "react";

function App() {
  const initialTodoItems = [
    {
      name: "Buy Milk",
      date: "15/04/2024",
    },
    {
      name: "Go To College",
      date: "15/04/2024",
    },
    {
      name: "Today is Wednesday",
      date: "22/04/2024",
    },
  ];

  const [todoItems, settodoItems] = useState(initialTodoItems)

  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`New item Added : Name : ${itemName} & Date : ${itemDueDate}`);
  }

  return (
    <center className="todo-container">
      {/* We break the components and assemble them into */}
      <AppName />
      <AddTodo onNewItem={handleNewItem}/>
      <TodoItems todoItems={todoItems} />
    </center>
  );
}

export default App;
