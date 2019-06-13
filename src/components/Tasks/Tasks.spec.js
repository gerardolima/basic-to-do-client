import React from 'react';
import { shallow } from 'enzyme';
import { Tasks }  from './Tasks';
import { TaskList }  from './TaskList';

const setup = propOverrides => {
  const defaultProps = {tasks: []};
  const props = {...defaultProps, ...propOverrides};
  return shallow(<Tasks {...props} />);
}

describe('components', () => {

  describe('Tasks', () => {

    it('renders a link to create a new task', function() {
      const component = setup();
      expect(component.find('a')).toHaveLength(1);
    });

    it('renders a TaskList', function() {
      const component = setup();
      expect(component.find(TaskList)).toHaveLength(1);
    });

  });
});
