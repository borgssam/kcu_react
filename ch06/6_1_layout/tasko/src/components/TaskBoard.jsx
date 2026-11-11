import TaskCard from "./TaskCard.jsx";
import EmptyState from "./EmptyState.jsx";

function TaskBoard({tasks, onToggleTask, onDeleteTask}){
  if(tasks.length === 0){
    return (
      <EmptyState message="할일없습니다. 새로운 일을 추가해보세요"/>
    );
  }

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
              onDelete={()=>onDeleteTask(task.id)}       
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