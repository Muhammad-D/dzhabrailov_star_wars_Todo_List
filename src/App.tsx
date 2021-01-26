import React from "react";
import { Provider } from "react-redux";
import "./App.scss";

import TodoApp from "./components/TodoApp/TodoApp";
import store from "./state-management/store";

const App = () => {
  return (
    <Provider store={store}>
      <TodoApp />
    </Provider>
  );
};

export default App;
