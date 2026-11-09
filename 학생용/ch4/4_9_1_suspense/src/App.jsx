// src/App.jsx
import { lazy, Suspense, useState } from "react";

// 실습용: 로딩 화면을 눈으로 확인하려고 일부러 1.5초 늦게 불러온다
const TaskStatistics = lazy(() =>
  new Promise((resolve) => setTimeout(resolve, 1500)).then(
    () => import("./TaskStatistics.jsx"),
  ),
);

function App() {
  const [showStats, setShowStats] = useState(false);

  return (
    <div>
      <button onClick={() => setShowStats(true)}>통계 보기</button>
      {showStats && (
        <Suspense fallback={<p>불러오는 중...</p>}>
          <TaskStatistics />
        </Suspense>
      )}
    </div>
  );
}
export default App;
