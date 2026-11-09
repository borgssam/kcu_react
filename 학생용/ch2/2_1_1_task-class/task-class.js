// task-class.js
class Task {
  constructor(title, isDone = false) {
    this.title = title;
    this.isDone = isDone;
  }

  toggle() {
    this.isDone = !this.isDone;
  }
}

const task1 = new Task("리액트 공부하기");
task1.toggle();
console.log(task1.isDone); // true

// 일반 객체 — 하나씩 직접 만듦
const task = { title: "공부하기", isDone: false };

// 클래스 — 같은 모양의 객체를 반복해서 찍어낼 수 있음
const task2 = new Task("운동하기");
const task3 = new Task("독서하기");

console.log(task);
console.log(task2);
console.log(task3);

class UrgentTask extends Task {
  constructor(title) {
    super(title); // 부모 클래스(Task)의 constructor를 먼저 실행
    this.priority = "high";
  }
}

const urgent = new UrgentTask("과제 제출하기");
urgent.toggle(); // 부모 클래스(Task)의 메서드를 그대로 쓸 수 있다
console.log(urgent);
