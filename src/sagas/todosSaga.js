import { call, put, take } from "redux-saga/effects";
import { todosAPI } from "../api/index";
import { getState } from "../actions/index";
import { Constants } from "../constants";
import { isLoading } from "../actions/loading";

function* fetchTodos() {
  try {
    yield put(isLoading(true));
    const todos = yield call(todosAPI);
    yield put(getState(todos));
    yield put(isLoading(false));
  } catch (e) {}
}

export default function* getTodos() {
  yield take(Constants.ON_LOAD);
  yield call(fetchTodos);
}
