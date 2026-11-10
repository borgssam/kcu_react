import { useState, lazy, Suspense } from 'react'

import './App.css'

const TaskStatistics = lazy(
  () => new Promise(
    (resolve) => setTimeout(resolve, 1500)).then(
    () => import("./TaskStatistics.jsx"),
  ),
);

function App() {
  const [showStats, setShowStats] = useState(false)

  return (
    <div>
      <button onClick={()=>setShowStats(true)}>통계보기</button>
      {showStats &&(
        <Suspense fallback={<p>불러오는 중...</p>}>
          <TaskStatistics/>
        </Suspense>          
      )}
    </div>
  )
}

export default App
