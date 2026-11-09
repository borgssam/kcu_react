// arrow.js
const double = (num) => num * 2;
const greet = (name) => `안녕, ${name}!`; // 2.8절 템플릿 리터럴과 함께

console.log(double(5)); // 10
console.log(greet("보그쌤")); // 안녕, 보그쌤!

// 이벤트 핸들러 흉내 내기: 함수를 "넘겨두었다가" 나중에 실행한다
const handleClick = () => console.log("클릭됨");
const fakeButton = { onClick: handleClick };
fakeButton.onClick(); // 클릭됨

// this 비교: 일반 함수 vs 화살표 함수
const timer = {
  name: "타이머",
  startWithFunction() {
    setTimeout(function () {
      console.log("일반 함수:", this.name);
    }, 0);
  },
  startWithArrow() {
    setTimeout(() => {
      console.log("화살표 함수:", this.name);
    }, 0);
  },
};

timer.startWithFunction(); // 일반 함수: undefined
timer.startWithArrow(); // 화살표 함수: 타이머
