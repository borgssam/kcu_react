import TaskCard from "./TaskCard.jsx";

function TaskBoard({tasks, onToggleTask}){
   return (
     <div className="task-board">
      {
        tasks.map(
          (task)=>(
            <TaskCard 
              key={task.id}
              title={task.title}
              isDone={task.isDone}  
              onToggle={()=>onToggleTask(task.id)}          
            />
          )
        )
      }
        {/* <div className="task-card task-card--done">
          <label>운동하기</label>
        </div>
        <div className="task-card">
          <label>독서하기</label>
        </div> */}
      </div> 
   )

}
export default TaskBoard;