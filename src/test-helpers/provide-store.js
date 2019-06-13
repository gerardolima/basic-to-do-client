import React from 'react';
import { Provider } from 'react-redux';
import createMockStoreFactory from 'redux-mock-store';

const createMockStore = createMockStoreFactory();

/**
 * High order function to wrap a react component into a redux provider
 * using a mock for the store.
 *
 * @param {React.Component} component
 * @param {Object} props
 */
export const withVariationsStore = (component, props = {}) => (
  <Provider {...props} store={createMockStore(props)}>
    {component}
  </Provider>
);