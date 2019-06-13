import React from 'react';

/**
 * form to sign an user: login or sign up
 */
const SignUser = () =>
  <section className='SignUser'>
    <h2>You need to be logged in to see your tasks</h2>
    <form>
      <input type='text' name='username'/><br/>
      <input type='password' name='password'/><br/>
      <button name='login'>login</button>
      <button name='signup'>sign up!</button>
    </form>
  </section>;

export default SignUser;
