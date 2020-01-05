import { type } from "../actions/authentication";

const INITIAL_STATE = {};

function authentication(state = INITIAL_STATE, action) {
  switch (action.type) {
    case type.UPDATE_CREDENTIALS:
      return action.credentials;
    case type.LOGOUT:
      return INITIAL_STATE;
    default:
      return state;
  }
}

export default authentication;
