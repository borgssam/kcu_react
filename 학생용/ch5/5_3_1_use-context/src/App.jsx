// src/App.jsx
import { createContext, useContext, useState } from "react";

const ThemeContext = createContext("light");

const THEME_STYLE = {
  light: { background: "#ffffff", color: "#222222" },
  dark: { background: "#222222", color: "#ffffff" },
};

function TaskItem() {
  const theme = useContext(ThemeContext); // 중간 단계를 거치지 않고 바로 꺼내 씀
  return (
    <li style={{ ...THEME_STYLE[theme], padding: "8px" }}>
      할 일 (지금 테마: {theme})
    </li>
  );
}

function TaskList() {
  return (
    <ul>
      <TaskItem />
      <TaskItem />
    </ul>
  );
}

function TaskPage() {
  return <TaskList />;
}

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={theme}>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        테마 바꾸기
      </button>
      <TaskPage />
    </ThemeContext.Provider>
  );
}
export default App;
