import React from 'react';
import PropTypes from 'prop-types'
import { TaskSection, UserSection } from '..';

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
      ? <TaskSection />
      : <UserSection />
    }
  </div>;

App.propTypes = {
  username: PropTypes.string
}

export default App;
