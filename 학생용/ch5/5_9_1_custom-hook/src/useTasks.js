// src/useTasks.js — 이름은 반드시 use로 시작해야 한다
import { useEffect, useState } from "react";

async function fetchTasksFromServer() {
  await new Promise((resolve) => setTimeout(resolve, 1000)); // 실습용: 1초 늦게
  const response = await fetch("/tasks.json");
  return response.json();
}

function useTasks() {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function load() {
      setIsLoading(true);
      const data = await fetchTasksFromServer();
      setTasks(data);
      setIsLoading(false);
    }
    load();
  }, []);

  return { tasks, isLoading }; // 필요한 값들을 객체로 돌려줌
}

export default useTasks;
