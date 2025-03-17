import { useEffect, useState } from "react";
import { getTodos, deleteTodo } from "../api";

const TodoList = ({ token }) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const { data } = await getTodos(token);
      setTodos(data);
    };
    fetchTodos();
  }, [token]);

  const handleDelete = async (id) => {
    await deleteTodo(id, token);
    setTodos(todos.filter(todo => todo._id !== id));
  };

  return (
    <ul>
      {todos.map(todo => (
        <li key={todo._id}>
          {todo.title} <button onClick={() => handleDelete(todo._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;