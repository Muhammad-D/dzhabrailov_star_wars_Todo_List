import React from "react";
import { initialStateType } from "../../main-reduser-types";
import TodoItem from "./TodoItem/TodoItem";
import "./TodoList.css";

const TodoList: React.FC<{ todos: initialStateType }> = ({ todos }) => {
  if (todos[0].id === 0) return <h1>Loading...</h1>;
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </ul>
  );
};

export default TodoList;
