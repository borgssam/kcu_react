// src/pages/TaskListPage.jsx
import { Link } from "react-router-dom";
import tasks from "../data/tasks.js";

function TaskListPage() {
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
    </div>
  );
}
export default TaskListPage;
