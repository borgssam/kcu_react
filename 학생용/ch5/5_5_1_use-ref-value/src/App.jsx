// src/App.jsx
import { useEffect, useRef, useState } from "react";

function TaskForm() {
  const renderCount = useRef(0);
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    renderCount.current += 1; // 렌더링이 끝난 뒤에 ref를 바꾼다
    console.log(`이 컴포넌트는 ${renderCount.current}번 그려졌다`);
  }); // 의존성 배열 없음 — 렌더링마다 실행(5.2절)

  return (
    <input
      value={inputText}
      onChange={(e) => setInputText(e.target.value)}
      placeholder="입력해 보세요"
    />
  );
}

function TaskCounter({ taskCount }) {
  const prevCountRef = useRef(taskCount);

  useEffect(() => {
    console.log(`${prevCountRef.current}개에서 ${taskCount}개로 변경`);
    prevCountRef.current = taskCount; // 다음 렌더링을 위해 지금 값을 저장
  }, [taskCount]);

  return <p>할 일 {taskCount}개</p>;
}

function AutoSaveIndicator({ draft }) {
  const timerRef = useRef(null);

  useEffect(() => {
    clearTimeout(timerRef.current); // 이전 타이머 취소
    timerRef.current = setTimeout(() => {
      console.log("자동 저장:", draft);
    }, 1000);

    return () => clearTimeout(timerRef.current);
  }, [draft]);

  return <p>입력을 멈추고 1초 뒤 자동 저장된다</p>;
}

function App() {
  const [taskCount, setTaskCount] = useState(3);
  const [draft, setDraft] = useState("");

  return (
    <div>
      <h2>렌더링 횟수 세기</h2>
      <TaskForm />
      <h2>이전 값 기억하기</h2>
      <button onClick={() => setTaskCount(taskCount + 1)}>할 일 추가</button>
      <TaskCounter taskCount={taskCount} />
      <h2>타이머 ID 저장하기</h2>
      <input
        value={draft}
        onChange={(e) => setDraft(e.target.value)}
        placeholder="메모 초안"
      />
      <AutoSaveIndicator draft={draft} />
    </div>
  );
}
export default App;
