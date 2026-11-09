import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <label for="task-input">할일</label>
      <input id="task-input" type="text" placeholder='할 일을 입력하세요'/>
      <p>
        <img src="/vite.svg" alt="vite로고" width={24}/>
        숫자는 중괄호로 넘긴다.
      </p>
      <p class="done" >className으로 지정한 문단</p>
      <p style = { {color:"red", fontSize:"30px"}}>스트일로 직접</p>
    </div>
  )
}

export default App
