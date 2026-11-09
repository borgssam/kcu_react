// src/App.jsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TaskListPage from "./pages/TaskListPage.jsx";
import TaskDetailPage from "./pages/TaskDetailPage.jsx";

const router = createBrowserRouter([
  { path: "/", element: <TaskListPage /> },
  { path: "/tasks/:id", element: <TaskDetailPage /> },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
