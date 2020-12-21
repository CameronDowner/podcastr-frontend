import React from 'react';
import PropTypes from 'prop-types';

export default function Link({ href, children, as }) {
  return <a href={href}>{children}</a>;
}

Link.defaultProps = {
  as: 'a',
  children: '',
};

Link.propTypes = {
  href: PropTypes.string.isRequired,
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  children: PropTypes.any,
};