import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { ConnectedApp } from './components';
import rootReducer from './reducers';
import { sample } from './test-helpers/data-fixtures';

import './index.css';

const initialState = sample;

const store = createStore(rootReducer, initialState);

render(
  <Provider store={store}>
    <ConnectedApp />
  </Provider>,
  document.getElementById('root')
);
