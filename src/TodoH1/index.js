import { TodoContext } from "../TodoContext";
import "./TodoH1.css";
import React from "react";

function TodoH1() {
  const { completedTodos, totalTodos } = React.useContext(TodoContext);

  const message =
    completedTodos === totalTodos
      ? "¡Todas las tareas completadas!"
      : `Tareas completadas ${completedTodos} de ${totalTodos}`;
  return (
    <h2 className="h2" style={{}}>
      {message}
    </h2>
  );
}
export { TodoH1 };
