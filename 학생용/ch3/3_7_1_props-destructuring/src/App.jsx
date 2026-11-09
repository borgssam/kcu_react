// src/App.jsx
// 구조 분해 없이
function TaskItemWithProps(props) {
  return <li className={props.isDone ? "done" : ""}>{props.title}</li>;
}

// 매개변수 자리에서 바로 구조 분해 + 기본값
function TaskItem({ title, isDone = false, priority = "normal" }) {
  return (
    <li className={isDone ? "done" : ""}>
      [{priority}] {title}
    </li>
  );
}

// 함수 본문 안에서 구조 분해
function TaskItemInBody(props) {
  const { title, isDone } = props; // 매개변수 자리가 아니라 본문 첫 줄에서
  return <li className={isDone ? "done" : ""}>{title}</li>;
}

// 나머지 props를 한꺼번에 받기
function TaskItemWithRest({ title, ...rest }) {
  console.log(rest); // title을 뺀 나머지 속성들
  return <li {...rest}>{title}</li>;
}

function App() {
  return (
    <ul>
      <TaskItemWithProps title="props.title로 읽기" isDone={false} />
      <TaskItem title="구조 분해 + 기본값" />
      <TaskItem title="priority를 넘긴 경우" isDone={true} priority="high" />
      <TaskItemInBody title="본문에서 구조 분해" isDone={false} />
      <TaskItemWithRest title="나머지 props 펼치기" className="done" />
    </ul>
  );
}
export default App;
