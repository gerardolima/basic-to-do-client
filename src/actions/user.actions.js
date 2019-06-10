/**
 * Constants for the types of Task related actions
 */
export const UserActions = {
  USER_SIGNUP: 'USER_SIGNUP',
  USER_LOGIN: 'USER_LOGIN',
  USER_LOGOUT: 'USER_LOGOUT'
};

/**
 * Sign-up an user
 * @param {string} username
 * @param {string} password
 */
export const signupUser = (username, password) => ({
  type: UserActions.USER_SIGNUP,
  value: {
    username,
    password
  }
});

/**
 * Edit a Task
 * @param {string} id
 * @param {string} title
 * @param {string} description
 * @param {string} owner
 */
export const loginUser = (username, password) => ({
  type: UserActions.USER_LOGIN,
  value: {
    username,
    password
  }
});

/**
 * Delete a Task
 * @param {string} id
 */
export const logoutUser = () => ({
  type: UserActions.USER_LOGOUT,
  value: {
  }
});
