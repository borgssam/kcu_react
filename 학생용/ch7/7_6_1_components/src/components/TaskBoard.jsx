// src/components/TaskBoard.jsx
import TaskCard from "./TaskCard.jsx";

function TaskBoard({ tasks, onToggleTask }) {
  return (
    <div className="task-board">
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          title={task.title}
          isDone={task.isDone}
          onToggle={() => onToggleTask(task.id)}
        />
      ))}
    </div>
  );
}
export default TaskBoard;
