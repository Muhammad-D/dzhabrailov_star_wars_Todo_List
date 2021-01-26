import { TodoListConstants } from "../../constants/todoList";
import { ITodo } from "../../state-management/types/todo-list-reducer-type";
import {
  IAddTaskAction,
  IDeleteTaskAction,
  IGetStateAction,
  IOnLoadAction,
  IToggleTaskAction,
} from "../actions";

export const onLoad = (): IOnLoadAction => ({
  type: TodoListConstants.ON_LOAD,
});

export const getState = (todos: ITodo[]): IGetStateAction => ({
  type: TodoListConstants.GET_TODOS,
  payload: todos,
});
export const addTask = (todoTitle: string): IAddTaskAction => ({
  type: TodoListConstants.ADD_TASK,
  payload: todoTitle,
});
export const toggleTask = (id: number): IToggleTaskAction => ({
  type: TodoListConstants.TOGGLE_TASK,
  payload: { id },
});
export const deleteTask = (id: number): IDeleteTaskAction => ({
  type: TodoListConstants.DELETE_TASK,
  payload: {
    id,
  },
});
