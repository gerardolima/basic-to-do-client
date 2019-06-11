import React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';
import { TaskSection, UserSection } from '..';

import App from './App';

const setup = propOverrides => {
  const defaultProps = {username: undefined};
  const props = {...defaultProps, ...propOverrides};

  const renderer = createRenderer();
  renderer.render(<App {...props} />);
  const output = renderer.getRenderOutput();

  return {
    props: props,
    output: output,
    renderer: renderer
  };
}

describe('components', () => {
  describe('App', () => {

    it('should render UserSection when username is undefined', () => {
      // TODO: improve
      const { output } = setup({username: undefined});
      expect(output.props.children[1].type).toBe(UserSection);
    });

    it('should render TaskSection when username has value', () => {
      // TODO: improve
      const { output } = setup({username: 'the-username'});
      expect(output.props.children[1].type).toBe(TaskSection);
    });

  });
});