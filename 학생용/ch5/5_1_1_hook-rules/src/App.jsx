// src/App.jsx
import { useState } from "react";

function TaskItem({ title, isDone }) {
  const [count, setCount] = useState(0); // 최상위에서 호출 — 올바름

  return (
    <li className={isDone ? "done" : ""}>
      {title} <button onClick={() => setCount(count + 1)}>클릭 {count}</button>
    </li>
  );
}

function App() {
  return (
    <ul>
      <TaskItem title="리액트 공부하기" isDone={false} />
      <TaskItem title="운동하기" isDone={true} />
    </ul>
  );
}
export default App;
