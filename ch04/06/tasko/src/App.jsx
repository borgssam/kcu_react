import { useState } from 'react'
import './App.css'

function TaskItem({title,isDone, onToggle}){
  return (
    <li>
      <input type="checkbox" checked={isDone} onChange={onToggle} />
      <span className={isDone? "done":""}>{title}</span>

    </li>
  )
}

function App() {
  const [tasks, setTasks] = useState(
    [
      {id: 1, title: "리액트 공부하기", isDone: false},
      {id: 2, title: "운동하기", isDone: false},
      {id: 3, title: "독서하기", isDone: true},
    ]
  );

  const [selectedIds, setSelectedIds] = useState([]);


  const handleCheck = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );
  };


  const handleToggle = (id) =>{
    const newTasks = tasks.map((task) => {
      return  task.id === id? {...task, isDone : !task.isDone}:task},
    );
    setTasks(newTasks);
  };

  return (
    <div>
      <h2>완료토글</h2>
      <ul>
        {tasks.map(
          (task) => (
            <TaskItem title={task.title} isDone={task.isDone}
            onToggle={()=>handleToggle(task.id)}
            />           

          )

        )}
      </ul>
      <h2>여러개 선택</h2>
      {
        tasks.map(
          (task)=>(
            <label key={task.id}>
              <input type="checkbox"
              checked = {selectedIds.includes(task.id)}
              onChange={()=>handleCheck(task.id)}

              />
              {task.title}{" "}
              
            </label>


          )

        )
      }

      <p>선택한 아이디: [{selectedIds.join(", ")}]</p>

    </div>
  )
}

export default App
