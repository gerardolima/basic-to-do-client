import React from 'react';
import PropTypes from 'prop-types';
import { SignUser, Tasks } from '..';

/**
 * Application entry point
 *
 * @param {Object} props - react props
 * @param {string} props.username
 */
export const App = ({ username }) =>
  <div>
    <header><h1>basic-task-client</h1></header>
    { username
      ? <Tasks tasks={[]}/>
      : <SignUser />
    }
  </div>;

App.propTypes = {
  username: PropTypes.string
}

export default App;
