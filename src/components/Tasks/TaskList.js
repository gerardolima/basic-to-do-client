import React from 'react';
import PropTypes from 'prop-types';

import { taskShape } from '../../models';
import { Task } from './Task';

/**
 * Renders a list of tasks
 *
 * @param {Object} props - react props
 * @param {Object[]} props.tasks
 */
export const TaskList = ({ tasks }) =>
  <div className='TaskList'>
    <dl>
      { tasks.map(task => <Task key={task._id} task={task}/>) }
    </dl>
    <div>({tasks.length}) tasks</div>
  </div>;

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(taskShape).isRequired,
}
