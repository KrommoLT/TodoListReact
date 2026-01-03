import logo from "./platzi.webp";
import "./App.css";
import { TodoH1 } from "./TodoH1";
import { TodoFilter } from "./TodoFilter";
import { TodoList } from "./TodoList";
import { CreateTodoButton } from "./CreateTodoButton";

function App() {
  return (
    <div className="App">
      <TodoH1 />
      <TodoFilter />

      <TodoList>
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </TodoList>

      <CreateTodoButton />
    </div>
  );
}

function TodoItem() {
  return (
    <li>
      <span>V</span>
      <p>tarea pendiente</p>
      <span>X</span>
    </li>
  );
}

export default App;
