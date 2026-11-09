// main.js
import sum, { formatDate } from "./utils.js";
import { sortTasks, countDone } from "./taskHelpers.js";

console.log(sum(2, 3)); // 5
console.log(formatDate(new Date(2026, 10, 1))); // 2026년 11월 1일

const tasks = [
  { title: "운동하기", isDone: true },
  { title: "공부하기", isDone: false },
  { title: "독서하기", isDone: true },
];
console.log(sortTasks(tasks).map((task) => task.title));
console.log("완료한 일:", countDone(tasks));
