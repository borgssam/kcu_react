// template-literal.js
const name = "할 일 관리";
console.log(`${name} 앱을 시작합니다.`);

// 조건에 따라 클래스 이름 조합하기
const getTaskClass = (isDone) => `task-item ${isDone ? "task-item--done" : ""}`;
console.log(getTaskClass(true)); // task-item task-item--done
console.log(getTaskClass(false)); // task-item (뒤에 공백 하나)

const tasks = [
  { title: "공부하기", isDone: true },
  { title: "운동하기", isDone: false },
  { title: "독서하기", isDone: true },
];

const summary = `
총 할 일: ${tasks.length}개
완료: ${tasks.filter((t) => t.isDone).length}개
`;
console.log(summary);

const doneRate = Math.round(
  (tasks.filter((t) => t.isDone).length / tasks.length) * 100
);
console.log(`완료율: ${doneRate}%`);
