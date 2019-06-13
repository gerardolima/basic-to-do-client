import React from 'react';
import PropTypes from 'prop-types';

import { taskShape } from '../../models';

/**
 * Task CRUD
 *
 * @param {Object} props - react props
 * @param {Object[]} props.tasks
 */
const Tasks = ({ tasks }) =>
  <section className='Tasks'>
    <h2>Tasks</h2>

    <button name='create'>create</button>
    <div className='createTask'>
    </div>
  </section>;

Tasks.propTypes = {
  tasks: PropTypes.arrayOf(taskShape).isRequired,
}

export default Tasks;
