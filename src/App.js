import React from "react";
import logo from "./platzi.webp";
import { TodoH1 } from "./TodoH1";
import { TodoFilter } from "./TodoFilter";
import { TodoList } from "./TodoList";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoItem } from "./TodoItem";
import "./App.css";

const defaultTodos = [
  { Text: "Tarea asdasdasdasdaaaaaaaaaaaaaaaaaa", completed: true },
  { Text: "Tarea 2", completed: false },
  { Text: "Tarea 3", completed: false },
  { Text: "Tarea 4", completed: false },
  { Text: "Tarea 5", completed: false },
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
              completed={todo.completed}
            />
          ))}
        </TodoList>
      </React.Fragment>
    </div>
  );
}

export default App;
