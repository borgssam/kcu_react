import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function TaskItem({title}){
  const handleClick = () => {
    alert(`${title} 클릭됨` );  };
  return (
    <li onClick={handleClick} >{title}</li>

  );

}

function ToggleItem({id, title, onToggle}) {
  return <li onClick={ () => onToggle(id)}> {title} </li>
}

function App() {
  const handleToggle = (id)=>{
    alert(`${id}번 할일 토글`);
  }

  const handleAdd = (title)=>{
    alert(`${title} 추가요청 받음`);
  }

  return (

    <div>
      <h2>항목을 클릭해 보세요</h2>
      <ul>
        <TaskItem title="리액트 공부하기"/>
        <TaskItem title="게임하기1"/>
        <ToggleItem id={1} title="테니스치기" onToggle={handleToggle}/>
        
      </ul>
    </div>
  )
}

export default App
