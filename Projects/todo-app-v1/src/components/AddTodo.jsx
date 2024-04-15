// Function Definition
function AddTodo() {
  return (
    <div class="row Kk-row">
      <div class="col-6">
        <input type="text" placeholder="Enter Your Work Here"></input>
      </div>
      <div class="col-4">
        <input type="date"></input>
      </div>
      <div class="col-2">
        <button type="button" class="btn btn-success Kk-Button">
          Add
        </button>
      </div>
    </div>
  );
}

// Exporting ti Main file
export default AddTodo;
