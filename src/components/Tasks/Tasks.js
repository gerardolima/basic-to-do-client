import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { taskShape } from '../../models';
import { TaskList } from './TaskList';

/**
 * Task CRUD
 *
 * @param {Object} props - react props
 * @param {Object[]} props.tasks
 */
export const Tasks = ({ tasks }) => {
  const [context, setContext] = useState({mode:'list'});

  useEffect(() => {
   // document.title = `You clicked ${count} times`;
  });

  const onCancelEdit = (ev) => { ev.preventDefault(); setContext({mode: 'list'}); }
  const onCreateTask = (ev) => { ev.preventDefault(); setContext({mode: 'create'}); }
  const onEditTask   = (ev, task) => { ev.preventDefault(); setContext({mode: 'edit', task}); }
  const onDeleteTask = (ev, task) => { ev.preventDefault(); setContext({mode: 'delete', task}); }

  return (
    <section className='Tasks'>
      <h2>Tasks</h2>

      { context.mode === 'list'
        ? <TaskList
            tasks={tasks}
            onCreateTask={onCreateTask}
            onEditTask={onEditTask}
            onDeleteTask={onDeleteTask}
          />
        : <div>
            TODO: edit component here <br />
            <button name='cancelEdit' onClick={(ev) => onCancelEdit(ev)}>Cancel</button>
          </div>
      }
      <div>{ JSON.stringify(context)}</div>
    </section>
  );
}

Tasks.propTypes = {
  tasks: PropTypes.arrayOf(taskShape).isRequired
}
