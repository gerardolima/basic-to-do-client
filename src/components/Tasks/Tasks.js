import React, { useState, useEffect } from 'react';

import { TaskList } from './TaskList';
import { TaskEdit } from './TaskEdit';

/**
 * Tasks section
 *
 * @param {Object} props - react props
 * @param {Object[]} props.tasks
 */
export const Tasks = ({user, afterSignUser}) =>
{
  const [context, setContext] = useState({mode:'list'});

  useEffect(() => {
   // document.title = `You clicked ${count} times`;
  });

  const onExitEdit = (newData) => { setContext({mode: 'list'}); }
  const onCreateTask = () => { setContext({mode: 'create'}); }
  const onEditTask   = (task) => { setContext({mode: 'edit', task}); }

  return (
    <section className='Tasks'>
      <h2>Tasks</h2>

      { context.mode === 'list'
        ? <TaskList
            user={user}
            onCreateTask={onCreateTask}
            onEditTask={onEditTask}
            afterSignUser={afterSignUser}
          />
        : <div>
            <TaskEdit
              user={user}
              task={context.task}
              onExitEdit={onExitEdit}
            />
          </div>
      }

    </section>
  );
}

