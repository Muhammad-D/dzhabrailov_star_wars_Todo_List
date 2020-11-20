import React, { useEffect, useReducer, useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList/TodoList";
import { Context } from "./Context";
import mainReduser, { addTask, getState } from "./main-reduser";
import { db } from "./firebase";

function App() {
  const [todoTitle, setTodoTitle] = useState("");
  const [state, dispatch] = useReducer(mainReduser, [""]);

  useEffect(() => {
    db.collection("star_wars")
      .doc("todos")
      .get()
      .then((doc) => {
        if (doc.exists) {
          dispatch(
            getState(Object.keys(doc.data()).map((key) => doc.data()[key]))
          );
        }
      });
  }, []);

  useEffect(() => {
    if (state["0"] !== "") {
      db.collection("star_wars")
        .doc("todos")
        .set({
          ...state,
        });
    }
  }, [state]);

  const addTodo = (e) => {
    if (e.key === "Enter") {
      dispatch(addTask(todoTitle));
      setTodoTitle("");
    }
  };

  return (
    <Context.Provider value={{ dispatch }}>
      <div className="app">
        <h1>TodoList</h1>
        <input
          className="app__inpit-field"
          placeholder="Enter your task"
          value={todoTitle}
          onChange={(e) => setTodoTitle(e.currentTarget.value)}
          onKeyPress={addTodo}
        />
        <div className="app__underline"></div>
        <TodoList todos={state} />
      </div>
    </Context.Provider>
  );
}

export default App;
