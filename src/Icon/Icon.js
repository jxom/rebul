import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as sharedPropTypes from '../_prop-types';

const Icon = ({ className, color, iconClass, size, ...props }) => (
  <span
    className={`icon ${classNames(size ? `is-${size}` : '', color ? `has-text-${color}` : '', className || '')}`}
    {...props}
  >
    <i className={iconClass} />
  </span>
);

Icon.propTypes = {
  className: PropTypes.string,
  color: sharedPropTypes.color,
  iconClass: PropTypes.string.isRequired,
  size: sharedPropTypes.size
};

Icon.defaultProps = {
  className: null,
  color: null,
  size: null
};

export default Icon;
