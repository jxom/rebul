import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as sharedPropTypes from '../prop-types';

const Icon = ({ color, iconClass, size, ...props }) => (
  <span className={`icon ${classNames(size ? `is-${size}` : '', color ? `has-text-${color}` : '')}`} {...props}>
    <i className={iconClass} />
  </span>
);

Icon.propTypes = {
  iconClass: PropTypes.string.isRequired,
  color: sharedPropTypes.color,
  size: sharedPropTypes.size
};

Icon.defaultProps = {
  color: null,
  size: null
};

export default Icon;
