// src/App.jsx
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>Tasko</h1>
      <form className="task-form">
        <input placeholder="할 일을 입력하세요" />
        <button type="submit">추가</button>
      </form>
      {/* 5.10절의 .board 그리드 컨테이너 */}
      <div className="task-board">
        <div className="task-card">
          <label>리액트 공부하기</label>
        </div>
        <div className="task-card task-card--done">
          <label>운동하기</label>
        </div>
        <div className="task-card">
          <label>독서하기</label>
        </div>
      </div>
    </div>
  );
}
export default App;
