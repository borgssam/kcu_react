// src/App.jsx
import { useEffect, useState } from "react";
import { supabaseClient } from "./lib/supabaseClient.js";
import TaskForm from "./components/TaskForm.jsx";
import TaskBoard from "./components/TaskBoard.jsx";
import EmptyState from "./components/EmptyState.jsx";
import "./App.css";

// DB의 행(is_done)을 화면에서 쓰는 모양(isDone)으로 바꾼다
const toTask = (row) => ({ id: row.id, title: row.title, isDone: row.is_done });

function App() {
  const [tasks, setTasks] = useState([]); // 처음엔 빈 배열, DB에서 받아 채운다
  const [isLoading, setIsLoading] = useState(true); // 불러오는 중인가?
  const [loadError, setLoadError] = useState(""); // 불러오기 실패 메시지
  const [newTaskTitle, setNewTaskTitle] = useState("");

  useEffect(() => {
    // 5.2절: 화면이 처음 나타날 때 한 번 DB에서 할 일을 가져온다
    async function loadTasks() {
      const { data, error } = await supabaseClient
        .from("tasks")
        .select("*")
        .order("id", { ascending: true }); // id 순서 = 먼저 만든 것부터

      if (error) {
        console.error("할 일을 불러오지 못했습니다:", error.message);
        setLoadError(error.message);
      } else {
        setTasks(data.map(toTask));
      }
      setIsLoading(false);
    }
    loadTasks();
  }, []);

  const handleAddTask = async (e) => {
    e.preventDefault();
    const trimmedTitle = newTaskTitle.trim();
    if (trimmedTitle === "") return;

    const { data, error } = await supabaseClient
      .from("tasks")
      .insert({ title: trimmedTitle }) // is_done은 DB 기본값(false)
      .select() // 저장된 행(id 포함)을 돌려받는다
      .single(); // 배열이 아니라 객체 하나로 받는다
    if (error) {
      console.error("추가하지 못했습니다:", error.message);
      return;
    }
    setTasks([...tasks, toTask(data)]);
    setNewTaskTitle("");
  };

  const handleToggleTask = async (id) => {
    const target = tasks.find((t) => t.id === id);
    const nextDone = !target.isDone; // DB와 화면에 같은 값을 쓴다
    const { error } = await supabaseClient
      .from("tasks")
      .update({ is_done: nextDone })
      .eq("id", id); // id가 같은 행만 수정
    if (error) {
      console.error("수정하지 못했습니다:", error.message);
      return;
    }
    setTasks(tasks.map((t) => (t.id === id ? { ...t, isDone: nextDone } : t)));
  };

  const handleDeleteTask = async (id) => {
    const { error } = await supabaseClient.from("tasks").delete().eq("id", id);
    if (error) {
      console.error("삭제하지 못했습니다:", error.message);
      return;
    }
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const handleClearDone = async () => {
    const doneIds = tasks.filter((t) => t.isDone).map((t) => t.id); // 완료된 id 목록
    if (doneIds.length === 0) return;
    if (!window.confirm(`완료된 할 일 ${doneIds.length}개를 모두 삭제할까요?`))
      return;

    // in: id가 doneIds 안에 있는 행을 한 번의 요청으로 모두 지운다
    const { error } = await supabaseClient
      .from("tasks")
      .delete()
      .in("id", doneIds);
    if (error) {
      console.error("삭제하지 못했습니다:", error.message);
      return;
    }
    setTasks(tasks.filter((t) => !t.isDone));
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
      onToggleTask={handleToggleTask}
      onDeleteTask={handleDeleteTask}
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
