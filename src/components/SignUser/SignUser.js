import React from 'react';

/**
 * Section to handle users: signup, login and logout
 *
 * @param {Object} props - react props
 * @param {string=} props.mode - signup or login
 */
const SignUser = ({mode}) =>
  <form>
    <div>{mode}</div>
    <input name='username'/>
    <input name='password'/>
    <button name='signup-button'>sign up</button>
  </form>;



export default SignUser;
