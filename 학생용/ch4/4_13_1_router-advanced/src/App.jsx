// src/App.jsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout.jsx";
import TaskListPage from "./pages/TaskListPage.jsx";
import TaskDetailPage from "./pages/TaskDetailPage.jsx";
import TaskNewPage from "./pages/TaskNewPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // 헤더·내비게이션을 포함한 공통 틀
    children: [
      { index: true, element: <TaskListPage /> }, // 주소가 "/" 그대로일 때
      { path: "tasks/:id", element: <TaskDetailPage /> },
      { path: "new", element: <TaskNewPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
