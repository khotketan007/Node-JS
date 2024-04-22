import { useState } from "react";

// Function Definition
function AddTodo({ onNewItem }) {

  const [todoName, setTodoName] = useState()
  const [dueDate, setDueDate] = useState()

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  }
  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  }

  const handleAddButtonClick = () => {
    onNewItem(todoName, dueDate)
    setDueDate("")
    setTodoName("")
  }

  return (
    <div className="row Kk-row">
      <div className="col-6">
        <input type="text" 
       value={todoName} placeholder="Enter Your Work Here" onChange={handleNameChange}></input>
      </div>
      <div className="col-4">
        <input type="date" value={dueDate} onChange={handleDateChange}></input>
      </div>
      <div className="col-2">
        <button type="button" className="btn btn-success Kk-Button" onClick={handleAddButtonClick}>
          Add
        </button>
      </div>
    </div>
  );
}

// Exporting ti Main file
export default AddTodo;
