import { FEEDER_API_BASE } from "../constants";
import { getFeederTelemetry } from "../constants/feeder";
import { createAction } from "redux-api-middleware";

export const getFeederTelemetryAction = (deviceId) => {
  const meta = {
    method: "GET",
    headers: { 'Content-Type': 'application/json;charset=UTF-8' },
    endpoint: `${FEEDER_API_BASE}/${deviceId}/telemetry`,
  };
  return createAction({
    endpoint: meta.endpoint,
    types: [
      { type: getFeederTelemetry.GET_FEEDER_TELEMETRY, meta },
      { type: getFeederTelemetry.GET_FEEDER_TELEMETRY_SUCCESS, meta },
      { type: getFeederTelemetry.GET_FEEDER_TELEMETRY_FAILURE, meta },
    ],
    method: meta.method,
    headers: meta.headers,
    credentials: "include",
  });
};
