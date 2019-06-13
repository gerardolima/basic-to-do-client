import {TaskActions} from '../actions';

/**
 * Handle the changes in state made by task actions.
 * @param {*} state previous state
 * @param {{type:string, value:object}} action
 */
const taskReducer = (state = [], action = {}) => {
  switch (action.type)
  {
    case TaskActions.TASK_CREATE:
      const id = state.length;
      return [ ...state, {id, ...action.value}];

    case TaskActions.TASK_EDIT:
      return state.map(task => (task.id === action.value.id) ? {...task, ...action.value} : task);

    case TaskActions.TASK_DELETE:
          return state.filter(task => (task.id !== action.value.id));

    default:
      return state
  }
};

export default taskReducer;
