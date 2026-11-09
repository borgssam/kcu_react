// src/App.jsx
import { useState } from "react";
import "./App.css";

function App() {
  // setTasks는 7.6절에서 꺼내 쓴다(지금 꺼내 두면 '쓰지 않는 변수' 경고가 난다)
  const [tasks] = useState([
    { id: 1, title: "리액트 공부하기", isDone: false },
    { id: 2, title: "운동하기", isDone: true },
    { id: 3, title: "독서하기", isDone: false },
  ]); // 아직은 Supabase 없이, 임시 데이터로 화면부터 완성한다
  const [newTaskTitle, setNewTaskTitle] = useState("");

  return (
    <div className="app">
      <h1>Tasko</h1>
      <form className="task-form">
        <input
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
          placeholder="할 일을 입력하세요"
        />
        <button type="submit">추가</button>
      </form>
      <div className="task-board">
        {tasks.map((task) => (
          <div
            key={task.id}
            className={`task-card ${task.isDone ? "task-card--done" : ""}`}
          >
            <label>
              <input type="checkbox" checked={task.isDone} readOnly />
              {task.title}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
export default App;
