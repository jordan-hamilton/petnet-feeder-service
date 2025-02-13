import { FEEDER_API_BASE } from "../constants";
import { setHopperLevel } from "../constants/feeder";
import { createAction } from "redux-api-middleware";

export const setHopperLevelAction = (deviceId, level) => {
  const body = JSON.stringify({
    level,
  });
  const meta = {
    method: "POST",
    headers: { 'Content-Type': 'application/json;charset=UTF-8' },
    endpoint: `${FEEDER_API_BASE}/${deviceId}/hopper`,
    body,
  };
  return createAction({
    endpoint: meta.endpoint,
    types: [
      { type: setHopperLevel.SET_HOPPER_LEVEL, meta },
      { type: setHopperLevel.SET_HOPPER_LEVEL_SUCCESS, meta },
      { type: setHopperLevel.SET_HOPPER_LEVEL_FAILURE, meta },
    ],
    method: meta.method,
    headers: meta.headers,
    credentials: "include",
    body,
  });
};
