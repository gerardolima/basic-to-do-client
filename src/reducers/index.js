/**
 * @module src/reducers
 * Exports the combination of the reducers.
 */

import { combineReducers } from 'redux';
import taskReducer from './task.reducer';

export default combineReducers({
  taskReducer
})