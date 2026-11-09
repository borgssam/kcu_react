// src/App.jsx
import { useEffect, useRef } from "react";

function TaskForm() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus(); // 화면이 나타나는 즉시 입력창에 포커스
  }, []);

  return <input ref={inputRef} placeholder="자동으로 포커스된다" />;
}

function ConfirmModal() {
  const dialogRef = useRef(null);

  const openModal = () => dialogRef.current.showModal(); // 이전 과정 2.5절(dialog)
  const closeModal = () => dialogRef.current.close();

  return (
    <div>
      <button onClick={openModal}>삭제</button>
      <dialog ref={dialogRef}>
        <p>정말 삭제하시겠습니까?</p>
        <button onClick={closeModal}>닫기</button>
      </dialog>
    </div>
  );
}

function App() {
  return (
    <div>
      <h2>자동 포커스</h2>
      <TaskForm />
      <h2>dialog 열기</h2>
      <ConfirmModal />
    </div>
  );
}
export default App;
