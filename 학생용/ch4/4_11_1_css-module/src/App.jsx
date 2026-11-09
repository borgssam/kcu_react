// src/App.jsx
import NavMenu from "./NavMenu.jsx";
import TaskItem from "./TaskItem.jsx";
import taskStyles from "./TaskItem.module.css";
import navStyles from "./NavMenu.module.css";

function App() {
  return (
    <div>
      <NavMenu />
      <ul>
        <TaskItem title="리액트 공부하기" isDone={false} />
        <TaskItem title="운동하기" isDone={true} />
      </ul>
      <p>TaskItem의 .item 실제 이름: {taskStyles.item}</p>
      <p>NavMenu의 .item 실제 이름: {navStyles.item}</p>
    </div>
  );
}
export default App;
