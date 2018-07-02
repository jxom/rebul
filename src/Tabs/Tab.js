import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Tab = ({ children, className, isActive, ...props }) => {
  return (
    <li
      className={classNames({
        'is-active': isActive,
        [className]: Boolean(className)
      })}
      {...props}
    >
      <a>{children}</a>
    </li>
  );
};

Tab.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  /** Is tab active? */
  isActive: PropTypes.bool
};

Tab.defaultProps = {
  children: null,
  className: null,
  isActive: false
};

export default Tab;
