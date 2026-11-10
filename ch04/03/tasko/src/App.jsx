import { useState } from 'react'
import './App.css'
function TaskForm(){
  const [memo, setMemo] = useState("");
  const maxLength = 20;
  return (
    <div>
      <textarea 
      value={memo}
      rows={4}
      cols={40}
      placeholder='할 일에 대한 메모를 남겨주세요'
      maxLength = {maxLength  }
      onChange={(e) => setMemo(e.target.value)}
      />
      <p> {memo.length}/{maxLength}자</p>
    </div>

  )
}
function App() {

  return (
    <div>
      <h2>메모 남기기</h2>
      <TaskForm/>
    </div>
  )
}

export default App
