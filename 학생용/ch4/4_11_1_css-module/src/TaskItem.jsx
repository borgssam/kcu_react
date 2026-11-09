// src/TaskItem.jsx
import styles from "./TaskItem.module.css";

function TaskItem({ title, isDone }) {
  return (
    <li className={`${styles.item} ${isDone ? styles.done : ""}`}>{title}</li>
  );
}
export default TaskItem;
