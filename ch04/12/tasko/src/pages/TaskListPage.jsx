import {Link} from "react-router-dom";

const tasks = [
  {id:1, title: "리액트 공부하기", isDone: false},
  {id:2, title: "운동하기", isDone: true},
  {id:3, title: "독서하기", isDone: true},  
];

function TaskListPage() {
  return (
    <div>
      <h2>할일목록</h2>
      <ul>
        {
          tasks.map(
            (task)=>(
              <li key={task.id}>
                
                <Link to={`/tasks/${task.id}`}>{task.title}</Link>
              </li>



            )


          )

        }
      </ul>

    </div>

  );

}

export default TaskListPage;