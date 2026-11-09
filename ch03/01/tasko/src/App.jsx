import { useState } from 'react'
import './App.css'

function App() {
  const taskCount = 5;
  const task = {title: "React 공부하기"};
  const doneRate = 60;
  const isDone = false;
 

  return (
    <div>
      <h1> 할 일 관리 앱</h1>
      <p>할일: {task.title}</p>
      <p>할일: {task.title.toUpperCase()}</p>
      <p>{1+2+3}</p>
      <p>`완료율: {doneRate}%`</p>
      <p>if(isDone){"완료"} else {"미완료"}</p>
      <p> {isDone? "완료" : "미완료"}</p>
      <p>null: [{null}]</p>
      <p>undefined: [{undefined}]</p>
      <p>boolean: [{true}]</p>
      <p>boolean: [{false}]</p>
      <p>0: [{0}]</p>

      <p>총 할일: {taskCount}</p>

    </div>
  );
}

export default App
