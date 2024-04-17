import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import "./App.css";
import TodoItems from "./components/TodoItems";

function App() {
  const todoItems = [
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
      date: "Hello",
    },
  ];

  return (
    <center className="todo-container">
      {/* We break the components and assemble them into */}
      <AppName />
      <AddTodo />
      <TodoItems todoItems={todoItems} />
    </center>
  );
}

export default App;
