import { useState } from "react";

function BrokenForm(){
  let inputText = "고양이";
  return (
    <input type="text" value={inputText} onChange={
      (e)=>{inputText=e.target.value;}
    }/>

  );

}
function TaskForm(){
  let [inputText, setInputText] = useState("고양이");
  return (
    <div>
    <input type="text" value={inputText} onChange={
      (e)=>{setInputText(e.target.value);}
    }/>
    <p>지금 입력값:{inputText}</p>
    </div>

  );

}

function App() {

  return (
    <div>
      <h2>let변수로 만든 입력창</h2>
      <BrokenForm/>

      <h2>state로 만든 입력창</h2>
      <TaskForm />

    </div>
    
  )
}

export default App
