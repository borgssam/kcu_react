// src/pages/TaskFormPage.jsx
import { Form } from "react-router-dom";

function TaskFormPage() {
  return (
    <Form method="post">
      <input name="title" placeholder="새 할 일" />
      <button type="submit">추가</button>
    </Form>
  );
}
export default TaskFormPage;
