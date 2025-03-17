import { useState } from "react";
import { addTodo } from "../api";

const TodoForm = ({ token, onAdd }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await addTodo({ title }, token);
    onAdd(data);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="New Todo" value={title} onChange={(e) => setTitle(e.target.value)} />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;