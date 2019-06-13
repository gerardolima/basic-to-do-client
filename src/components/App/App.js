import React from 'react';
import useDataApi from 'use-data-api';

import { SignUser, Tasks } from '..';

/**
 * Application entry point
 */
export const App = () =>
{
  const [{ data: user, isLoading, isError}] = useDataApi('http://localhost:5000/api/loggedin', {username: 'nn'});

  return (
    <div>
      <header><h1>basic-task-client</h1></header>
      { user.username
        ? <Tasks />
        : <SignUser />
      }
      <div>user: {JSON.stringify({user, isLoading, isError})}</div>
    </div>
  );
};

export default App;
