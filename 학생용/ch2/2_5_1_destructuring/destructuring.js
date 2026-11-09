// destructuring.js
const task = { id: 1, title: "리액트 공부하기", isDone: false };
const { title, isDone } = task; // 필요한 속성만 바로 변수로
console.log(title, isDone);

const [first, second] = ["공부하기", "운동하기"];
console.log(first, second);

// 매개변수에서 바로 구조 분해 + 기본값
function describeTask({ title, isDone = false }) {
  return `${title} - ${isDone ? "완료" : "진행 중"}`;
}
console.log(describeTask({ title: "운동하기", isDone: true }));
console.log(describeTask({ title: "독서하기" })); // isDone이 안 넘어오면 false로

// 배열을 돌려주는 함수 — useState도 이런 모양의 값을 돌려준다
function makeCounter(initialValue) {
  const setValue = (next) => console.log("새 값으로 바꾸기:", next);
  return [initialValue, setValue];
}
const [count, setCount] = makeCounter(0);
console.log("현재 값:", count);
setCount(count + 1);
