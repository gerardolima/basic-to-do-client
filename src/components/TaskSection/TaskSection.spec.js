import React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';
import TaskSection from './TaskSection';

const setup = propOverrides => {
  const defaultProps = {};
  const props = {...defaultProps, ...propOverrides};

  const renderer = createRenderer()
  renderer.render(<TaskSection {...props} />)
  const output = renderer.getRenderOutput()

  return {
    props: props,
    output: output,
    renderer: renderer
  }
}

describe('components', () => {
  describe('UserPanel', () => {

    it('should render container', () => {
      const { output } = setup()
      expect(output.type).toBe('section')
    })

  });
});