// src/App.jsx
function TaskItem({ title }) {
  const handleClick = () => {
    console.log(`${title} 클릭됨`);
  };
  return <li onClick={handleClick}>{title}</li>;
}

function ToggleItem({ id, title, onToggle }) {
  return <li onClick={() => onToggle(id)}>{title}</li>;
}

function TaskForm({ onAdd }) {
  const handleSubmit = (e) => {
    e.preventDefault(); // 이전 과정 5.4절과 동일
    onAdd("새 할 일");
  };
  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">추가</button>
    </form>
  );
}

function App() {
  const handleToggle = (id) => {
    console.log(`${id}번 할 일 토글`);
  };
  const handleAdd = (title) => {
    console.log(`"${title}" 추가 요청`);
  };

  return (
    <div>
      <h2>항목을 클릭해 보세요</h2>
      <ul>
        <TaskItem title="리액트 공부하기" />
        <TaskItem title="운동하기" />
        <ToggleItem id={1} title="1번 할 일 (토글)" onToggle={handleToggle} />
      </ul>
      <TaskForm onAdd={handleAdd} />
    </div>
  );
}
export default App;
