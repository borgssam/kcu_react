// const-let.js
const taskTitle = "리액트 공부하기"; // 재할당 안 할 값은 항상 const
let remainingCount = 5; // 값이 바뀔 걸 아는 경우만 let

remainingCount = 4; // let은 다시 할당할 수 있다
console.log(taskTitle, remainingCount);

try {
  taskTitle = "다른 제목"; // const는 다시 할당할 수 없다
} catch (error) {
  console.log("오류:", error.message);
}

// 일반 JavaScript라면 이렇게 값을 바꾸고 싶겠지만
let tasks = [{ title: "공부하기", isDone: false }];
const before = tasks;
tasks[0].isDone = true; // 기존 배열/객체를 직접 수정(아래에서 왜 피해야 하는지 설명)
console.log("직접 수정 후 같은 배열인가?", before === tasks); // true

// React에서는 항상 "새 값을 만들어 교체"하는 방식을 쓴다
const updatedTasks = tasks.map((task) =>
  task.title === "공부하기" ? { ...task, isDone: true } : task
);
console.log("새로 만든 뒤 같은 배열인가?", tasks === updatedTasks); // false

let totalScore = 0;
for (const task of tasks) {
  if (task.isDone) totalScore += 10;
}
console.log("점수:", totalScore); // 10
