import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as sharedPropTypes from '../_prop-types';

const FieldControl = ({ children, className, color, isExpanded, isLoading, leftIconName, rightIconName, ...props }) => (
  <div
    className={classNames('control', {
      'is-expanded': isExpanded,
      'is-loading': isLoading,
      'has-icons-left': Boolean(leftIconName),
      'has-icons-right': Boolean(rightIconName),
      [className]: Boolean(className)
    })}
  >
    {children}
    {leftIconName && (
      <span className="icon is-small is-left">
        <i className={leftIconName} />
      </span>
    )}
    {rightIconName && (
      <span className="icon is-small is-right">
        <i className={rightIconName} />
      </span>
    )}
  </div>
);

FieldControl.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  color: sharedPropTypes.color,
  isExpanded: PropTypes.bool,
  isLoading: PropTypes.bool,
  leftIconName: PropTypes.string,
  rightIconName: PropTypes.string
};

FieldControl.defaultProps = {
  className: null,
  color: null,
  isExpanded: false,
  isLoading: false,
  leftIconName: null,
  rightIconName: null
};

export default FieldControl;
