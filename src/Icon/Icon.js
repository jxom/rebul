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
  /** Color of the icon. Available values: `white`, `light`, `dark`, `black`, `text`, `primary`, `link`, `info`, `success`, `warning`, `danger` */
  color: sharedPropTypes.color,
  /** Icon class name. Example (Font Awesome 5): `fa fa-home` */
  iconClass: PropTypes.string.isRequired,
  /** Size of the icon. Available values: `small`, `medium`, `large` */
  size: sharedPropTypes.size
};

Icon.defaultProps = {
  className: null,
  color: null,
  size: null
};

export default Icon;
