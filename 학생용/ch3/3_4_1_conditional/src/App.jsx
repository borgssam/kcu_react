// src/App.jsx
function TaskItem({ title, isDone }) {
  const label = isDone ? "완료" : "대기 중";

  return (
    <li>
      {isDone ? <s>{title}</s> : <span>{title}</span>}
      {isDone && <span className="badge">완료</span>} - {label}
    </li>
  );
}

function App() {
  const tasks = [];

  return (
    <div>
      <ul>
        <TaskItem title="리액트 공부하기" isDone={false} />
        <TaskItem title="운동하기" isDone={true} />
      </ul>
      <p>잘못된 예: {tasks.length && <span>할 일 {tasks.length}개</span>}</p>
      <p>
        올바른 예: {tasks.length > 0 && <span>할 일 {tasks.length}개</span>}
      </p>
    </div>
  );
}
export default App;
