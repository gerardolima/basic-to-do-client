import React, { useState, useEffect } from 'react';

import { TaskList } from './TaskList';

/**
 * Tasks section
 *
 * @param {Object} props - react props
 * @param {Object[]} props.tasks
 */
export const Tasks = () =>
{
  const [context, setContext] = useState({mode:'list'});

  useEffect(() => {
   // document.title = `You clicked ${count} times`;
  });

  const _onCancelEdit = (ev) => { ev.preventDefault(); setContext({mode: 'list'}); }
  const _onCreateTask = (ev) => { ev.preventDefault(); setContext({mode: 'create'}); }
  const _onEditTask   = (ev, task) => { ev.preventDefault(); setContext({mode: 'edit', task}); }
  const _onDeleteTask = (ev, task) => {
    if(!window.confirm('confirm deletion?')) return;
    alert('doDeleteTask');
  }

  return (
    <section className='Tasks'>
      <h2>Tasks</h2>

      { context.mode === 'list'
        ? <TaskList
            onCreateTask={_onCreateTask}
            onEditTask={_onEditTask}
            onDeleteTask={_onDeleteTask}
          />
        : <div>
            TODO: edit component here <br />
            <button name='cancelEdit' onClick={(ev) => _onCancelEdit(ev) }>Cancel</button>
          </div>
      }

    </section>
  );
}

