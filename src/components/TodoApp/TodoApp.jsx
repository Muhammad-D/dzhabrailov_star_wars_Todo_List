import React, { useEffect, useState } from "react";
import "./TodoApp.scss";
import { connect } from "react-redux";

//components
import TodoList from "../TodoList/TodoList";

//action creaters
import { addTask, onLoad } from "../../actions/index";
import Loading from "../Loading/Loading";

const TodoApp = ({ addTask, todoList, onLoad, isLoading }) => {
  window.props = { addTask, todoList };

  const [todoTitle, setTodoTitle] = useState("");

  useEffect(() => {
    onLoad();
  }, []);

  const addTodo = (e) => {
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

const mapStateToProps = (state) => ({
  todoList: state.todoListReducer.todoList,
  isLoading: state.loadingReducer,
});

export default connect(mapStateToProps, { addTask, onLoad })(TodoApp);
