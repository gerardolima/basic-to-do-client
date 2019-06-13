/**
 * @module src/reducers
 * Exports the combination of the reducers.
 */

import { combineReducers } from 'redux';
import taskReducer from './task.reducer';
import userReducer from './user.reducer';

export default combineReducers({
  tasks: taskReducer,
  user: userReducer
})