import React from "react";
import "./TodosLoading.css";

function TodosLoading() {
  return (
    <li className="Loading-container">
      <span className="LoadingTodo-CompleteIcon"></span>
      <p className="LoadingTodo-text"></p>
      <span className="LoadingTodo-deleteIcon"></span>
    </li>
  );
}
export { TodosLoading };
