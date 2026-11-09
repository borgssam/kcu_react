// src/components/TaskForm.jsx
function TaskForm({ value, onChange, onSubmit }) {
  return (
    <form className="task-form" onSubmit={onSubmit}>
      <input
        value={value}
        onChange={onChange}
        placeholder="할 일을 입력하세요"
      />
      <button type="submit">추가</button>
    </form>
  );
}
export default TaskForm;
