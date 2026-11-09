// src/TaskItem.jsx
import { useState } from "react";
import styles from "./TaskItem.module.css";

function TaskItem({ title, onDelete }) {
  const [isRemoving, setIsRemoving] = useState(false);

  const handleDelete = () => {
    setIsRemoving(true);
    setTimeout(onDelete, 300); // transition 시간(0.3s)만큼 기다린 후 실제 삭제
  };

  return (
    <li
      className={isRemoving ? `${styles.item} ${styles.removing}` : styles.item}
    >
      {title} <button onClick={handleDelete}>삭제</button>
    </li>
  );
}
export default TaskItem;
