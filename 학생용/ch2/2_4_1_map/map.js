// map.js
const tasks = [
  { id: 1, title: "리액트 공부하기", isDone: false },
  { id: 2, title: "운동하기", isDone: true },
];

const titles = tasks.map((task) => task.title);
// ["리액트 공부하기", "운동하기"]
console.log(titles);

const pendingTasks = tasks
  .filter((task) => !task.isDone)
  .map((task) => task.title);
console.log(pendingTasks); // ["리액트 공부하기"]

const result = tasks.forEach((task) => console.log(task.title)); // 결과를 "안 돌려줌", 그냥 실행만
const titles2 = tasks.map((task) => task.title); // 결과를 "새 배열로 돌려줌"
console.log("forEach 결과:", result); // undefined
console.log("map 결과:", titles2);

// JSX의 <li>를 흉내 낸 문자열 만들기
const items = tasks.map((task) => `<li>${task.title}</li>`);
console.log(items);
