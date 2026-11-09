// src/Layout.jsx
import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <header>
        <h1>Tasko</h1>
        <nav>
          <Link to="/">목록</Link> | <Link to="/new">새 할 일</Link>
        </nav>
      </header>
      <hr />
      <Outlet /> {/* 하위 라우트의 화면이 이 자리에 들어간다 */}
    </div>
  );
}
export default Layout;
