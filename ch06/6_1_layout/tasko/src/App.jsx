import { useState } from "react";
import TaskForm from "./components/TaskForm.jsx";
import TaskBoard from "./components/TaskBoard.jsx";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "리액트 공부하기", isDone: false },
    { id: 2, title: "운동하기", isDone: true },
    { id: 3, title: "독서하기", isDone: true },
  ]);

  return (
    <div className="app">
      <h1>Tasko</h1>
      <TaskForm/>
      {/* <form className="task-form">
        <input placeholder="할 일을 입력하세요" />
        <button type="submit">추가</button>
      </form> */}


      {/* 5.10절의 .board 그리드 컨테이너 */}
      <TaskBoard  tasks={tasks}/>
      {/* <div className="task-board">
        <div className="task-card">
          <label>리액트 공부하기</label>
        </div>
        <div className="task-card task-card--done">
          <label>운동하기</label>
        </div>
        <div className="task-card">
          <label>독서하기</label>
        </div>
      </div> */}



    </div>
  );
}
export default App;
