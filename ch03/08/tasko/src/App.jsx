import { useState } from 'react'
import './App.css'

function Card({title,children}){


  return(
    <div className="card">
      {title && <h3>{title}</h3>}
      {children ?? "내용이 없습니다."}
    </div>
  )

}

function TaskList({tasks}) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>{task.title}</li>
      ))}
    </ul>
  );
}
function App() {


  const tasks = [
    {id:1, title: "리액트 공부하기1"},
    {id:2, title: "게임하기1"},
    {id:3, title: "게임하기2"},
    {id:4, title: "게임하기3"},
  ]

  return (
    <>
    <h1>컴포넌트 합성</h1>
    <Card title="공부하기">
      <h2>리액트 공부하기</h2>
      <p>2시간</p>
    </Card>
    <hr/>
    <Card>
      <TaskList tasks={tasks}/>
    </Card>
    </>
  )
}

export default App
