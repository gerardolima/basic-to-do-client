import React from 'react';
import PropTypes from 'prop-types';

import { taskShape } from '../../models';
import { TaskList } from './TaskList';

/**
 * Task CRUD
 *
 * @param {Object} props - react props
 * @param {Object[]} props.tasks
 */
export const Tasks = ({ tasks }) =>
  <section className='Tasks'>
    <h2>Tasks</h2>

    <a name='create' href='about:blank'>create a new task</a>
    <TaskList tasks={tasks} />
  </section>;

Tasks.propTypes = {
  tasks: PropTypes.arrayOf(taskShape).isRequired,
}
