// src/App.jsx
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import TaskListPage from "./pages/TaskListPage.jsx";
import TaskDetailPage from "./pages/TaskDetailPage.jsx";
import TaskFormPage from "./pages/TaskFormPage.jsx";
import {
  createTaskOnServer,
  fetchTaskById,
  fetchTasks,
} from "./data/taskApi.js";

async function taskLoader({ params }) {
  return fetchTaskById(params.id); // 페이지가 그려지기 전에 먼저 실행된다
}

async function addTaskAction({ request }) {
  const formData = await request.formData();
  const title = formData.get("title");
  await createTaskOnServer(title);
  return redirect("/");
}

const loading = <p>불러오는 중...</p>; // 처음 접속해 loader를 기다리는 동안 보여줄 화면

const router = createBrowserRouter([
  {
    path: "/",
    element: <TaskListPage />,
    loader: fetchTasks,
    hydrateFallbackElement: loading,
  },
  { path: "/tasks/new", element: <TaskFormPage />, action: addTaskAction },
  {
    path: "/tasks/:id",
    element: <TaskDetailPage />,
    loader: taskLoader,
    hydrateFallbackElement: loading,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
