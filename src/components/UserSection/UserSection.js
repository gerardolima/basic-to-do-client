import React from 'react';
import PropTypes from 'prop-types'

/**
 * Section to handle users: signup, login and logout
 *
 * @param {Object} props - react props
 * @param {string} props.username
 */
const UserSection = ({ username }) =>
  <section>
    Hello from UserSection
  </section>;

UserSection.propTypes = {
  username: PropTypes.string
}

export default UserSection;
