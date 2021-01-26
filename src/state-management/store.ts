import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import todoListReducer from "./todo-list-reduser";
import loadingReducer from "./loading-reducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../sagas/index";

const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({ todoListReducer, loadingReducer });

export type RootState = ReturnType<typeof reducers>;

const composeEnhancers =
  typeof window === "object" &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));

const store = createStore(reducers, enhancer);

sagaMiddleware.run(rootSaga);

export default store;
