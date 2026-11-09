// src/App.jsx
function App() {
  const taskCount = 5;
  const task = { title: "react 공부하기" };
  const doneRate = 60;
  const isDone = true;

  return (
    <div>
      <p>남은 할 일: {taskCount}개</p>
      <p>{task.title}</p> {/* 속성 접근 */}
      <p>{task.title.toUpperCase()}</p> {/* 함수 호출 */}
      <p>{1 + 1}개</p> {/* 연산 */}
      <p>{`완료율 ${doneRate}%`}</p> {/* 템플릿 리터럴 */}
      <p>{isDone ? "완료" : "미완료"}</p> {/* 삼항 연산자 */}
      <p>null: [{null}]</p>
      <p>undefined: [{undefined}]</p>
      <p>false: [{false}]</p>
      <p>0: [{0}]</p>
    </div>
  );
}
export default App;
