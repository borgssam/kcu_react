function TaskCard({id, title, isDone}){
   return (
    <div className={`task-card ${isDone? "task-card--done":""}`}>
      <label>
        <input type="checkbox" checked={isDone} />
     
        {title}
      </label>
    </div>    
    
   )

}
export default TaskCard;