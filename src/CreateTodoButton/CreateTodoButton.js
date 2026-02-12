import "./CreateTodoButton.css";
import { TodoContext } from "../TodoContext/index";

function CreateTodoButton({ setOpenModal, openModal }) {
  return (
    <button
      type="submit"
      className={`CreateTodoButton ${openModal ? "CreateTodoButton--open" : ""}`}
      onClick={() => {
        setOpenModal((state) => !state);
      }}
    >
      +
    </button>
  );
}

export { CreateTodoButton };
