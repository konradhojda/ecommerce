import { Action, handleActions } from "redux-actions";
import { IUserLoginState } from "./userLoginState";
import {
  ActionNames,
  ActionTypes,
  USER_SIGNIN_SUCCESS,
} from "./userLoginActions";

const initialState = {
  id: "",
  name: "",
  email: "",
  isAdmin: false,
  token: "",
  loading: false,
  loginError: "",
};

const userLoginReducer = handleActions<IUserLoginState, ActionTypes>(
  {
    [ActionNames.USER_SIGNIN_REQUEST]: (state, action: Action<string>) => {
      return {
        ...state,
        loading: true,
      };
    },
    [ActionNames.USER_SIGNIN_SUCCESS]: (
      state,
      action: Action<USER_SIGNIN_SUCCESS>
    ) => {
      const data = action.payload;
      return {
        ...state,
        ...data,
        loading: false,
        error: "",
      };
    },
    [ActionNames.USER_SIGNIN_FAIL]: (state, action: Action<string>) => {
      return {
        ...state,
        loading: false,
        loginError: action.payload,
      };
    },
    [ActionNames.USER_LOGOUT]: (state, action: Action<string>) => {
      return {
        ...initialState,
      };
    },
  },
  initialState
);

export default userLoginReducer;
