function TodoItem2() {
  let todoName = "Go To College";
  let todoDate = "15/04/2024";

  return (
    <div class="row Kk-row">
      <div class="col-6">{todoName}</div>
      <div class="col-4">{todoDate}</div>
      <div class="col-2 text-center">
        <button type="button" class="btn btn-danger Kk-Button">
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoItem2;
