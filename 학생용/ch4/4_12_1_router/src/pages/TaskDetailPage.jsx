// src/pages/TaskDetailPage.jsx
import { Link } from "react-router-dom";

function TaskDetailPage() {
  return (
    <div>
      <h2>할 일 상세 페이지</h2>
      <p>주소창의 주소가 /tasks/번호 로 바뀌었다.</p>
      <Link to="/">← 목록으로</Link>
    </div>
  );
}
export default TaskDetailPage;
