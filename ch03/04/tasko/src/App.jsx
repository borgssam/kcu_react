import { useState } from 'react'
import './App.css'

function TaskItem({title="할일없음", isDone}){
  let msg="<미완료>";
  if(isDone){
    msg="<완료>";
  }
  return (
    <>
      <hr/>
      <p>TaskItem2</p>
      <p>
        {isDone ? <s>{title}</s> : <span>{title}</span>}
        {isDone && <span class="badge">완료</span>} 
        {msg}
      </p>

    </>

  );

}

function App() {

  const tasks = [];

  return (
    <>
      <h1> 할 일 관리 앱</h1>
      <TaskItem title="리액트 공부하기" isDone={true} />
      <TaskItem/>
      <p>잘못된 예: {tasks.length && <span>할 일 {tasks.length}개</span>}</p>
      <p> 올바른 예: {tasks.length > 0 && <span>할 일 {tasks.length}개</span>}
      </p>
    </>
  )
}

export default App
