import React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';
import UserSection from './SignUser';

const setup = propOverrides => {
  const defaultProps = {};
  const props = {...defaultProps, ...propOverrides};

  const renderer = createRenderer()
  renderer.render(<UserSection {...props} />)
  const output = renderer.getRenderOutput()

  return {
    props: props,
    output: output,
    renderer: renderer
  }
}

describe('components', () => {
  describe('UserPanel', () => {

    it('should render a form', () => {
      const { output } = setup()
      // console.debug(JSON.stringify(output))
      expect(output.type).toBe('form')
    })

  });
});