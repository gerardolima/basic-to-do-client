import React from 'react';
import PropTypes from 'prop-types';
import useDataApi from 'use-data-api';

import { Task } from './Task';

/**
 * Renders a list of tasks
 *
 * @param {Object} props - react props
 */
export const TaskList = ({ onCreateTask, onEditTask, onDeleteTask}) =>
{
  const [{ data: tasks, isLoading, isError}] = useDataApi('http://localhost:5000/api/tasks', []);

  return (
    <div className='TaskList'>
        <button name='createTask' onClick={(ev) => onCreateTask(ev)}>create a new task</button>
      <ul>
        { isLoading ? <div>Loading...</div>
          : isError ? <div>An error happened</div>
          : tasks.map(task => <Task
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
