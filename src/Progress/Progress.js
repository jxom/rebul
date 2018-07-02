import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as sharedPropTypes from '../_prop-types';

const Progress = ({ children, className, color, maxValue, size, value, ...props }) => {
  return (
    <progress
      className={classNames('progress', {
        [`is-${color}`]: color,
        [`is-${size}`]: size,
        [className]: Boolean(className)
      })}
      max={maxValue}
      value={value}
      {...props}
    >
      {children}
    </progress>
  );
};

Progress.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  /** Color of notifcation. Available values: `white`, `light`, `dark`, `black`, `text`, `primary`, `link`, `info`, `success`, `warning`, `danger` */
  color: sharedPropTypes.color,
  /** Max value */
  maxValue: PropTypes.string,
  /** Size of progress bar. Available values: `small`, `medium`, `large` */
  size: sharedPropTypes.size,
  /** Value of progress bar */
  value: PropTypes.string.isRequired
};

Progress.defaultProps = {
  children: null,
  className: null,
  color: null,
  maxValue: '100',
  size: null
};

export default Progress;
