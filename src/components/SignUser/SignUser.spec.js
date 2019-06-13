import React from 'react';
import { shallow } from 'enzyme';
import { SignUser }  from './SignUser';

const setup = propOverrides => {
  const defaultProps = {username: undefined};
  const props = {...defaultProps, ...propOverrides};
  return shallow(<SignUser {...props} />);
}

describe('components', () => {

  describe('SignUser', () => {

    it('renders a form element', function() {
      const component = setup();
      expect(component.find('form')).toHaveLength(1);
    });

    it('renders an input element for username', function() {
      const component = setup();
      expect(component.find('form > input[name="username"][type="text"]')).toHaveLength(1);
    });

    it('renders an input element for password', function() {
      const component = setup();
      expect(component.find('form > input[name="password"][type="password"]')).toHaveLength(1);
    });

    it('renders a button for login', function() {
      const component = setup();
      expect(component.find('form > button[name="login"]')).toHaveLength(1);
    });

    it('renders a button for signup', function() {
      const component = setup();
      expect(component.find('form > button[name="signup"]')).toHaveLength(1);
    });

  });
});
