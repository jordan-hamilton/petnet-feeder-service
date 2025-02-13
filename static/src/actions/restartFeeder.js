import { FEEDER_API_BASE } from "../constants";
import { restartFeeder } from "../constants/feeder";
import { createAction } from "redux-api-middleware";

export const restartFeederAction = (deviceId) => {
  const meta = {
    method: "POST",
    headers: { 'Content-Type': 'application/json;charset=UTF-8' },
    endpoint: `${FEEDER_API_BASE}/${deviceId}/restart`,
  };
  return createAction({
    endpoint: meta.endpoint,
    types: [
      { type: restartFeeder.RESTART_FEEDER, meta },
      { type: restartFeeder.RESTART_FEEDER_SUCCESS, meta },
      { type: restartFeeder.RESTART_FEEDER_FAILURE, meta },
    ],
    method: meta.method,
    headers: meta.headers,
    credentials: "include",
  });
};
