import { FEEDER_API_BASE } from "../constants";
import { triggerFeeding } from "../constants/feeder";
import { createAction } from "redux-api-middleware";

export const triggerFeedingAction = (deviceId, portion) => {
  const body = JSON.stringify({
    portion,
  });

  const meta = {
    method: "POST",
    headers: { 'Content-Type': 'application/json;charset=UTF-8' },
    endpoint: `${FEEDER_API_BASE}/${deviceId}/feed`,
    body,
  };
  return createAction({
    endpoint: meta.endpoint,
    types: [
      { type: triggerFeeding.TRIGGER_FEED, meta },
      { type: triggerFeeding.TRIGGER_FEED_SUCCESS, meta },
      { type: triggerFeeding.TRIGGER_FEED_FAILURE, meta },
    ],
    method: meta.method,
    headers: meta.headers,
    credentials: "include",
    body,
  });
};
