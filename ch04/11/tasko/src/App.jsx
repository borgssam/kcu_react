import { useState } from 'react'
import NavMenu from "./NavMenu.jsx";
import TaskItem from "./TaskItem.jsx";
import './App.css'

function App() {

  return (
  <div> 
    <NavMenu/>
    <ul>
      <TaskItem title="리액트 공부하기" isDone={true}/>
      <TaskItem title="네스트 공부하기" isDone={false}/>
    </ul>
  </div>
  )
  // return (
  //   <div>
  //     <NavMenu/>
  //     <ul>
  //       <TaskItem title="리액트 공부하기" isDone={false}/>
  //       <TaskItem title="운동하기"        isDone={true} />
  //     </ul>
  //   </div>
  // )
}

export default App
