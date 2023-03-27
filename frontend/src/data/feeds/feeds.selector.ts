import { createSelector } from "reselect";
import { Feeds } from "../../models/Feeds";
import { AppState } from "../store";


const getFeeds = (state: AppState) => state.data.feeds;
const getIdParam = (_state: AppState, props: any) => {
  return props.match.params['id'];
}
export const getFeed = createSelector(getFeeds, getIdParam, (feeds, id) => feeds.find((x: Feeds) => x.id === id));
