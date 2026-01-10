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
  /*LOGICA DEL FILTRO*/
  const completedTodos = todos.filter((todo) => !!todo.completed).length; //cantidad de tareas completadas
  const totalTodos = todos.length; //cantidad total de tareas

  const searchedTodos = todos.filter((todo) => {
    //filtra las tareas segun el valor del input de busqueda
    const todoText = todo.Text.toLowerCase();
    const searchText = searchValue.toLocaleLowerCase();
    return todoText.includes(searchText); //se usa para buscar tareas
  });

  const completeTodo = (text) => {
    const newTodos = [...todos]; //copia del array de tareas
    const todoIndex = todos.findIndex((todo) => todo.Text === text); //busca el indice de la tarea a completar
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed; //marca la tarea como completada
    setTodos(newTodos); //actualiza el estado de las tareas
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos]; //copia del array de tareas
    const todoIndex = todos.findIndex((todo) => todo.Text === text); //busca el indice de la tarea a completar
    newTodos.splice(todoIndex, 1); //marca la tarea como completada
    setTodos(newTodos); //actualiza el estado de las tareas
  };

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
              onComplete={() => completeTodo(todo.Text)}
              onDelete={() => deleteTodo(todo.Text)}
            />
          ))}
        </TodoList>
      </React.Fragment>
    </div>
  );
}

export default App;
