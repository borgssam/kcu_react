// src/data/taskApi.js — 서버 대신 쓰는 연습용 데이터
const tasks = [
  { id: 1, title: "리액트 공부하기", isDone: false },
  { id: 2, title: "운동하기", isDone: true },
];

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export async function fetchTasks() {
  await wait(300); // 서버에 다녀오는 시간을 흉내 낸다
  return [...tasks];
}

export async function fetchTaskById(id) {
  await wait(300);
  return tasks.find((t) => t.id === Number(id));
}

export async function createTaskOnServer(title) {
  await wait(300);
  tasks.push({ id: Date.now(), title, isDone: false });
}
