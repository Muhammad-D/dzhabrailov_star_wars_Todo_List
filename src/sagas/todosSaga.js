import { call, put, take } from "redux-saga/effects";
import { todosAPI } from "../api/index";
import { getState } from "../action/actions-creaters/todo-list";
import { isLoading } from "../action/actions-creaters/loading";
import { TodoListConstants } from "../constants/todoList";

function* fetchTodos() {
  try {
    yield put(isLoading(true));
    const todos = yield call(todosAPI);
    yield put(getState(todos));
    yield put(isLoading(false));
  } catch (e) {}
}

export default function* getTodos() {
  yield take(TodoListConstants.ON_LOAD);
  yield call(fetchTodos);
}
