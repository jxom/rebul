import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as sharedPropTypes from '../_prop-types';

const FieldControl = ({ children, className, color, isExpanded, isLoading, leftIconName, rightIconName, ...props }) => (
  <div
    className={`control ${classNames(
      isExpanded ? 'is-expanded' : '',
      isLoading ? 'is-loading' : '',
      leftIconName ? 'has-icons-left' : '',
      rightIconName ? 'has-icons-right' : '',
      className || ''
    )}`}
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
