// src/components/TaskCard.jsx — 5.10절의 TaskCard를 title/isDone에 맞춰 다시 만든다
function TaskCard({ title, isDone, onToggle }) {
  return (
    <div className={`task-card ${isDone ? "task-card--done" : ""}`}>
      <label>
        <input type="checkbox" checked={isDone} onChange={onToggle} />
        {title}
      </label>
    </div>
  );
}
export default TaskCard;
