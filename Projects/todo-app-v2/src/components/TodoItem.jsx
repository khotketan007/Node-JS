function TodoItem({ todoName, todoDate }) {
  // let todoName = "Buy Milk";
  // let todoDate = "15/04/2024";
  // let todoName = "Go to College";
  // let todoDate = "15/04/2024";

  return (
    <div className="row Kk-row">
      <div className="col-6">{todoName}</div>
      <div className="col-4">{todoDate}</div>
      <div className="col-2 text-center">
        <button type="button" className="btn btn-danger Kk-Button">
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
