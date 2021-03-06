/**
 * This file is used by 'react-scripts' to setup tests.
 * @see https://facebook.github.io/create-react-app/docs/running-tests#initializing-test-environment
 */

// babel polyfill
// -----------------------------------------------------------------
require('regenerator-runtime/runtime');

 // enzyme related
 // -----------------------------------------------------------------
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
