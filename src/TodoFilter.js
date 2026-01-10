import React from "react";
import "./TodoFilter.css";

function TodoFilter({ searchValue, setSearchValue }) {
  return (
    <input
      placeholder="Tarea"
      className="input"
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}
    />
  );
}
export { TodoFilter };
