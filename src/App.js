import React from "react";
import logo from "./platzi.webp";
import "./App.css";
import { TodoH1 } from "./TodoH1";
import { TodoFilter } from "./TodoFilter";
import { TodoList } from "./TodoList";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoItem } from "./TodoItem";

const defaultTodos = [
  { Text: "Tarea 1", completedTasks: false },
  { Text: "Tarea 2", completedTasks: false },
  { Text: "Tarea 3", completedTasks: false },
  { Text: "Tarea 4", completedTasks: false },
  { Text: "Tarea 5", completedTasks: false },
];

function App() {
  return (
    <React.Fragment>
      <TodoH1 completedTasks={3} totalTasks={5} />
      <TodoFilter />

      <TodoList>
        {defaultTodos.map((todo) => (
          <TodoItem
            key={todo.Text}
            Text={todo.Text}
            completedTasks={todo.completedTasks}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
