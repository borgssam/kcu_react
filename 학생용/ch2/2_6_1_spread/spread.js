// spread.js
const task = { title: "공부하기", isDone: false };
const updatedTask = { ...task, isDone: true }; // 기존 속성 복사 + 일부만 교체
console.log(task, updatedTask);

const tasks = ["공부하기", "운동하기"];
const newTasks = [...tasks, "독서하기"]; // 기존 배열 복사 + 새 항목 추가
console.log(tasks, newTasks);

// React의 state와 setTasks를 흉내 낸 코드
let todoList = [{ id: 1, title: "리액트 공부하기", isDone: false }];
const setTodoList = (next) => {
  console.log("같은 배열인가?", next === todoList);
  todoList = next;
};

const addTask = (title) => {
  setTodoList([...todoList, { id: todoList.length + 1, title, isDone: false }]);
};

const toggleTask = (id) => {
  setTodoList(
    todoList.map((task) =>
      task.id === id ? { ...task, isDone: !task.isDone } : task
    )
  );
};

addTask("운동하기");
toggleTask(1);
console.log(todoList);

function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
} // 나머지 매개변수(이전 과정 4.5절)
const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = [...arr1, ...arr2]; // 전개 구문(지금 배운 것)
console.log(sum(1, 2, 3), combined);
