import React from 'react';

import { taskShape } from '../../models';

/**
 * Renders one task
 *
 * @param {Object} props - react props
 * @param {Object[]} props.task
 */
export const Task = ({ task }) => {
  const { _id, title, description } = task;
  return (
  <li className='Task'>
    <b>{title}</b><br />
    <i>{description}</i>
   {/* <i>{JSON.stringify(task)} {_id}</i> */}
  </li>);
};

Task.propTypes = {
  task: taskShape.isRequired,
}
