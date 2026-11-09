// src/App.jsx
import { useState } from "react";
import TaskItem from "./TaskItem.jsx";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "리액트 공부하기" },
    { id: 2, title: "운동하기" },
    { id: 3, title: "독서하기" },
  ]);

  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          title={task.title}
          onDelete={() => handleDelete(task.id)}
        />
      ))}
    </ul>
  );
}
export default App;
