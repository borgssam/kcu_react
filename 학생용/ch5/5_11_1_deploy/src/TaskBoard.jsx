// src/TaskBoard.jsx
import { useState } from "react";
import TaskCard from "./TaskCard.jsx";
import styles from "./TaskBoard.module.css";

function TaskBoard() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "리액트 공부하기", priority: "긴급", isDone: false },
    { id: 2, title: "운동하기", priority: "보통", isDone: true },
    { id: 3, title: "독서하기", priority: "낮음", isDone: false },
  ]); // 4.1절(useState)

  const toggle = (id) =>
    setTasks(tasks.map((t) => (t.id === id ? { ...t, isDone: !t.isDone } : t))); // 4.6절 패턴

  return (
    <div className={styles.board}>
      {tasks.map((task) => (
        <TaskCard key={task.id} {...task} onToggle={() => toggle(task.id)} />
      ))}
    </div>
  );
}
export default TaskBoard;
