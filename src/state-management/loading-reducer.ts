import { IIsLoadingAction } from "../action/actions";
import { LoadingConstants } from "../constants/loading";

const initialState: boolean = false;

const loadingReducer = (
  state: boolean = initialState,
  action: IIsLoadingAction
): boolean => {
  switch (action.type) {
    case LoadingConstants.IS_LOADING:
      return action.payload;
    default:
      return state;
  }
};

export default loadingReducer;
