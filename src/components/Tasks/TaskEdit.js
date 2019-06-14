import React from 'react';
import axios from 'axios';

/**
 * form to sign an user: login or sign up
 */
export const TaskEdit = ({task, user, onExitEdit}) => {

  const onSave = async () =>
  {
    const url = (task && task._id)
    ? 'http://localhost:5000/api/tasks/edit/' + task._id
    : 'http://localhost:5000/api/tasks/create';

    const payload = {
      title: document.getElementsByName('title')[0].value,
      description: document.getElementsByName('description')[0].value,
      owner: user._id,
    };

    const response = await axios.post(url, payload, {withCredentials: true});
    debugger
    if(response.data.message) {
      // not success
      alert(response.data.message);
    }
    else {
      onExitEdit(true);
    }
  };

  return (
    <section className='TaskEdit'>
      <fieldset>
        <input type='text' name='title' value={task && task.title}/><br/>
        <input type='text' name='description' value={task && task.description}/><br/>
        <button value='save' onClick={() => onSave()}>Save</button>
        <button value='cancel' onClick={() => onExitEdit(false)}>Cancel</button>
      </fieldset>
    </section>
  );
};
