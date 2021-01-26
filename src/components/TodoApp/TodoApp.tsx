import React, { useEffect, useState } from "react";
import "./TodoApp.scss";
import { connect } from "react-redux";

//components
import TodoList from "../TodoList/TodoList";

//action creaters
import { addTask, onLoad } from "../../action/actions-creaters/todo-list";
import Loading from "../Loading/Loading";
import { ITodo } from "../../state-management/types/todo-list-reducer-type";

// imported types

import { RootState } from "../../state-management/store";

//types
interface ITodoApp {
  isLoading: boolean;
  todoList: ITodo[];
  addTask: (todoTitle: string) => void;
  onLoad: () => void;
}

const TodoApp: React.FC<ITodoApp> = ({
  addTask,
  onLoad,
  todoList,
  isLoading,
}) => {
  const [todoTitle, setTodoTitle] = useState<string>("");

  useEffect(() => {
    onLoad();
  }, []);

  const addTodo = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") {
      addTask(todoTitle);
      setTodoTitle("");
    }
  };

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="todo-app">
      <h1>TodoList</h1>
      <input
        className="todo-app__inpit-field"
        placeholder="Enter your task"
        value={todoTitle}
        onChange={(e) => setTodoTitle(e.currentTarget.value)}
        onKeyPress={addTodo}
      />
      <div className="todo-app__underline"></div>
      <TodoList todos={todoList} />
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  todoList: state.todoListReducer.todoList,
  isLoading: state.loadingReducer,
});

export default connect(mapStateToProps, {
  addTask,
  onLoad,
})(TodoApp);
