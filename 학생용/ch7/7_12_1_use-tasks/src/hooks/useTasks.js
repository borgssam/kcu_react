// src/hooks/useTasks.js — 할 일 데이터와 Supabase 통신을 모두 맡는 커스텀 Hook
import { useEffect, useState } from "react";
import { supabaseClient } from "../lib/supabaseClient.js";

// DB의 행(is_done)을 화면에서 쓰는 모양(isDone)으로 바꾼다
const toTask = (row) => ({ id: row.id, title: row.title, isDone: row.is_done });

function useTasks() {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState("");

  useEffect(() => {
    async function loadTasks() {
      const { data, error } = await supabaseClient
        .from("tasks")
        .select("*")
        .order("id", { ascending: true });

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

  const addTask = async (title) => {
    const { data, error } = await supabaseClient
      .from("tasks")
      .insert({ title })
      .select()
      .single();
    if (error) {
      console.error("추가하지 못했습니다:", error.message);
      return false; // 실패를 App에 알린다
    }
    setTasks((prev) => [...prev, toTask(data)]); // prev: 가장 최신 tasks
    return true; // 성공을 App에 알린다
  };

  const toggleTask = async (id) => {
    const target = tasks.find((t) => t.id === id);
    const nextDone = !target.isDone; // DB와 화면에 같은 값을 쓴다
    const { error } = await supabaseClient
      .from("tasks")
      .update({ is_done: nextDone })
      .eq("id", id);
    if (error) {
      console.error("수정하지 못했습니다:", error.message);
      return;
    }
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, isDone: nextDone } : t)),
    );
  };

  const deleteTask = async (id) => {
    const { error } = await supabaseClient.from("tasks").delete().eq("id", id);
    if (error) {
      console.error("삭제하지 못했습니다:", error.message);
      return;
    }
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  const clearDoneTasks = async () => {
    const doneIds = tasks.filter((t) => t.isDone).map((t) => t.id);
    if (doneIds.length === 0) return;
    const { error } = await supabaseClient
      .from("tasks")
      .delete()
      .in("id", doneIds);
    if (error) {
      console.error("삭제하지 못했습니다:", error.message);
      return;
    }
    setTasks((prev) => prev.filter((t) => !t.isDone));
  };

  return {
    tasks,
    isLoading,
    loadError,
    addTask,
    toggleTask,
    deleteTask,
    clearDoneTasks,
  };
}

export default useTasks;
