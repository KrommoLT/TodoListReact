import "./TodoH1.css";

function TodoH1({ completedTasks, totalTasks }) {
  const message =
    completedTasks === totalTasks
      ? "¡Todas las tareas completadas!"
      : `Tareas completadas ${completedTasks} de ${totalTasks}`;
  return (
    <h2 className="h2" style={{}}>
      {message}
    </h2>
  );
}
export { TodoH1 };
