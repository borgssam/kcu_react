// src/App.jsx
const BADGE_LABEL = { high: "긴급", normal: "보통", low: "낮음" };

function TaskList({ tasks, isLoading, error }) {
  if (isLoading) {
    return <p>불러오는 중...</p>;
  }
  if (error) {
    return <p className="error">오류가 발생했습니다.</p>;
  }
  if (tasks.length === 0) {
    return <p>할 일이 없습니다.</p>;
  }
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>{task.title}</li>
      ))}
    </ul>
  );
}

function TaskBadge({ priority }) {
  let badge;
  if (priority === "high") {
    badge = <span className="badge-high">긴급</span>;
  } else if (priority === "normal") {
    badge = <span className="badge-normal">보통</span>;
  } else {
    badge = <span className="badge-low">낮음</span>;
  }
  return <div>{badge}</div>;
}

function TaskBadgeLabel({ priority }) {
  return <span>{BADGE_LABEL[priority] ?? "미분류"} </span>;
}

function App() {
  const tasks = [
    { id: 1, title: "리액트 공부하기" },
    { id: 2, title: "운동하기" },
  ];

  return (
    <div>
      <h2>네 가지 상태</h2>
      <TaskList tasks={tasks} isLoading={true} />
      <TaskList tasks={tasks} error="네트워크 오류" />
      <TaskList tasks={[]} />
      <TaskList tasks={tasks} />
      <h2>if/else로 고른 배지</h2>
      <TaskBadge priority="high" />
      <TaskBadge priority="normal" />
      <TaskBadge priority="low" />
      <h2>객체로 고른 이름</h2>
      <TaskBadgeLabel priority="high" />
      <TaskBadgeLabel priority="low" />
      <TaskBadgeLabel priority="unknown" />
    </div>
  );
}
export default App;
