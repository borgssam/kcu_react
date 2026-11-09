// src/App.jsx
import { useState } from "react";

function BrokenForm() {
  let inputText = ""; // 이렇게 하면 동작하지 않는다!

  return (
    <input
      value={inputText}
      onChange={(e) => {
        inputText = e.target.value;
      }}
      placeholder="여기는 입력이 안 된다"
    />
  );
}

function TaskForm() {
  const [inputText, setInputText] = useState("");

  return (
    <div>
      <input
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="여기는 입력된다"
      />
      <p>지금 입력값: {inputText}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <h2>let 변수로 만든 입력창</h2>
      <BrokenForm />
      <h2>state로 만든 입력창</h2>
      <TaskForm />
    </div>
  );
}
export default App;
