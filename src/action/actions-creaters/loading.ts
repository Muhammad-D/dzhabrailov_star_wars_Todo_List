import { LoadingConstants } from "../../constants/loading";
import { IIsLoadingAction } from "../actions";

const isLoading = (loadingStatus: boolean): IIsLoadingAction => ({
  type: LoadingConstants.IS_LOADING,
  payload: loadingStatus,
});

export { isLoading };
