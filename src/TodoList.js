import "./TodoList.css";

function TodoList({ children }) {
  return <ul className="ul">{children}</ul>;
}
export { TodoList };
