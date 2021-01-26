import { LoadingConstants } from "../../constants/loading";
import { TodoListConstants } from "../../constants/todoList";
import { ITodo } from "../../state-management/types/todo-list-reducer-type";

interface IOnLoadAction {
  type: typeof TodoListConstants.ON_LOAD;
}

interface IGetStateAction {
  type: typeof TodoListConstants.GET_TODOS;
  payload: ITodo[];
}

interface IAddTaskAction {
  type: typeof TodoListConstants.ADD_TASK;
  payload: string;
}

interface IToggleTaskAction {
  type: typeof TodoListConstants.TOGGLE_TASK;
  payload: {
    id: number;
  };
}
interface IDeleteTaskAction {
  type: typeof TodoListConstants.DELETE_TASK;
  payload: {
    id: number;
  };
}

interface IIsLoadingAction {
  type: typeof LoadingConstants.IS_LOADING;
  payload: boolean;
}

type TaskActionTypes =
  | IGetStateAction
  | IAddTaskAction
  | IAddTaskAction
  | IDeleteTaskAction
  | IToggleTaskAction;

export type {
  IOnLoadAction,
  IGetStateAction,
  IAddTaskAction,
  IDeleteTaskAction,
  IToggleTaskAction,
  IIsLoadingAction,
  TaskActionTypes,
};
