// src/App.jsx
import { useState } from "react";

function TaskItem({ title, isDone, onToggle }) {
  return (
    <li>
      <label>
        <input type="checkbox" checked={isDone} onChange={onToggle} />
        <span className={isDone ? "done" : ""}>{title}</span>
      </label>
    </li>
  );
}

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "리액트 공부하기", isDone: false },
    { id: 2, title: "운동하기", isDone: false },
    { id: 3, title: "독서하기", isDone: true },
  ]);
  const [selectedIds, setSelectedIds] = useState([]);

  const handleToggle = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task,
      ),
    );
  };

  const handleCheck = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );
  };

  return (
    <div>
      <h2>완료 토글</h2>
      <ul>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            title={task.title}
            isDone={task.isDone}
            onToggle={() => handleToggle(task.id)}
          />
        ))}
      </ul>
      <h2>여러 개 선택하기</h2>
      {tasks.map((task) => (
        <label key={task.id}>
          <input
            type="checkbox"
            checked={selectedIds.includes(task.id)}
            onChange={() => handleCheck(task.id)}
          />
          {task.title}{" "}
        </label>
      ))}
      <p>선택한 id: [{selectedIds.join(", ")}]</p>
    </div>
  );
}
export default App;
