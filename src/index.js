import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { ConnectedApp } from './components';
import rootReducer from './reducers';

import './index.css';

const store = createStore(rootReducer);

render(
  <Provider store={store}>
    <ConnectedApp />
  </Provider>,
  document.getElementById('root')
);
