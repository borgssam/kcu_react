import { useState } from 'react'
import './App.css'

const PRIORITES = [
  {value:"high",label:"긴급"},
  {value:"normal",label:"보통"},
  {value:"low",label:"낮음"},
];

const TAGS =["공부", "운동", "생활"];
function TagSelect(){
  const [selectedTags, setSelectedTags] = useState([]);
  const handleChange = (e) =>{
    const values = Array.from(e.target.selectedOptions,(opt)=>opt.value);
    setSelectedTags(values);
  };
  return (
    <div>
      <select multiple value={selectedTags} onChange={handleChange}>

        {
          TAGS.map(
            (tag)=>(
              <option value={tag} key={tag}>
                {tag}
              </option>
            )
          )
        }

      </select>
    </div>
  )
}

function PrioritySelect(){
  const [priority, setPriority] = useState("normal");
  return(
    <div>
      <select value={priority} onChange={(e)=>setPriority(e.target.value)}>
        {
          PRIORITES.map(
            (p)=>(
              <option key={p.value} value={p.value}>
                {p.label}
              </option>
            )


          )
        }
      </select>

    </div>

  )
}
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <h2>우순순위 선택(하나만)</h2>
    <PrioritySelect/>
    <h2>태그선택(여러개)</h2>
    <TagSelect/>
    </div>
  )
}

export default App
