import React from 'react';
import axios from 'axios';

/**
 * form to sign an user: login or sign up
 */
export const SignUser = ({afterSignUser}) => {

  const onSignUser = async (action) =>
  {
    const url = action === 'signup'
      ? 'http://localhost:5000/api/signup'
      : 'http://localhost:5000/api/login';

    const payload = {
      username: document.getElementsByName('username')[0].value,
      password: document.getElementsByName('password')[0].value,
    };
    const response = await axios.post(url, payload, {withCredentials: true});

    if(response.data.message) {
      // not success
      alert(response.data.message);
    }
    else {
      afterSignUser(action);
    }
  };

  return (
    <section className='SignUser'>
      <h2>You need to be logged in to see your tasks</h2>
      <fieldset>
        <input type='text' name='username'/><br/>
        <input type='text' name='password'/><br/>
        <button value='login' onClick={() => onSignUser('login')}>login</button>
        <button value='signup' onClick={() => onSignUser('signup')}>sign up!</button>
      </fieldset>
    </section>
  );
};
