import { type } from '../actions/genres';

const INITIAL_STATE = {
  loading: false,
  error: undefined,
  data: [],
};

function genres(state = INITIAL_STATE, action) {
  switch (action.type) {
    case type.SET_GENRES:
      return {
        loading: false,
        error: undefined,
        data: action.data,
      };
    case type.LOADING_GENRES:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}

export default genres;
