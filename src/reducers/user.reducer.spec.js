import {UserActions} from '../actions'
import userReducer from './user.reducer';

describe('user reducer', () => {

  it('handles initial state', () => {
    expect(
      userReducer(undefined, {})
    ).toEqual({})
  })

  it(`handles ${UserActions.USER_SIGNUP}`, () => {
    let state = {};
    state = userReducer(state, {
      type: UserActions.USER_SIGNUP,
      value: { username: 'the-username', password: 'the-password' }
    });

    expect(state).toEqual({ username: 'the-username' });
  });

  it(`handles ${UserActions.USER_LOGIN}`, () => {
    let state = {};
    state = userReducer(state, {
      type: UserActions.USER_LOGIN,
      value: { username: 'the-username', password: 'the-password' }
    });

    expect(state).toEqual({ username: 'the-username' });
  });

  it(`handles ${UserActions.TASK_DELETE}`, () => {
    let state = { username: 'the-username' };
    state = userReducer(state, {
      type: UserActions.USER_SIGNUP,
      value: { }
    });

    expect(state).toEqual({  });
  });
});
