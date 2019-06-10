import * as actions from './user.actions'

describe('task actions', () => {

  it('signupUser should create TASK_CREATE action', () => {
    expect(actions.signupUser('the-username', 'the-password')
    ).toEqual({
      type: actions.UserActions.USER_SIGNUP,
      value: {
        username: 'the-username',
        password: 'the-password'
      }
    })
  });

  it('editTask should create TASK_CREATE action', () => {
    expect(actions.loginUser('the-username', 'the-password')
    ).toEqual({
      type: actions.UserActions.USER_LOGIN,
      value: {
        username: 'the-username',
        password: 'the-password'
      }
    })
  });

  it('createTask should create TASK_CREATE action', () => {
    expect(actions.logoutUser()
    ).toEqual({
      type: actions.UserActions.USER_LOGOUT,
      value: {
      }
    })
  });


})
