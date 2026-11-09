// src/pages/TaskListPage.jsx
import { Link, useLoaderData } from "react-router-dom";

function TaskListPage() {
  const tasks = useLoaderData(); // loader가 미리 준비한 데이터
  return (
    <div>
      <h2>할 일 목록</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <Link to={`/tasks/${task.id}`}>{task.title}</Link>
          </li>
        ))}
      </ul>
      <Link to="/tasks/new">+ 새 할 일</Link>
    </div>
  );
}
export default TaskListPage;
