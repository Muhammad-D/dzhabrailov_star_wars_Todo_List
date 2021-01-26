import React from "react";
import { ITodo } from "../../state-management/types/todo-list-reducer-type";
import TodoItem from "./TodoItem/TodoItem";
import "./TodoList.css";

const TodoList: React.FC<{ todos: ITodo[] }> = ({ todos }) => {
  return (
    <ul className="todo-list">
      {todos.map((todo: ITodo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </ul>
  );
};

export default TodoList;
