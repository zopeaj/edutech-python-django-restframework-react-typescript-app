import React from "react";
import { getUserData, setIsLoggedInData, setUsernameData } from "./api/accountApi";
import { ActionType } from "../../util/types";
import { UserState } from "./account.state";


export const loadUserData = (userData: any) => async (dispatch: React.Dispatch<any>) => {
  dispatch(setLoading(true));
  const data = await getUserData(userData);
  dispatch(setData(data));
  dispatch(setLoading(false));
}

export const setLoading = (isLoading: boolean) => ({
  type: 'set-user-loading',
  isLoading
} as const);

export const setData = (data: Partial<UserState>) => ({
  type: 'set-user-data',
  data,
} as const);

export const logoutUser = () => async (dispatch: React.Dispatch<any>) => {
  await setIsLoggedInData(false);
  dispatch(setUsernameData());
};

export const setIsLoggedIn = (loggedIn: boolean) => async (dispatch: React.Dispatch<any>) => {
  await setIsLoggedInData(loggedIn);
  return ({
    type: 'set-is-loggedin',
    loggedIn
  } as const);
};

export const setUsername = (username?: string) => async (dispatch: React.Dispatch<any>) => {
  await setUsernameData(username);
  return ({
    type: 'set-username',
    username
  } as const);
};


export type UserActions =
  | ActionType<typeof setLoading>
  | ActionType<typeof setData>
  | ActionType<typeof setIsLoggedIn>
  | ActionType<typeof setUsername>
