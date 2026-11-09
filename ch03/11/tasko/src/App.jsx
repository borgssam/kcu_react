import './App.css'
function TaskList({tasks}){
  return(
    <ul>
      {
        tasks.map(
          (task)=>{
            return <li key={task.id} >{task.title}</li>
          }
        )
      }

    </ul>

  );
}


function TaskGroups({groups}) {
  return(
    <div>
    {
      groups.map((group)=>(
        <section key={group.id}>
          <h3>{group.name}</h3>
          <ul>
          {
            group.tasks.map(
              (task)=>(
                <li key={task.id}>{task.title}</li>
              )
            )

          }

          </ul>




        </section>



      ))

    }
    </div>

  );
  
}

function App() {
  const tasks = [
    {id:1, title:"리액트 공부하기"},
    {id:2, title:"운동하기"},
    {id:3, title:"독서하기"},
  ]

  const groups = [
    {id:"group1", name:"공부", tasks:[{id:11, title: "jsx복습"}, {id:12, title:"props 복습"}]},
    {id:"group2", name:"생활", tasks:[{id:21, title:"장보기"}]},
  ]

  return (
    <>
    <h2>기본패턴</h2>
    <TaskList tasks={tasks}/>

    <h2>중첩리스트</h2>
    <TaskGroups groups={groups}/>
    </>
  )
}

export default App
