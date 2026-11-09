// src/App.jsx
import "./App.css";

const PRIORITY_COLOR = { high: "#dc2626", normal: "#2563eb", low: "#6b7280" };

function App() {
  const tasks = [
    { id: 1, title: "리액트 공부하기", isDone: false, priority: "high" },
    { id: 2, title: "운동하기", isDone: true, priority: "normal" },
    { id: 3, title: "독서하기", isDone: false, priority: "low" },
  ];

  return (
    <div>
      <h2>방법 1: CSS 파일의 클래스</h2>
      <ul>
        <li className="task-item">할 일</li>
      </ul>
      <h2>방법 2: 인라인 style</h2>
      <ul>
        <li style={{ padding: "8px", borderBottom: "1px solid #eee" }}>
          할 일
        </li>
      </ul>
      <h2>조건에 따라 클래스·색 바꾸기</h2>
      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            className={`task-item ${task.isDone ? "task-item--done" : ""}`}
            style={{
              color: task.isDone ? undefined : PRIORITY_COLOR[task.priority],
            }}
          >
            {task.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default App;
