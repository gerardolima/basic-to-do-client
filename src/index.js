import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { ConnectedApp } from './components';
import rootReducer from './reducers';

import './index.css';

const initialState = {
  user: {username: 'any-user'},
  tasks: [
    { id:0, title: 'the-title-0', description: 'the-description-0', owner: 'the-owner-0' },
    { id:1, title: 'the-title-1', description: 'the-description-1', owner: 'the-owner-1' }
  ]
};

const store = createStore(rootReducer, initialState);

render(
  <Provider store={store}>
    <ConnectedApp />
  </Provider>,
  document.getElementById('root')
);
