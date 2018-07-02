import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const NavbarDropdown = ({ children, className, isBoxed, isRight, ...props }) => (
  <div
    className={classNames('navbar-dropdown', {
      'is-boxed': isBoxed,
      'is-right': isRight,
      [className]: Boolean(className)
    })}
    {...props}
  >
    {children}
  </div>
);

NavbarDropdown.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  /** If true, the dropdown is a boxed style */
  isBoxed: PropTypes.bool,
  /** If true, the dropdown is right aligned */
  isRight: PropTypes.bool
};

NavbarDropdown.defaultProps = {
  className: null,
  isBoxed: false,
  isRight: false
};

export default NavbarDropdown;
