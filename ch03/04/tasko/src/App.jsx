import { useState } from 'react'
import TaskItem from './TaskItem'
import './App.css'

function App() {


  return (
    <>
      <h1> 할 일 관리 앱</h1>
      <ul>
      <TaskItem/>
      <TaskItem/>
      </ul>
    </>
  )
}

export default App
