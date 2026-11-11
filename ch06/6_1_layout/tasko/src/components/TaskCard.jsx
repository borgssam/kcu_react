function TaskCard({id, title, isDone, onToggle, onDelete}){
   return (
    <div className={`task-card ${isDone? "task-card--done":""}`}>
      <label>
        <input type="checkbox" checked={isDone} onChange={onToggle}/>
     
        {title}
      </label>
      <button className = "task-card__delete" onClick={onDelete}>삭제</button>
    </div>    
    
   )

}
export default TaskCard;