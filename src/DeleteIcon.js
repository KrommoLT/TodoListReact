import React from "react";
import { TodoIcon } from "./TodoIcon";

function DeleteIcon({ onDelete }) {
  return <TodoIcon type="delete" color="#9e78cf" onClick={onDelete} />;
}

export { DeleteIcon };
