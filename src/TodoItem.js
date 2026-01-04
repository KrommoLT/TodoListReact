import "./TodoItem.css";

function TodoItem(props) {
  return (
    <li className="li">
      <p className="p">
        {props.Text}
        <span className="span">V</span>
        <span className="span">X</span>
      </p>
    </li>
  );
}
export { TodoItem };
