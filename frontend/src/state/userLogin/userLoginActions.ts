import { createAction } from "redux-actions";
import { IUserLoginState } from "./userLoginState";

const prefix = "userLogin";

export interface FETCH_USER_TOKEN {
  email: string;
  password: string;
}

export type ActionTypes = FETCH_USER_TOKEN;

export const ActionNames = {
  FETCH_USER_TOKEN: "",
  STORE_LOGIN_TOKEN: "",
};

export const STORE_LOGIN_TOKEN = createAction<FETCH_USER_TOKEN>(
  ActionNames.FETCH_USER_TOKEN
);
