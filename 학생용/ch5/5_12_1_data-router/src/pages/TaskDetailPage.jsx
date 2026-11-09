// src/pages/TaskDetailPage.jsx
import { Link, useLoaderData } from "react-router-dom";

function TaskDetailPage() {
  const task = useLoaderData(); // useState·useEffect 없이 바로 데이터를 받는다
  return (
    <div>
      <h1>{task.title}</h1>
      <p>상태: {task.isDone ? "완료" : "미완료"}</p>
      <Link to="/">← 목록으로</Link>
    </div>
  );
}
export default TaskDetailPage;
