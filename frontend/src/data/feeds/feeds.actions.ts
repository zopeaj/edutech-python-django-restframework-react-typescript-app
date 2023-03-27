import { deleteFeedsById, getFeedsById } from "./api/feedApi";

import { ActionType } from "../../util/types";
import { FeedsState } from "./feeds.state";


export const setFeed = (data: Partial<FeedsState>) => ({
  type: 'set-feed-data',
  data,
} as const);

export const setLoading = (loading: boolean) => ({
  type: 'set-feed-loading',
  loading
} as const);


export const setStatus = (status: number) => ({
  type: 'set-feed-status',
  status
} as const);

export type FeedActions =
  | ActionType<typeof setFeed>
  | ActionType<typeof setLoading>
  | ActionType<typeof setStatus>
