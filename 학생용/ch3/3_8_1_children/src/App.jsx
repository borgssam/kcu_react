// src/App.jsx
function Card({ title, children }) {
  return (
    <div className="card">
      {title && <h3>{title}</h3>}
      {children ?? "내용이 없습니다."}
    </div>
  );
}

function TaskList({ tasks }) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>{task.title}</li>
      ))}
    </ul>
  );
}

function App() {
  const tasks = [
    { id: 1, title: "리액트 공부하기" },
    { id: 2, title: "운동하기" },
  ];

  return (
    <div>
      <Card>
        <h2>리액트 공부하기</h2>
        <p>오늘 2시간 분량</p>
      </Card>
      <Card title="오늘의 할 일">
        <TaskList tasks={tasks} />
      </Card>
      <Card title="children을 안 넘긴 카드" />
    </div>
  );
}
export default App;
