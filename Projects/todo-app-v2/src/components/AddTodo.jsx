// Function Definition
function AddTodo() {
  return (
    <div className="row Kk-row">
      <div className="col-6">
        <input type="text" placeholder="Enter Your Work Here"></input>
      </div>
      <div className="col-4">
        <input type="date"></input>
      </div>
      <div className="col-2">
        <button type="button" className="btn btn-success Kk-Button">
          Add
        </button>
      </div>
    </div>
  );
}

// Exporting ti Main file
export default AddTodo;
