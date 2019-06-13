import React from 'react';
import PropTypes from 'prop-types';

import { taskShape } from '../../models';

/**
 * Renders one task
 *
 * @param {Object} props - react props
 * @param {Object[]} props.task
 */
export const Task = ({ task, onEditTask, onDeleteTask }) => {
  const { title, description } = task; // _id
  return (
  <li className='Task'>
    <b>{title}</b><br/>
    <i>{description}</i><br/>
    <button name='editTask' onClick={(ev) => onEditTask(ev, task)}>edit</button>
    <button name='deleteTask' onClick={(ev) => onDeleteTask(ev, task)}>delete</button>
  </li>);
};

Task.propTypes = {
  task: taskShape.isRequired,
  onEditTask: PropTypes.func.isRequired,
  onDeleteTask: PropTypes.func.isRequired,
}
