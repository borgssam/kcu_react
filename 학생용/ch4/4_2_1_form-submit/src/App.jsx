// src/App.jsx
import { useState } from "react";

function TaskForm({ onAdd }) {
  const [inputText, setInputText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // 이전 과정 5.4절과 동일 — 페이지 새로고침 방지
    const trimmed = inputText.trim(); // 앞뒤 공백 제거
    if (trimmed === "") return; // 빈 값이면 제출하지 않는다
    onAdd(trimmed);
    setInputText(""); // 제출 후 입력창 비우기
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="할 일을 입력하세요"
      />
      <button type="submit">추가</button>
    </form>
  );
}

function App() {
  const [tasks, setTasks] = useState([]);

  const handleAdd = (title) => {
    setTasks([...tasks, { id: Date.now(), title, isDone: false }]);
  };

  return (
    <div>
      <h2>할 일 추가하기</h2>
      <TaskForm onAdd={handleAdd} />
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
}
export default App;
