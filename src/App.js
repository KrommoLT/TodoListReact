import React from "react";
import logo from "./platzi.webp";
import { TodoH1 } from "./TodoH1";
import { TodoFilter } from "./TodoFilter";
import { TodoList } from "./TodoList";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoItem } from "./TodoItem";
import "./App.css";

const defaultTodos = [
  { Text: "Tarea 1", completedTasks: false },
  { Text: "Tarea 2", completedTasks: false },
  { Text: "Tarea 3", completedTasks: false },
  { Text: "Tarea 4", completedTasks: false },
  { Text: "Tarea 5", completedTasks: false },
];

function App() {
  return (
    <div className="app">
      <React.Fragment>
        <h1 className="h1">ToDo-List</h1>
        <TodoH1 completedTasks={3} totalTasks={5} />
        <TodoFilter />
        <CreateTodoButton />

        <TodoList>
          {defaultTodos.map((todo) => (
            <TodoItem
              key={todo.Text}
              Text={todo.Text}
              completedTasks={todo.completedTasks}
            />
          ))}
        </TodoList>
      </React.Fragment>
    </div>
  );
}

export default App;
