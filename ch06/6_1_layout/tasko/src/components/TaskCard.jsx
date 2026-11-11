function TaskCard({id, title, isDone, onToggle}){
   return (
    <div className={`task-card ${isDone? "task-card--done":""}`}>
      <label>
        <input type="checkbox" checked={isDone} onChange={onToggle}/>
     
        {title}
      </label>
    </div>    
    
   )

}
export default TaskCard;