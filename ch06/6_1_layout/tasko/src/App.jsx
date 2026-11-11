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

  const [newTaskTitle, setNewTaskTitle] = useState("");
  const handleAddTask = (e) => {
    e.preventDefault();

    //빈 제목 제외처리
    const trimmedTitle = newTaskTitle.trim();
    if( trimmedTitle === "") {return;}

    //새로운 task를 추가
    const newTask = {id: Date.now(), title: trimmedTitle, isDone: false};

    setTasks([...tasks, newTask]);
    setNewTaskTitle("");    
  }

  // const handleToggleTask = (id) => {
  //   setTasks(tasks.map((t) => (t.id === id ? { ...t, isDone: !t.isDone } : t)));
  // };
  const handleToggleTask = (id)=>{
    const  updatedTasks = tasks.map(
      (task)=>{
        //아이디가 일치하면
        if(task.id === id) {
          return {...task, isDone: !task.isDone}
        } else {
          //일치하지 않으면
          return task;
        }
      }
    )

    setTasks(updatedTasks);

  };

  // 완료되지 않은 할 일을 앞으로 보낸다(원본 tasks는 그대로 두고 복사본을 정렬)
  // const sortedTasks = [...tasks].sort((a, b) => {
  //   if (a.isDone === b.isDone) return 0; // 둘 다 같으면 순서 유지
  //   return a.isDone ? 1 : -1; // 완료된 것(true)을 뒤로
  // });
  const sortedTasks = [...tasks].sort(
    (a,b)=>{
      if(a.isDone === b.isDone) { return 0;} //변화없음
      if(a.isDone === true) {
        return 1; // a가 뒤로감.
      } else {
        return -1; // a가 앞으로감.
      }
    }

    

  );


  return (
    <div className="app">
      <h1>Tasko</h1>
      <
        TaskForm
        value = {newTaskTitle}
        onChange={ (e) => setNewTaskTitle(e.target.value)}
        onSubmit={handleAddTask}
        
      />
      {/* <form className="task-form">
        <input placeholder="할 일을 입력하세요" />
        <button type="submit">추가</button>
      </form> */}


      {/* 5.10절의 .board 그리드 컨테이너 */}
      <TaskBoard  tasks={sortedTasks} onToggleTask={handleToggleTask}/>
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
