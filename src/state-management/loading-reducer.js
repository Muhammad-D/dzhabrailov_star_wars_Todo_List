import { Constants } from "../constants/loading";

const initialState = false;

const loadingReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case Constants.IS_LOADING:
      return payload;
    default:
      return state;
  }
};

export default loadingReducer;
