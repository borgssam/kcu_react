// src/App.jsx
import useTasks from "./useTasks.js";

function TaskPage() {
  const { tasks, isLoading } = useTasks(); // 한 줄로 끝!
  if (isLoading) return <p>불러오는 중...</p>;
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>{task.title}</li>
      ))}
    </ul>
  );
}

function TaskStatsPage() {
  const { tasks, isLoading } = useTasks(); // 같은 로직을 다른 컴포넌트에서도 재사용
  if (isLoading) return <p>불러오는 중...</p>;
  const doneCount = tasks.filter((t) => t.isDone).length;
  return (
    <p>
      전체 {tasks.length}개 중 {doneCount}개 완료
    </p>
  );
}

function App() {
  return (
    <div>
      <h2>할 일 목록</h2>
      <TaskPage />
      <h2>통계</h2>
      <TaskStatsPage />
    </div>
  );
}
export default App;
