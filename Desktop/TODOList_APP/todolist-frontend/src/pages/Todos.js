import { useState } from "react";
import TodoList from "../components/TodoList";
import TodoForm from "../components/TodoForm";

const Todos = ({ token }) => {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  return (
    <div>
      <h2>Todo List</h2>
      <TodoForm token={token} onAdd={addTodo} />
      <TodoList token={token} />
    </div>
  );
};

export default Todos;