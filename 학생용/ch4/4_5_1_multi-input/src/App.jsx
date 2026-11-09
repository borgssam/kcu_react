// src/App.jsx
import { useState } from "react";

function TaskForm() {
  const [form, setForm] = useState({ title: "", memo: "", priority: "normal" });

  const handleChange = (e) => {
    const { name, value } = e.target; // 2.5절(구조 분해)
    setForm({ ...form, [name]: value }); // 2.6절(스프레드) + 계산된 속성명
  };

  return (
    <form>
      <p>
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="제목"
        />
      </p>
      <p>
        <textarea
          name="memo"
          value={form.memo}
          onChange={handleChange}
          placeholder="메모"
        />
      </p>
      <p>
        <select name="priority" value={form.priority} onChange={handleChange}>
          <option value="high">긴급</option>
          <option value="normal">보통</option>
          <option value="low">낮음</option>
        </select>
      </p>
      <pre>{JSON.stringify(form, null, 2)}</pre>
    </form>
  );
}

function App() {
  return (
    <div>
      <h2>여러 입력값을 객체 하나로</h2>
      <TaskForm />
    </div>
  );
}
export default App;
