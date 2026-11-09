// src/App.jsx
import { useState } from "react";
import useTasks from "./hooks/useTasks.js";
import TaskForm from "./components/TaskForm.jsx";
import TaskBoard from "./components/TaskBoard.jsx";
import EmptyState from "./components/EmptyState.jsx";
import "./App.css";

function App() {
  // 데이터와 Supabase 통신은 useTasks가 모두 맡는다
  const {
    tasks,
    isLoading,
    loadError,
    addTask,
    toggleTask,
    deleteTask,
    clearDoneTasks,
  } = useTasks();
  const [newTaskTitle, setNewTaskTitle] = useState(""); // 입력창 값은 화면의 일

  const handleAddTask = async (e) => {
    e.preventDefault();
    const trimmedTitle = newTaskTitle.trim();
    if (trimmedTitle === "") return;
    const isAdded = await addTask(trimmedTitle);
    if (isAdded) setNewTaskTitle(""); // 저장에 성공했을 때만 입력창을 비운다
  };

  const handleClearDone = () => {
    const doneCount = tasks.filter((t) => t.isDone).length;
    if (doneCount === 0) return;
    if (!window.confirm(`완료된 할 일 ${doneCount}개를 모두 삭제할까요?`))
      return;
    clearDoneTasks();
  };

  const remainingCount = tasks.filter((t) => !t.isDone).length;
  // 완료되지 않은 할 일을 앞으로 보낸다(원본 tasks는 그대로 두고 복사본을 정렬)
  const sortedTasks = [...tasks].sort((a, b) => {
    if (a.isDone === b.isDone) return 0; // 둘 다 같으면 순서 유지
    return a.isDone ? 1 : -1; // 완료된 것(true)을 뒤로
  });

  // 목록 자리에 보여줄 것: 불러오는 중·실패면 안내 문구(7.8절 EmptyState 재사용)
  let board = (
    <TaskBoard
      tasks={sortedTasks}
      onToggleTask={toggleTask}
      onDeleteTask={deleteTask}
    />
  );
  if (isLoading) board = <EmptyState message="불러오는 중..." />;
  if (loadError) board = <EmptyState message={`불러오기 실패: ${loadError}`} />;

  return (
    <div className="app">
      <h1>Tasko</h1>
      <TaskForm
        value={newTaskTitle}
        onChange={(e) => setNewTaskTitle(e.target.value)}
        onSubmit={handleAddTask}
      />
      <div className="task-toolbar">
        <span>남은 할 일: {remainingCount}개</span>
        <button onClick={handleClearDone}>완료 항목 일괄 삭제</button>
      </div>
      {board}
    </div>
  );
}
export default App;
