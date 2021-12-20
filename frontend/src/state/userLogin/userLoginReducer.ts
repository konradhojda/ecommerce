import { Action, handleActions } from "redux-actions";
import { IUserLoginState } from "./userLoginState";
import { ActionNames, ActionTypes, FETCH_USER_TOKEN } from "./userLoginActions";

const initialState = {
  id: "",
  name: "",
  email: "",
  isAdmin: false,
  token: "",
};

const userLoginReducer = handleActions<IUserLoginState, ActionTypes>(
  {
    [ActionNames.FETCH_USER_TOKEN]: (
      state,
      action: Action<FETCH_USER_TOKEN>
    ) => {
      return {
        ...state,
      };
    },
  },
  initialState
);

export default userLoginReducer;
