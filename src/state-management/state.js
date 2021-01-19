import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import todoListReducer from "./todo-list-reduser";
import createSagaMiddleware from "redux-saga";
import mySaga from "./sagas/mySaga";

const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({ todoListReducer });

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleware)
  // other store enhancers if any
);

sagaMiddleware.run(mySaga);

const store = createStore(reducers, enhancer);
