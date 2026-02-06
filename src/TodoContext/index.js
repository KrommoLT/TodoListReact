import React from "react";
import { useLocalStorage } from "../TodoContext/useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({ children }) {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []); //estado de las tareas usando el hook personalizado
  const [searchValue, setSearchValue] = React.useState(""); //estado del input de busqueda
  const [openModal, setOpenModal] = React.useState(true); //estado del modal para agregar tareas

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
    const todoIndex = newTodos.findIndex((todo) => todo.Text === text); //busca el indice de la tarea a completar
    newTodos.splice(todoIndex, 1); //marca la tarea como completada
    saveTodos(newTodos); //actualiza el estado de las tareas
  };
  return (
    <TodoContext.Provider
      value={{
        loading,
        error,
        completedTodos,
        totalTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        completeTodo,
        deleteTodo,
        saveTodos,
        openModal,
        setOpenModal,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
