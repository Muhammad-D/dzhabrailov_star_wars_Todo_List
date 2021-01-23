import { call, put, select, takeEvery } from "redux-saga/effects";
import { isLoading } from "../actions/loading";
import { addTodoAPI } from "../api";
import { Constants } from "../constants";

const getTodoList = (state) => state.todoListReducer.todoList;

function* toggleTaskWorker({ payload }) {
  const todoList = yield select(getTodoList);
  yield call(addTodoAPI, todoList);
}
function* deleteTaskWorker({ payload }) {
  yield put(isLoading(true));
  const todoList = yield select(getTodoList);
  yield call(addTodoAPI, todoList);
  yield put(isLoading(false));
}

export default function* changeTaskWatcher() {
  yield takeEvery(Constants.TOGGLE_TASK, toggleTaskWorker);
  yield takeEvery(Constants.DELETE_TASK, deleteTaskWorker);
}
