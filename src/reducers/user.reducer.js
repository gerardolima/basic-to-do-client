import { UserActions } from '../actions';

/**
 * Handle the changes in state made by user actions.
 * @param {*} state previous state
 * @param {{type:string, value:object}} action
 */
const userReducer = (state = {}, action) => {
  switch (action.type)
  {
    case UserActions.USER_SIGNUP:
      return { username: action.value.username };

    case UserActions.USER_LOGIN:
      return { username: action.value.username };

    case UserActions.USER_LOGOUT:
          return { };

    default:
      return state
  }
};

export default userReducer;
