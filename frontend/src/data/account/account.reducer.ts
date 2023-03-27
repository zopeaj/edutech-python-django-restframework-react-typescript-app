import { UserActions } from "./account.actions";
import { UserState } from "./account.state";

export function accountReducer(state: UserState, action: UserActions): UserState {
   switch(action.type) {
     case 'set-user-loading':
       return { ...state, loading: action.isLoading };
     case 'set-user-data':
       return { ...state, ...action.data };
     case 'set-username':
       return { ...state, username: action.username };
     case 'set-is-loggedin':
       return { ...state, isLoggedIn: action.loggedIn };
   }
}
