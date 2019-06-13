import PropTypes from 'prop-types';

export const taskShape = PropTypes.shape({
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
});
