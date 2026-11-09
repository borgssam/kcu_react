// taskHelpers.js
export function sortTasks(tasks) {
  return [...tasks].sort((a, b) => a.title.localeCompare(b.title));
}
export function countDone(tasks) {
  return tasks.filter((task) => task.isDone).length;
}
