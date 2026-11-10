import { useState } from 'react'
import './App.css'

const FILTERS = [
  {value:"all", label:"전체"},
  {value:"done", label:"완료"},
  {value:"pending", label:"미완료"},


];

function TaskFilter({filter, onFilterChange}){
  return(
    <div>
      {
        FILTERS.map(
          (f) => (

          <label key={f.value}>
          <input type="radio" name="filter" 
          value={f.value}
          checked={f.value === filter}
          onChange={()=>onFilterChange(f.value)}

           />
          {f.label} {" "}
          </label>



          )



        )


      }
      
    </div>

  )
}
function App() {
  const [filter,setFilter] = useState("all");

  const tasks = [
    {id:1, title:"리액트 공부하기", isDone:false},
    {id:2, title:"운동하기", isDone:true},
    {id:3, title:"독서하기", isDone:true},
  ]

  const filteredTasks = tasks.filter(
    (task)=>{
      if(filter === "done") return task.isDone;
      if(filter === "pending") return !task.isDone;
      return true;
    }

  );

  return (
    <div>
      <TaskFilter filter={filter} onFilterChange={setFilter} />
      <ul>


        {filteredTasks.map(
          (task)=>(
            <li key={task.id} className={task.isDone? "done": ""}>{task.title}</li>

          )

        )}
      </ul>

    </div>
  )
}

export default App
