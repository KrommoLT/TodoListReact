import React from "react";

import { TodoH1 } from "./TodoH1";
import { TodoFilter } from "./TodoFilter";
import { TodoList } from "./TodoList";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoItem } from "./TodoItem";
import "./App.css";

const defaultTodos = [
  // datos iniciales de las tareas
  { Text: "Tarea asdasdasdasdaaaaaaaaaaaaaaaaaa", completed: true },
  { Text: "Tarea 2", completed: false },
  { Text: "Tarea 3", completed: false },
  { Text: "Tarea 4", completed: false },
  { Text: "Tareá 5", completed: false },
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos); //estado de las tareas
  const [searchValue, setSearchValue] = React.useState(""); //estado del input de busqueda
  console.log("buscan " + searchValue); //valor del input de busqueda

  const completedTodos = todos.filter((todo) => !!todo.completed).length; //cantidad de tareas completadas
  const totalTodos = todos.length; //cantidad total de tareas

  const searchedTodos = todos.filter((todo) => {
    //filtra las tareas segun el valor del input de busqueda
    const todoText = todo.Text.toLowerCase();
    const searchText = searchValue.toLocaleLowerCase();
    return todoText.includes(searchText); //se usa para buscar tareas
  });

  return (
    <div className="app">
      <React.Fragment>
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
            />
          ))}
        </TodoList>
      </React.Fragment>
    </div>
  );
}

export default App;
