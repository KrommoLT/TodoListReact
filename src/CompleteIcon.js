import React from "react";
import { TodoIcon } from "./TodoIcon";

function CompleteIcon({ completed, onComplete }) {
  return (
    <TodoIcon
      type="check"
      color={completed ? "#4caf50" : "#9e78cf"}
      onClick={onComplete}
    />
  );
}

export { CompleteIcon };
