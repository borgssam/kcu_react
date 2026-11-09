// src/components/TaskBoard.jsx
import TaskCard from "./TaskCard.jsx";
import EmptyState from "./EmptyState.jsx";

function TaskBoard({ tasks, onToggleTask, onDeleteTask }) {
  if (tasks.length === 0) {
    // 3.10절: 조건에 맞으면 일찍 반환한다
    return (
      <EmptyState message="할 일이 없습니다. 새로운 할 일을 추가해 보세요!" />
    );
  }

  return (
    <div className="task-board">
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          title={task.title}
          isDone={task.isDone}
          onToggle={() => onToggleTask(task.id)}
          onDelete={() => onDeleteTask(task.id)}
        />
      ))}
    </div>
  );
}
export default TaskBoard;
