import { useState } from "react";

function TaskForm({onAdd}){
  const [inputText, setInputText] = useState("");

  const handleSubmit = (e) => {
    console.log(inputText);
    e.preventDefault(); //페이지 새로고침 방지
    //빈값 예외처리
    const trimmed = inputText.trim(); //앞뒤 공백 지우기
    if (trimmed === "") {return;}     //빈값이면 중지    

    onAdd(inputText); //여기서 tasks 배열에 할일 추가
    setInputText(""); //입력창 초기화
  };  
  const handleInput = (e)=>{setInputText(e.target.value)}

  return(
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="할일을 입력하세요" value={inputText} 
      onChange={handleInput}
      />
      <button>추가하기</button>
    </form>
  )
}

function App() {
  const [tasks, setTasks] = useState([  ]);

  const handleAdd = (title) => {
    setTasks([...tasks, {id:Date.now(), title: title , isDone:false} ])
  };

  // handleAdd("강아지");

  return (
     <div>
      <h2>할일추가하기</h2>
      <TaskForm onAdd={handleAdd} />

      <h2>할일목록</h2>
      <ul>
        {
          tasks.map(
            (task) => (
              <li key={task.id}>{task.title}</li>
            )

          )

        }
      </ul>
    </div>
  )
}

export default App
