import { Constants } from "../constants/index";

const initialState = {
  todoList: [],
};

const todoListReducer = (state = initialState, action) => {
  switch (action.type) {
    case Constants.GET_TODOS:
      return { ...state, todoList: action.payload };
    case Constants.ADD_TASK:
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

    case Constants.TOGGLE_TASK:
      return {
        ...state,
        todoList: state.todoList.map((todo) => {
          if (todo.id === action.payload) {
            return { ...todo, taskStatus: !todo.taskStatus };
          } else {
            return todo;
          }
        }),
      };
    case Constants.DELETE_TASK:
      return {
        ...state,
        todoList: state.todoList.filter((todo) => todo.id !== action.payload),
      };
    default:
      return state;
  }
};

export default todoListReducer;
