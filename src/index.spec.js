import React from 'react';
import ReactDOM from 'react-dom';

import { provideStore } from './test-helpers/provide-store';
import { ConnectedApp } from './components';
import rootReducer from './reducers';

describe('sanity check', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(provideStore(<ConnectedApp/>, rootReducer()), div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
