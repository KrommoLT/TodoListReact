import { CompleteIcon } from "./CompleteIcon";
import { DeleteIcon } from "./DeleteIcon";
import React from "react";
import "./TodoItem.css";

function TodoItem(props) {
  return (
    <li className={`TodoItem ${props.completed && "TodoItem--complete"}`}>
      <CompleteIcon />
      {/* <span
        onClick={props.onComplete}
        className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
      ></span> */}
      <p
        className={`TodoItem-p ${
          props.completed && "TodoItem-p--completed "
        }  `}
      >
        {props.Text}
      </p>
      <DeleteIcon />
      {/* <span onClick={props.onDelete} className={`Icon Icon-delete`}></span> */}
    </li>
  );
}
export { TodoItem };
