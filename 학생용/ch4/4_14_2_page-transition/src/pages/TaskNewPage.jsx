// src/pages/TaskNewPage.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../Layout.module.css";

function TaskNewPage() {
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === "") return;
    navigate(`/?added=${encodeURIComponent(title.trim())}`); // 제출 후 목록 페이지로 이동
  };

  return (
    <form onSubmit={handleSubmit} className={styles.page}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="새 할 일"
      />
      <button type="submit">추가</button>
    </form>
  );
}
export default TaskNewPage;
