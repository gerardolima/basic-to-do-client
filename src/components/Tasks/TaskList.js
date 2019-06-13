import React from 'react';
import PropTypes from 'prop-types';

import { taskShape } from '../../models';

/**
 * Renders a list of tasks
 *
 * @param {Object} props - react props
 * @param {Object[]} props.tasks
 */
export const TaskList = ({ tasks }) =>
  <div className='TaskList'>
    <ul>
    {tasks.map(task =>
      <li>
        {JSON.stringify(task)}
      </li>
    )}
    </ul>
    <div>
      ({JSON.stringify(tasks.length)}) tasks
    </div>
  </div>;

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(taskShape).isRequired,
}
