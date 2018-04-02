import React from 'react';
import PropTypes from 'prop-types';

const Delete = ({ children, element: Element, size, ...props }) => (
  <Element className={`delete ${size ? `is-${size}` : ''}`} {...props}>
    {children}
  </Element>
);

Delete.propTypes = {
  children: PropTypes.node.isRequired,
  element: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large'])
};

Delete.defaultProps = {
  element: 'button',
  size: null
};

export default Delete;
