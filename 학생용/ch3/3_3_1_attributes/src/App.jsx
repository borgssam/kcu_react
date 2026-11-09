// src/App.jsx
function App() {
  return (
    <div>
      <label htmlFor="task-input">할 일 </label>
      <input
        id="task-input"
        type="text"
        placeholder="할 일을 입력하세요"
        maxLength={20}
      />
      <p>
        <img src="/vite.svg" alt="Vite 로고" width={24} /> 숫자는 중괄호로
        넘긴다
      </p>
      <p className="done">className으로 클래스를 지정한 문단</p>
      <p style={{ color: "red", fontSize: "16px" }}>완료!</p>
    </div>
  );
}
export default App;
