import * as actions from './task.actions'

describe('task actions', () => {

  it('createTask should create TASK_CREATE action', () => {
    expect(actions.createTask('the-title', 'the-description', 'the-owner')
    ).toEqual({
      type: actions.TaskActions.TASK_CREATE,
      value: {
        title: 'the-title',
        description: 'the-description',
        owner: 'the-owner'
      }
    })
  });

  it('editTask should create TASK_CREATE action', () => {
    expect(actions.editTask('the-id', 'the-title', 'the-description', 'the-owner')
    ).toEqual({
      type: actions.TaskActions.TASK_EDIT,
      value: {
        id: 'the-id',
        title: 'the-title',
        description: 'the-description',
        owner: 'the-owner'
      }
    })
  });

  it('createTask should create TASK_CREATE action', () => {
    expect(actions.deleteTask('the-id')
    ).toEqual({
      type: actions.TaskActions.TASK_DELETE,
      value: {
        id: 'the-id'
      }
    })
  });


})
