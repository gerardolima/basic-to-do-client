import React from 'react';
import useDataApi from '../../use-data-api';

import { SignUser, Tasks } from '..';

/**
 * Application entry point
 */
export const App = () =>
{
  const [{ data: user, isLoading, isError}, doFetch] = useDataApi('http://localhost:5000/api/loggedin', {});

  // always rely on the endpoint to check if the current user is logged in
  const afterSignUser = (action) => {
    if (action=== 'logout') {
      window.location.reload(false);
    }
    else {
      doFetch('http://localhost:5000/api/loggedin/?t=' + Date.now());
    }
  }

  return (
    <div>
      <header><h1>basic-task-client</h1></header>
      { user.username
        ? <Tasks afterSignUser={afterSignUser} />
        : <SignUser afterSignUser={afterSignUser} />
      }
      <div>user: {JSON.stringify({user, isLoading, isError})}</div>
    </div>
  );
};

export default App;
