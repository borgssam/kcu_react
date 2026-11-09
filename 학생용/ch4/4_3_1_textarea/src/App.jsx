// src/App.jsx
import { useState } from "react";

function TaskForm() {
  const [memo, setMemo] = useState("");
  const maxLength = 100;

  return (
    <div>
      <textarea
        value={memo}
        onChange={(e) => setMemo(e.target.value)}
        placeholder="할 일에 대한 메모를 남겨보세요"
        rows={4}
        cols={40}
        maxLength={maxLength}
      />
      <p>
        {memo.length} / {maxLength}자
      </p>
    </div>
  );
}

function App() {
  return (
    <div>
      <h2>메모 남기기</h2>
      <TaskForm />
    </div>
  );
}
export default App;
