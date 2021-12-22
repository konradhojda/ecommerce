import { createAction } from "redux-actions";
import { IUserLoginState } from "./userLoginState";

const prefix = "userLogin";

export interface USER_SIGNIN_SUCCESS extends IUserLoginState {}

export interface USER_SIGNIN_REQUEST {
  loading: boolean;
}

export type ActionTypes = string & USER_SIGNIN_SUCCESS;

export const ActionNames = {
  USER_SIGNIN_REQUEST: `[${prefix}] USER_SIGNIN_REQUEST`,
  USER_SIGNIN_SUCCESS: `[${prefix}] USER_SIGNIN_SUCCESS`,
  USER_SIGNIN_FAIL: `[${prefix}] USER_SIGNIN_FAIL`,
  USER_LOGOUT: `[${prefix}] USER_LOGOUT`,
};

export const USER_SIGNIN_REQUEST = createAction(
  ActionNames.USER_SIGNIN_REQUEST
);

export const USER_SIGNIN_SUCCESS = createAction<USER_SIGNIN_SUCCESS>(
  ActionNames.USER_SIGNIN_SUCCESS
);

export const USER_SIGNIN_FAIL = createAction(ActionNames.USER_SIGNIN_FAIL);
export const USER_LOGOUT = createAction(ActionNames.USER_LOGOUT);
