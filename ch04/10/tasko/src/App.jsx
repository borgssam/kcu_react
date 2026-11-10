import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const tasks = [
    {id:1, title:"리액트 공부하기", isDone: false, priority:"high"},
    {id:2, title:"운동하기", isDone: true, priority:"normal"},
    {id:3, title:"독서하기", isDone: true, priority:"low"},
  ];
  

  return ( 
  <div>
    <h2>방법1: css파일 클래스</h2>
    <ul>
      <li className="task-item">할일</li>
    </ul>

    <h2>방법2:인라인 스타일</h2>
    <li style={ {padding:"8px", borderBottom:"2px solid #eee"} }>할일</li>

    <h2>조건에 따라 클래스 색 바꾸기</h2>
    <ul>
      {
       tasks.map(
          (task)=>(
            <li 
              key = {task.id}
              className={ `task-item ${ task.isDone? "task-item-done":""} `}
            
            >
              {task.title}
            </li>


          )


      )

      }

    </ul>
    



  </div>

 
  )
}

export default App
