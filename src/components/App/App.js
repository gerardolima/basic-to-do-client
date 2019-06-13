import React from 'react';
import PropTypes from 'prop-types';

import { taskShape } from '../../models';
import { SignUser, Tasks } from '..';

/**
 * Application entry point
 *
 * @param {Object} props - react props
 * @param {string} props.username
 */
export const App = ({ username, tasks }) =>
  <div>
    <header><h1>basic-task-client</h1></header>
    { username
      ? <Tasks tasks={tasks}/>
      : <SignUser />
    }
  </div>;

App.propTypes = {
  username: PropTypes.string,
  tasks: PropTypes.arrayOf(taskShape).isRequired,
}

export default App;
