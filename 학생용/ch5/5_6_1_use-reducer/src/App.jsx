// src/App.jsx
import { useReducer, useState } from "react";

function taskReducer(tasks, action) {
  switch (action.type) {
    case "add":
      return [...tasks, { id: action.id, title: action.title, isDone: false }];
    case "toggle":
      return tasks.map((t) =>
        t.id === action.id ? { ...t, isDone: !t.isDone } : t,
      );
    case "delete":
      return tasks.filter((t) => t.id !== action.id);
    default:
      return tasks;
  }
}

const initialTasks = [
  { id: 1, title: "리액트 공부하기", isDone: false },
  { id: 2, title: "운동하기", isDone: true },
];

function App() {
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks);
  const [inputText, setInputText] = useState("");

  const addTask = (title) => dispatch({ type: "add", id: Date.now(), title });
  const toggleTask = (id) => dispatch({ type: "toggle", id });
  const deleteTask = (id) => dispatch({ type: "delete", id });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.trim() === "") return;
    addTask(inputText.trim());
    setInputText("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="할 일"
        />
        <button type="submit">추가</button>
      </form>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <label>
              <input
                type="checkbox"
                checked={task.isDone}
                onChange={() => toggleTask(task.id)}
              />
              <span className={task.isDone ? "done" : ""}>{task.title}</span>
            </label>{" "}
            <button onClick={() => deleteTask(task.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default App;
