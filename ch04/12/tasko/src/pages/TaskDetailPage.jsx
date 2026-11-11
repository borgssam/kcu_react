import {Link} from "react-router-dom";

function TaskDetailPage() {
  return (
    <div>
      <h2>할일 상세 페이지</h2>
      <p>w주소창의 주소가 /tasks/번호로 바뀌었다.</p>
      <Link to="/">⬅️목록으로</Link>

    </div>
  );
}

export default TaskDetailPage;