import { CompleteIcon } from "../TodoIcon/CompleteIcon";
import { DeleteIcon } from "../TodoIcon/DeleteIcon";
import React from "react";
import "./TodoItem.css";

function TodoItem(props) {
  return (
    <li className={`TodoItem ${props.completed && "TodoItem--complete"}`}>
      <CompleteIcon completed={props.completed} onComplete={props.onComplete} />
      <p
        className={`TodoItem-p ${
          props.completed && "TodoItem-p--completed "
        }  `}
      >
        {props.Text}
      </p>
      <DeleteIcon onDelete={props.onDelete} />
    </li>
  );
}
export { TodoItem };
