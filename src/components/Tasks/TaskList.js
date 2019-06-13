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
export const TaskList = ({ tasks, onCreateTask, onEditTask, onDeleteTask}) =>
  <div className='TaskList'>
      <button name='createTask' onClick={(ev) => onCreateTask(ev)}>create a new task</button>
    <ul>
      { tasks.map(task => <Task
          key={task._id}
          task={task}
          onEditTask={onEditTask}
          onDeleteTask={onDeleteTask}
        />)
      }
    </ul>
    <div>({tasks.length}) tasks</div>
  </div>;

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(taskShape).isRequired,
  onCreateTask: PropTypes.func.isRequired,
  onEditTask: PropTypes.func.isRequired,
  onDeleteTask: PropTypes.func.isRequired,
}
