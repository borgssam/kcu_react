// src/App.jsx
import { useState } from "react";
import { createPortal } from "react-dom";
import "./Modal.css";

function ModalBox({ message, onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <p>{message}</p>
        <button onClick={onClose}>닫기</button>
      </div>
    </div>
  );
}

function ConfirmModal({ message, onClose }) {
  return createPortal(
    <ModalBox message={message} onClose={onClose} />,
    document.body, // 실제로는 body 바로 아래에 렌더링된다
  );
}

function TaskItem({ usePortal }) {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

  return (
    <li className="clip-box">
      {usePortal ? "Portal 사용" : "Portal 없이"} 할 일 항목{" "}
      <button onClick={() => setIsOpen(true)}>삭제</button>
      {isOpen &&
        (usePortal ? (
          <ConfirmModal message="정말 삭제할까요?" onClose={close} />
        ) : (
          <ModalBox message="정말 삭제할까요?" onClose={close} />
        ))}
    </li>
  );
}

function App() {
  return (
    <ul>
      <TaskItem usePortal={false} />
      <TaskItem usePortal={true} />
    </ul>
  );
}
export default App;
