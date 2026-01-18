import React from "react";

import { useLocalStorage } from "../App/useLocalStorage";
import { AppUi } from "./AppUi";

// const defaultTodos = [
//   datos iniciales de las tareas
//   { Text: "Tarea asdasdasdasdaaaaaaaaaaaaaaaaaa", completed: true },
//   { Text: "Tarea 2", completed: false },
//   { Text: "Tarea 3", completed: false },
//   { Text: "Tarea 4", completed: false },
//   { Text: "Tareá 5", completed: false },
// ];

//localStorage.setItem("TODOS_V1", JSON.stringify(defaultTodos)); //crea las tareas en el localStorage
//localStorage.removeItem("TODOS_V1"); //elimina las tareas del localStorage

function App() {
  const {
    item: todos,
    saveitem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []); //estado de las tareas usando el hook personalizado
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
    <AppUi
      loading={loading}
      error={error}
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
