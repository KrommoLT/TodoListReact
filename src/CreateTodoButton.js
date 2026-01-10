import "./CreateTodoButton.css";

function CreateTodoButton() {
  return (
    <button
      type="submit"
      className="button"
      onClick={(event) => {
        console.log("Aquí puedes crear una nueva tarea!");
        console.log(event);
        console.log(event.target);
      }}
    >
      +
    </button>
  );
}

export { CreateTodoButton };
