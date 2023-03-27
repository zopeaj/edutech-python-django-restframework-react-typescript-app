import { combineReducers } from './combinedReducers';
import { accountReducer } from './account/account.reducer';
import { feedsReducer } from './feeds/feeds.reducer';

export const initialState: AppState = {
  data: {
    feeds: [],
  },
  account: {
    username: '',
    isLoggedIn: false,
    loading: false
  }
};


export const reducers = combineReducers({
  account: accountReducer,
  feeds: feedsReducer
});

export type AppState = ReturnType<typeof reducers>
