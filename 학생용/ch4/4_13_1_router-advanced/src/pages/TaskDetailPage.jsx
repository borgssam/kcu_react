// src/pages/TaskDetailPage.jsx
import { useParams } from "react-router-dom";
import tasks from "../data/tasks.js";

function TaskDetailPage() {
  const { id } = useParams(); // 주소가 /tasks/3이면 id는 "3"(문자열)
  const task = tasks.find((t) => t.id === Number(id));

  if (!task) {
    return <p>할 일 #{id}을(를) 찾을 수 없습니다.</p>;
  }
  return (
    <div>
      <h2>할 일 #{id} 상세 정보</h2>
      <p>제목: {task.title}</p>
      <p>상태: {task.isDone ? "완료" : "미완료"}</p>
    </div>
  );
}
export default TaskDetailPage;
