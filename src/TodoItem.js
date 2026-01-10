import "./TodoItem.css";

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <span
        onClick={props.onComplete}
        className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
      >
        v
      </span>
      <p
        className={`TodoItem-p ${props.completed && "TodoItem-p--completed"}  `}
      >
        {props.Text}
      </p>
      <span onClick={props.onDelete} className={`Icon Icon-delete`}>
        X
      </span>
    </li>
  );
}
export { TodoItem };
