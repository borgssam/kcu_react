import { useState } from 'react'

import './login.css'

function App() {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = e.target.userId.value;
    const pw = e.target.userPw.value;

    if (pw === "1234") {
      setMessage(`${id}님, 환영합니다!`);
    } else {
      setMessage("비밀번호가 틀렸습니다.");
    }
  };

  return (
    <div className="login-card">
      <h2 className="login-title">tasko 로그인 (React)</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label" htmlFor="userId">
            아이디
          </label>
          <input
            className="form-input"
            type="text"
            id="userId"
            placeholder="아이디 입력"
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="userPw">
            비밀번호
          </label>
          <input
            className="form-input"
            type="password"
            id="userPw"
            placeholder="비밀번호 입력"
            required
          />
        </div>
        <button className="btn-submit" type="submit">
          로그인
        </button>
      </form>
      <p className="message">{message}</p>
    </div>
  );
}

export default App;
