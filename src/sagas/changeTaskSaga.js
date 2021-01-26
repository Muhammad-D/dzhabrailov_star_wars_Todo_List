import { call, put, select, takeEvery } from "redux-saga/effects";
import { isLoading } from "../action/actions-creaters/loading";
import { addTodoAPI } from "../api";
import { TodoListConstants } from "../constants/todoList";

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
  yield takeEvery(TodoListConstants.TOGGLE_TASK, toggleTaskWorker);
  yield takeEvery(TodoListConstants.DELETE_TASK, deleteTaskWorker);
}
