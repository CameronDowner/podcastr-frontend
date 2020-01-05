import { combineReducers } from 'redux';

import authentication from './authentication';
import genres from './genres';

const app = combineReducers({
  authentication,
  genres,
});

export default app;
