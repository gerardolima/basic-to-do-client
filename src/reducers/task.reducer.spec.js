import {TaskActions} from '../actions'
import taskReducer from './task.reducer';

describe('task reducer', () => {

  it('handles initial state', () => {
    expect(
      taskReducer(undefined, {})
    ).toEqual([])
  })

  it(`handles ${TaskActions.TASK_CREATE}`, () => {
    let state = [];
    state = taskReducer(state, {
      type: TaskActions.TASK_CREATE,
      value: { title: 'the-title-0', description: 'the-description-0', owner: 'the-owner-0' }
    });
    state = taskReducer(state, {
      type: TaskActions.TASK_CREATE,
      value: { title: 'the-title-1', description: 'the-description-1', owner: 'the-owner-1' }
    });

    expect(state).toEqual([
      { id:0, title: 'the-title-0', description: 'the-description-0', owner: 'the-owner-0' },
      { id:1, title: 'the-title-1', description: 'the-description-1', owner: 'the-owner-1' }
    ]);
  });

  it(`handles ${TaskActions.TASK_EDIT}`, () => {
    let state = [];
    state = taskReducer(state, {
      type: TaskActions.TASK_CREATE,
      value: { title: 'the-title-0', description: 'the-description-0', owner: 'the-owner-0' }
    });
    state = taskReducer(state, {
      type: TaskActions.TASK_EDIT,
      value: { id:0, title: 'the-new-title-0', description: 'the-new-description-0', owner: 'the-new-owner-0' }
    });

    expect(state).toEqual([
      { id:0, title: 'the-new-title-0', description: 'the-new-description-0', owner: 'the-new-owner-0' }
    ]);
  });

  it(`handles ${TaskActions.TASK_DELETE}`, () => {
    let state = [];
    state = taskReducer(state, {
      type: TaskActions.TASK_CREATE,
      value: { title: 'the-title-0', description: 'the-description-0', owner: 'the-owner-0' }
    });
    state = taskReducer(state, {
      type: TaskActions.TASK_DELETE,
      value: { id:0 }
    });

    expect(state).toEqual([]);
  });
});
