import React from "react";
import "./TodoFilter.css";
import { TodoContext } from "../TodoContext/index";

function TodoFilter() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);

  return (
    <input
      placeholder="Busca tu tarea"
      className="TodoFilter"
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}
    />
  );
}
export { TodoFilter };
