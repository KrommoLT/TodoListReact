import React from "react";

import { TodoH1 } from "./TodoH1";
import { TodoFilter } from "./TodoFilter";
import { TodoList } from "./TodoList";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoItem } from "./TodoItem";
import "./App.css";

// const defaultTodos = [
//   datos iniciales de las tareas
//   { Text: "Tarea asdasdasdasdaaaaaaaaaaaaaaaaaa", completed: true },
//   { Text: "Tarea 2", completed: false },
//   { Text: "Tarea 3", completed: false },
//   { Text: "Tarea 4", completed: false },
//   { Text: "Tareá 5", completed: false },
//  ];

//localStorage.setItem("TODOS_V1", JSON.stringify(defaultTodos)); //crea las tareas en el localStorage
//localStorage.removeItem("TODOS_V1"); //elimina las tareas del localStorage

function useLocalStorage(itemName, initialValue) {
  //hook personalizado para manejar el localStorage

  const localStorageItem = localStorage.getItem(itemName); //obtiene las tareas del localStorage

  let parsedItem;

  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue)); //si no hay tareas en el localStorage, se crean con los datos iniciales
    parsedItem = initialValue;
  } else {
    parsedItem = JSON.parse(localStorageItem); //si hay tareas en el localStorage, se parsean
  }

  const [item, setItem] = React.useState(parsedItem); //estado de las tareas

  const saveItem = (newItem) => {
    //funcion para guardar las tareas en el localStorage
    localStorage.setItem(itemName, JSON.stringify(newItem)); //guarda las tareas en el localStorage
    setItem(newItem); //actualiza el estado de las tareas
  };

  return [item, saveItem];
}

function App() {
  const [todos, saveTodos] = useLocalStorage("TODOS_V1", []); //estado de las tareas usando el hook personalizado
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
    saveTodos(newTodos); //actualiza el estado de las tareas
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos]; //copia del array de tareas
    const todoIndex = todos.findIndex((todo) => todo.Text === text); //busca el indice de la tarea a completar
    newTodos.splice(todoIndex, 1); //marca la tarea como completada
    saveTodos(newTodos); //actualiza el estado de las tareas
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
