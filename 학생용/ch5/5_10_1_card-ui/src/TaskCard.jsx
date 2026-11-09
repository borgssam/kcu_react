// src/TaskCard.jsx
import styles from "./TaskCard.module.css"; // 4.11절(CSS 모듈)

function TaskCard({ title, priority, isDone, onToggle }) {
  return (
    <div className={`${styles.card} ${isDone ? styles.done : ""}`}>
      <span className={styles.priority}>{priority}</span>
      <h3>{title}</h3>
      <label>
        <input type="checkbox" checked={isDone} onChange={onToggle} /> 완료
      </label>
    </div>
  );
}
export default TaskCard;
