// src/App.jsx
import { memo, useCallback, useState } from "react";

const TaskItem = memo(function TaskItem({ task, onToggle }) {
  console.log(`${task.title} 그림`);
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={task.isDone}
          onChange={() => onToggle(task.id)}
        />
        <span className={task.isDone ? "done" : ""}>{task.title}</span>
      </label>
    </li>
  );
});

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "리액트 공부하기", isDone: false },
    { id: 2, title: "운동하기", isDone: false },
    { id: 3, title: "독서하기", isDone: false },
  ]);
  const [count, setCount] = useState(0);

  const handleToggle = useCallback((id) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, isDone: !t.isDone } : t)),
    );
  }, []); // 의존성 배열이 비어있으면, 함수를 한 번만 만들고 계속 재사용

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        다른 state 바꾸기 {count}
      </button>
      <ul>
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} onToggle={handleToggle} />
        ))}
      </ul>
    </div>
  );
}
export default App;
