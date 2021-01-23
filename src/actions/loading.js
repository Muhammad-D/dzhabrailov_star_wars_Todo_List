import { Constants } from "../constants/loading";

const isLoading = (loadingStatus) => ({
  type: Constants.IS_LOADING,
  payload: loadingStatus,
});

export { isLoading };
