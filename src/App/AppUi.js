import React from "react";
import { TodoH1 } from "../TodoH1/index";
import { TodoFilter } from "../TodoFilter/index";
import { TodoList } from "../TodoList/index";
import { CreateTodoButton } from "../CreateTodoButton/CreateTodoButton";
import { TodoItem } from "../TodoItem/index";
import "./App.css";
import { useLocalStorage } from "../App/useLocalStorage";
import App from "./index";

function AppUi({
  completedTodos,
  totalTodos,
  searchValue,
  setSearchValue,
  searchedTodos,
  completeTodo,
  deleteTodo,
}) {
  return (
    <div className="app">
      <>
        {/* fragmento para agrupar elementos sin agregar nodos extra al DOM */}
        <h1 className="h1">ToDo-List</h1>

        <TodoH1 completedTasks={completedTodos} totalTasks={totalTodos} />
        <TodoFilter searchValue={searchValue} setSearchValue={setSearchValue} />

        <CreateTodoButton />
        <TodoList>
          {searchedTodos.map((todo) => (
            <TodoItem
              key={todo.Text}
              Text={todo.Text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.Text)}
              onDelete={() => deleteTodo(todo.Text)}
            />
          ))}
        </TodoList>
      </>
    </div>
  );
}

export { AppUi };
