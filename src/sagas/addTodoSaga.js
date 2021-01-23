import { call, put, select, takeEvery } from "redux-saga/effects";
import { addTodoAPI } from "../api/index";
import { Constants } from "../constants";
import { isLoading } from "../actions/loading";

const getTodoList = (state) => state.todoListReducer.todoList;

function* addTodos() {
  console.log(">>>>START");
  yield put(isLoading(true));
  const todoList = yield select(getTodoList);
  console.log(todoList);
  yield call(addTodoAPI, todoList);
  yield put(isLoading(false));
}

export default function* addTodosWatcher() {
  yield takeEvery(Constants.ADD_TASK, addTodos);
}
