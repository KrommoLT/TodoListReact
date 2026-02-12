import React from "react";
import { TodoH1 } from "../TodoH1/index";
import { TodoFilter } from "../TodoFilter/index";
import { TodoList } from "../TodoList/index";
import { CreateTodoButton } from "../CreateTodoButton/CreateTodoButton";
import { TodoItem } from "../TodoItem/index";
import "./App.css";
import { TodosLoading } from "../TodosLoading/index";
import { TodosError } from "../TodosError/index";
import { EmptyTodos } from "../EmptyTodos/index";
import { useLocalStorage } from "../TodoContext/useLocalStorage";
import App from "./index";
import { TodoContext } from "../TodoContext/index";
import { Modal } from "../Modal/index";
import { TodoForm } from "../TodoForm";

function AppUi({}) {
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    saveTodos,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);
  return (
    <div className="app">
      <>
        {/* fragmento para agrupar elementos sin agregar nodos extra al DOM */}

        <h1 className="h1">ToDo-List</h1>
        <TodoH1 />

        <TodoFilter />

        <div className="button-empty-container">
          <CreateTodoButton setOpenModal={setOpenModal} openModal={openModal} />
        </div>

        {!loading && !error && searchedTodos.length === 0 && !openModal && (
          <EmptyTodos />
        )}

        <TodoList>
          {loading && (
            <>
              <TodosLoading />
              <TodosLoading />
              <TodosLoading />
              <TodosLoading />
              <TodosLoading />
            </>
          )}
          {error && <TodosError />}

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

        {openModal && (
          <Modal>
            <TodoForm />
          </Modal>
        )}
      </>
    </div>
  );
}

export { AppUi };
