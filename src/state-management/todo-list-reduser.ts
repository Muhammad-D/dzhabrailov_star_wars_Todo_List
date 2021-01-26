import { TaskActionTypes } from "../action/actions";
import { TodoListConstants } from "../constants/todoList";
import { IInitialState } from "./types/todo-list-reducer-type";
const initialState = {
  todoList: [],
};

const todoListReducer = (
  state: IInitialState = initialState,
  action: TaskActionTypes
): IInitialState => {
  switch (action.type) {
    case TodoListConstants.GET_TODOS:
      return { ...state, todoList: action.payload };
    case TodoListConstants.ADD_TASK:
      return {
        ...state,
        todoList: [
          ...state.todoList,
          {
            id: Date.now(),
            taskStatus: false,
            taskDescription: action.payload,
          },
        ],
      };

    case TodoListConstants.TOGGLE_TASK:
      return {
        ...state,
        todoList: state.todoList.map((todo) => {
          if (todo.id === action.payload.id) {
            return { ...todo, taskStatus: !todo.taskStatus };
          } else {
            return todo;
          }
        }),
      };
    case TodoListConstants.DELETE_TASK:
      return {
        ...state,
        todoList: state.todoList.filter(
          (todo) => todo.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};

export default todoListReducer;
