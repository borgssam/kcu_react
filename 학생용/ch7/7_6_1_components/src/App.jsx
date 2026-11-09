// src/App.jsx
import { useState } from "react";
import TaskForm from "./components/TaskForm.jsx";
import TaskBoard from "./components/TaskBoard.jsx";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "리액트 공부하기", isDone: false },
    { id: 2, title: "운동하기", isDone: true },
    { id: 3, title: "독서하기", isDone: false },
  ]);
  const [newTaskTitle, setNewTaskTitle] = useState("");

  const handleToggleTask = (id) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, isDone: !t.isDone } : t)));
  };

  return (
    <div className="app">
      <h1>Tasko</h1>
      <TaskForm
        value={newTaskTitle}
        onChange={(e) => setNewTaskTitle(e.target.value)}
        onSubmit={(e) => e.preventDefault()} // 7.7절에서 실제 추가 로직 완성
      />
      <TaskBoard tasks={tasks} onToggleTask={handleToggleTask} />
    </div>
  );
}
export default App;
