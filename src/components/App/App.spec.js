import React from 'react';
import { shallow } from 'enzyme';
import { SignUser } from '..';

import App from './App';

const setup = propOverrides => {
  const defaultProps = {username: undefined};
  const props = {...defaultProps, ...propOverrides};
  return shallow(<App {...props} />);
}

describe('components', () => {

  describe('App', () => {

    it('renders SignUser if username is undefined', function() {
      const component = setup();
      expect(component.find(SignUser)).toHaveLength(1);
    });

    it('does not render SignUser if username is defined', function() {
      const component = setup({username: 'the-username'});
      expect(component.find(SignUser)).toHaveLength(0);
    });


  });
});
