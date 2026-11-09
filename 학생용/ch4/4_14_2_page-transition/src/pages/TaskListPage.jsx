// src/pages/TaskListPage.jsx
import { Link, useSearchParams } from "react-router-dom";
import tasks from "../data/tasks.js";
import styles from "../Layout.module.css";

function TaskListPage() {
  const [searchParams] = useSearchParams();
  const filter = searchParams.get("filter") ?? "all"; // /?filter=done
  const added = searchParams.get("added");

  const filteredTasks = tasks.filter((task) => {
    if (filter === "done") return task.isDone;
    if (filter === "pending") return !task.isDone;
    return true;
  });

  return (
    <div className={styles.page}>
      {added && <p className="badge">"{added}" 추가 요청을 받았다</p>}
      <p>
        <Link to="/?filter=all">전체</Link> |{" "}
        <Link to="/?filter=done">완료</Link> |{" "}
        <Link to="/?filter=pending">미완료</Link> (지금: {filter})
      </p>
      <ul>
        {filteredTasks.map((task) => (
          <li key={task.id}>
            <Link to={`/tasks/${task.id}`}>{task.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default TaskListPage;
