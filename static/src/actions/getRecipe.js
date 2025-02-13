import { FEEDER_API_BASE } from "../constants";
import { getRecipe } from "../constants/feeder";
import { createAction } from "redux-api-middleware";

export const getRecipeAction = (deviceId) => {
  const meta = {
    method: "GET",
    headers: { 'Content-Type': 'application/json;charset=UTF-8' },
    endpoint: `${FEEDER_API_BASE}/${deviceId}/recipe`,
    deviceId,
  };
  return createAction({
    endpoint: meta.endpoint,
    types: [
      { type: getRecipe.GET_RECIPE, meta },
      { type: getRecipe.GET_RECIPE_SUCCESS, meta },
      { type: getRecipe.GET_RECIPE_FAILURE, meta },
    ],
    method: meta.method,
    headers: meta.headers,
    credentials: "include",
  });
};
