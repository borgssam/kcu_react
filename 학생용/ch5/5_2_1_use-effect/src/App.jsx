// src/App.jsx
import { useEffect, useState } from "react";

function Clock() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    console.log("타이머 시작");
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => {
      clearInterval(timer); // 컴포넌트가 사라질 때 실행됨
      console.log("타이머 정리");
    };
  }, []);

  return <p>현재 시각: {now.toLocaleTimeString()}</p>;
}

function TaskPage() {
  const [tasks, setTasks] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("화면이 그려졌다");
  }); // 의존성 배열 없음 — 렌더링마다 매번 실행

  useEffect(() => {
    console.log("처음 한 번만 실행된다");
  }, []); // 빈 배열 — 컴포넌트가 처음 나타날 때 딱 한 번

  useEffect(() => {
    console.log("tasks가 바뀔 때마다 실행된다");
  }, [tasks]); // tasks가 바뀔 때만

  useEffect(() => {
    async function loadTasks() {
      const response = await fetch("/tasks.json"); // public/tasks.json
      const data = await response.json();
      setTasks(data);
    }
    loadTasks();
  }, []);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>다시 그리기 {count}</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  const [showClock, setShowClock] = useState(true);

  return (
    <div>
      <button onClick={() => setShowClock(!showClock)}>
        시계 보이기/숨기기
      </button>
      {showClock && <Clock />}
      <TaskPage />
    </div>
  );
}
export default App;
