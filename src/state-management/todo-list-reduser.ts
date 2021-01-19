import React from "react";
import {
  TOGGLE_TASK,
  DELETE_TASK,
  ADD_TASK,
  GET_STATE,
  getStatePropsType,
  getStateReturnType,
  addTaskReturnType,
  toggleTaskReturnType,
  deleteTaskReturnType,
  initialStateType,
  actionType,
} from "./main-reduser-types";

const todoListReducer: React.Reducer<initialStateType, actionType> = (
  state,
  action
): any => {
  switch (action.type) {
    case GET_STATE:
      return action.payload;
    case ADD_TASK:
      return [
        ...state,
        {
          id: Date.now(),
          taskStatus: false,
          taskDescription: action.payload,
        },
      ];
    case TOGGLE_TASK:
      return state.map((todo: getStatePropsType) => {
        if (todo.id === action.payload) {
          return { ...todo, taskStatus: !todo.taskStatus };
        } else {
          return todo;
        }
      });
    case DELETE_TASK:
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
};

export default todoListReducer;

export const getState = (state: initialStateType): getStateReturnType => ({
  type: GET_STATE,
  payload: state,
});
export const addTask = (todoTitle: string): addTaskReturnType => ({
  type: ADD_TASK,
  payload: todoTitle,
});
export const toggleTask = (id: number): toggleTaskReturnType => ({
  type: TOGGLE_TASK,
  payload: id,
});
export const deleteTask = (id: number): deleteTaskReturnType => ({
  type: DELETE_TASK,
  payload: id,
});
