import { FeedActions } from "./feeds.actions";
import { FeedsState } from "./feeds.state";

export function feedReducer(state: FeedsState, action: FeedActions): FeedsState {
    switch (action.type) {
      case 'set-feed-loading':
        return { ...state, loading: action.loading };
      case 'set-feed-data':
        return { ...state, ...action.data };
      case 'set-feed-status':
        return { ...state, status: action.status };
    }
}
