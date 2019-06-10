/**
 * Constants for the types of Task related actions
 */
export const TaskActions = {
  TASK_CREATE: 'TASK_CREATE',
  TASK_EDIT: 'TASK_EDIT',
  TASK_DELETE: 'TASK_DELETE'
};

/**
 * Create a Task
 * @param {string} title
 * @param {string} description
 * @param {string} owner
 */
export const createTask = (title, description, owner) => ({
  type: TaskActions.TASK_CREATE,
  value: {
    title,
    description,
    owner
  }
});

/**
 * Edit a Task
 * @param {string} id
 * @param {string} title
 * @param {string} description
 * @param {string} owner
 */
export const editTask = (id, title, description, owner) => ({
  type: TaskActions.TASK_EDIT,
  value: {
    id,
    title,
    description,
    owner
  }
});

/**
 * Delete a Task
 * @param {string} id
 */
export const deleteTask = id => ({
  type: TaskActions.TASK_DELETE,
  value: {
    id
  }
});
