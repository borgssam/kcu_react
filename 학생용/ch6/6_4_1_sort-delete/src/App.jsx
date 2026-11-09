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

    const newTask = { id: Date.now(), title: trimmedTitle, isDone: false };
    setTasks([...tasks, newTask]); // 2.6절(스프레드): 새 배열을 만든다
    setNewTaskTitle(""); // 입력창 비우기
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id)); // 이 id만 빼고 남긴다
  };

  // 완료되지 않은 할 일을 앞으로 보낸다(원본 tasks는 그대로 두고 복사본을 정렬)
  const sortedTasks = [...tasks].sort((a, b) => {
    if (a.isDone === b.isDone) return 0; // 둘 다 같으면 순서 유지
    return a.isDone ? 1 : -1; // 완료된 것(true)을 뒤로
  });

  return (
    <div className="app">
      <h1>Tasko</h1>
      <TaskForm
        value={newTaskTitle}
        onChange={(e) => setNewTaskTitle(e.target.value)}
        onSubmit={handleAddTask}
      />
      <TaskBoard
        tasks={sortedTasks}
        onToggleTask={handleToggleTask}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
}
export default App;
