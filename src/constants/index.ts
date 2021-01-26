import { LoadingConstants } from "./loading";
import { TodoListConstants } from "./todoList";

type IActionType =
  | TodoListConstants.ADD_TASK
  | TodoListConstants.DELETE_TASK
  | TodoListConstants.GET_TODOS
  | TodoListConstants.ON_LOAD
  | TodoListConstants.TOGGLE_TASK
  | LoadingConstants.IS_LOADING;

export type { IActionType };
