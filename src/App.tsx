import { initialStateType, actionType } from "./main-reduser-types";
import React, { Reducer, useEffect, useReducer, useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList/TodoList";
import { myContext } from "./Context";
import mainReduser, { addTask, getState } from "./main-reduser";
import { db } from "./firebase";

function App() {
  const [todoTitle, setTodoTitle] = useState<string>("");
  const [state, dispatch] = useReducer<Reducer<initialStateType, actionType>>(
    mainReduser,
    [{ id: 0, taskStatus: false, taskDescription: "" }]
  );

  useEffect(() => {
    db.collection("star_wars")
      .doc("todos")
      .get()
      .then((doc) => {
        if (doc.exists) {
          const keys: any = doc.data();
          dispatch(getState(Object.keys(keys).map((key) => keys[key])));
        }
      });
  }, []);

  useEffect(() => {
    if (state[0].id !== 0) {
      db.collection("star_wars")
        .doc("todos")
        .set({
          ...state,
        });
    }
  }, [state]);

  const addTodo = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") {
      dispatch(addTask(todoTitle));
      setTodoTitle("");
    }
  };

  return (
    <myContext.Provider value={{ dispatch }}>
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
    </myContext.Provider>
  );
}

export default App;
