import { PET_API_BASE } from "../constants";
import { deletePet } from "../constants/pet";
import { createAction } from "redux-api-middleware";

export const deletePetAction = (petId) => {
  const meta = {
    method: "DELETE",
    headers: { 'Content-Type': 'application/json;charset=UTF-8' },
    endpoint: `${PET_API_BASE}/${petId}`,
  };
  return createAction({
    endpoint: meta.endpoint,
    types: [
      { type: deletePet.DELETE_PET, meta },
      { type: deletePet.DELETE_PET_SUCCESS, meta },
      { type: deletePet.DELETE_PET_FAILURE, meta },
    ],
    method: meta.method,
    headers: meta.headers,
    credentials: "include",
  });
};
