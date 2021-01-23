import { Constants } from "../constants/index";

export const onLoad = () => ({
  type: Constants.ON_LOAD,
});

export const getState = (todos) => ({
  type: Constants.GET_TODOS,
  payload: todos,
});
export const addTask = (todoTitle) => ({
  type: Constants.ADD_TASK,
  payload: todoTitle,
});
export const toggleTask = (id) => ({
  type: Constants.TOGGLE_TASK,
  payload: id,
});
export const deleteTask = (id) => ({
  type: Constants.DELETE_TASK,
  payload: id,
});
