import React from 'react';

import { userShape } from '../../models';
import { SignUser, Tasks } from '..';

/**
 * Application entry point
 *
 * @param {Object} props - react props
 * @param {*} props.user
 * @param {*} props.tasks
 */
export const App = ({ user }) =>
  <div>
    <header><h1>basic-task-client</h1></header>
    { user.username
      ? <Tasks />
      : <SignUser />
    }
  </div>;

App.propTypes = {
  user: userShape,
}

export default App;
