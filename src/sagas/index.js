import { all } from "redux-saga/effects";
import addTodosWatcher from "./addTodoSaga";
import getTodos from "./todosSaga";
import changeTaskWatcher from "./changeTaskSaga";

export default function* rootSaga() {
  yield all([getTodos(), addTodosWatcher(), changeTaskWatcher()]);
}
