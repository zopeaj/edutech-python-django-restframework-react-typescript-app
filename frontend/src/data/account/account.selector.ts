import { createSelector } from "reselect";
import { Account } from "../../models/Account";
import { AppState } from "../store";

const getAccount = (state: AppState) => {
  return state.account
};

