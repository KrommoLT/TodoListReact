import "./CreateTodoButton.css";
import { TodoContext } from "../TodoContext/index";

function CreateTodoButton({ setOpenModal }) {
  return (
    <button
      type="submit"
      className="CreateTodoButton"
      onClick={() => {
        setOpenModal((state) => !state);
      }}
    >
      +
    </button>
  );
}

export { CreateTodoButton };
