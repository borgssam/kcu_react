function TaskForm({value, onChange, onSubmit}){
   return (
      <form className="task-form" onSubmit={ onSubmit }>
        <input placeholder="할 일을 입력하세요" 
        value={value}
        onChange = {onChange}
        />
        <button type="submit">추가</button>
      </form>
   )

}
export default TaskForm;