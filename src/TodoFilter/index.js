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
      translate="no"
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}
      onBlur={() => {
        setSearchValue("");
      }}
    />
  );
}
export { TodoFilter };
