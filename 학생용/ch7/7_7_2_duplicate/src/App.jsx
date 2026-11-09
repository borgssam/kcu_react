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

  const handleAddTask = (e) => {
    e.preventDefault(); // 4.2절: 새로고침 막기

    const trimmedTitle = newTaskTitle.trim(); // 앞뒤 공백 제거
    if (trimmedTitle === "") return; // 빈 값이면 추가하지 않는다

    const isDuplicate = tasks.some((t) => t.title === trimmedTitle); // 하나라도 같으면 true
    if (isDuplicate) {
      alert("이미 같은 할 일이 있습니다.");
      return;
    }

    const newTask = { id: Date.now(), title: trimmedTitle, isDone: false };
    setTasks([...tasks, newTask]); // 2.6절(스프레드): 새 배열을 만든다
    setNewTaskTitle(""); // 입력창 비우기
  };

  return (
    <div className="app">
      <h1>Tasko</h1>
      <TaskForm
        value={newTaskTitle}
        onChange={(e) => setNewTaskTitle(e.target.value)}
        onSubmit={handleAddTask}
      />
      <TaskBoard tasks={tasks} onToggleTask={handleToggleTask} />
    </div>
  );
}
export default App;
