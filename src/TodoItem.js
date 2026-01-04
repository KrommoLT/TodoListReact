import "./TodoItem.css";

function TodoItem(props) {
  return (
    <li className="li">
      <p className={`text ${props.completed && "text-completed"}  `}>
        {props.Text}
      </p>
      <span className={`span ${props.completed && "span-activate"}`}>V</span>
      <span className={`span span-delete`}>X</span>
    </li>
  );
}
export { TodoItem };
