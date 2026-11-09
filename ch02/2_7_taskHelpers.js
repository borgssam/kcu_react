//일정 이름으로 정렬하기
export function sortTasks(tasks) {
  return [...tasks].sort((a,b) => b.title.localeCompare(a.title));
}

//완료한 일정 개수 구하기
export function countDone(tasks) {
  return tasks.filter(task => task.isDone).length;

}