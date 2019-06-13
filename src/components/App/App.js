import React from 'react';
import PropTypes from 'prop-types';

import { taskShape, userShape } from '../../models';
import { SignUser, Tasks } from '..';

/**
 * Application entry point
 *
 * @param {Object} props - react props
 * @param {*} props.user
 * @param {*} props.tasks
 */
export const App = ({ user, tasks }) =>
  <div>
    <header><h1>basic-task-client</h1></header>
    { user.username
      ? <Tasks tasks={tasks}/>
      : <SignUser />
    }
  </div>;

App.propTypes = {
  user: userShape,
  tasks: PropTypes.arrayOf(taskShape).isRequired,
}

export default App;
