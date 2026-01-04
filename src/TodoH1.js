import "./TodoH1.css";

function TodoH1({ completedTasks, totalTasks }) {
  return (
    <h2 className="h2" style={{}}>
      Tareas completadas {completedTasks} de {totalTasks}
    </h2>
  );
}
export { TodoH1 };
