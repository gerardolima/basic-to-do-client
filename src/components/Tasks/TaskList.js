import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import useDataApi from 'use-data-api';

import { Task } from './Task';

/**
 * Renders a list of tasks
 *
 * @param {Object} props - react props
 */
export const TaskList = ({ user, onCreateTask, onEditTask, afterSignUser}) =>
{
  const [{ data: tasks, isLoading, isError}, doFetch] = useDataApi('http://localhost:5000/api/tasks', []);

  const onLogOut = async () =>
  {
    const url ='http://localhost:5000/api/logout';
    await axios.post(url, {}, {withCredentials: true});

    // the API always resolves as success
    afterSignUser('logout');
  };

  const onDeleteTask = async (task) => {
    if(!window.confirm('confirm deletion?')) return;

    const url = 'http://localhost:5000/api/tasks/delete/' + task._id;

    const response = await axios.post(url, {}, {withCredentials: true});
    if(response.data.message) {
      // not success
      alert(response.data.message);
    }
    else {
      doFetch('http://localhost:5000/api/tasks?t=' + Date.now());
    }
  };

  return (
    <div className='TaskList'>
        <button name='createTask' onClick={(ev) => onCreateTask(ev)}>create a new task</button>
        <button name='logout' onClick={(ev) => onLogOut()}>log out</button> <br/>
      <ul>
        { isLoading ? <div>Loading...</div>
          : isError ? <div>An error happened</div>
          : tasks
              .filter(task => task.owner === user._id)
              .map(task => <Task
                key={task._id}
                task={task}
                onEditTask={onEditTask}
                onDeleteTask={onDeleteTask}
            />)
        }
      </ul>
      <div>({tasks.length}) tasks</div>
    </div>
  );
};

TaskList.propTypes = {
  onCreateTask: PropTypes.func.isRequired,
  onEditTask: PropTypes.func.isRequired,
  onDeleteTask: PropTypes.func.isRequired,
};
