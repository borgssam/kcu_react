// src/App.jsx
import { useMemo, useState } from "react";

function TaskSummary({ tasks }) {
  const sortedTasks = useMemo(() => {
    console.log("정렬 계산 실행");
    return tasks
      .filter((t) => !t.isDone)
      .sort((a, b) => a.title.localeCompare(b.title));
  }, [tasks]); // tasks가 바뀔 때만 다시 계산

  return (
    <ul>
      {sortedTasks.map((t) => (
        <li key={t.id}>{t.title}</li>
      ))}
    </ul>
  );
}

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "운동하기", isDone: false },
    { id: 2, title: "독서하기", isDone: true },
    { id: 3, title: "리액트 공부하기", isDone: false },
  ]);
  const [count, setCount] = useState(0);

  const addTask = () => {
    setTasks([
      ...tasks,
      { id: Date.now(), title: "가계부 쓰기", isDone: false },
    ]);
  };

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        다른 state 바꾸기 {count}
      </button>{" "}
      <button onClick={addTask}>할 일 추가</button>
      <h3>미완료 할 일 (가나다순)</h3>
      <TaskSummary tasks={tasks} />
    </div>
  );
}
export default App;
