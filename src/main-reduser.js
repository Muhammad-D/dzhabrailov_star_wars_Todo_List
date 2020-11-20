const TOGGLE_TASK = "main-reducer/TOGGLE_TASK";
const DELETE_TASK = "main-reducer/DELETE_TASK";
const ADD_TASK = "main-reducer/ADD_TASK";
const GET_STATE = "main-reducer/GET_STATE";

export default (state, action) => {
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
      return state.map((todo) => {
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

export const getState = (state) => ({
  type: GET_STATE,
  payload: state,
});
export const addTask = (todoTitle) => ({
  type: ADD_TASK,
  payload: todoTitle,
});
export const toggleTask = (id) => ({
  type: TOGGLE_TASK,
  payload: id,
});
export const deleteTask = (id) => ({
  type: DELETE_TASK,
  payload: id,
});
