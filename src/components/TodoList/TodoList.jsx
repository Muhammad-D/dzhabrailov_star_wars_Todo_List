import React from "react";
import TodoItem from "./TodoItem/TodoItem";
import "./TodoList.css";

const TodoList = ({ todos }) => {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </ul>
  );
};

export default TodoList;
