/**
 * @module src/reducers
 * Exports the combination of the reducers.
 */

import { combineReducers } from 'redux';
import userReducer from './user.reducer';

export default combineReducers({
  user: userReducer
})