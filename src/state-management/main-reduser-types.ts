export const TOGGLE_TASK: string = "main-reducer/TOGGLE_TASK";
export const DELETE_TASK: string = "main-reducer/DELETE_TASK";
export const ADD_TASK: string = "main-reducer/ADD_TASK";
export const GET_STATE: string = "main-reducer/GET_STATE";

export interface actionType {
  type:
    | typeof TOGGLE_TASK
    | typeof DELETE_TASK
    | typeof ADD_TASK
    | typeof GET_STATE;
  payload: initialStateType | string | number;
}

export interface getStatePropsType {
  id: number;
  taskStatus: boolean;
  taskDescription: string;
}
export interface getStateReturnType {
  payload: initialStateType;
  type: typeof GET_STATE;
}
export interface addTaskReturnType {
  payload: string;
  type: typeof ADD_TASK;
}
export interface toggleTaskReturnType {
  payload: number;
  type: typeof TOGGLE_TASK;
}
export interface toggleTaskReturnType {
  payload: number;
  type: typeof TOGGLE_TASK;
}
export interface deleteTaskReturnType {
  payload: number;
  type: typeof DELETE_TASK;
}

export type initialStateType = Array<getStatePropsType>;
