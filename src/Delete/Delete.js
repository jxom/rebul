import React from 'react';
import PropTypes from 'prop-types';
import * as sharedPropTypes from '../_prop-types';

const Delete = ({ children, element: Element, size, ...props }) => (
  <Element className={`delete ${size ? `is-${size}` : ''}`} {...props}>
    {children}
  </Element>
);

Delete.propTypes = {
  children: PropTypes.node.isRequired,
  element: PropTypes.string,
  size: sharedPropTypes.size
};

Delete.defaultProps = {
  element: 'button',
  size: null
};

export default Delete;
