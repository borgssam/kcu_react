// src/App.jsx
function TaskItem(props) {
  return (
    <li className={props.isDone ? "done" : ""}>
      [{props.priority}] {props.title}
    </li>
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
    { id: 1, title: "리액트 공부하기", isDone: false },
    { id: 2, title: "운동하기", isDone: true },
  ];

  return (
    <div>
      <h2>하나씩 전달하기</h2>
      <ul>
        <TaskItem title="리액트 공부하기" isDone={false} priority="high" />
        <TaskItem title="운동하기" isDone={true} priority="normal" />
        <TaskItem title="독서하기" isDone={false} priority="low" />
      </ul>
      <h2>배열을 통째로 전달하기</h2>
      <TaskList tasks={tasks} />
    </div>
  );
}
export default App;
